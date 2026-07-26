# Disc builder prototype

Local URL (after deploy): https://individualcontributor.dev/builder/

Existing CSR / Modding patcher pages are untouched. This page proves **on-the-fly stacking** with `ic-layer-v1`.

## Try it

1. Open `/builder/`
2. Click **Use demo sample.bin**
3. Pick base Alpha or Beta (radio)
4. Tick Speed and/or Color (checkboxes)
5. **Build .bin + .cue** — both download

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

Later: set `remoteSources` to CSR / Modding manifest URLs; the UI can merge them without cloning those repos into this one.

## What you prebuild (real mods)

| Kind | Ship as | Tooling |
|------|---------|---------|
| CSR-style base | file-pack or byte records vs pristine | Makou + CDmage diff |
| Encounter addon | byte records or `FIELD.BIN` replace | Ghidra + scripts |
| Full-disc PPF | optional single-flavor download only | `make_ppf.py` — not for stacking |

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
