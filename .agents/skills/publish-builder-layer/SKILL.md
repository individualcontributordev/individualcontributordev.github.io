# Skill: Publish Builder Layer

**Purpose:** Add or update layer packs in the builder without breaking production.

**Read first:** `.agents/rules/builder-layer-format.mdc`

## When to Use

- Publishing new mod/pack to builder
- Updating existing layer content
- Fixing broken layers
- Version bumps

## Prerequisites

1. Layer file already generated in source repo (CSR or Modding)
2. Layer passes validation (format, records, stats)
3. Layer tested against target base

## Step-by-Step Workflow

### 1. Source Layer Creation (in CSR or Modding repo)

**Location:** 
- CSR repo: `Final-Fantasy-7-CSR/builder/<pack-id>/`
- Modding repo: `Final-Fantasy-7-Modding/builder/<pack-id>/`

**Files needed:**
```
builder/<pack-id>/
  pack.json          # Metadata
  layers/
    disc1.layer.json # Layer for disc 1
    disc2.layer.json # Layer for disc 2 (if needed)
```

**Validation:**
```bash
# Check layer format
python3 -c "
import json
layer = json.load(open('builder/<pack-id>/layers/disc1.layer.json'))
assert layer.get('format') == 'ic-layer-v1', 'Missing format field'
assert len(layer.get('records', [])) > 0, 'Empty records'
assert layer.get('stats', {}).get('changedBytes', 0) > 0, 'Zero changedBytes'
print('✅ Layer format valid')
"
```

### 2. Manifest Update (in source repo)

**CSR:** `Final-Fantasy-7-CSR/builder/manifest.json`
**Modding:** `Final-Fantasy-7-Modding/builder/manifest.json`

Add pack entry:
```json
{
  "id": "my-new-mod",
  "version": "0.1.0",
  "name": "My New Mod",
  "kind": "mod",
  "blurb": "Short description.",
  "format": "ic-layer-v1",
  "compatibleBases": ["csr-v0.14.1"],
  "layout": "global",
  "discs": {
    "1": "./my-new-mod/layers/disc1.layer.json"
  },
  "enabled": true
}
```

**CRITICAL:** If updating existing pack, **MUST bump version**:
- Old: `"version": "0.1.5"`
- New: `"version": "0.1.6"`

Version bump invalidates browser cache. Without it, users get stale layer!

### 3. Commit Source Changes

```bash
cd Final-Fantasy-7-Modding  # or Final-Fantasy-7-CSR
git add builder/<pack-id>/ builder/manifest.json
git commit --author="individualcontributordev <contributorindividual@gmail.com>" \
  -m "<pack-id> v<version>: <description>

- Layer content changes
- Manifest update
- Compatible with <bases>"
git push origin main
```

### 4. Wait for GitHub Pages (source repo)

- CDN propagation: ~5 minutes
- URLs become available:
  - CSR: `https://individualcontributordev.github.io/Final-Fantasy-7-CSR/builder/manifest.json`
  - Modding: `https://individualcontributordev.github.io/Final-Fantasy-7-Modding/builder/manifest.json`

### 5. Test Remote Manifest

```bash
# CSR
curl -s "https://individualcontributordev.github.io/Final-Fantasy-7-CSR/builder/manifest.json" \
  | python3 -c "import json, sys; m=json.load(sys.stdin); print([b['id'] for b in m.get('bases',[])])"

# Modding  
curl -s "https://individualcontributordev.github.io/Final-Fantasy-7-Modding/builder/manifest.json" \
  | python3 -c "import json, sys; m=json.load(sys.stdin); print([a['id'] for a in m.get('addons',[])])"
```

### 6. Builder Homepage Test

**URL:** https://individualcontributor.dev/builder/

**Steps:**
1. Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
2. Optional: Clear site data (DevTools → Application → Clear site data)
3. Check that new/updated pack appears in UI
4. Select base + pack
5. Click "Build ZIP"
6. Verify build succeeds

**Common issues:**
- Pack doesn't appear → CDN not ready, wait 5 more minutes
- "Invalid layer" error → Check layer format (`.agents/rules/builder-layer-format.mdc`)
- "Re-diff" error → Stale cache, version not bumped
- "No changes" error → Empty layer (records or changedBytes = 0)

### 7. Document in CHANGELOG

**CSR:** `Final-Fantasy-7-CSR/CHANGELOG.md`
**Modding:** `Final-Fantasy-7-Modding/mods/<name>/CHANGELOG.md`

Format (newest first):
```markdown
## v0.1.6 (YYYY-MM-DD)

- Feature or fix description
- Technical details
- Compatibility notes
```

## Version Bump Rules

**MUST bump version when:**
- ✅ Layer file content changes (any record added/removed/modified)
- ✅ Layer stats change (bytes, record count)
- ✅ Fixing broken layer format

**Optional version bump:**
- Metadata-only changes (name, blurb, hint)
- pack.json changes that don't affect layer
- Typo fixes in descriptions

**Why:** Browser caches layers by `id@version`. Same version = stale cache served.

## Rollback Procedure

If new version breaks builder:

1. Revert manifest version to last known good:
   ```json
   "version": "0.1.5"  // from "0.1.6"
   ```

2. Commit and push revert

3. Fix layer in new version (0.1.7):
   - Fix layer format
   - Bump to 0.1.7 (skip 0.1.6)
   - Test thoroughly
   - Push

## Common Pitfalls

❌ **Updating layer without version bump** → stale cache
❌ **Using `"version": "ic-layer-v1"`** instead of `"format"` → validation fails  
❌ **Empty records array** → "No changes" error
❌ **Using path/data format** → "Invalid layer" error
❌ **Forgetting to commit source repo** → builder references non-existent file
❌ **Testing before CDN ready** → false negatives

## Success Checklist

- [ ] Layer file has `"format": "ic-layer-v1"`
- [ ] Layer has `records.length > 0` and `changedBytes > 0`
- [ ] Records use `offset` + `hex` (not `path` + `data`)
- [ ] Version bumped in manifest if layer changed
- [ ] Committed and pushed to source repo (CSR or Modding)
- [ ] Waited 5+ minutes for CDN
- [ ] Hard refreshed builder
- [ ] Tested build in browser
- [ ] Updated CHANGELOG
