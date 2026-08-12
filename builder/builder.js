import { applyLayers, buildCue } from './layer.js';
import { zipStore } from './zip-store.js';
import { detectFf7Disc } from './disc-id.js';
import { repairMode2EdcInImage } from './edc.js';
import {
	getCachedLayer,
	putCachedLayer,
	clearLayerCache,
	layerCacheStats,
	pruneLayerCache,
} from './layer-cache.js';

const statusEl = document.getElementById('status');
const baseListEl = document.getElementById('base-list');
const packPresetListEl = null; // packs merged into mods (CSR+ all-or-none)
const modPresetListEl = document.getElementById('mod-preset-list');
const packListEl = null;
const modListEl = document.getElementById('mod-list');
const panelSourceEl = document.getElementById('panel-source');
const panelBaseEl = document.getElementById('panel-base');
const panelPacksEl = null;
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
	stopBuildBanter();
	statusEl.replaceChildren();
	statusEl.classList.toggle('is-error', !!isError);
	statusEl.classList.remove('is-building-status');
	if (msg) statusEl.textContent = msg;
}

function yieldToUi() {
	return new Promise((resolve) => setTimeout(resolve, 0));
}

/** Short download names; full pack list stays in APPLIED.txt */
function shortBaseToken(baseId) {
	const id = String(baseId || 'clean');
	if (id === 'clean') return 'clean';
	if (id.startsWith('csr')) return 'csr';
	if (id.startsWith('highwind')) return 'hw';
	return id.replace(/[^a-z0-9]+/gi, '').slice(0, 8).toLowerCase() || 'base';
}

function shortAddonToken(addon) {
	const id = String(addon?.id || '');
	if (id.includes('single-disc-endings')) return 'end';
	if (id.includes('manip-movies') || id.includes('csr-movies')) return 'mov';
	if (id.includes('single-disc')) return 'sd';
	if (id.includes('field-encounter')) {
		const m = id.match(/-(\d+)-v/);
		return 'f' + (m ? m[1] : 'enc');
	}
	if (id.includes('world-encounter')) {
		const m = id.match(/-(\d+)-v/);
		return 'w' + (m ? m[1] : 'enc');
	}
	if (id.includes('csr-plus') || layerKind(addon) === 'pack') return 'cplus';
	const compact = id.replace(/[^a-z0-9]+/gi, '').slice(0, 6).toLowerCase();
	return compact || 'mod';
}

function buildOutputNames(disc, baseId, addonEntries) {
	const tokens = [];
	const seen = new Set();
	const push = (t) => {
		if (!t || seen.has(t)) return;
		seen.add(t);
		tokens.push(t);
	};
	push('d' + disc);
	push(shortBaseToken(baseId));
	for (const a of addonEntries) push(shortAddonToken(a));
	let body = tokens.join('-');
	if (body.length > 40) body = body.slice(0, 40).replace(/-+$/, '');
	const stem = 'ff7-' + (body || 'build');
	return {
		binName: stem + '.bin',
		cueName: stem + '.cue',
		zipName: stem + '.zip',
		appliedName: 'APPLIED.txt',
	};
}

