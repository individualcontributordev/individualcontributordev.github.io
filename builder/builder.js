import { applyLayers, buildCue } from './layer.js';
import { zipStore } from './zip-store.js';
import { detectFf7Disc } from './disc-id.js';

const statusEl = document.getElementById('status');
const baseListEl = document.getElementById('base-list');
const addonListEl = document.getElementById('addon-list');
const discInfoEl = document.getElementById('disc-info');
const fileInput = document.getElementById('bin-file');
const useSampleBtn = document.getElementById('use-sample');
const applyBtn = document.getElementById('apply');
const planEl = document.getElementById('plan');
const fileLabel = document.getElementById('file-label');

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
			remotesOk += 1;
			remoteNotes.push(`Loaded ${src}`);
		} catch (err) {
			remoteNotes.push(`Skip ${src}: ${err.message}`);
			console.warn(err);
		}
	}

	// Keep Unmodified; drop local demo packs once remotes are available.
	const useDemo = !!local.demo && remotesOk === 0;
	if (useDemo) {
		for (const b of local.bases || []) {
			const n = normalizeEntry(b, localUrl);
			if (n) bases.push(n);
		}
		for (const a of local.addons || []) {
			const n = normalizeEntry(a, localUrl);
			if (n) addons.push(n);
		}
	} else {
		const clean = (local.bases || []).find((b) => b.id === 'clean');
		if (clean) {
			const n = normalizeEntry({ ...clean, enabled: true }, localUrl);
			if (n) bases.unshift(n);
		}
	}

	return {
		...local,
		demo: useDemo,
		bases,
		addons,
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
	return [...document.querySelectorAll('input[name="addon"]:checked')].map((el) => el.value);
}

function selectedDisc() {
	return detectedDisc;
}

function setDiscInfo(text, isError) {
	if (!discInfoEl) return;
	discInfoEl.textContent = text || '';
	discInfoEl.classList.toggle('is-error', !!isError);
}

function rememberImage(bytes, label, { demo = false } = {}) {
	sourceBytes = bytes;
	fileLabel.textContent = label;

	if (demo) {
		detectedDisc = 1;
		setDiscInfo('Disc 1 (demo sample)');
		return;
	}

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
	if (id.startsWith('csr-plusplus') || /^csrplusplus/i.test(id)) return 'CSR++';
	if (id.startsWith('csr-plus') || /^csrplus/i.test(id)) return 'CSR+';
	if (id.startsWith('csr-') || id === 'csr' || /^csr-v/i.test(id)) return 'CSR';
	if (id.startsWith('demo-base-')) return 'Demo';
	return 'Other';
}

const BASE_FAMILY_ORDER = ['Unmodified', 'CSR', 'CSR+', 'CSR++', 'Demo', 'Other'];

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

function addonsForBase(baseId) {
	if (!manifest) return [];
	return (manifest.addons || []).filter((addon) => addonCompatibleWithBase(addon, baseId));
}

function renderAddons() {
	if (!manifest || !addonListEl) return;
	const baseId = selectedBaseId();
	const prevChecked = new Set(selectedAddonIds());
	const visible = addonsForBase(baseId);

	addonListEl.innerHTML = '';
	if (!visible.length) {
		const empty = document.createElement('p');
		empty.className = 'explainer';
		empty.style.marginBottom = '0';
		empty.textContent = 'No add-ons for this base yet.';
		addonListEl.appendChild(empty);
		return;
	}

	for (const addon of visible) {
		const label = document.createElement('label');
		label.className = 'choice';
		const checked = prevChecked.has(addon.id) ? 'checked' : '';
		label.innerHTML = `
			<input type="checkbox" name="addon" value="${addon.id}" ${checked} />
			<span>
				<strong>${addon.name}</strong>
				<small>${addon.blurb || ''}</small>
			</span>
		`;
		addonListEl.appendChild(label);
	}
}

function enforceExclusiveAddons(changedInput) {
	const addon = manifest.addons.find((a) => a.id === changedInput.value);
	const group = addon?.exclusiveGroup;
	if (!group || !changedInput.checked) return;
	for (const input of document.querySelectorAll('input[name="addon"]')) {
		if (input === changedInput || !input.checked) continue;
		const other = manifest.addons.find((a) => a.id === input.value);
		if (other?.exclusiveGroup === group) input.checked = false;
	}
}

function updatePlan() {
	if (!manifest) return;
	const disc = selectedDisc();
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
	addonListEl.innerHTML = '';

	document.getElementById('explainer-base').textContent = manifest.explainer?.base || '';
	document.getElementById('explainer-addon').textContent = manifest.explainer?.addon || '';

	baseListEl.addEventListener('change', (ev) => {
		if (ev.target && ev.target.id === 'base-select') {
			updateBaseBlurb();
			renderAddons();
			updatePlan();
		}
	});
	addonListEl.addEventListener('change', (ev) => {
		const t = ev.target;
		if (t && t.name === 'addon') enforceExclusiveAddons(t);
		updatePlan();
	});

	renderBases();
	renderAddons();
	updatePlan();
}

async function loadSample() {
	setStatus('Loading sample.bin…');
	const sampleUrl = new URL(manifest.sampleBin, window.location.href).href;
	const res = await fetch(sampleUrl);
	if (!res.ok) throw new Error('Could not load sample.bin');
	const bytes = new Uint8Array(await res.arrayBuffer());
	fileInput.value = '';
	rememberImage(bytes, `sample.bin (${bytes.length} bytes)`, { demo: true });
	setStatus('Sample image loaded.');
	updatePlan();
}

async function onFileChosen(file) {
	if (!file) return;
	setStatus(`Reading ${file.name}…`);
	const buf = await file.arrayBuffer();
	const bytes = new Uint8Array(buf);
	rememberImage(bytes, `${file.name} (${bytes.length} bytes)`);
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
		const stamp = [
			`d${disc}`,
			baseId === 'clean' ? 'clean' : baseId.replace(/^demo-base-/, ''),
			...addonEntries.map((a) => a.id.replace(/^demo-addon-/, '')),
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

function buildAppliedReport({ disc, base, baseId, addons }) {
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

	lines.push(
		'',
		'Play:',
		'- Keep the .bin and .cue in the same folder.',
		'- Open the .cue in DuckStation (or your emulator).',
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

		if (manifest.demo) {
			document.getElementById('demo-banner').hidden = false;
			useSampleBtn.hidden = false;
		} else {
			document.getElementById('demo-banner').hidden = true;
			useSampleBtn.hidden = true;
		}

		useSampleBtn.addEventListener('click', () => {
			loadSample().catch((err) => setStatus(err.message, true));
		});
		fileInput.addEventListener('change', () => {
			onFileChosen(fileInput.files?.[0]).catch((err) => setStatus(err.message, true));
		});
		applyBtn.addEventListener('click', () => {
			applySelection();
		});

		const remoteMsg = (manifest._remoteNotes || []).join(' · ');
		setStatus(
			remoteMsg
				? `Ready. ${remoteMsg}`
				: 'Choose an NTSC-U .bin, then pick base and add-ons.'
		);
	} catch (err) {
		setStatus(err.message || String(err), true);
	}
}

init();
