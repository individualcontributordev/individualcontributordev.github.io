# Builder catalog and CORS

The UI in this folder merges three JSON catalogs at page load:

1. This file’s `builder/manifest.json` — Unmodified base + `remoteSources`
2. CSR Pages — exclusive bases (CSR, CSR+, Highwind)
3. Modding Pages — stackable add-ons

```text
https://individualcontributor.dev/builder/manifest.json
https://individualcontributor.dev/Final-Fantasy-7-CSR/builder/manifest.json
https://individualcontributor.dev/Final-Fantasy-7-Modding/builder/manifest.json
```

Always use those custom-domain URLs. Fetches from `individualcontributor.dev/builder/` to `individualcontributor.dev/<repo>/…` are same-origin. `*.github.io` URLs from this origin trip CORS.

CSR and Modding `index.html` files only redirect browsers to `/builder/`. They do not affect `fetch` of `builder/manifest.json`.

Check:

```bash
curl -sL https://individualcontributor.dev/builder/manifest.json | grep remoteSources -A4
curl -I https://individualcontributor.dev/Final-Fantasy-7-CSR/builder/manifest.json | grep -Ei 'HTTP|access-control'
curl -I https://individualcontributor.dev/Final-Fantasy-7-Modding/builder/manifest.json | grep -Ei 'HTTP|access-control'
```