const BUILD_BANTER = {
	start: [
		'This guy are sick… warming up the disc forge.',
		'Behold! Building time.',
		"Outta my way. I've got a zip to catch.",
		'…Alright. Let\'s mosey.',
		'Biggs would say good luck. Wedge would bring snacks. Jessie… don\'t blow the reactor.',
		'Planet\'s waitin\'. Hit it.',
		'No save points here — just progress bars and hope.',
		'Shinra builds reactors. We build better discs.',
		'Avalanche special: one clean burn, hold the platefall.',
		'If this freezes, blame the Turks. Always the Turks.',
		'Cloud: "…Fine. We build."',
		'Barret: "Lock an\' load the compiler!"',
		'A new journey begins from your downloads folder.',
		'Mako humming. Buffers open. Let\'s go.',
		'No phantom trains — only real progress.',
		'If Sephiroth appears mid-build, close the tab. That\'s a you problem.',
		'Jessie encrypted the payload with love and explosives.',
		'Wedge is cheering. Quietly. With a sandwich.',
	],
	base: [
		'Reading the Lifestream of your base experience…',
		'Barret: "We pickin\' the planet-friendly base. Move!"',
		'Materias calibrated. Base layer inbound.',
		'Cloud: "…Which base? Make it quick."',
		'Tifa: "Seventh Heaven rule — pick your path, then we go."',
		'Aerith: "The planet remembers every version of you. Even Unmodified."',
		'Red XIII: "A foundation worthy of Cosmo Canyon… perhaps."',
		'Cid: "Base loaded. Don\'t screw the trajectory."',
		'Highwind or CSR — just don\'t strand me on a damn raft again.',
		'Sephiroth: "You chase fragments of identity. How… familiar."',
		'Reeve would approve a stable baseline. Probably.',
		'No demos. No sample discs. Only the real Mako.',
		'Cloud: "Base first. Everything else after."',
		'Barret: "Unmodified? CSR? Speak up!"',
		'Tifa: "Whichever home you choose, we hold it steady."',
		'Aerith: "Hi! Selling bases — I mean blessings."',
		'The plate overhead is optional. The base is not.',
		'Highwind crew reporting: base course locked.',
		'CSR whispers strategies. Highwind cuts dialogue. Your call.',
		'Lifestream checkout complete.',
	],
	addon: [
		'Equipping optional materia… one orb at a time.',
		'Cloud: "Yeah… packing another mod."',
		'Tifa: "Careful — stack them in the right order."',
		'Cid: "Quit yappin\' and load the damn layer!"',
		'Yuffie: "If it\'s shiny, it\'s mine— I mean ours."',
		'Yuffie: "Sign the contract later. Steal the materia now."',
		'Red XIII: "Patience. Even a guardian waits on fetches."',
		'Red XIII: "…Would you kindly hurry? The heat is drying my nose."',
		'Cait Sith: "Luck be with this download!"',
		'Cait Sith: "I ain\'t gonna forget this journey — none of it!"',
		'Vincent: "…Hmph. Another patch in the coffin."',
		'Vincent: "I don\'t care how long it takes. Just finish it."',
		'Barret: "I been here since the beginnin\', an\' I still don\'t know what the hell\'s goin\' on."',
		'Barret: "There ain\'t no gettin\' offa this train we on!"',
		'Barret: "Golden shiny wire of hope — pull that pack down!"',
		'Aerith: "This guy are sick." (the network, not you)',
		'Aerith: "Do you work for Shinra? …Fetching layers counts."',
		'Cloud: "Not interested." (in waiting quietly)',
		'Cloud: "Cool."',
		'Tifa: "We\'re almost there. Don\'t give up."',
		'Cid: "Sit your ass down! I\'m flyin\' this download!"',
		'Nanaki: "My nose knows a good mod when it sniffs one."',
		'Elena would stamp this incomplete. Reno would nap.',
		'Rude: "…" (loads another layer in silence)',
		'Rufus: "Work faster. The world isn\'t going to wait."',
		'Hojo: "Fascinating specimen of JSON."',
		'Palmer: "S-something\'s downloading!!"',
		'Heidegger: "Gya haa haa! MORE LAYERS!"',
		'Scarlet: "Is it pretty? No? Then make it powerful."',
		'The Gold Saucer tax is waived for open-source heroes.',
		'Chocobo feet: stamp stamp stamp… fetch fetch fetch.',
		'Mog would dance, but bandwidth.',
		'Cloud: "Another one? …Sure."',
		'Barret: "Stack it! For the little ones!"',
		'Tifa: "Left hook of compatibility — check."',
		'Aerith: "This pack smells like flowers. Or Mako. Close enough."',
		'Cid: "If it breaks mid-air I\'m blamin\' you!"',
		'Yuffie: "Materia multiplex! More more more!"',
		'Nanaki: "I smell JSON on the wind."',
		'Vincent: "Proceed."',
		'Cait Sith: "Today\'s lucky color is cyan."',
		'Sephiroth: "Collect your fragments."',
		'Reno: "Yo. Try not to take all day."',
		'Tseng: "Mission parameters: fetch and apply."',
		'Don Corneo would demand a prettier spinner. Denied.',
		'Dyne… would want this over with. Fair.',
		'Bugenhagen: "Ho ho ho… packets."',
		'Priscilla waves from under Junon. Keep fetching.',
		'The Keystone is a download key now. Deal with it.',
		'Huge materia energy — compressed into one addon id.',
	],
	apply: [
		'Stringing the timeline together…',
		'No one will bury this disc under broken layers!',
		'Sephiroth: "You cannot stop… the merge." (we can)',
		'Cloud: "I\'m… Cloud. Packing memories into sectors."',
		'Whether a puppet or not — this image will be whole.',
		'Tifa: "Your story\'s yours. We\'re just patching the middle."',
		'Aerith: "Little by little… it comes together."',
		'Barret: "For Marlene. For the planet. For fewer disc swaps."',
		'Cid: "Shera believed in second chances. So does this merge."',
		'Vincent: "Chaos sleeps. Code does not."',
		'Yuffie: "Wutai annexes… half a megabyte more."',
		'Red XIII: "Bugenhagen always said: observe, then act."',
		'Cait Sith: "Destiny\'s a fortune-teller with a progress bar."',
		'The Midgar plates shift. Your bytes settle.',
		'Lifestream green between the hex dumps…',
		'No black materia required — only patience.',
		'Jenova would contaminate the image. We refuse.',
		'Weapon-class patch incoming. Brace.',
		'Cloud: "I\'m merging what I am with what I choose."',
		'Barret: "Weld those sectors like Midgar rails!"',
		'Tifa: "Syncopation — now punch."',
		'Aerith: "Knit the planet\'s socks. Digitally."',
		'Cid: "Torque the timeline!"',
		'Yuffie: "Combine jutsu: PATCH!"',
		'Vincent: "No hesitation."',
		'Every lost Sector 7 memory becomes a byte in place.',
		'Meteor declines to comment on this merge.',
		'The Temple of the Ancients had worse puzzles than this diff.',
		'Black robes wander past, mumbling offsets.',
		'Reunion can wait. Align the layers.',
	],
	repair: [
		'Fixing weak sectors — the planet thanks you.',
		'Aerith: "See? Even discs need a little healing."',
		'Rebuilding sector seals. Almost elegant.',
		'Cloud: "My eyes are burning…" (it\'s just EDC glare)',
		'White materia vibes only. No comet math.',
		'Barret: "Shinra broke it. We fix it. Same old story."',
		'Tifa: "Seventh Heaven patch kit — applied."',
		'Cid: "Gimme a wrench. No — a CRC."',
		'Vincent: "Atonement, one sector at a time."',
		'Red XIII: "300 years of wisdom: verify your burns."',
		'If ImgBurn complains, we already apologized to the ancients.',
		'Mode2 mended. Form1 forgiven. Move on.',
		'No more weak spots for Weapons to exploit.',
		'Sacred code: what is broken can be rewritten.',
		'Cloud: "Hold still. Healing."',
		'Barret: "I ain\'t leavin\' bad EDC on my watch!"',
		'Tifa: "Cure. Cura. Curaga. Checksum."',
		'Aerith: "Seal of the Ancients — applied to sector headers."',
		'Cid: "Hammer down. Gently. On math."',
		'Vincent: "Redeem the corrupt."',
		'Yuffie: "I purify… for a fee. Today: free."',
		'Nanaki: "The wounds close. Good."',
		'No more cracked plates in the image.',
		'If only hearts patched as cleanly as Form1.',
	],
	zip: [
		'Big file ahead — like the Highwind, this takes a minute.',
		'Compressing. Go touch grass in Sector 5… briefly.',
		'Do not turn off the power — still materia-forging.',
		'Cloud: "This is gonna take a while."',
		'Barret: "Then quit whinin\' and wait!"',
		'Cid: "Launch window\'s open. Don\'t jostle the cargo."',
		'Yuffie: "Is it done? Is it done? …Ugh, packing."',
		'Tifa: "Deep breath. Almost at the drop-off."',
		'Aerith: "I\'ll grow a flower while we wait. Or twelve."',
		'Cait Sith: "Fortune says: 78% chance of success, 22% of pacing."',
		'Vincent: "Wake me when the zip completes."',
		'Red XIII: "Even Seto stood still for longer than this."',
		'Highwind cargo bay doors closing… clamp that .bin.',
		'Bigger than a hug from Don Corneo. Much safer.',
		'Shinra would charge subscription fees. We charge seconds.',
		'Your downloads folder is the new Sector 7 slums — crowded but home.',
		'If the browser locks up, it\'s meditating in the Sleeping Forest.',
		'Cloud: "Zipping. Don\'t rush me."',
		'Barret: "Sit tight! This rocket needs fuel!"',
		'Tifa: "Count your breaths. We pack for the road."',
		'Aerith: "A picnic basket for a whole planet."',
		'Cid: "Cargo strapped. No rattling!"',
		'Yuffie: "Can I open it early? …No? Rude."',
		'Vincent: "Silence. Compression."',
		'Cait Sith: "My prediction: you will refresh your downloads."',
		'Red XIII: "Stillness is also speed."',
		'Like waiting on the Gold Saucer tram — but with a spinner.',
		'The North Crater was colder. This is merely large.',
		'Remember: the .cue is the PHS of the .bin.',
	],
	done: [
		'Mission complete. Take the zip instead of the cake.',
		'Omnislash: delivered. Check your downloads.',
		'The choice is yours… open the .cue and play.',
		'Cloud: "Mission complete."',
		'Barret: "Hell yeah! That\'s how Avalanche does it!"',
		'Tifa: "Good work, everyone. Drinks at Seventh Heaven — after you burn."',
		'Aerith: "See you at the end of the game… not before."',
		'Cid: "All clear for launch. Don\'t crash my bird— or your emulator."',
		'Yuffie: "I want a cut of that loot. Meaning: play credits with me."',
		'Vincent: "It is finished. For now."',
		'Red XIII: "May your journey be written in the stars of Cosmo Canyon."',
		'Cait Sith: "What a ride! I\'ll not forget it!"',
		'Sephiroth: "That is enough." (of waiting — go play)',
		'Jessie: "Did it work?! Tell me it worked!"',
		'Biggs: "Nice shooting — uh, packaging."',
		'Wedge: "I-I brought extra cds! Wait, wrong decade."',
		'No disc swap. No mercy. Press start.',
		'APPLIED.txt is your PHS — check the party list inside.',
		'Remember: keep .bin and .cue together. Like Avalanche.',
		'Cloud: "We\'re done here."',
		'Barret: "THAT\'S what I\'m talkin\' about!"',
		'Tifa: "Nailed it. Go make a memory — on console or DuckStation."',
		'Aerith: "Thank you for fighting… the progress bar."',
		'Cid: "Touchdown! Now get off my runway."',
		'Yuffie: "Victory spoils: one zip. Hand it over— after you copy it."',
		'Vincent: "Farewell — until the next patch."',
		'Nanaki: "Run free."',
		'Cait Sith: "What a performance! Encore optional."',
		'Sephiroth: "I will not be forgotten. Neither will APPLIED.txt."',
		'Jessie: "Booyah! Told you the payload would fit!"',
		'No plate drops. Only mic drops.',
		'Go burn. Be kind to retail plastics.',
		'May your frames stay full and your swaps stay zero.',
	],
};

