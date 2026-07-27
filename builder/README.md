# Disc builder prototype

Local URL (after deploy): https://individualcontributor.dev/builder/

This page applies **on-the-fly stacking** with `ic-layer-v1` from CSR and Modding manifests
(hosted under each repo’s Pages `/builder/` path). Player UI lives only here; CSR/Modding GitHub
repos hold source and research.

## Try it

1. Open `/builder/`
2. Click **Use demo sample.bin**
3. Pick base Alpha or Beta (radio)
4. Tick Speed and/or Color (checkboxes)
5. **Build zip** — downloads one `.zip` with `.bin`, `.cue`, and `APPLIED.txt`

Verify stacking: Alpha + Speed + Color should contain ASCII `BASEA` @ 16, `SPEED` @ 32, `COLOR` @ 48.

## Layer format (`ic-layer-v1`)

```json
{
  "format": "ic-layer-v1",
  "id": "my-mod",
  "description": "…",
  "target": "disc-image",
  "records": [
    { "offset": 1234, "hex": "DEADBEEF" }
  ]
}
```

- `offset` — byte offset into the `.bin`
- `hex` — even-length hex string (whitespace ignored)
- Prototype target: `disc-image` only (ISO file-replace comes later)

## Manifest

`manifest.json` lists bases (radio / exclusive) and add-ons (checkboxes). Each entry points at a layer URL.

Later: set `remoteSources` to CSR / Modding manifest URLs (already wired). Packs with
`"enabled": false` are ignored until you generate layers on Windows and flip the flag.


## What you prebuild (real mods)

| Kind | Ship as | Tooling |
|------|---------|---------|
| CSR-style base | byte records vs pristine | Makou + layer diff |
| Encounter addon | byte records vs base | Ghidra + `build_encounter_on_base.py` |

## Files

```
builder/
  index.html
  builder.js
  builder.css
  layer.js
  manifest.json
  demo/
    sample.bin
    bases/*.layer.json
    addons/*.layer.json
```
