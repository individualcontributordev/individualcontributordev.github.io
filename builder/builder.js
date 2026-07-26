import { applyLayers, buildCue } from './layer.js';

const statusEl = document.getElementById('status');
const baseListEl = document.getElementById('base-list');
const addonListEl = document.getElementById('addon-list');
const fileInput = document.getElementById('bin-file');
const useSampleBtn = document.getElementById('use-sample');
const applyBtn = document.getElementById('apply');
const planEl = document.getElementById('plan');
const fileLabel = document.getElementById('file-label');

let manifest = null;
let sourceBytes = null;
const layerCache = new Map();

function setStatus(msg, isError) {
	statusEl.textContent = msg || '';
	statusEl.classList.toggle('is-error', !!isError);
}

function downloadBlob(blob, filename) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	a.remove();
	setTimeout(() => URL.revokeObjectURL(url), 2000);
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
	const url = resolveUrl(manifestUrl, entry.url);
	if (entry.layer === null) {
		return { ...entry, url: null };
	}
	if (!url && entry.id !== 'clean') return null;
	return { ...entry, url };
}

async function loadMergedManifest(localPath) {
	const localUrl = new URL(localPath, window.location.href).href;
	const local = await fetchJson(localUrl);
	const bases = [];
	const addons = [];

	for (const b of local.bases || []) {
		const n = normalizeEntry(b, localUrl);
		if (n) bases.push(n);
	}
	for (const a of local.addons || []) {
		const n = normalizeEntry(a, localUrl);
		if (n) addons.push(n);
	}

	const remoteNotes = [];
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
			remoteNotes.push(`Loaded ${src}`);
		} catch (err) {
			remoteNotes.push(`Skip ${src}: ${err.message}`);
			console.warn(err);
		}
	}

	return {
		...local,
		bases,
		addons,
		_remoteNotes: remoteNotes,
	};
}

async function loadLayer(entry) {
	if (!entry || !entry.url) return null;
	if (layerCache.has(entry.url)) return layerCache.get(entry.url);
	const layer = await fetchJson(entry.url);
	layerCache.set(entry.url, layer);
	return layer;
}

function selectedBaseId() {
	const el = document.querySelector('input[name="base"]:checked');
	return el ? el.value : 'clean';
}

function selectedAddonIds() {
	return [...document.querySelectorAll('input[name="addon"]:checked')].map((el) => el.value);
}

function updatePlan() {
	if (!manifest) return;
	const baseId = selectedBaseId();
	const base = manifest.bases.find((b) => b.id === baseId);
	const addons = selectedAddonIds()
		.map((id) => manifest.addons.find((a) => a.id === id))
		.filter(Boolean);

	const steps = [];
	steps.push(sourceBytes ? `Input: ${sourceBytes.length} bytes` : 'Input: (none yet)');
	steps.push(`Base: ${base ? base.name : baseId}`);
	if (addons.length) {
		addons.forEach((a, i) => steps.push(`Add-on ${i + 1}: ${a.name}`));
	} else {
		steps.push('Add-ons: (none)');
	}
	steps.push('Output: .bin + .cue');
	planEl.textContent = steps.join('\n');
	applyBtn.disabled = !sourceBytes;
}

function renderManifest() {
	baseListEl.innerHTML = '';
	addonListEl.innerHTML = '';

	manifest.bases.forEach((base, index) => {
		const label = document.createElement('label');
		label.className = 'choice';
		label.innerHTML = `
			<input type="radio" name="base" value="${base.id}" ${index === 0 ? 'checked' : ''} />
			<span>
				<strong>${base.name}</strong>
				<small>${base.blurb || ''}</small>
			</span>
		`;
		baseListEl.appendChild(label);
	});

	manifest.addons.forEach((addon) => {
		const label = document.createElement('label');
		label.className = 'choice';
		label.innerHTML = `
			<input type="checkbox" name="addon" value="${addon.id}" />
			<span>
				<strong>${addon.name}</strong>
				<small>${addon.blurb || ''}</small>
			</span>
		`;
		addonListEl.appendChild(label);
	});

	document.getElementById('explainer-base').textContent = manifest.explainer?.base || '';
	document.getElementById('explainer-addon').textContent = manifest.explainer?.addon || '';

	baseListEl.addEventListener('change', updatePlan);
	addonListEl.addEventListener('change', updatePlan);
	updatePlan();
}

async function loadSample() {
	setStatus('Loading sample.bin…');
	const sampleUrl = new URL(manifest.sampleBin, window.location.href).href;
	const res = await fetch(sampleUrl);
	if (!res.ok) throw new Error('Could not load sample.bin');
	sourceBytes = new Uint8Array(await res.arrayBuffer());
	fileLabel.textContent = `sample.bin (${sourceBytes.length} bytes)`;
	fileInput.value = '';
	setStatus('Sample image loaded.');
	updatePlan();
}

async function onFileChosen(file) {
	if (!file) return;
	setStatus(`Reading ${file.name}…`);
	const buf = await file.arrayBuffer();
	sourceBytes = new Uint8Array(buf);
	fileLabel.textContent = `${file.name} (${sourceBytes.length} bytes)`;
	setStatus('Image ready.');
	updatePlan();
}

async function applySelection() {
	if (!sourceBytes || !manifest) return;
	applyBtn.disabled = true;
	setStatus('Building…');

	try {
		const baseId = selectedBaseId();
		const base = manifest.bases.find((b) => b.id === baseId);
		const addonEntries = selectedAddonIds()
			.map((id) => manifest.addons.find((a) => a.id === id))
			.filter(Boolean);

		const layers = [];
		if (base?.url) {
			layers.push(await loadLayer(base));
		}
		for (const entry of addonEntries) {
			layers.push(await loadLayer(entry));
		}

		const out = applyLayers(sourceBytes, layers);
		const stamp = [
			baseId === 'clean' ? 'clean' : baseId.replace(/^demo-base-/, ''),
			...addonEntries.map((a) => a.id.replace(/^demo-addon-/, '')),
		].join('+');
		const binName = `ff7-builder-${stamp || 'clean'}.bin`;
		const cueName = binName.replace(/\.bin$/i, '.cue');

		downloadBlob(new Blob([out], { type: 'application/octet-stream' }), binName);
		downloadBlob(new Blob([buildCue(binName)], { type: 'text/plain' }), cueName);

		setStatus(`Done — downloaded ${binName} and ${cueName} (${out.length} bytes, ${layers.length} layer(s)).`);
	} catch (err) {
		console.error(err);
		setStatus(err.message || String(err), true);
	} finally {
		applyBtn.disabled = !sourceBytes;
	}
}

async function init() {
	try {
		manifest = await loadMergedManifest('./manifest.json');
		document.getElementById('page-title').textContent = manifest.title || 'Disc builder';
		renderManifest();

		if (manifest.demo) {
			document.getElementById('demo-banner').hidden = false;
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
				: 'Pick a sample or your own .bin, choose base + add-ons, then Build.'
		);
	} catch (err) {
		setStatus(err.message || String(err), true);
	}
}

init();