let banterTimer = null;
/** @type {Record<string, string[]>} shuffled leftover lines per phase */
const banterDecks = Object.create(null);
/** Recent lines across the whole build so phases do not echo each other */
const banterRecent = [];
const BANTER_RECENT_MAX = 24;

function randInt(n) {
	if (n <= 0) return 0;
	if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
		const buf = new Uint32Array(1);
		crypto.getRandomValues(buf);
		return buf[0] % n;
	}
	return Math.floor(Math.random() * n);
}

function shuffleInPlace(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = randInt(i + 1);
		const t = arr[i];
		arr[i] = arr[j];
		arr[j] = t;
	}
	return arr;
}

function refillDeck(key) {
	const src = BUILD_BANTER[key] || BUILD_BANTER.start;
	const deck = src.slice();
	shuffleInPlace(deck);
	banterDecks[key] = deck;
	return deck;
}

function rememberBanter(line) {
	banterRecent.push(line);
	while (banterRecent.length > BANTER_RECENT_MAX) banterRecent.shift();
}

function pickBanter(key) {
	const pool = BUILD_BANTER[key] || BUILD_BANTER.start;
	let deck = banterDecks[key];
	if (!deck || deck.length === 0) deck = refillDeck(key);

	// Prefer a line not shown recently (when the pool is large enough)
	const recent = new Set(banterRecent);
	let pickIdx = -1;
	for (let attempt = 0; attempt < deck.length; attempt++) {
		const idx = randInt(deck.length);
		if (!recent.has(deck[idx])) {
			pickIdx = idx;
			break;
		}
	}
	if (pickIdx < 0) {
		// All remaining were recent — reshuffle full pool and take top
		deck = refillDeck(key);
		// try avoid last line only
		const last = banterRecent[banterRecent.length - 1];
		pickIdx = 0;
		for (let i = 0; i < deck.length; i++) {
			if (deck[i] !== last) {
				pickIdx = i;
				break;
			}
		}
	}

	const line = deck.splice(pickIdx, 1)[0];
	rememberBanter(line);
	return line;
}

function stopBuildBanter() {
	if (banterTimer) {
		clearInterval(banterTimer);
		banterTimer = null;
	}
}

function resetBanterSession() {
	stopBuildBanter();
	for (const k of Object.keys(banterDecks)) delete banterDecks[k];
	banterRecent.length = 0;
}

function setBuildStatus(phaseKey, detail) {
	stopBuildBanter();
	statusEl.classList.remove('is-error');
	statusEl.classList.add('is-building-status');
	statusEl.replaceChildren();

	const wrap = document.createElement('div');
	wrap.className = 'build-status';

	const spin = document.createElement('span');
	spin.className = 'build-spinner';
	spin.setAttribute('aria-hidden', 'true');

	const textCol = document.createElement('div');
	textCol.className = 'build-status-text';

	const main = document.createElement('div');
	main.className = 'build-status-main';
	main.textContent = pickBanter(phaseKey);

	const sub = document.createElement('div');
	sub.className = 'build-status-sub';
	sub.textContent = detail || 'Please wait — the builder is working.';

	textCol.append(main, sub);
	wrap.append(spin, textCol);
	statusEl.append(wrap);

	// Keep drawing fresh random (no-repeat) lines while a long phase runs
	banterTimer = setInterval(() => {
		main.textContent = pickBanter(phaseKey);
	}, 3800);
}

/**
 * Save the built zip. Prefer showSaveFilePicker so we can await the write;
 * otherwise trigger a blob download and hold the UI until the browser has
 * accepted the hand-off (true disk completion is not observable for <a download>).
 * @returns {Promise<{ url: string | null, method: 'file-picker' | 'blob' }>}
 */
async function saveZipDownload(blob, filename) {
	if (typeof window.showSaveFilePicker === 'function') {
		try {
			const handle = await window.showSaveFilePicker({
				suggestedName: filename,
				types: [
					{
						description: 'ZIP archive',
						accept: { 'application/zip': ['.zip'] },
					},
				],
			});
			const writable = await handle.createWritable();
			await writable.write(blob);
			await writable.close();
			return { url: null, method: 'file-picker' };
		} catch (err) {
			// User cancelled the picker — do not fall back automatically.
			if (err && (err.name === 'AbortError' || err.name === 'NotAllowedError')) {
				throw err;
			}
			console.info('showSaveFilePicker unavailable, using blob download');
		}
	}

	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	a.remove();
	// Keep Build locked until the download agent has taken the blob.
	// Revoke later so a "download again" link still works.
	await new Promise((resolve) => setTimeout(resolve, 2000));
	setTimeout(() => URL.revokeObjectURL(url), 10 * 60_000);
	return { url, method: 'blob' };
}

function showDownloadFallback(url, filename, doneLine, opts = {}) {
	stopBuildBanter();
	statusEl.replaceChildren();
	statusEl.classList.remove('is-error');
	statusEl.classList.remove('is-building-status');
	const wrap = document.createElement('div');
	wrap.className = 'build-done';
	if (doneLine) {
		const line = document.createElement('div');
		line.className = 'build-done-line';
		line.textContent = doneLine;
		wrap.append(line);
	}
	const row = document.createElement('div');
	row.className = 'build-done-row';
	if (opts.method === 'file-picker' || !url) {
		row.append('Saved as ');
		const code = document.createElement('code');
		code.textContent = filename;
		row.append(code);
		row.append('. Full pack list is in APPLIED.txt.');
	} else {
		row.append('Saved as ');
		const code = document.createElement('code');
		code.textContent = filename;
		row.append(code);
		row.append(' — ');
		const link = document.createElement('a');
		link.href = url;
		link.download = filename;
		link.textContent = 'download again';
		row.append(link);
		row.append(' if needed. Full pack list is in APPLIED.txt.');
	}
	wrap.append(row);
	statusEl.append(wrap);
}


