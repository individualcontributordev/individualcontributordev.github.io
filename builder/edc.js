/**
 * MODE2/2352 Form 1 EDC + ECC (Neill Corlett / ECM public-domain algorithm).
 * Regenerates Form1 sector footers after ic-layer apply so burns verify and
 * hardware sees valid checksums even when layers were built from zeroed footers.
 * Skips Mode2 Form2 (FMV/XA) — Form1 repair would clobber the 2324-byte payload.
 */

const SECTOR = 2352;
const OFFSET_MODE2_SUBHEADER = 0x10;
const OFFSET_MODE2_FORM1_EDC = 0x818; // 2072
const MODE2_EDC_LEN = 0x808; // subheader + user data
const OFFSET_ECC_P = 0x81c; // 2076
const OFFSET_ECC_Q = 0x8c8; // 2248
const ECC_DATA_OFFSET = 0x0c;

const ECC_P_MAJOR = 86;
const ECC_P_MINOR = 24;
const ECC_P_MULT = 2;
const ECC_P_INC = 86;
const ECC_Q_MAJOR = 52;
const ECC_Q_MINOR = 43;
const ECC_Q_MULT = 86;
const ECC_Q_INC = 88;

const eccFLut = new Uint8Array(256);
const eccBLut = new Uint8Array(256);
const edcLut = new Uint32Array(256);

(function initLuts() {
	for (let i = 0; i < 256; i++) {
		let j = (i << 1) ^ (i & 0x80 ? 0x11d : 0);
		eccFLut[i] = j & 0xff;
		eccBLut[i ^ j] = i;
		let edc = i;
		for (let k = 0; k < 8; k++) {
			edc = (edc >>> 1) ^ (edc & 1 ? 0xd8018001 : 0);
		}
		edcLut[i] = edc >>> 0;
	}
})();

function edcComputeBlock(src, start, size) {
	let edc = 0;
	for (let i = 0; i < size; i++) {
		edc = (edcLut[(edc ^ src[start + i]) & 0xff] ^ (edc >>> 8)) >>> 0;
	}
	return edc >>> 0;
}

function eccComputeBlock(srcBase, majorCount, minorCount, majorMult, minorInc, dest, destOff) {
	const size = majorCount * minorCount;
	for (let major = 0; major < majorCount; major++) {
		let index = ((major >> 1) * majorMult + (major & 1)) >>> 0;
		let eccA = 0;
		let eccB = 0;
		for (let minor = 0; minor < minorCount; minor++) {
			const temp = srcBase[index];
			index += minorInc;
			if (index >= size) index -= size;
			eccA ^= temp;
			eccB ^= temp;
			eccA = eccFLut[eccA];
		}
		eccA = eccBLut[eccFLut[eccA] ^ eccB];
		dest[destOff + major] = eccA;
		dest[destOff + major + majorCount] = eccA ^ eccB;
	}
}

function isMode2Form1(sector, off) {
	// sync + mode byte 2
	if (sector[off] !== 0x00 || sector[off + 11] !== 0x00) return false;
	for (let i = 1; i <= 10; i++) {
		if (sector[off + i] !== 0xff) return false;
	}
	if (sector[off + 15] !== 0x02) return false;
	// Submode (byte 18). FF7 FMV/STR is Mode2 with a 2324-byte payload even when
	// the Form2 bit is clear: video sectors are often 0x42 (real-time|video),
	// audio 0x64 (real-time|form2|audio). Form1 EDC/ECC at 2072..2351 overwrites
	// that payload tail → dual/flicker FMV audio. Only repair plain Form1 *data*.
	const submode = sector[off + 18];
	if (submode & 0x20) return false; // Form 2
	if (submode & 0x04) return false; // XA audio
	if (submode & 0x02) return false; // video / STR
	if (!(submode & 0x08)) return false; // require Data bit (ISO file sectors)
	return true;
}

/**
 * Regenerate EDC/ECC for one Mode2 Form1 sector (in place).
 */
