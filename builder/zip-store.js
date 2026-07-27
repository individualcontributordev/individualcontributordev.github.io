/**
 * Minimal ZIP writer (STORE only — no compression).
 * Fine for large .bin payloads where Deflate would waste CPU/RAM.
 */

function crc32(buf) {
	let c = ~0;
	for (let i = 0; i < buf.length; i++) {
		c ^= buf[i];
		for (let k = 0; k < 8; k++) {
			c = c & 1 ? (c >>> 1) ^ 0xedb88320 : c >>> 1;
		}
	}
	return ~c >>> 0;
}

function encodeName(name) {
	return new TextEncoder().encode(name);
}

function u16(n) {
	const b = new Uint8Array(2);
	new DataView(b.buffer).setUint16(0, n, true);
	return b;
}

function u32(n) {
	const b = new Uint8Array(4);
	new DataView(b.buffer).setUint32(0, n, true);
	return b;
}

function concat(chunks) {
	let total = 0;
	for (const c of chunks) total += c.length;
	const out = new Uint8Array(total);
	let off = 0;
	for (const c of chunks) {
		out.set(c, off);
		off += c.length;
	}
	return out;
}

/**
 * @param {{ name: string, data: Uint8Array }[]} files
 * @returns {Uint8Array}
 */
export function zipStore(files) {
	const locals = [];
	const centrals = [];
	let offset = 0;

	for (const file of files) {
		const nameBytes = encodeName(file.name);
		const data = file.data;
		if (data.byteLength > 0xffffffff) {
			throw new Error(`File too large for standard ZIP: ${file.name}`);
		}
		const crc = crc32(data);
		const size = data.byteLength;

		const local = concat([
			u32(0x04034b50),
			u16(20), // version needed
			u16(0), // flags
			u16(0), // method STORE
			u16(0),
			u16(0), // time/date
			u32(crc),
			u32(size),
			u32(size),
			u16(nameBytes.length),
			u16(0), // extra
			nameBytes,
			data,
		]);

		const central = concat([
			u32(0x02014b50),
			u16(20),
			u16(20),
			u16(0),
			u16(0),
			u16(0),
			u16(0),
			u32(crc),
			u32(size),
			u32(size),
			u16(nameBytes.length),
			u16(0),
			u16(0),
			u16(0),
			u16(0),
			u32(0),
			u32(offset),
			nameBytes,
		]);

		locals.push(local);
		centrals.push(central);
		offset += local.length;
	}

	const centralDir = concat(centrals);
	const end = concat([
		u32(0x06054b50),
		u16(0),
		u16(0),
		u16(files.length),
		u16(files.length),
		u32(centralDir.length),
		u32(offset),
		u16(0),
	]);

	return concat([...locals, centralDir, end]);
}