function resolveUrl(baseUrl, maybeRelative) {
	if (!maybeRelative) return null;
	return new URL(maybeRelative, baseUrl).href;
}

async function fetchJson(url) {
	// Always revalidate catalogs/layers over the network (when not served from IDB).
	// Pack version bumps must not stick in the browser HTTP cache.
	const res = await fetch(url, { cache: 'no-store' });
	if (!res.ok) throw new Error('Failed to load ' + url + ' (' + res.status + ')');
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
	// Prefer per-disc map. Do not fall back to entry.url (often discs['1'])
	// when the pack has no layer for this disc.
	if (entry.discs && Object.keys(entry.discs).length) {
		return entry.discs[key] || null;
	}
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

/** Stable cache key piece: pack id@version (version bumps invalidate). */
function layerContentKey(entry) {
	if (!entry) return '';
	const id = String(entry.id || '').trim();
	const ver = String(entry.version || '').trim();
	if (id && ver) return id + '@' + ver;
	if (id) return id;
	return '';
}

function validateLayerPayload(layer, url) {
	if (!layer || layer.format !== 'ic-layer-v1') {
		throw new Error('Invalid layer at ' + url);
	}
	const records = Array.isArray(layer.records) ? layer.records : [];
	const changed = layer.stats?.changedBytes ?? records.length;
	if (records.length === 0 || changed === 0) {
		throw new Error(
			'Layer has no changes (' + url + '). Re-diff after the stub is actually in the .bin.'
		);
	}
	return layer;
}

/**
 * Load ic-layer-v1 JSON. Memory cache then IndexedDB then network.
 * Manifests stay uncached (always fetch). Hard reload keeps IDB hits.
 */
async function loadLayerByUrl(url, opts = {}) {
	if (!url) return null;
	const contentKey = String(opts.contentKey || '').trim();
	// IDB only when contentKey is set (pack id@version). Version bumps = new key.
	// Never cache by URL alone — avoids sticky stale layers if a path is reused.
	const memKey = contentKey ? contentKey + '\n' + url : 'net:' + url;

	if (layerCache.has(memKey)) return layerCache.get(memKey);

	if (contentKey) {
		const cached = await getCachedLayer(url, contentKey);
		if (cached && cached.layer) {
			try {
				const layer = validateLayerPayload(cached.layer, url);
				layerCache.set(memKey, layer);
				if (opts.onStatus) opts.onStatus('cache');
				return layer;
			} catch {
				// corrupt — refetch
			}
		}
	}

	if (opts.onStatus) opts.onStatus('fetch');
	const layer = validateLayerPayload(await fetchJson(url), url);
	layerCache.set(memKey, layer);
	if (contentKey) {
		void putCachedLayer(url, contentKey, layer);
	}
	return layer;
}

async function onClearLayerCache() {
	layerCache.clear();
	await clearLayerCache();
	setStatus('Dev: pack layer cache cleared.', false);
}

/** After manifests load: drop IDB rows for pack versions no longer listed. */
async function pruneStaleLayerCacheFromManifest(man) {
	if (!man) return;
	const keys = [];
	for (const b of man.bases || []) {
		const k = layerContentKey(b);
		if (k) keys.push(k);
	}
	for (const a of man.addons || []) {
		const k = layerContentKey(a);
		if (k) keys.push(k);
	}
	try {
		await pruneLayerCache(keys);
	} catch {
		// ignore
	}
}

function selectedBaseId() {
	const el = document.getElementById('base-select');
	return el && el.value ? el.value : 'clean';
}

function selectedAddonIds() {
	const ids = [];
	for (const input of document.querySelectorAll('input[name="addon"]:checked')) {
		// Master CSR+ toggle is not a real layer id.
		if (input.value === 'csr-plus-all') continue;
		ids.push(input.value);
	}
	for (const select of document.querySelectorAll('select[name="addon-group"]')) {
		if (select.value) ids.push(select.value);
	}
	if (isCsrPlusAllChecked()) {
		for (const id of csrPlusBundleIdsForDisc(selectedDisc())) {
			if (!ids.includes(id)) ids.push(id);
		}
	}
	return ids;
}

/** CSR+ pack addon ids from the csr-plus preset (all-or-none bundle). */
function csrPlusBundleIds() {
	if (!manifest) return [];
	const baseId = selectedBaseId();
	const preset = (manifest.presets || []).find(
		(p) => p.id === 'csr-plus' || (presetKind(p) === 'pack' && /csr\+?/i.test(p.name || ''))
	);
	let ids = [];
	if (preset && Array.isArray(preset.addons)) {
		ids = preset.addons.slice();
	} else {
		ids = (manifest.addons || [])
			.filter((a) => layerKind(a) === 'pack' && !a.uiHidden)
			.map((a) => a.id);
	}
	return ids.filter((id) => {
		const a = entryById(id);
		return a && addonCompatibleWithBase(a, baseId);
	});
}

/** Pack layers that apply to the loaded disc (or all if disc unknown). */
function csrPlusBundleIdsForDisc(disc) {
	return csrPlusBundleIds().filter((id) => {
		const a = entryById(id);
		if (!a) return false;
		if (disc == null) return true;
		return addonHasLayerForDisc(a, disc);
	});
}

function isCsrPlusAllChecked() {
	const el = document.getElementById('csr-plus-all');
	// Ignore disabled: build lock disables all controls but must not clear CSR+.
	return !!(el && el.checked);
}

function wasCsrPlusAllSelected(prevSelected) {
	if (prevSelected.has('csr-plus-all')) return true;
	// Disc builds only apply the pack layers for that disc — treat any
	// selected CSR+ pack as the master toggle staying on.
	const bundle = csrPlusBundleIds();
	return bundle.some((id) => prevSelected.has(id));
}

/** UI selection plus hidden packs matched by autoIncludeWhen (e.g. single-disc movies on CSR). */
function effectiveAddonIds() {
	const ids = selectedAddonIds();
	const baseId = selectedBaseId();
	const idSet = new Set(ids);
	for (const addon of manifest?.addons || []) {
		if (!addon.autoIncludeWhen) continue;
		if (idSet.has(addon.id)) continue;
		if (!addonCompatibleWithBase(addon, baseId)) continue;
		if (autoIncludeMatches(addon, baseId, ids)) {
			ids.push(addon.id);
			idSet.add(addon.id);
		}
	}
	return ids;
}

function autoIncludeMatches(addon, baseId, selectedIds) {
	const rule = addon.autoIncludeWhen;
	if (!rule || typeof rule !== 'object') return false;
	const bases = rule.bases;
	if (Array.isArray(bases) && bases.length && !bases.includes(baseId)) return false;
	const need = rule.addonSelected;
	if (need && !selectedIds.includes(need)) return false;
	const needAny = rule.addonSelectedAny;
	if (Array.isArray(needAny) && needAny.length && !needAny.some((id) => selectedIds.includes(id))) {
		return false;
	}
	const prefix = rule.unlessAddonIdPrefix;
	if (prefix) {
		// Any selected id with the prefix (CSR+ packs expanded from csr-plus-all).
		if (selectedIds.some((id) => String(id).startsWith(prefix))) return false;
		// CSR+ master toggle: suppress even if this disc has no pack layer in the list
		// (e.g. single-disc manip-movies must not stack with CSR+).
		if (prefix === 'csr-plus-scene-' && typeof isCsrPlusAllChecked === 'function' && isCsrPlusAllChecked()) {
			return false;
		}
	}
	const unlessIds = rule.unlessAddonIds;
	if (Array.isArray(unlessIds) && unlessIds.some((id) => selectedIds.includes(id))) return false;
	return true;
}

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
	// Same rule as apply: layerUrlFor does not fall back to discs['1'] when a
	// per-disc map exists, so disc-1-only packs stay false on disc 2/3.
	return Boolean(layerUrlFor(addon, disc));
}