export function generateMode2Form1EdcEcc(sector, off = 0) {
	const edc = edcComputeBlock(sector, off + OFFSET_MODE2_SUBHEADER, MODE2_EDC_LEN);
	sector[off + OFFSET_MODE2_FORM1_EDC] = edc & 0xff;
	sector[off + OFFSET_MODE2_FORM1_EDC + 1] = (edc >>> 8) & 0xff;
	sector[off + OFFSET_MODE2_FORM1_EDC + 2] = (edc >>> 16) & 0xff;
	sector[off + OFFSET_MODE2_FORM1_EDC + 3] = (edc >>> 24) & 0xff;

	const a0 = sector[off + 12];
	const a1 = sector[off + 13];
	const a2 = sector[off + 14];
	const a3 = sector[off + 15];
	sector[off + 12] = 0;
	sector[off + 13] = 0;
	sector[off + 14] = 0;
	sector[off + 15] = 0;

	const src = sector.subarray(off + ECC_DATA_OFFSET);
	eccComputeBlock(src, ECC_P_MAJOR, ECC_P_MINOR, ECC_P_MULT, ECC_P_INC, sector, off + OFFSET_ECC_P);
	eccComputeBlock(src, ECC_Q_MAJOR, ECC_Q_MINOR, ECC_Q_MULT, ECC_Q_INC, sector, off + OFFSET_ECC_Q);

	sector[off + 12] = a0;
	sector[off + 13] = a1;
	sector[off + 14] = a2;
	sector[off + 15] = a3;
}

function footerLooksBroken(sector, off) {
	// All-zero EDC is the failure mode we baked into CSR layers.
	return (
		sector[off + OFFSET_MODE2_FORM1_EDC] === 0 &&
		sector[off + OFFSET_MODE2_FORM1_EDC + 1] === 0 &&
		sector[off + OFFSET_MODE2_FORM1_EDC + 2] === 0 &&
		sector[off + OFFSET_MODE2_FORM1_EDC + 3] === 0
	);
}

function sectorChanged(a, b, off) {
	for (let i = 0; i < SECTOR; i++) {
		if (a[off + i] !== b[off + i]) return true;
	}
	return false;
}

function yieldToUi() {
	return new Promise((resolve) => setTimeout(resolve, 0));
}

/**
 * After ic-layer apply: regenerate Mode2 Form1 EDC/ECC for every sector that
 * differs from the source image. Leaves untouched sectors alone (some retail
 * Form1 sectors legitimately have unusual footers).
 *
 * Async: yields every sectorChunk LBAs so the UI can stay responsive on ~700MB bins.
 *
 * @returns {Promise<{ fixed: number, sectors: number, changed: number }>}
 */
export async function repairMode2EdcInImage(sourceBytes, patchedBytes, opts = {}) {
	if (patchedBytes.length % SECTOR !== 0) {
		throw new Error('image length ' + patchedBytes.length + ' is not a multiple of 2352');
	}
	if (sourceBytes.length % SECTOR !== 0) {
		throw new Error('source length ' + sourceBytes.length + ' is not a multiple of 2352');
	}
	// Layers may grow the image (append sectors), e.g. no-disc-swap SNOVA inject.
	// Shrinking is not supported.
	if (patchedBytes.length < sourceBytes.length) {
		throw new Error(
			'patched image smaller than source (' +
				patchedBytes.length +
				' < ' +
				sourceBytes.length +
				')',
		);
	}
	const sectorChunk = opts.sectorChunk ?? 2048; // ~4.6MB of 2352 sectors
	const onProgress = opts.onProgress;
	const sectors = patchedBytes.length / SECTOR;
	const sourceSectors = sourceBytes.length / SECTOR;
	let fixed = 0;
	let changed = 0;
	for (let lba = 0; lba < sectors; lba++) {
		const off = lba * SECTOR;
		const isNew = lba >= sourceSectors;
		if (!isNew && !sectorChanged(sourceBytes, patchedBytes, off)) {
			// still yield on chunk boundaries while scanning
		} else {
			changed++;
			if (isMode2Form1(patchedBytes, off)) {
				generateMode2Form1EdcEcc(patchedBytes, off);
				fixed++;
			}
		}
		if ((lba + 1) % sectorChunk === 0) {
			if (onProgress) onProgress(lba + 1, sectors);
			await yieldToUi();
		}
	}
	if (onProgress) onProgress(sectors, sectors);
	return { fixed, changed, sectors };
}
