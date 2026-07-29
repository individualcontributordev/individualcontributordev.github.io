import { applyLayers, buildCue } from './layer.js';
import { zipStore } from './zip-store.js';
import { detectFf7Disc } from './disc-id.js';
import { repairMode2EdcInImage } from './edc.js';

const statusEl = document.getElementById('status');
const baseListEl = document.getElementById('base-list');
const presetListEl = document.getElementById('preset-list');
const addonListEl = document.getElementById('addon-list');
const panelBaseEl = document.getElementById('panel-base');
const panelAddonsEl = document.getElementById('panel-addons');
const panelBuildEl = document.getElementById('panel-build');
const discInfoEl = document.getElementById('disc-info');
const fileInput = document.getElementById('bin-file');
const applyBtn = document.getElementById('apply');
const planEl = document.getElementById('plan');
const fileLabel = document.getElementById('file-label');
const loadBannerEl = document.getElementById('load-banner');

let manifest = null;
let sourceBytes = null;
/** @type {number | null} */
let detectedDisc = null;
let building = false;
const layerCache = new Map();

function setStatus(msg, isError) {
	statusEl.textContent = msg || '';
	statusEl.classList.toggle('is-error', !!isError);
}

function yieldToUi() {
	return new Promise((resolve) => setTimeout(resolve, 0));
}

function downloadBlob(blob, filename) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	a.remove();
	setTimeout(() => URL.revokeObjectURL(url), 60_000);
	return url;
}

function showDownloadFallback(url, filename) {
	statusEl.replaceChildren();
	statusEl.classList.remove('is-error');
	statusEl.append('Done — ');
	const link = document.createElement('a');
	link.href = url;
	link.download = filename;
	link.textContent = `save ${filename}`;
	statusEl.append(link);
	statusEl.append(' if the download did not start.');
}

function resolveUrl(baseUrl, maybeRelative) {
	if (!maybeRelative) return null;
	return new URL(maybeRelative, baseUrl).href;
}