function addonsForBase(baseId, kind = null) {
	if (!manifest) return [];
	// Only layers compatible with the selected base (hide the rest).
	// uiHidden/hidden packs stay out of the checklist (still may auto-apply).
	return (manifest.addons || []).filter((a) => {
		if (a.uiHidden || a.hidden) return false;
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
	if (kind === 'pack') return; // CSR+ is a mods checkbox
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
	select.setAttribute('aria-label', kind === 'pack' ? 'CSR+ trim preset' : 'Mod preset');
	const noneOpt = document.createElement('option');
	noneOpt.value = '';
	noneOpt.textContent = 'None';
	noneOpt.title = kind === 'pack' ? 'Choose trims yourself below.' : 'Choose mods yourself below.';
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
	// Packs UI removed — CSR+ is a single mods checkbox, not preset-driven.
	if (kind === 'pack') return;
	const listEl = modListEl;
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
	renderPresets('mod', opts);
}

function applyAllPresets(opts = {}) {
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
	return addons[0]?.exclusiveGroup || 'Option';
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
	// Already contains this version anywhere (e.g. "v0.1.0 (seed)").
	const verEsc = ver.replace(/\./g, '\\.');
	if (new RegExp('\\bv' + verEsc + '\\b', 'i').test(base)) return base;
	// Already has some vX.Y.Z
	if (/\bv\d+\.\d+\.\d+\b/i.test(base)) return base;
	return base + ' v' + ver;
}

function exclusiveOptionLabel(addon) {
	if (addon.optionLabel) {
		return String(addon.optionLabel);
	}
	const after = String(addon.name || '')
		.split('—')
		.slice(1)
		.join('—')
		.trim();
	const cleaned = after
		.replace(/\s*\(on [^)]+\)/gi, '')
		.replace(/\s+v[\d.]+$/i, '')
		.trim();
	return cleaned || String(addon.name || addon.id || '');
}

function freeAddonLabel(addon) {
	// Player-facing: use name as shipped. Do not append version meta.
	return String(addon.name || addon.id || '').trim();
}

/** True when pack is beta / buggy / lightly tested (manifest.beta or status). */
function isBetaAddon(addon) {
	if (!addon) return false;
	if (addon.beta === true) return true;
	const status = String(addon.status || '').toLowerCase();
	return status === 'beta' || status === 'experimental' || status === 'wip';
}

function betaTitleSuffix(addon) {
	if (!isBetaAddon(addon)) return '';
	const note = String(addon.betaNote || addon.blurb || '').trim();
	return note
		? 'BETA — unfinished or known issues. ' + note
		: 'BETA — unfinished or known issues; playtest at your own risk.';
}

/** Plain-text BETA marker for <option> / aria (no HTML in selects). */
function withBetaText(label, addon) {
	const base = String(label || '').trim();
	if (!isBetaAddon(addon)) return base;
	if (/\bBETA\b/i.test(base)) return base;
	return base ? base + ' · BETA' : 'BETA';
}

function updateAddonGroupTooltip(select) {
	if (!select) return;
	if (!select.value) {
		select.title = 'Do not change this.';
		return;
	}
	const addon = manifest?.addons.find((a) => a.id === select.value);
	const beta = betaTitleSuffix(addon);
	const blurb = addon?.blurb || '';
	select.title = [beta, blurb].filter(Boolean).join('\n') || '';
}

function renderAddonGroup(groupId, addons, prevSelected) {
	const wrap = document.createElement('div');
	wrap.className = 'addon-group';
	const disc = selectedDisc();
	const baseId = selectedBaseId();

	// Filter to only base-compatible addons for dropdown groups
	const baseCompatibleAddons = addons.filter(a => addonCompatibleWithBase(a, baseId));

	const title = exclusiveGroupTitle(addons);
	const groupBeta = baseCompatibleAddons.some(isBetaAddon) || addons.some(isBetaAddon);
	const selectId = `addon-group-${groupId}`;

	const label = document.createElement('label');
	label.className = 'addon-group-label';
	label.htmlFor = selectId;
	label.textContent = groupBeta ? withBetaText(title, { beta: true }) : title;

	const select = document.createElement('select');
	select.id = selectId;
	select.name = 'addon-group';
	select.dataset.group = groupId;
	select.setAttribute('aria-label', title);

	const off = document.createElement('option');
	off.value = '';
	off.textContent = 'None';
	off.title = 'Do not change this.';
	select.appendChild(off);

	const ids = new Set(baseCompatibleAddons.map((a) => a.id));
	for (const addon of baseCompatibleAddons) {
		const opt = document.createElement('option');
		opt.value = addon.id;
		opt.textContent = withBetaText(exclusiveOptionLabel(addon), addon);
		const beta = betaTitleSuffix(addon);
		opt.title = [beta, addon.blurb || ''].filter(Boolean).join('\n') || '';
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
	// Tooltip = what the mod does (blurb) + BETA note when flagged.
	const betaTip = betaTitleSuffix(addon);
	label.title = [betaTip, addon.blurb || addon.hint || ''].filter(Boolean).join('\n') || '';

	const displayName = freeAddonLabel(addon);
	const betaBadge = isBetaAddon(addon)
		? '<span class="addon-beta-badge" title="Unfinished or known issues">BETA</span>'
		: '';
	// Title + BETA in a flex row: spaced, not nested/clipped inside strong.
	label.innerHTML = `
		<input type="checkbox" name="addon" value="${addon.id}" ${checked} ${disabled} />
		<span><span class="choice-title"><span class="choice-title-text">${displayName}</span>${betaBadge}</span>${addon.hint ? `<span class="choice-hint">${addon.hint}</span>` : ''}</span>
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
	// Whole-game mods (e.g. Single-disc) show in the global list, not a disc column.
	if (addon && (addon.layout === 'global' || addon.uiScope === 'global')) return true;
	const id = String(addon && addon.id ? addon.id : '');
	if (id.startsWith('single-disc-on-') || id === 'single-disc') return true;
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
	const modsEl = document.getElementById('explainer-mods');
	const baseEl = document.getElementById('explainer-base');
	if (baseEl) {
		baseEl.textContent =
			manifest.explainer?.base ||
			'Base experience — only one applies (Unmodified, CSR, Highwind, …).';
	}
	const isCsr = String(baseId || '').startsWith('csr-') || baseId === 'csr';
	if (modsEl) {
		if (isCsr) {
			modsEl.textContent =
				'Optional mods on this base. CSR+ is all-or-none (every scene trim for the disc, or none).';
		} else {
			modsEl.textContent =
				manifest.explainer?.mods ||
				'Optional mods. Some are base-specific; CSR+ requires the CSR base.';
		}
	}
}


/** One CSR+ checkbox: all scene trims for the loaded disc, or none. */
function renderCsrPlusToggle(prevSelected) {
	const baseId = selectedBaseId();
	const disc = selectedDisc();
	const bundle = csrPlusBundleIds();
	if (!bundle.length) return null;

	const baseOk = bundle.some((id) => {
		const a = entryById(id);
		return a && addonCompatibleWithBase(a, baseId);
	});
	const discIds = csrPlusBundleIdsForDisc(disc);
	const discOk = disc == null || discIds.length > 0;
	const compatible = baseOk && discOk;

	const checked = wasCsrPlusAllSelected(prevSelected) && compatible;
	const label = document.createElement('label');
	label.className = 'choice';
	if (!compatible) label.classList.add('is-disabled');
	// Tooltip always lists the full CSR+ pack set (every disc). Apply still
	// only uses packs that have a layer for the loaded disc.
	const tipNames = bundle
		.map((id) => entryById(id))
		.filter(Boolean)
		.map((a) => {
			const discs = a.discs && Object.keys(a.discs).length
				? Object.keys(a.discs).sort().join('/')
				: '?';
			return freeAddonLabel(a) + ' (D' + discs + ')';
		});
	label.title = tipNames.length
		? 'CSR+ (all-or-none) — applied per disc when building each image:\n' +
			tipNames.join('\n')
		: 'All optional CSR+ cutscene trims on CSR. All-or-none.';
	const input = document.createElement('input');
	input.type = 'checkbox';
	input.name = 'addon';
	input.id = 'csr-plus-all';
	input.value = 'csr-plus-all';
	input.checked = checked;
	input.disabled = !compatible;
	const span = document.createElement('span');
	const titleRow = document.createElement('span');
	titleRow.className = 'choice-title';
	const titleText = document.createElement('span');
	titleText.className = 'choice-title-text';
	titleText.textContent = 'CSR+';
	titleRow.appendChild(titleText);
	const csrPlusBeta = bundle
		.map((id) => entryById(id))
		.filter(Boolean)
		.some(isBetaAddon);
	if (csrPlusBeta) {
		const badge = document.createElement('span');
		badge.className = 'addon-beta-badge';
		badge.title = 'Unfinished or known issues';
		badge.textContent = 'BETA';
		titleRow.appendChild(badge);
	}
	span.appendChild(titleRow);
	const hint = document.createElement('span');
	hint.className = 'choice-hint';
	if (!baseOk) {
		hint.textContent = 'Requires CSR. Turns every listed scene trim on for this disc.';
	} else if (disc != null && !discIds.length) {
		hint.textContent = 'No extra scene trims on this disc.';
	} else {
		hint.textContent = 'Every listed scene trim for this disc, or none.';
	}
	span.appendChild(hint);
	label.appendChild(input);
	label.appendChild(span);
	return label;
}

function renderLayerList(kind) {
	// Packs are no longer a separate section — CSR+ is one checkbox under mods.
	if (kind === 'pack') return;
	const listEl = modListEl;
	if (!manifest || !listEl) return;
	const baseId = selectedBaseId();
	const prevSelected = new Set(selectedAddonIds());
	if (isCsrPlusAllChecked()) prevSelected.add('csr-plus-all');

	const visible = addonsForBase(baseId, 'mod');
	const { allDisc, byDisc } = partitionAddonsByDisc(visible);
	listEl.innerHTML = '';

	const csrToggle = renderCsrPlusToggle(prevSelected);
	const hasMods =
		allDisc.groupIds.length > 0 ||
		allDisc.free.length > 0 ||
		[1, 2, 3].some((d) => byDisc[d].groupIds.length > 0 || byDisc[d].free.length > 0);

	if (!csrToggle && !hasMods) {
		const empty = document.createElement('p');
		empty.className = 'explainer';
		empty.style.marginBottom = '0';
		empty.textContent = 'No mods for this base yet.';
		listEl.appendChild(empty);
		return;
	}

	const allSection = document.createElement('div');
	allSection.className = 'addon-section addon-section-all';
	const allBody = document.createElement('div');
	allBody.className = 'addon-all-grid';
	if (csrToggle) allBody.appendChild(csrToggle);
	appendAddonBucket(allBody, allDisc, prevSelected);
	if (allBody.childNodes.length) {
		allSection.appendChild(allBody);
		listEl.appendChild(allSection);
	}

	const hasDiscCols = [1, 2, 3].some(
		(d) => byDisc[d].groupIds.length > 0 || byDisc[d].free.length > 0
	);
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
				head.innerHTML =
					'Disc ' + disc + ' <span class="addon-disc-badge">loaded</span>';
			} else if (loadedDisc) {
				head.innerHTML =
					'Disc ' +
					disc +
					' <span class="addon-disc-badge is-muted">not loaded</span>';
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
	renderLayerList('mod');
}

function setSectionLocked(panel, locked) {
	if (!panel) return;
	panel.classList.toggle('is-locked', locked);
	for (const control of panel.querySelectorAll('select, input, button, textarea')) {
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
	// file input lives inside a label.file-btn; dim that while locked
	for (const lab of panel.querySelectorAll('label.file-btn')) {
		lab.classList.toggle('is-locked-control', locked);
	}
}

/** Freeze base/mods/source while a zip is building so selections cannot change mid-run. */
function setUiBuilding(isBuilding) {
	document.body.classList.toggle('is-building', isBuilding);
	// When building, lock everything interactive. When not, updatePlan restores
	// normal lock rules (no disc yet vs ready).
	if (isBuilding) {
		setSectionLocked(panelSourceEl, true);
		setSectionLocked(panelBaseEl, true);
		setSectionLocked(panelModsEl, true);
		setSectionLocked(panelBuildEl, true);
	}
}

function updatePlan() {
	if (!manifest) return;
	const disc = selectedDisc();
	if (building) {
		setUiBuilding(true);
	} else {
		setSectionLocked(panelSourceEl, false);
		setSectionLocked(panelBaseEl, !disc);
		setSectionLocked(panelModsEl, !disc);
		// Build panel stays interactive when a disc is loaded (button has own disabled).
		setSectionLocked(panelBuildEl, !disc);
		// Re-apply button disabled after unlocking the build panel.
	}
	const baseId = selectedBaseId();
	const base = manifest.bases.find((b) => b.id === baseId);
	const selected = effectiveAddonIds()
		.map((id) => entryById(id))
		.filter(Boolean)
		.filter((a) => !disc || addonHasLayerForDisc(a, disc));
	const packs = selected.filter((a) => layerKind(a) === 'pack');
	const mods = selected.filter((a) => layerKind(a) === 'mod');
	const steps = [];
	steps.push(sourceBytes ? 'Input: ' + sourceBytes.length + ' bytes' : 'Input: (none yet)');
	steps.push(disc ? 'Disc: ' + disc + ' (auto)' : 'Disc: (not detected)');
	steps.push('Base Experience: ' + (base ? base.name : baseId));
	steps.push(packs.length ? 'CSR+: on' : 'CSR+: off');
	if (mods.length) {
		mods.forEach((a, i) => steps.push('Mod ' + (i + 1) + ': ' + freeAddonLabel(a)));
	} else {
		steps.push('Mods: (none)');
	}
	steps.push('Output: .zip (.bin + .cue + APPLIED.txt)');
	planEl.textContent = steps.join('\n');

	applyBtn.disabled = building || !(sourceBytes && disc);
	applyBtn.classList.toggle('is-busy', building);
}


function renderManifest() {
	baseListEl.innerHTML = '';
	if (modPresetListEl) modPresetListEl.innerHTML = '';
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
		if (t.id === 'mod-preset-select') {
			applyActivePresetToAddons('mod', { clearManagedIfNone: true });
			updatePlan();
		}
	};
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



	/** Stable stack order for layer merge (not UI order). */
	function addonApplyRank(entry) {
		const id = String(entry && entry.id ? entry.id : '');
		// 1) Single-disc core (grows D1 / merges multi-disc fields)
		if (id.startsWith('single-disc-on-')) return 10;
		// 2) Single-disc helpers that assume SD core (movies, endings)
		if (id.includes('single-disc-csr-manip-movies')) return 20;
		if (id.includes('single-disc-endings')) return 30;
		// 3) Gameplay mods
		if (id.includes('fanfare') || id.includes('encounter')) return 40;
		// 4) CSR+ scene packs last (disc1 layers expect CSR+single-disc baseline)
		if (id.startsWith('csr-plus-scene-') || id.startsWith('csr-plus-')) return 50;
		return 45;
	}

	function sortAddonsForApply(entries) {
		return entries.slice().sort((a, b) => {
			const ra = addonApplyRank(a);
			const rb = addonApplyRank(b);
			if (ra !== rb) return ra - rb;
			return String(a.id || '').localeCompare(String(b.id || ''));
		});
	}

async function applySelection() {
	if (building || !sourceBytes || !manifest) return;
	const disc = selectedDisc();
	if (!disc) {
		setStatus('Load an NTSC-U FF7 .bin so the disc can be detected.', true);
		return;
	}

	// Snapshot stack before locking UI. Locking disables inputs; CSR+/selection
	// must be read while controls still reflect the user's choices.
	const baseId = selectedBaseId();
	const base = manifest.bases.find((b) => b.id === baseId);
	const addonIdSnapshot = effectiveAddonIds().slice();
	// Only packs that have a layer for the loaded disc.
	// CSR+ all-or-none = every scene that applies here, not every pack id.
	const addonEntries = addonIdSnapshot
		.map((id) => manifest.addons.find((a) => a.id === id))
		.filter(Boolean)
		.filter((a) => addonHasLayerForDisc(a, disc));

	building = true;
	setUiBuilding(true);
	updatePlan();
	resetBanterSession();
	setBuildStatus('start', 'Preparing your one-disc destiny…');
	await yieldToUi();

	try {

		const orderedAddons = sortAddonsForApply(addonEntries);
		for (const entry of orderedAddons) {
			if (!addonCompatibleWithBase(entry, baseId)) {
				throw new Error(
					`${entry.name} is not available for ${base?.name || baseId}.`
				);
			}
		}

		const layers = [];
		const baseUrl = layerUrlFor(base, disc);
		if (baseUrl) {
			let from = 'fetch';
			setBuildStatus('base', 'Loading base experience…');
			await yieldToUi();
			layers.push(
				await loadLayerByUrl(baseUrl, {
					contentKey: layerContentKey(base),
					onStatus: (s) => {
						from = s;
					},
				})
			);
			if (from === 'cache') {
				setBuildStatus('base', 'Base experience (cached)…');
				await yieldToUi();
			}
		}
		for (const entry of orderedAddons) {
			const url = layerUrlFor(entry, disc);
			if (!url) {
				continue;
			}
			const label = freeAddonLabel(entry);
			let from = 'fetch';
			setBuildStatus('addon', 'Loading ' + label + '…');
			await yieldToUi();
			layers.push(
				await loadLayerByUrl(url, {
					contentKey: layerContentKey(entry),
					onStatus: (s) => {
						from = s;
					},
				})
			);
			if (from === 'cache') {
				setBuildStatus('addon', label + ' (cached)…');
				await yieldToUi();
			}
		}

		setBuildStatus('apply', 'Merging everything onto your disc image…');
		await yieldToUi();
		// Chunked async apply — large single-disc/CSR+ layers can be 90k+ records.
		// Yields inside applyLayers so the tab stays responsive (no end-event wait).
		const out = await applyLayers(sourceBytes, layers, {
			onLayer: (index, total) => {
				setBuildStatus(
					'apply',
					'Merging layer ' + (index + 1) + ' of ' + total + '…',
				);
			},
		});
		await yieldToUi();

		setBuildStatus('repair', 'Patching disc error codes so burns stay honest…');
		await yieldToUi();
		// Full-image EDC scan is the long pole (~300k sectors). Yields inside.
		const edcStats = await repairMode2EdcInImage(sourceBytes, out, {
			onProgress: (done, total) => {
				if (done === total || done % 16384 === 0) {
					const pct = total ? Math.floor((100 * done) / total) : 0;
					setBuildStatus(
						'repair',
						'Patching disc error codes… ' + pct + '%',
					);
				}
			},
		});
		console.info('EDC repair', edcStats);

		const { binName, cueName, zipName, appliedName } = buildOutputNames(
			disc,
			baseId,
			orderedAddons
		);

		const appliedText = buildAppliedReport({
			disc,
			base,
			baseId,
			addons: orderedAddons,
			edcFixed: edcStats.fixed,
			outputZip: zipName,
		});

		setBuildStatus('zip', 'Packing .bin + .cue — large file, hang tight…');
		await yieldToUi();
		const zipBytes = await zipStore([
			{ name: binName, data: out },
			{ name: cueName, data: new TextEncoder().encode(buildCue(binName)) },
			{ name: appliedName, data: new TextEncoder().encode(appliedText) },
		]);

		// Download starts immediately after zip — no event wait / loop.
		// Refresh mid-build aborts the job; it does not queue a delayed download.
		// Keep Build locked until the zip is actually saved (or hand-off finishes).
		setBuildStatus('zip', 'Saving zip — keep this tab open…');
		await yieldToUi();
		const zipBlob = new Blob([zipBytes], { type: 'application/zip' });
		const saved = await saveZipDownload(zipBlob, zipName);
		showDownloadFallback(saved.url, zipName, pickBanter('done'), {
			method: saved.method,
		});

	} catch (err) {
		console.error(err);
		if (err && (err.name === 'AbortError' || err.name === 'NotAllowedError')) {
			setStatus(
				'Save cancelled — Build is ready; click Build zip again when you want the file.',
				true,
			);
		} else {
			setStatus(err.message || String(err), true);
		}
	} finally {
		// Unlock only after save completes (or errors / cancel).
		stopBuildBanter();
		building = false;
		setUiBuilding(false);
		updatePlan();
	}
}

function buildAppliedReport({ disc, base, baseId, addons, edcFixed, outputZip }) {
	const baseName = !base || baseId === 'clean' || !layerUrlFor(base, disc)
		? 'Unmodified (retail)'
		: withAddonVersion(base.name || baseId, base);

	// Only list what applies to this disc image.
	const applied = (addons || []).filter((a) => addonHasLayerForDisc(a, disc));

	const lines = [
		'Final Fantasy VII — IndividualContributor',
		'',
		'Disc: ' + disc + ' (layers for this disc only)',
		'Base: ' + baseName,
	];
	if (outputZip) lines.push('Download: ' + outputZip);

	const packs = applied.filter((a) => layerKind(a) === 'pack');
	const mods = applied.filter((a) => layerKind(a) === 'mod');
	if (packs.length) {
		lines.push('CSR+ on this disc (' + packs.length + ' scene layer(s)):');
		for (const addon of packs) {
			const discs = addonDiscKeys(addon).join(',') || String(disc);
			const label = withAddonVersion(freeAddonLabel(addon), addon);
			const idNote = addon.id ? ' (' + addon.id + ')' : '';
			lines.push('  - ' + label + idNote + ' [disc ' + discs + ']');
		}
	} else {
		lines.push('CSR+: off (or no CSR+ layer for this disc)');
	}
	if (mods.length) {
		lines.push('Mods on this disc:');
		for (const addon of mods) {
			const discs = addonDiscKeys(addon).join(',') || String(disc);
			const discNote =
				discs && discs !== String(disc) ? ' [discs ' + discs + ']' : '';
			const label = withAddonVersion(freeAddonLabel(addon), addon);
			const idNote = addon.id ? ' (' + addon.id + ')' : '';
			lines.push('  - ' + label + idNote + discNote);
		}
	} else {
		lines.push('Mods: none');
	}

	if (edcFixed != null) {
		lines.push('EDC/ECC sectors repaired: ' + edcFixed);
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
		// Drop cached layers for removed/old pack versions (manifest always fresh).
		void pruneStaleLayerCacheFromManifest(manifest);
		document.getElementById('page-title').textContent = manifest.title || 'PSX Disc Builder';
		renderManifest();

		const expectedRemotes = (manifest.remoteSources || []).length;
		const remotesOk = manifest._remotesOk || 0;
		if (loadBannerEl) {
			if (remotesOk === 0 && expectedRemotes > 0) {
				loadBannerEl.hidden = false;
				loadBannerEl.textContent =
					'Could not load CSR / Modding catalogs. Check your connection and try again.';
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
		const clearCacheBtn = document.getElementById('clear-layer-cache');
		if (clearCacheBtn) {
			clearCacheBtn.addEventListener('click', () => {
				if (building) return;
				onClearLayerCache().catch((err) =>
					setStatus(err.message || String(err), true)
				);
			});
		}

		setStatus('Choose an NTSC-U .bin, then pick base and mods.');
	} catch (err) {
		setStatus(err.message || String(err), true);
	}
}

init();

/**
 * Latest git commits for builder UI + pack manifests (GitHub API).
 * Same idea as the old builder/ line — one line per remote source.
 */
async function fetchLatestCommit(repo, path) {
	const api =
		'https://api.github.com/repos/' +
		repo +
		'/commits?path=' +
		encodeURIComponent(path) +
		'&per_page=1';
	const res = await fetch(api, {
		headers: { Accept: 'application/vnd.github+json' },
	});
	if (!res.ok) throw new Error(repo + ' HTTP ' + res.status);
	const rows = await res.json();
	const commit = rows && rows[0];
	if (!commit || !commit.sha) throw new Error(repo + ' empty');
	const sha = String(commit.sha).slice(0, 7);
	const when =
		commit.commit && commit.commit.committer && commit.commit.committer.date
			? String(commit.commit.committer.date).slice(0, 10)
			: '';
	const msgRaw =
		commit.commit && commit.commit.message ? String(commit.commit.message) : '';
	const msg = msgRaw.split('\n')[0].slice(0, 80);
	const url =
		commit.html_url || 'https://github.com/' + repo + '/commit/' + commit.sha;
	return { sha, when, msg, url };
}

function appendRevisionLink(el, label, info) {
	const a = document.createElement('a');
	a.href = info.url;
	a.target = '_blank';
	a.rel = 'noreferrer';
	a.textContent = label + ' ' + info.sha + (info.when ? ' · ' + info.when : '');
	if (info.msg) a.title = info.msg;
	el.appendChild(a);
}

function appendRevisionUnavailable(el, label) {
	const span = document.createElement('span');
	span.className = 'builder-revision-miss';
	span.textContent = label + ' (unavailable)';
	el.appendChild(span);
}

async function loadBuilderRevision() {
	const el = document.getElementById('builder-revision');
	if (!el) return;

	const sources = [
		{
			label: 'builder',
			repo: 'individualcontributordev/individualcontributordev.github.io',
			path: 'builder',
		},
		{
			label: 'csr',
			repo: 'individualcontributordev/Final-Fantasy-7-CSR',
			path: 'builder/manifest.json',
		},
		{
			label: 'mods',
			repo: 'individualcontributordev/Final-Fantasy-7-Modding',
			path: 'builder/manifest.json',
		},
	];

	el.textContent = '';
	let any = false;
	for (let i = 0; i < sources.length; i++) {
		const src = sources[i];
		if (i > 0) {
			el.appendChild(document.createTextNode(' · '));
		}
		try {
			const info = await fetchLatestCommit(src.repo, src.path);
			appendRevisionLink(el, src.label, info);
			any = true;
		} catch (err) {
			console.warn('revision', src.label, err);
			appendRevisionUnavailable(el, src.label);
		}
	}
	if (!any) {
		el.textContent = 'revisions unavailable';
		el.removeAttribute('title');
	}
}
loadBuilderRevision();
