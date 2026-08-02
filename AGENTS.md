# individualcontributor.dev — Agent guide

Public site for the IndividualContributor FF7 PS1 stack.

| Path | Role |
|------|------|
| `/` | Brand homepage — quiet copy; CSR/Modding → GitHub |
| `/builder/` | PSX Disc Builder — apply base + packs + mods in-browser |
| `/history/` | CSR / Highwind / mods history + sanitized chat archives |

Remote pack sources (Pages CDN):

- `https://individualcontributordev.github.io/Final-Fantasy-7-CSR/builder/manifest.json`
- `https://individualcontributordev.github.io/Final-Fantasy-7-Modding/builder/manifest.json`

## How we work

- Commits: `individualcontributordev <contributorindividual@gmail.com>`; no Cursor trailers; auto commit/push.
- Keep homepage and builder chrome consistent (width, type, nav, panels).
- Builder links on the homepage: **nav + one hero CTA only** — do not re-add per-section builder CTAs.

## Product rules

- No demo packs / sample.bin UI in production builder.
- Show an error banner if remote manifests fail — do not silently fall back to demos.
- No PPF / RomPatcher on this site.
- Highwind copy: an aggressively trimmed playthrough — its own separate base/mod, not a bigger CSR+ (story mechanics, option choices, complete dialogue removal cut; doesn't stack with CSR+ scene add-ons).

## Layout

```
site.css            shared chrome (nav, stars, fonts, panels, footer)
index.html          homepage (site.css + small home-only styles)
builder/            builder UI (builder.css imports site.css)
history/            history page + archive/ + chats/ (history.css imports site.css)
scripts/            history HAR sanitize (history maintenance)
DogicaPixel*.ttf    shared pixel font
meteor.png          logo
stars.png           static starfield bg
```

## Skills / rules

See `.agents/rules/` and `.agents/skills/polish-site-chrome`.
