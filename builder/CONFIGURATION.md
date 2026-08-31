# Builder Configuration — Working State

**Last verified:** 2026-08-17  
**Status:** ✅ Working without CORS errors

## Current Configuration

### Repository Structure

```
individualcontributordev.github.io/       User site (custom domain)
├── CNAME                                 "individualcontributor.dev"
├── builder/
│   ├── index.html                        Builder UI
│   ├── manifest.json                     Local + remote source config
│   └── *.js                              Builder implementation
└── ...

Final-Fantasy-7-CSR/                      Project site (manifests via CDN)
├── index.html                            Redirect to builder (safe)
└── builder/
    ├── manifest.json                     CSR bases and addons
    └── */layers/*.layer.json             Layer files

Final-Fantasy-7-Modding/                  Project site (manifests via CDN)
├── index.html                            Redirect to builder (safe)
└── builder/
    ├── manifest.json                     Modding packs
    └── */layers/*.layer.json             Layer files
```

### Builder Manifest (individualcontributordev.github.io/builder/manifest.json)

```json
{
  "remoteSources": [
    "https://individualcontributor.dev/Final-Fantasy-7-Modding/builder/manifest.json",
    "https://individualcontributor.dev/Final-Fantasy-7-CSR/builder/manifest.json"
  ]
}
```

**Critical:** Must use custom domain URLs (not `.github.io` URLs) to avoid CORS errors.

### CNAME Configuration

**individualcontributordev.github.io/CNAME:**
```
individualcontributor.dev
```

**CSR and Modding repos:** No CNAME files (project sites automatically inherit custom domain)

### Redirect Pages (CSR and Modding index.html)

```html
<meta http-equiv="refresh" content="0; url=https://individualcontributor.dev/builder/" />
```

**Safe:** Only affects HTML navigation; does not interfere with fetch requests to `builder/manifest.json`.

## URL Access Patterns

| Resource | Custom Domain URL | GitHub Pages URL | Builder Uses |
|----------|-------------------|------------------|--------------|
| Builder UI | `individualcontributor.dev/builder/` | `individualcontributordev.github.io/builder/` | Custom domain |
| CSR manifest | `individualcontributor.dev/Final-Fantasy-7-CSR/builder/manifest.json` | `individualcontributordev.github.io/Final-Fantasy-7-CSR/builder/manifest.json` | **Custom domain** |
| Modding manifest | `individualcontributor.dev/Final-Fantasy-7-Modding/builder/manifest.json` | `individualcontributordev.github.io/Final-Fantasy-7-Modding/builder/manifest.json` | **Custom domain** |

## Why This Works

1. **Same Origin:** All fetches from `individualcontributor.dev/builder/` to `individualcontributor.dev/ProjectName/builder/manifest.json` are same-origin.

2. **CORS Headers:** GitHub Pages automatically adds `access-control-allow-origin: *` to all project site responses.

3. **No Cross-Origin Requests:** Using `.github.io` URLs from custom domain builder triggers CORS errors.

## Testing

Verify configuration is working:

```bash
# Check builder manifest URLs
curl -sL https://individualcontributor.dev/builder/manifest.json | grep remoteSources -A3

# Should show:
#   "remoteSources": [
#     "https://individualcontributor.dev/Final-Fantasy-7-Modding/builder/manifest.json",
#     "https://individualcontributor.dev/Final-Fantasy-7-CSR/builder/manifest.json"
#   ]

# Check CSR manifest is accessible with CORS headers
curl -I https://individualcontributor.dev/Final-Fantasy-7-CSR/builder/manifest.json | grep -E "HTTP|access-control"

# Should show:
#   HTTP/2 200
#   access-control-allow-origin: *

# Check Modding manifest
curl -I https://individualcontributor.dev/Final-Fantasy-7-Modding/builder/manifest.json | grep -E "HTTP|access-control"
```

## Historical Notes

- **August 2, 2026:** Working configuration established
- **August 16, 2026:** CORS errors introduced by changing manifest URLs to `.github.io`
- **August 17, 2026:** Fixed by restoring custom domain URLs (commit fac7535)
- **August 17, 2026:** Configuration locked with comprehensive documentation

## See Also

- `.agents/rules/github-pages-cors.mdc` — Full CORS documentation and troubleshooting
- `AGENTS.md` — Operating rules including remote sources
- CSR and Modding `.agents/rules/github-pages-redirect.mdc` — Project site redirect docs
