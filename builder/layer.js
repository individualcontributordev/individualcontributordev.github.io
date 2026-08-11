/**
 * ic-layer-v1 — stackable disc-image byte patches.
 * Each record: { offset: number, hex: string } (hex = even-length hex string)
 */

export function parseHex(hex) {
	const clean = String(hex).replace(/\s+/g, '').toLowerCase();
	if (clean.length % 2 !== 0) {
		throw new Error('hex length must be even');
	}
	if (!/^[0-9a-f]*$/.test(clean)) {
		throw new Error('invalid hex');
	}
	const out = new Uint8Array(clean.length / 2);
	for (let i = 0; i < out.length; i++) {
		out[i] = parseInt(clean.slice(i * 2, i * 2 + 2), 16);
	}
	return out;
}

export function validateLayer(layer) {
	if (!layer || layer.format !== 'ic-layer-v1') {
		throw new Error('expected format ic-layer-v1');
	}
	if (layer.target && layer.target !== 'disc-image') {
		throw new Error(`unsupported target: ${layer.target} (expected disc-image)`);
	}
	if (!Array.isArray(layer.records)) {
		throw new Error('layer.records required');
	}
}

function yieldToUi() {
	return new Promise((resolve) => setTimeout(resolve, 0));
}

/**
 * Apply one layer to a disc image. Returns a new Uint8Array (may grow).
 * Yields periodically so the browser can paint on huge packs.
 *
 * opts.recordChunk — records between yields (default 4000)
 * opts.onProgress — optional (done, total) callback
 */
export async function applyLayer(imageBytes, layer, opts = {}) {
	validateLayer(layer);
	const recordChunk = opts.recordChunk ?? 4000;
	const onProgress = opts.onProgress;
	let size = imageBytes.length;
	const records = layer.records;
	const total = records.length;
	const parsed = new Array(total);

	for (let i = 0; i < total; i++) {
		const rec = records[i];
		const offset = Number(rec.offset);
		if (!Number.isFinite(offset) || offset < 0) {
			throw new Error(`bad offset: ${rec.offset}`);
		}
		const data = rec.hex != null ? parseHex(rec.hex) : new Uint8Array(rec.data || []);
		size = Math.max(size, offset + data.length);
		parsed[i] = { offset, data };
		if ((i + 1) % recordChunk === 0) {
			if (onProgress) onProgress(i + 1, total);
			await yieldToUi();
		}
	}

	// Grown images: trailing zeros may match shorter original pad and be omitted
	// from records. Honor stats.modifiedBytes so size/alignment match the work bin.
	const target = layer.stats && Number(layer.stats.modifiedBytes);
	if (Number.isFinite(target) && target > size) {
		size = target;
	}

	const out = new Uint8Array(size);
	out.set(imageBytes, 0);
	for (let i = 0; i < parsed.length; i++) {
		const { offset, data } = parsed[i];
		out.set(data, offset);
		if ((i + 1) % recordChunk === 0) {
			if (onProgress) onProgress(i + 1, total);
			await yieldToUi();
		}
	}
	if (onProgress) onProgress(total, total);
	return out;
}

/**
 * Apply layers in order (async; yields inside each layer).
 * opts.onLayer — optional (index, total, layer) before each layer
 */
export async function applyLayers(imageBytes, layers, opts = {}) {
	let current = imageBytes;
	const total = layers.length;
	for (let i = 0; i < total; i++) {
		const layer = layers[i];
		if (opts.onLayer) opts.onLayer(i, total, layer);
		current = await applyLayer(current, layer);
	}
	return current;
}

export function buildCue(binFileName) {
	const name = binFileName.replace(/"/g, '');
	return (
		'FILE "' +
		name +
		'" BINARY\n  TRACK 01 MODE2/2352\n    INDEX 01 00:00:00\n'
	);
}
