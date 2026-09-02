# individualcontributor.dev

Homepage and the in-browser [PSX Disc Builder](https://individualcontributor.dev/builder/).
Cutscene **bases** live in [Final-Fantasy-7-CSR](https://github.com/individualcontributordev/Final-Fantasy-7-CSR).
Stackable **mods** live in [Final-Fantasy-7-Modding](https://github.com/individualcontributordev/Final-Fantasy-7-Modding).

## Local preview

From this repo root:

```bash
python3 -m http.server 8777
```

Open `http://localhost:8777/builder/`. Remote manifests still load from production Pages, so a local UI change is visible immediately; unpublished CSR/Modding layers are not.

## Catalog the builder reads

`builder/manifest.json` lists `remoteSources`. Those URLs **must** be `https://individualcontributor.dev/…` (custom domain), not `*.github.io`, or the browser treats them as cross-origin.

Details: [`builder/CONFIGURATION.md`](builder/CONFIGURATION.md).

## Publish

Push `main`. GitHub Pages serves this repo at the custom domain. CSR and Modding publish their own `builder/` trees independently.

Commit as `individualcontributordev <contributorindividual@gmail.com>` (SSH host alias `github.com-individualcontributordev`).
