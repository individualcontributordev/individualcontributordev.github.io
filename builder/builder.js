import { applyLayers, buildCue } from './layer.js';
import { zipStore } from './zip-store.js';
import { detectFf7Disc } from './disc-id.js';
import { repairMode2EdcInImage } from './edc.js';

const statusEl = document.getElementById('status');
const baseListEl = document.getElementById('base-list');
const packPresetListEl = document.getElementById('pack-preset-list');
const modPresetListEl = document.getElementById('mod-preset-list');
const packListEl = document.getElementById('pack-list');
const modListEl = document.getElementById('mod-list');
const panelBaseEl = document.getElementById('panel-base');
const panelPacksEl = document.getElementById('panel-packs');
const panelModsEl = document.getElementById('panel-mods');
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

/** pack = CSR+ scene layers (CSR only). mod = gameplay layers (all bases). */
function layerKind(entry) {
	if (!entry) return 'mod';
	const k = String(entry.kind || '').toLowerCase();
	if (k === 'pack' || k === 'scene' || k === 'csr-plus-scene') return 'pack';
	if (k === 'mod') return 'mod';
	const id = String(entry.id || '');
	if (id.startsWith('csr-plus-scene-') || id.startsWith('csr-plus-')) return 'pack';
	const eg = String(entry.exclusiveGroup || '');
	const gl = String(entry.groupLabel || '');
	const name = String(entry.name || '');
	if (/encounter/i.test(eg) || /encounter/i.test(gl) || /encounter/i.test(name)) return 'mod';
	return 'mod';
}

function presetKind(preset) {
	if (!preset) return 'mod';
	const k = String(preset.kind || '').toLowerCase();
	if (k === 'pack' || k === 'mod') return k;
	const members = (preset.addons || [])
		.map((id) => (manifest?.addons || []).find((a) => a.id === id))
		.filter(Boolean);
	if (!members.length) return 'mod';
	const kinds = new Set(members.map(layerKind));
	if (kinds.size === 1 && kinds.has('pack')) return 'pack';
	return 'mod';
}

function layersOfKind(kind) {
	return (manifest?.addons || []).filter((a) => layerKind(a) === kind);
}

