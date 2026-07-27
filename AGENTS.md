# individualcontributor.dev — Agent guide

Public site for the IndividualContributor FF7 PS1 stack.

| Path | Role |
|------|------|
| `/` | Brand homepage — quiet copy; CSR/Modding → GitHub |
| `/builder/` | **Only** player tool — apply bases + add-ons in-browser |

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
- CSR++ copy: very aggressively trimmed CSR+ (story mechanics, option choices, complete dialogue removal).

## Layout

```
index.html          homepage (inline CSS — match builder tokens)
builder/            builder UI (builder.css / builder.js / layer.js / …)
DogicaPixel*.ttf    shared pixel font
meteor.png          logo
```

## Skills / rules

See `.cursor/rules/` and `.cursor/skills/polish-site-chrome`.
