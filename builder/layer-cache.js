/**
 * Persistent layer JSON cache (IndexedDB). Survives hard reload.
 * Keyed by URL + optional content key (pack id@version).
 * Manifests are never stored here — always fetch those fresh.
 */

const DB_NAME = 'ic-builder-layer-cache';
const DB_VER = 1;
const STORE = 'layers';
/** Soft cap: drop oldest when over this many entries. */
const MAX_ENTRIES = 48;

/**
 * @param {string} url
 * @param {string} [contentKey]
 */
export function cacheKey(url, contentKey) {
	const u = String(url || '');
	const c = String(contentKey || '').trim();
	return c ? c + '\n' + u : u;
}

function openDb() {
	return new Promise((resolve, reject) => {
		if (typeof indexedDB === 'undefined') {
			reject(new Error('indexedDB unavailable'));
			return;
		}
		const req = indexedDB.open(DB_NAME, DB_VER);
		req.onerror = () => reject(req.error || new Error('idb open failed'));
		req.onsuccess = () => resolve(req.result);
		req.onupgradeneeded = () => {
			const db = req.result;
			if (!db.objectStoreNames.contains(STORE)) {
				const os = db.createObjectStore(STORE, { keyPath: 'key' });
				os.createIndex('byAt', 'at', { unique: false });
			}
		};
	});
}

function idbReq(req) {
	return new Promise((resolve, reject) => {
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error || new Error('idb request failed'));
	});
}

/**
 * @returns {Promise<{ layer: object, key: string } | null>}
 */
export async function getCachedLayer(url, contentKey) {
	const key = cacheKey(url, contentKey);
	try {
		const db = await openDb();
		const tx = db.transaction(STORE, 'readonly');
		const row = await idbReq(tx.objectStore(STORE).get(key));
		db.close();
		if (!row || !row.layer || row.layer.format !== 'ic-layer-v1') return null;
		return { layer: row.layer, key };
	} catch {
		return null;
	}
}

/**
 * @param {string} url
 * @param {string} [contentKey]
 * @param {object} layer
 */
export async function putCachedLayer(url, contentKey, layer) {
	const key = cacheKey(url, contentKey);
	try {
		const db = await openDb();
		const tx = db.transaction(STORE, 'readwrite');
		const store = tx.objectStore(STORE);
		await idbReq(
			store.put({
				key,
				url: String(url || ''),
				contentKey: String(contentKey || ''),
				layer,
				at: Date.now(),
			})
		);
		// LRU trim (best-effort)
		const all = await idbReq(store.index('byAt').getAllKeys());
		if (Array.isArray(all) && all.length > MAX_ENTRIES) {
			const drop = all.slice(0, all.length - MAX_ENTRIES);
			for (const k of drop) await idbReq(store.delete(k));
		}
		await new Promise((resolve, reject) => {
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error);
		});
		db.close();
	} catch {
		// ignore quota / private mode
	}
}

/** @returns {Promise<{ entries: number }>} */
export async function clearLayerCache() {
	try {
		const db = await openDb();
		const tx = db.transaction(STORE, 'readwrite');
		await idbReq(tx.objectStore(STORE).clear());
		await new Promise((resolve, reject) => {
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error);
		});
		db.close();
	} catch {
		// ignore
	}
	return { entries: 0 };
}

/** @returns {Promise<{ entries: number, bytesEstimate: number }>} */
export async function layerCacheStats() {
	try {
		const db = await openDb();
		const tx = db.transaction(STORE, 'readonly');
		const rows = await idbReq(tx.objectStore(STORE).getAll());
		db.close();
		const list = Array.isArray(rows) ? rows : [];
		// rough JSON size
		let bytes = 0;
		for (const r of list) {
			try {
				bytes += JSON.stringify(r.layer).length;
			} catch {
				/* skip */
			}
		}
		return { entries: list.length, bytesEstimate: bytes };
	} catch {
		return { entries: 0, bytesEstimate: 0 };
	}
}
