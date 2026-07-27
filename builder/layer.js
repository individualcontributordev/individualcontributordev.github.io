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

/**
 * Apply one layer to a disc image. Returns a new Uint8Array (may grow).
 */
export function applyLayer(imageBytes, layer) {
	validateLayer(layer);
	let size = imageBytes.length;
	const parsed = layer.records.map((rec) => {
		const offset = Number(rec.offset);
		if (!Number.isFinite(offset) || offset < 0) {
			throw new Error(`bad offset: ${rec.offset}`);
		}
		const data = rec.hex != null ? parseHex(rec.hex) : new Uint8Array(rec.data || []);
		size = Math.max(size, offset + data.length);
		return { offset, data };
	});

	const out = new Uint8Array(size);
	out.set(imageBytes, 0);
	for (const { offset, data } of parsed) {
		out.set(data, offset);
	}
	return out;
}

/**
 * Apply layers in order.
 */
export function applyLayers(imageBytes, layers) {
	let current = imageBytes;
	for (const layer of layers) {
		current = applyLayer(current, layer);
	}
	return current;
}

export function buildCue(binFileName) {
	const name = binFileName.replace(/"/g, '');
	return `FILE "${name}" BINARY\n  TRACK 01 MODE2/2352\n    INDEX 01 00:00:00\n`;
}