function entryById(id) {
	return (manifest?.addons || []).find((a) => a.id === id) || null;
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
	// a "CSR" family label.
	if (id.startsWith('highwind') || /^highwind/i.test(id)) return 'Highwind';
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
	select.setAttribute('aria-label', 'Base Experience');

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

function addonsForBase(baseId, kind = null) {
	if (!manifest) return [];
	// Only layers compatible with the selected base (hide the rest).
	return (manifest.addons || []).filter((a) => {
		if (kind && layerKind(a) !== kind) return false;
		return addonCompatibleWithBase(a, baseId);
	});
}

// Presets bundle several add-ons under one choice.
// Page load, disc load, and Base Experience change all start at Preset = None
// unless we re-render the same base (keep the current choice).

function presetsForBase(baseId, kind = null) {
	if (!manifest) return [];
	return (manifest.presets || []).filter((p) => {
		if (kind && presetKind(p) !== kind) return false;
		return addonCompatibleWithBase(p, baseId);
	});
}

function selectedPresetId(kind) {
	const id = kind === 'pack' ? 'pack-preset-select' : kind === 'mod' ? 'mod-preset-select' : null;
	if (!id) {
		const el = document.getElementById('pack-preset-select') || document.getElementById('mod-preset-select');
		return el ? el.value : '';
	}
	const select = document.getElementById(id);
	return select ? select.value : '';
}

function renderPresets(kind, opts = {}) {
	const resetToNone = !!opts.resetToNone;
	const host = kind === 'pack' ? packPresetListEl : modPresetListEl;
	const selectId = kind === 'pack' ? 'pack-preset-select' : 'mod-preset-select';
	if (!manifest || !host) return;
	const baseId = selectedBaseId();
	const presets = presetsForBase(baseId, kind);
	const ids = new Set(presets.map((p) => p.id));
	const prevSelect = document.getElementById(selectId);
	const currentVal = prevSelect && prevSelect.value ? prevSelect.value : '';
	let activeId = '';
	if (!resetToNone && currentVal && ids.has(currentVal)) activeId = currentVal;
	host.innerHTML = '';
	if (!presets.length) return;

	const wrap = document.createElement('div');
	wrap.className = 'preset-dropdown-wrap';
	const label = document.createElement('label');
	label.className = 'preset-label';
	label.htmlFor = selectId;
	label.textContent = 'Preset';
	const select = document.createElement('select');
	select.id = selectId;
	select.name = kind + '-preset';
	select.dataset.kind = kind;
	select.setAttribute('aria-label', kind === 'pack' ? 'Pack preset' : 'Mod preset');
	const noneOpt = document.createElement('option');
	noneOpt.value = '';
	noneOpt.textContent = 'None';
	noneOpt.title = kind === 'pack' ? 'Pick packs manually below.' : 'Pick mods manually below.';
	select.appendChild(noneOpt);
	for (const preset of presets) {
		const opt = document.createElement('option');
		opt.value = preset.id;
		opt.textContent = preset.name;
		opt.title = preset.blurb || '';
		select.appendChild(opt);
	}
	select.value = activeId;
	const disc = selectedDisc();
	if (!disc) {
		select.disabled = true;
		select.title = 'Load a disc image to use presets.';
		wrap.classList.add('is-disabled');
	}
	wrap.appendChild(label);
	wrap.appendChild(select);
	host.appendChild(wrap);
}

function presetManagedAddonIds(baseId, kind = null) {
	const ids = new Set();
	for (const preset of presetsForBase(baseId, kind)) {
		for (const id of preset.addons || []) ids.add(id);
	}
	return ids;
}

function addonSelectableNow(addonId) {
	const addon = entryById(addonId);
	if (!addon) return false;
	return addonCompatibleWithBase(addon, selectedBaseId())
		&& addonHasLayerForDisc(addon, selectedDisc());
}

function applyActivePresetToAddons(kind, opts = {}) {
	const clearManagedIfNone = !!opts.clearManagedIfNone;
	const listEl = kind === 'pack' ? packListEl : modListEl;
	if (!manifest || !listEl) return;
	const baseId = selectedBaseId();
	const managed = presetManagedAddonIds(baseId, kind);
	const presetId = selectedPresetId(kind);
	const preset = (manifest.presets || []).find((p) => p.id === presetId);
	if (!preset) {
		if (!clearManagedIfNone) return;
		for (const select of listEl.querySelectorAll('select[name="addon-group"]')) {
			if ([...select.options].some((o) => managed.has(o.value))) select.value = '';
		}
		for (const input of listEl.querySelectorAll('input[name="addon"]')) {
			if (managed.has(input.value)) input.checked = false;
		}
		return;
	}
	for (const select of listEl.querySelectorAll('select[name="addon-group"]')) {
		if ([...select.options].some((o) => managed.has(o.value))) select.value = '';
	}
	for (const input of listEl.querySelectorAll('input[name="addon"]')) {
		if (managed.has(input.value)) input.checked = false;
	}
	const memberIds = new Set(preset.addons || []);
	for (const select of listEl.querySelectorAll('select[name="addon-group"]')) {
		const match = [...select.options].find(
			(o) => memberIds.has(o.value) && addonSelectableNow(o.value)
		);
		if (match) select.value = match.value;
	}
	for (const input of listEl.querySelectorAll('input[name="addon"]')) {
		if (memberIds.has(input.value) && addonSelectableNow(input.value)) {
			input.checked = true;
		}
	}
}

function renderAllPresets(opts = {}) {
	renderPresets('pack', opts);
	renderPresets('mod', opts);
}

function applyAllPresets(opts = {}) {
	applyActivePresetToAddons('pack', opts);
	applyActivePresetToAddons('mod', opts);
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

/** Semver from pack.version, trailing " vX.Y.Z" in name, or id suffix -vX.Y.Z. */
function addonVersion(addon) {
	if (!addon) return '';
	const explicit = addon.version != null && String(addon.version).trim();
	if (explicit) return String(explicit).replace(/^v/i, '');
	const name = String(addon.name || '');
	const fromName = name.match(/\bv(\d+\.\d+\.\d+)\s*$/i);
	if (fromName) return fromName[1];
	const fromId = String(addon.id || '').match(/-v(\d+\.\d+\.\d+)$/i);
	if (fromId) return fromId[1];
	return '';
}

/** Label with version when known; avoids doubling if name already ends with vX.Y.Z. */
function withAddonVersion(label, addon) {
	const base = String(label || '').trim() || String(addon?.name || addon?.id || '');
	const ver = addonVersion(addon);
	if (!ver) return base;
	if (new RegExp(`\\bv${ver.replace(/\./g, '\\.')}\\s*$`, 'i').test(base)) return base;
	if (/\bv\d+\.\d+\.\d+\s*$/i.test(base)) return base;
	return `${base} v${ver}`;
}

function exclusiveOptionLabel(addon) {
	let core;
	if (addon.optionLabel) {
		core = String(addon.optionLabel);
	} else {
		const after = String(addon.name || '')
			.split('—')
			.slice(1)
			.join('—')
			.trim();
		const cleaned = after
			.replace(/\s*\(on [^)]+\)/gi, '')
			.replace(/\s+v[\d.]+$/i, '')
			.trim();
		core = cleaned || addon.name;
	}
	return withAddonVersion(core, addon);
}

function freeAddonLabel(addon) {
	return withAddonVersion(addon.name || addon.id, addon);
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

	const displayName = freeAddonLabel(addon);
	// Escape is unnecessary for our catalog strings; keep simple like before.
	label.innerHTML = `
		<input type="checkbox" name="addon" value="${addon.id}" ${checked} ${disabled} />
		<span><strong>${displayName}</strong></span>
	`;
	return label;
}

/** Disc keys from pack.discs, as sorted strings "1"|"2"|"3". */
function addonDiscKeys(addon) {
	const discs = addon?.discs;
	if (!discs || typeof discs !== 'object') return [];
	return Object.keys(discs)
		.map(String)
		.filter((d) => d === '1' || d === '2' || d === '3')
		.sort();
}

/** True when the pack covers every disc (or has no discs map). */
function addonIsAllDiscs(addon) {
	const keys = addonDiscKeys(addon);
	if (!keys.length) return true;
	return keys.length >= 3 && keys[0] === '1' && keys[1] === '2' && keys[2] === '3';
}

/** Single-disc column 1|2|3, or null if multi/all. */
function addonSoleDisc(addon) {
	const keys = addonDiscKeys(addon);
	if (keys.length === 1) return Number(keys[0]);
	return null;
}

/**
 * Layout buckets:
 *  - allDisc: exclusive groups + free checkboxes that apply to all discs
 *  - byDisc[1|2|3]: single-disc packs only
 */
function partitionAddonsByDisc(visible) {
	const { groups, groupOrder, free } = partitionAddons(visible);
	const allDisc = { groupIds: [], groups: new Map(), free: [] };
	const byDisc = {
		1: { groupIds: [], groups: new Map(), free: [] },
		2: { groupIds: [], groups: new Map(), free: [] },
		3: { groupIds: [], groups: new Map(), free: [] },
	};

	for (const groupId of groupOrder) {
		const members = groups.get(groupId) || [];
		if (!members.length) continue;
		// Group stays together: all-disc if any member is multi/all, else sole disc of first.
		const all = members.some((a) => addonIsAllDiscs(a) || addonSoleDisc(a) == null);
		if (all) {
			allDisc.groupIds.push(groupId);
			allDisc.groups.set(groupId, members);
			continue;
		}
		const disc = addonSoleDisc(members[0]) || 1;
		byDisc[disc].groupIds.push(groupId);
		byDisc[disc].groups.set(groupId, members);
	}

	for (const addon of free) {
		if (addonIsAllDiscs(addon)) {
			allDisc.free.push(addon);
			continue;
		}
		const sole = addonSoleDisc(addon);
		if (sole) {
			byDisc[sole].free.push(addon);
		} else {
			// Multi-disc but not all three — treat as all-disc row.
			allDisc.free.push(addon);
		}
	}

	return { allDisc, byDisc };
}

function appendAddonBucket(container, bucket, prevSelected) {
	for (const groupId of bucket.groupIds) {
		container.appendChild(
			renderAddonGroup(groupId, bucket.groups.get(groupId), prevSelected)
		);
	}
	for (const addon of bucket.free) {
		container.appendChild(renderFreeAddon(addon, prevSelected));
	}
}

function updateSectionExplainers(baseId) {
	const packsEl = document.getElementById('explainer-packs');
	const modsEl = document.getElementById('explainer-mods');
	const baseEl = document.getElementById('explainer-base');
	if (baseEl) {
		baseEl.textContent =
			manifest.explainer?.base ||
			'Base experience — only one applies (Unmodified, CSR, Highwind, …).';
	}
	const isCsr = String(baseId || '').startsWith('csr-') || baseId === 'csr';
	const isHighwind = String(baseId || '').startsWith('highwind');
	if (packsEl) {
		if (isCsr) {
			packsEl.textContent =
				manifest.explainer?.packs ||
				'Optional CSR+ scene packs on CSR. Stack any combination. Organized by disc.';
		} else if (isHighwind) {
			packsEl.textContent =
				'CSR+ scene packs require the CSR base. Highwind is a separate full experience.';
		} else {
			packsEl.textContent =
				'CSR+ scene packs require the CSR base. Switch Base Experience to CSR to enable them.';
		}
	}
	if (modsEl) {
		modsEl.textContent =
			manifest.explainer?.mods ||
			'Optional mods. Compatible with Unmodified, CSR, and Highwind. Conflicting choices share a dropdown (None = skip).';
	}
}

function renderLayerList(kind) {
	const listEl = kind === 'pack' ? packListEl : modListEl;
	const panelEl = kind === 'pack' ? panelPacksEl : panelModsEl;
	if (!manifest || !listEl) return;
	const baseId = selectedBaseId();
	const prevSelected = new Set(selectedAddonIds());
	const visible = addonsForBase(baseId, kind);
	const { allDisc, byDisc } = partitionAddonsByDisc(visible);
	listEl.innerHTML = '';

	if (kind === 'pack') {
		const anyPacksExist = layersOfKind('pack').length > 0;
		const show = visible.length > 0;
		if (panelEl) {
			panelEl.hidden = !anyPacksExist;
			panelEl.classList.toggle('is-empty', !show);
		}
		if (!show) {
			const empty = document.createElement('p');
			empty.className = 'explainer';
			empty.style.marginBottom = '0';
			empty.textContent = anyPacksExist
				? 'No packs for this base — choose CSR above.'
				: 'No packs published yet.';
			listEl.appendChild(empty);
			return;
		}
	} else if (!visible.length) {
		const empty = document.createElement('p');
		empty.className = 'explainer';
		empty.style.marginBottom = '0';
		empty.textContent = 'No mods for this base yet.';
		listEl.appendChild(empty);
		return;
	}

	const hasAll = allDisc.groupIds.length > 0 || allDisc.free.length > 0;
	const hasDiscCols = [1, 2, 3].some(
		(d) => byDisc[d].groupIds.length > 0 || byDisc[d].free.length > 0
	);

	if (hasAll) {
		const allSection = document.createElement('div');
		allSection.className = 'addon-section addon-section-all';
		const allHead = document.createElement('h3');
		allHead.className = 'addon-section-title';
		allHead.textContent = 'All discs';
		allSection.appendChild(allHead);
		const allBody = document.createElement('div');
		allBody.className = 'addon-all-grid';
		appendAddonBucket(allBody, allDisc, prevSelected);
		allSection.appendChild(allBody);
		listEl.appendChild(allSection);
	}

	if (hasDiscCols) {
		const loadedDisc = selectedDisc();
		const cols = document.createElement('div');
		cols.className = 'addon-disc-columns';
		if (loadedDisc) cols.dataset.loadedDisc = String(loadedDisc);
		for (const disc of [1, 2, 3]) {
			const bucket = byDisc[disc];
			const col = document.createElement('div');
			col.className = 'addon-disc-col';
			col.dataset.disc = String(disc);
			if (loadedDisc) {
				if (disc === loadedDisc) col.classList.add('is-active');
				else col.classList.add('is-inactive');
			}
			const head = document.createElement('h3');
			head.className = 'addon-section-title';
			if (loadedDisc && disc === loadedDisc) {
				head.innerHTML = 'Disc ' + disc + ' <span class="addon-disc-badge">loaded</span>';
			} else if (loadedDisc) {
				head.innerHTML =
					'Disc ' + disc + ' <span class="addon-disc-badge is-muted">not loaded</span>';
			} else {
				head.textContent = 'Disc ' + disc;
			}
			col.appendChild(head);
			const body = document.createElement('div');
			body.className = 'addon-disc-col-body';
			if (bucket.groupIds.length || bucket.free.length) {
				appendAddonBucket(body, bucket, prevSelected);
			} else {
				const empty = document.createElement('p');
				empty.className = 'addon-col-empty';
				empty.textContent =
					loadedDisc && disc !== loadedDisc ? 'Load this disc to use' : 'None yet';
				body.appendChild(empty);
			}
			col.appendChild(body);
			cols.appendChild(col);
		}
		listEl.appendChild(cols);
	}
}

function renderAddons() {
	updateSectionExplainers(selectedBaseId());
	renderLayerList('pack');
	renderLayerList('mod');
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
	setSectionLocked(panelPacksEl, !disc);
	setSectionLocked(panelModsEl, !disc);
	setSectionLocked(panelBuildEl, !disc);
	const baseId = selectedBaseId();
	const base = manifest.bases.find((b) => b.id === baseId);
	const selected = selectedAddonIds().map((id) => entryById(id)).filter(Boolean);
	const packs = selected.filter((a) => layerKind(a) === 'pack');
	const mods = selected.filter((a) => layerKind(a) === 'mod');
	const steps = [];
	steps.push(sourceBytes ? `Input: ${sourceBytes.length} bytes` : 'Input: (none yet)');
	steps.push(disc ? `Disc: ${disc} (auto)` : 'Disc: (not detected)');
	steps.push(`Base Experience: ${base ? base.name : baseId}`);
	if (packs.length) packs.forEach((a, i) => steps.push(`Pack ${i + 1}: ${freeAddonLabel(a)}`));
	else steps.push('Packs: (none)');
	if (mods.length) mods.forEach((a, i) => steps.push(`Mod ${i + 1}: ${freeAddonLabel(a)}`));
	else steps.push('Mods: (none)');
	steps.push('Output: .zip (.bin + .cue + APPLIED.txt)');
	planEl.textContent = steps.join('\n');
	applyBtn.disabled = building || !(sourceBytes && disc);
	applyBtn.classList.toggle('is-busy', building);
}


function renderManifest() {
	baseListEl.innerHTML = '';
	if (packPresetListEl) packPresetListEl.innerHTML = '';
	if (modPresetListEl) modPresetListEl.innerHTML = '';
	if (packListEl) packListEl.innerHTML = '';
	if (modListEl) modListEl.innerHTML = '';
	baseListEl.addEventListener('change', (ev) => {
		if (ev.target && ev.target.id === 'base-select') {
			updateBaseBlurb();
			renderAllPresets({ resetToNone: true });
			renderAddons();
			applyAllPresets({ clearManagedIfNone: true });
			updatePlan();
		}
	});
	const onPresetChange = (ev) => {
		const t = ev.target;
		if (!t || !t.id) return;
		if (t.id === 'pack-preset-select') {
			applyActivePresetToAddons('pack', { clearManagedIfNone: true });
			updatePlan();
		} else if (t.id === 'mod-preset-select') {
			applyActivePresetToAddons('mod', { clearManagedIfNone: true });
			updatePlan();
		}
	};
	if (packPresetListEl) packPresetListEl.addEventListener('change', onPresetChange);
	if (modPresetListEl) modPresetListEl.addEventListener('change', onPresetChange);
	const onLayerChange = (kind) => (ev) => {
		const t = ev.target;
		if (t && t.name === 'addon-group') updateAddonGroupTooltip(t);
		const presetEl = document.getElementById(
			kind === 'pack' ? 'pack-preset-select' : 'mod-preset-select'
		);
		if (presetEl && presetEl.value) presetEl.value = '';
		updatePlan();
	};
	if (packListEl) packListEl.addEventListener('change', onLayerChange('pack'));
	if (modListEl) modListEl.addEventListener('change', onLayerChange('mod'));
	renderBases();
	renderAllPresets();
	renderAddons();
	applyAllPresets();
	updatePlan();
}


async function onFileChosen(file) {
	if (!file) return;
	setStatus(`Reading ${file.name}…`);
	const buf = await file.arrayBuffer();
	const bytes = new Uint8Array(buf);
	rememberImage(bytes, `${file.name} (${bytes.length} bytes)`);
	renderAllPresets();
	renderAddons();
	applyAllPresets();
	if (!detectedDisc) setStatus('Image loaded, but disc could not be detected.', true);
	else setStatus(`Image ready — NTSC-U Disc ${detectedDisc}.`);
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

	const packs = addons.filter((a) => layerKind(a) === 'pack');
	const mods = addons.filter((a) => layerKind(a) === 'mod');
	if (packs.length) {
		lines.push('Packs:');
		for (const addon of packs) lines.push(`  - ${freeAddonLabel(addon)}`);
	} else lines.push('Packs: none');
	if (mods.length) {
		lines.push('Mods:');
		for (const addon of mods) lines.push(`  - ${freeAddonLabel(addon)}`);
	} else lines.push('Mods: none');

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

		setStatus('Choose an NTSC-U .bin, then pick base, packs, and mods.');
	} catch (err) {
		setStatus(err.message || String(err), true);
	}
}

init();
