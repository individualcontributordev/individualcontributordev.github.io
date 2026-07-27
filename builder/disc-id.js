/**
 * Detect FF7 PS1 disc number from a raw .bin (Mode 2 / 2352).
 * NTSC-U boots SCUS_941.63 / .64 / .65 for discs 1 / 2 / 3.
 */

const WINDOW = 4 * 1024 * 1024; // SYSTEM.CNF + early root sit near the start

const MARKERS = [
	{ disc: 1, needles: ['SCUS_941.63', 'SCUS-94163'] },
	{ disc: 2, needles: ['SCUS_941.64', 'SCUS-94164'] },
	{ disc: 3, needles: ['SCUS_941.65', 'SCUS-94165'] },
];

function indexOfBytes(haystack, needleBytes, start, end) {
	const limit = Math.min(end, haystack.length) - needleBytes.length;
	outer: for (let i = start; i <= limit; i++) {
		for (let j = 0; j < needleBytes.length; j++) {
			if (haystack[i + j] !== needleBytes[j]) continue outer;
		}
		return i;
	}
	return -1;
}

/**
 * @param {Uint8Array} bytes
 * @returns {{ disc: number, region: 'ntsc-u', marker: string } | null}
 */
export function detectFf7Disc(bytes) {
	if (!bytes || bytes.length < 0x10000) return null;

	const end = Math.min(bytes.length, WINDOW);
	const hits = [];

	for (const { disc, needles } of MARKERS) {
		for (const needle of needles) {
			const nb = new TextEncoder().encode(needle);
			const at = indexOfBytes(bytes, nb, 0, end);
			if (at >= 0) hits.push({ disc, marker: needle, at });
		}
	}

	if (!hits.length) return null;

	// Prefer the most specific / first hit; require a single disc number.
	const discs = [...new Set(hits.map((h) => h.disc))];
	if (discs.length !== 1) return null;

	hits.sort((a, b) => a.at - b.at);
	return { disc: discs[0], region: 'ntsc-u', marker: hits[0].marker };
}