async function fetchJson(url) {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed to load ${url} (${res.status})`);
	return res.json();
}

function normalizeEntry(entry, manifestUrl) {
	if (!entry || entry.enabled === false) return null;

	const discs = {};
	if (entry.discs && typeof entry.discs === 'object') {
		for (const [disc, rel] of Object.entries(entry.discs)) {
			const absolute = resolveUrl(manifestUrl, rel);
			if (absolute) discs[String(disc)] = absolute;
		}
	}

	let url = entry.url ? resolveUrl(manifestUrl, entry.url) : null;
	if (!url && discs['1']) url = discs['1'];
	if (entry.layer === null) {
		return { ...entry, url: null, discs };
	}
	if (!url && Object.keys(discs).length === 0 && entry.id !== 'clean') return null;
	return { ...entry, url, discs };
}

function layerUrlFor(entry, disc) {
	if (!entry) return null;
	const key = String(disc);
	if (entry.discs && entry.discs[key]) return entry.discs[key];
	return entry.url || null;
}

async function loadMergedManifest(localPath) {
	const localUrl = new URL(localPath, window.location.href).href;
	const local = await fetchJson(localUrl);
	const bases = [];
	const addons = [];
	const presets = [];

	const remoteNotes = [];
	let remotesOk = 0;
	for (const src of local.remoteSources || []) {
		try {
			const remote = await fetchJson(src);
			const remoteUrl = new URL(src, window.location.href).href;
			for (const b of remote.bases || []) {
				const n = normalizeEntry(b, remoteUrl);
				if (n) bases.push(n);
			}
			for (const a of remote.addons || []) {
				const n = normalizeEntry(a, remoteUrl);
				if (n) addons.push(n);
			}
			for (const p of remote.presets || []) {
				if (p && p.id && Array.isArray(p.addons) && p.addons.length) presets.push(p);
			}
			remotesOk += 1;
			remoteNotes.push(`Loaded ${src}`);
		} catch (err) {
			remoteNotes.push(`Skip ${src}: ${err.message}`);
			console.warn(err);
		}
	}

	// Always include Unmodified from the local manifest; packs come from remotes.
	const clean = (local.bases || []).find((b) => b.id === 'clean');
	if (clean) {
		const n = normalizeEntry({ ...clean, enabled: true }, localUrl);
		if (n) bases.unshift(n);
	}

	return {
		...local,
		bases,
		addons,
		presets,
		_remotesOk: remotesOk,
		_remoteNotes: remoteNotes,
	};
}

async function loadLayerByUrl(url) {
	if (!url) return null;
	if (layerCache.has(url)) return layerCache.get(url);
	const layer = await fetchJson(url);
	if (!layer || layer.format !== 'ic-layer-v1') {
		throw new Error(`Invalid layer at ${url}`);
	}
	const records = Array.isArray(layer.records) ? layer.records : [];
	const changed = layer.stats?.changedBytes ?? records.length;
	if (records.length === 0 || changed === 0) {
		throw new Error(
			`Layer has no changes (${url}). Re-diff after the stub is actually in the .bin.`
		);
	}
	layerCache.set(url, layer);
	return layer;
}

function selectedBaseId() {
	const el = document.getElementById('base-select');
	return el && el.value ? el.value : 'clean';
}

function selectedAddonIds() {
	const ids = [];
	for (const input of document.querySelectorAll('input[name="addon"]:checked')) {
		ids.push(input.value);
	}
	for (const select of document.querySelectorAll('select[name="addon-group"]')) {
		if (select.value) ids.push(select.value);
	}
	return ids;
}

function selectedDisc() {
	return detectedDisc;
}

function setDiscInfo(text, isError) {
	if (!discInfoEl) return;
	discInfoEl.textContent = text || '';
	discInfoEl.classList.toggle('is-error', !!isError);
}

function rememberImage(bytes, label) {
	sourceBytes = bytes;
	fileLabel.textContent = label;

	const hit = detectFf7Disc(bytes);
	if (!hit) {
		detectedDisc = null;
		setDiscInfo(
			'Could not detect disc — need an NTSC-U FF7 .bin (SCUS_941.63 / .64 / .65).',
			true
		);
		return;
	}
	detectedDisc = hit.disc;
	setDiscInfo(`Detected NTSC-U Disc ${hit.disc} (${hit.marker})`);
}

function baseFamily(base) {
	const id = String(base?.id || '');
	if (id === 'clean' || /unmodified/i.test(base?.name || '')) return 'Unmodified';
	// Highwind is its own separate mod, not a bigger CSR+ — don't group it under
	// a "CSR" family label. Slug is highwind-v*; accept legacy csr-plusplus if any CDN lag.
	if (
		id.startsWith('highwind') ||
		/^highwind/i.test(id) ||
		id.startsWith('csr-plusplus') ||
		/^csrplusplus/i.test(id)
	) {
		return 'Highwind';
	}
	if (id.startsWith('csr-plus') || /^csrplus/i.test(id)) return 'CSR+';
	if (id.startsWith('csr-') || id === 'csr' || /^csr-v/i.test(id)) return 'CSR';
	return 'Other';
}

const BASE_FAMILY_ORDER = ['Unmodified', 'CSR', 'CSR+', 'Highwind', 'Other'];

function updateBaseBlurb() {
	const blurbEl = document.getElementById('base-blurb');
	if (!blurbEl || !manifest) return;
	const base = manifest.bases.find((b) => b.id === selectedBaseId());
	blurbEl.textContent = base?.blurb || '';
}

function renderBases() {
	if (!manifest || !baseListEl) return;
	const prev = selectedBaseId();
	const byFamily = new Map();
	for (const base of manifest.bases) {
		const family = baseFamily(base);
		if (!byFamily.has(family)) byFamily.set(family, []);
		byFamily.get(family).push(base);
	}

	baseListEl.innerHTML = '';

	const select = document.createElement('select');
	select.id = 'base-select';
	select.name = 'base';
	select.setAttribute('aria-label', 'Base');

	for (const family of BASE_FAMILY_ORDER) {
		const bases = byFamily.get(family);
		if (!bases?.length) continue;
		const group = document.createElement('optgroup');
		group.label = family;
		for (const base of bases) {
			const opt = document.createElement('option');
			opt.value = base.id;
			opt.textContent = base.name;
			group.appendChild(opt);
		}
		select.appendChild(group);
	}

	const ids = manifest.bases.map((b) => b.id);
	select.value = ids.includes(prev) ? prev : ids[0] || 'clean';

	const blurb = document.createElement('p');
	blurb.id = 'base-blurb';
	blurb.className = 'explainer';
	blurb.style.marginTop = '10px';
	blurb.style.marginBottom = '0';

	baseListEl.appendChild(select);
	baseListEl.appendChild(blurb);
	updateBaseBlurb();
}

function addonCompatibleWithBase(addon, baseId) {
	const allowed = addon?.compatibleBases;
	if (!allowed || !allowed.length) return true;
	return allowed.includes(baseId);
}

function addonHasLayerForDisc(addon, disc) {
	if (!addon) return false;
	// No disc detected yet — nothing is compatible until a file is loaded
	if (!disc) return false;
	// Check the discs map directly rather than via layerUrlFor(): that function
	// falls back to entry.url for callers building the actual apply plan, and
	// normalizeEntry sets entry.url = discs['1'] for legacy single-url addons —
	// which would make a disc-1-only addon look valid for every other disc too.
	if (addon.discs && Object.keys(addon.discs).length) {
		return Boolean(addon.discs[String(disc)]);
	}
	// No per-disc map at all (legacy flat-url addon) — can't tell which disc it's
	// scoped to, so don't filter it out.
	return Boolean(addon.url);
}

function addonsForBase(baseId) {
	if (!manifest) return [];
	// Show ALL addons regardless of base - we'll disable incompatible ones in the UI
	return (manifest.addons || []);
}

// Presets bundle several per-disc add-ons (e.g. one scene per disc) under one
// choice so a player doesn't have to remember/re-pick the right add-on each
// time they load the next disc of the set. Selection persists per-base in
// localStorage across file loads and page reloads.
const PRESET_STORAGE_KEY = 'ff7builder.presetByBase';

function loadPresetPrefs() {
	try {
		return JSON.parse(localStorage.getItem(PRESET_STORAGE_KEY) || '{}');
	} catch {
		return {};
	}
}

function savePresetPref(baseId, presetId) {
	const prefs = loadPresetPrefs();
	if (presetId) prefs[baseId] = presetId;
	else delete prefs[baseId];
	try {
		localStorage.setItem(PRESET_STORAGE_KEY, JSON.stringify(prefs));
	} catch {
		// Private browsing / storage disabled — preset just won't persist.
	}
}

function presetsForBase(baseId) {
	if (!manifest) return [];
	return (manifest.presets || []).filter((p) => addonCompatibleWithBase(p, baseId));
}

function selectedPresetId() {
	const select = document.getElementById('preset-select');
	return select ? select.value : '';
}

function renderPresets() {
	if (!manifest || !presetListEl) return;
	const baseId = selectedBaseId();
	const presets = presetsForBase(baseId);
	presetListEl.innerHTML = '';
	// Always show preset dropdown even if no presets for this base
	// if (!presets.length) return;

	const prefs = loadPresetPrefs();
	const prevId = prefs[baseId] || '';
	const ids = new Set(presets.map((p) => p.id));
	const activeId = ids.has(prevId) ? prevId : '';

	const wrap = document.createElement('div');
	wrap.className = 'preset-dropdown-wrap';

	const label = document.createElement('label');
	label.className = 'preset-label';
	label.htmlFor = 'preset-select';
	label.textContent = 'Preset';

	const select = document.createElement('select');
	select.id = 'preset-select';
	select.name = 'preset';
	select.setAttribute('aria-label', 'Preset');

	const noneOpt = document.createElement('option');
	noneOpt.value = '';
	noneOpt.textContent = 'None';
	noneOpt.title = 'Pick add-ons manually below.';
	select.appendChild(noneOpt);

	for (const preset of presets) {
		const opt = document.createElement('option');
		opt.value = preset.id;
		opt.textContent = preset.name;
		opt.title = preset.blurb || '';
		select.appendChild(opt);
	}

	select.value = activeId;

	// Disable when nothing can be chosen: no disc, or no presets for this base.
	const disc = selectedDisc();
	if (!disc) {
		select.disabled = true;
		select.title = 'Load a disc image to use presets.';
		wrap.classList.add('is-disabled');
	} else if (!presets.length) {
		select.disabled = true;
		select.title = 'No presets for this base.';
		wrap.classList.add('is-disabled');
	}

	wrap.appendChild(label);
	wrap.appendChild(select);
	presetListEl.appendChild(wrap);
}

function presetManagedAddonIds(baseId) {
	const ids = new Set();
	for (const preset of presetsForBase(baseId)) {
		for (const id of preset.addons || []) ids.add(id);
	}
	return ids;
}

function addonSelectableNow(addonId) {
	const addon = (manifest?.addons || []).find((a) => a.id === addonId);
	if (!addon) return false;
	return addonCompatibleWithBase(addon, selectedBaseId())
		&& addonHasLayerForDisc(addon, selectedDisc());
}

function applyActivePresetToAddons() {
	if (!manifest || !addonListEl) return;
	const baseId = selectedBaseId();
	const managed = presetManagedAddonIds(baseId);

	// Clear anything any preset could have set (including the previously active
	// one) before applying the current choice, so picking "None" — or switching
	// presets — doesn't leave a stale add-on selected.
	for (const select of addonListEl.querySelectorAll('select[name="addon-group"]')) {
		if ([...select.options].some((o) => managed.has(o.value))) select.value = '';
	}
	for (const input of addonListEl.querySelectorAll('input[name="addon"]')) {
		if (managed.has(input.value)) input.checked = false;
	}

	const preset = (manifest.presets || []).find((p) => p.id === selectedPresetId());
	if (!preset) return;
	const memberIds = new Set(preset.addons || []);

	for (const select of addonListEl.querySelectorAll('select[name="addon-group"]')) {
		const match = [...select.options].find(
			(o) => memberIds.has(o.value) && addonSelectableNow(o.value)
		);
		if (match) select.value = match.value;
	}
	for (const input of addonListEl.querySelectorAll('input[name="addon"]')) {
		// Preset membership alone is not enough — skip base/disc-incompatible add-ons.
		if (memberIds.has(input.value) && addonSelectableNow(input.value)) {
			input.checked = true;
		}
	}
}

function partitionAddons(visible) {
	const groups = new Map();
	const groupOrder = [];
	const free = [];
	for (const addon of visible) {
		const groupId = addon.exclusiveGroup;
		if (!groupId) {
			free.push(addon);
			continue;
		}
		if (!groups.has(groupId)) {
			groups.set(groupId, []);
			groupOrder.push(groupId);
		}
		groups.get(groupId).push(addon);
	}
	for (const groupId of groupOrder) {
		// Optional numeric `rate` is only a sort key when packs provide it.
		groups.get(groupId).sort(
			(a, b) =>
				(Number(a.rate) || 0) - (Number(b.rate) || 0) ||
				String(a.optionLabel || a.name).localeCompare(String(b.optionLabel || b.name))
		);
	}
	return { groups, groupOrder, free };
}

function exclusiveGroupTitle(addons) {
	const fromMeta = addons.find((a) => a.groupLabel)?.groupLabel;
	if (fromMeta) return String(fromMeta);
	const name = String(addons[0]?.name || '');
	const before = name.split('—')[0].trim();
	if (before) return before;
	return addons[0]?.exclusiveGroup || 'Add-on';
}

function exclusiveOptionLabel(addon) {
	if (addon.optionLabel) return String(addon.optionLabel);
	const after = String(addon.name || '')
		.split('—')
		.slice(1)
		.join('—')
		.trim();
	const cleaned = after
		.replace(/\s*\(on [^)]+\)/gi, '')
		.replace(/\s+v[\d.]+$/i, '')
		.trim();
	return cleaned || addon.name;
}

function updateAddonGroupTooltip(select) {
	if (!select) return;
	if (!select.value) {
		select.title = 'None — skip this group.';
		return;
	}
	const addon = manifest?.addons.find((a) => a.id === select.value);
	select.title = addon?.blurb || '';
}

function renderAddonGroup(groupId, addons, prevSelected) {
	const wrap = document.createElement('div');
	wrap.className = 'addon-group';
	const disc = selectedDisc();
	const baseId = selectedBaseId();

	// Filter to only base-compatible addons for dropdown groups
	const baseCompatibleAddons = addons.filter(a => addonCompatibleWithBase(a, baseId));

	const title = exclusiveGroupTitle(addons);
	const selectId = `addon-group-${groupId}`;

	const label = document.createElement('label');
	label.className = 'addon-group-label';
	label.htmlFor = selectId;
	label.textContent = title;

	const select = document.createElement('select');
	select.id = selectId;
	select.name = 'addon-group';
	select.dataset.group = groupId;
	select.setAttribute('aria-label', title);

	const off = document.createElement('option');
	off.value = '';
	off.textContent = 'None';
	off.title = 'Skip this group.';
	select.appendChild(off);

	const ids = new Set(baseCompatibleAddons.map((a) => a.id));
	for (const addon of baseCompatibleAddons) {
		const opt = document.createElement('option');
		opt.value = addon.id;
		opt.textContent = exclusiveOptionLabel(addon);
		opt.title = addon.blurb || '';
		opt.disabled = !addonHasLayerForDisc(addon, disc);
		select.appendChild(opt);
	}

	const prevInGroup = [...prevSelected].find((id) => ids.has(id));
	const prevAddon = baseCompatibleAddons.find(a => a.id === prevInGroup);
	const prevStillValid = prevInGroup &&
		addonCompatibleWithBase(prevAddon, baseId) &&
		addonHasLayerForDisc(prevAddon, disc);
	select.value = prevStillValid ? prevInGroup : '';

	wrap.appendChild(label);
	wrap.appendChild(select);
	updateAddonGroupTooltip(select);
	return wrap;
}

function renderFreeAddon(addon, prevSelected) {
	const disc = selectedDisc();
	const baseId = selectedBaseId();
	const baseCompatible = addonCompatibleWithBase(addon, baseId);
	const discCompatible = addonHasLayerForDisc(addon, disc);
	const compatible = baseCompatible && discCompatible;

	const wasChecked = prevSelected.has(addon.id);
	const checked = wasChecked && compatible ? 'checked' : '';
	const disabled = !compatible ? 'disabled' : '';

	const label = document.createElement('label');
	label.className = 'choice';
	if (!compatible) {
		label.classList.add('is-disabled');
	}
	label.title = addon.blurb || '';

	label.innerHTML = `
		<input type="checkbox" name="addon" value="${addon.id}" ${checked} ${disabled} />
		<span><strong>${addon.name}</strong></span>
	`;
	return label;
}

function renderAddons() {
	if (!manifest || !addonListEl) return;
	const baseId = selectedBaseId();
	const prevSelected = new Set(selectedAddonIds());
	const visible = addonsForBase(baseId);
	const { groups, groupOrder, free } = partitionAddons(visible);

	addonListEl.innerHTML = '';
	if (!visible.length) {
		const empty = document.createElement('p');
		empty.className = 'explainer';
		empty.style.marginBottom = '0';
		empty.textContent = 'No add-ons for this base yet.';
		addonListEl.appendChild(empty);
		return;
	}

	for (const groupId of groupOrder) {
		addonListEl.appendChild(renderAddonGroup(groupId, groups.get(groupId), prevSelected));
	}
	for (const addon of free) {
		addonListEl.appendChild(renderFreeAddon(addon, prevSelected));
	}
}

function setSectionLocked(panel, locked) {
	if (!panel) return;
	panel.classList.toggle('is-locked', locked);
	for (const control of panel.querySelectorAll('select, input, button')) {
		if (locked) {
			control.disabled = true;
			continue;
		}
		// Unlocking must not wipe per-add-on compatibility disables.
		// Free add-ons mark their label with .is-disabled when unavailable.
		if (control.closest('.is-disabled')) {
			control.disabled = true;
			continue;
		}
		control.disabled = false;
	}
}

function updatePlan() {
	if (!manifest) return;
	const disc = selectedDisc();
	setSectionLocked(panelBaseEl, !disc);
	setSectionLocked(panelAddonsEl, !disc);
	setSectionLocked(panelBuildEl, !disc);
	const baseId = selectedBaseId();
	const base = manifest.bases.find((b) => b.id === baseId);
	const addons = selectedAddonIds()
		.map((id) => manifest.addons.find((a) => a.id === id))
		.filter(Boolean);

	const steps = [];
	steps.push(sourceBytes ? `Input: ${sourceBytes.length} bytes` : 'Input: (none yet)');
	steps.push(disc ? `Disc: ${disc} (auto)` : 'Disc: (not detected)');
	steps.push(`Base: ${base ? base.name : baseId}`);
	if (addons.length) {
		addons.forEach((a, i) => steps.push(`Add-on ${i + 1}: ${a.name}`));
	} else {
		steps.push('Add-ons: (none)');
	}
	steps.push('Output: .zip (.bin + .cue + APPLIED.txt)');
	planEl.textContent = steps.join('\n');
	applyBtn.disabled = building || !(sourceBytes && disc);
	applyBtn.classList.toggle('is-busy', building);
}

function renderManifest() {
	baseListEl.innerHTML = '';
	if (presetListEl) presetListEl.innerHTML = '';
	addonListEl.innerHTML = '';

	document.getElementById('explainer-base').textContent = manifest.explainer?.base || '';
	document.getElementById('explainer-addon').textContent = manifest.explainer?.addon || '';

	baseListEl.addEventListener('change', (ev) => {
		if (ev.target && ev.target.id === 'base-select') {
			updateBaseBlurb();
			renderPresets();
			renderAddons();
			applyActivePresetToAddons();
			updatePlan();
		}
	});
	if (presetListEl) {
		presetListEl.addEventListener('change', (ev) => {
			if (ev.target && ev.target.id === 'preset-select') {
				savePresetPref(selectedBaseId(), ev.target.value);
				applyActivePresetToAddons();
				updatePlan();
			}
		});
	}
	addonListEl.addEventListener('change', (ev) => {
		const t = ev.target;
		if (t && t.name === 'addon-group') updateAddonGroupTooltip(t);
		updatePlan();
	});

	renderBases();
	renderPresets();
	renderAddons();
	applyActivePresetToAddons();
	updatePlan();
}

async function onFileChosen(file) {
	if (!file) return;
	setStatus(`Reading ${file.name}…`);
	const buf = await file.arrayBuffer();
	const bytes = new Uint8Array(buf);
	rememberImage(bytes, `${file.name} (${bytes.length} bytes)`);
	renderAddons();
	applyActivePresetToAddons();
	if (!detectedDisc) {
		setStatus('Image loaded, but disc could not be detected.', true);
	} else {
		setStatus(`Image ready — NTSC-U Disc ${detectedDisc}.`);
	}
	updatePlan();
}

async function applySelection() {
	if (building || !sourceBytes || !manifest) return;
	const disc = selectedDisc();
	if (!disc) {
		setStatus('Load an NTSC-U FF7 .bin so the disc can be detected.', true);
		return;
	}

	building = true;
	updatePlan();
	setStatus('Building…');
	await yieldToUi();

	try {
		const baseId = selectedBaseId();
		const base = manifest.bases.find((b) => b.id === baseId);
		const addonEntries = selectedAddonIds()
			.map((id) => manifest.addons.find((a) => a.id === id))
			.filter(Boolean);

		for (const entry of addonEntries) {
			if (!addonCompatibleWithBase(entry, baseId)) {
				throw new Error(
					`${entry.name} is not available for ${base?.name || baseId}.`
				);
			}
		}

		const layers = [];
		const baseUrl = layerUrlFor(base, disc);
		if (baseUrl) {
			setStatus('Loading base layer…');
			await yieldToUi();
			layers.push(await loadLayerByUrl(baseUrl));
		}
		for (const entry of addonEntries) {
			const url = layerUrlFor(entry, disc);
			if (!url) {
				throw new Error(`${entry.name} has no layer for Disc ${disc}`);
			}
			setStatus(`Loading ${entry.name}…`);
			await yieldToUi();
			layers.push(await loadLayerByUrl(url));
		}

		setStatus('Applying layers…');
		await yieldToUi();
		const out = applyLayers(sourceBytes, layers);

		setStatus('Repairing sector EDC/ECC…');
		await yieldToUi();
		const edcStats = repairMode2EdcInImage(sourceBytes, out);
		console.info('EDC repair', edcStats);

		const stamp = [
			`d${disc}`,
			baseId === 'clean' ? 'clean' : baseId,
			...addonEntries.map((a) => a.id),
		].join('+');
		const binName = `ff7-builder-${stamp || 'clean'}.bin`;
		const cueName = binName.replace(/\.bin$/i, '.cue');
		const zipName = binName.replace(/\.bin$/i, '.zip');
		const appliedName = 'APPLIED.txt';

		const appliedText = buildAppliedReport({
			disc,
			base,
			baseId,
			addons: addonEntries,
			edcFixed: edcStats.fixed,
		});

		setStatus('Zipping (large file — may take a minute)…');
		await yieldToUi();
		const zipBytes = zipStore([
			{ name: binName, data: out },
			{ name: cueName, data: new TextEncoder().encode(buildCue(binName)) },
			{ name: appliedName, data: new TextEncoder().encode(appliedText) },
		]);

		const url = downloadBlob(new Blob([zipBytes], { type: 'application/zip' }), zipName);
		showDownloadFallback(url, zipName);
	} catch (err) {
		console.error(err);
		setStatus(err.message || String(err), true);
	} finally {
		building = false;
		updatePlan();
	}
}

function buildAppliedReport({ disc, base, baseId, addons, edcFixed }) {
	const baseName =
		!base || baseId === 'clean' || !layerUrlFor(base, disc)
			? 'Unmodified (retail)'
			: base.name;

	const lines = [
		'Final Fantasy VII — IndividualContributor',
		'',
		`Disc: ${disc}`,
		`Base: ${baseName}`,
	];

	if (addons.length) {
		lines.push('Add-ons:');
		for (const addon of addons) {
			lines.push(`  - ${addon.name}`);
		}
	} else {
		lines.push('Add-ons: none');
	}

	if (edcFixed != null) {
		lines.push(`EDC/ECC sectors repaired: ${edcFixed}`);
	}

	lines.push(
		'',
		'Play:',
		'- Keep the .bin and .cue in the same folder.',
		'- Open the .cue in DuckStation (or your emulator).',
		'- Real PS2 (MechaPwn): burn from the .cue as MODE2/2352 DAO (see Modding docs/07-hardware-burn.md).',
		'- Builder regenerates Mode2 Form1 EDC/ECC on patched sectors after applying layers.',
		'',
		'https://individualcontributor.dev/builder/',
		''
	);
	return lines.join('\n');
}

async function init() {
	try {
		manifest = await loadMergedManifest('./manifest.json');
		document.getElementById('page-title').textContent = manifest.title || 'Disc builder';
		renderManifest();

		const expectedRemotes = (manifest.remoteSources || []).length;
		const remotesOk = manifest._remotesOk || 0;
		if (loadBannerEl) {
			if (remotesOk === 0 && expectedRemotes > 0) {
				loadBannerEl.hidden = false;
				loadBannerEl.textContent =
					'Could not load CSR / Modding packs. Check your connection and try again.';
			} else if (remotesOk < expectedRemotes) {
				loadBannerEl.hidden = false;
				loadBannerEl.textContent =
					'Some pack sources failed to load — the list may be incomplete.';
			} else {
				loadBannerEl.hidden = true;
				loadBannerEl.textContent = '';
			}
		}

		fileInput.addEventListener('change', () => {
			onFileChosen(fileInput.files?.[0]).catch((err) => setStatus(err.message, true));
		});
		applyBtn.addEventListener('click', () => {
			applySelection();
		});

		setStatus('Choose an NTSC-U .bin, then pick base and add-ons.');
	} catch (err) {
		setStatus(err.message || String(err), true);
	}
}

init();
