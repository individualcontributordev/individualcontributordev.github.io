---
name: polish-site-chrome
description: >-
  Keeps individualcontributor.dev homepage and PSX Disc Builder visually consistent
  and copy-sparse. Use when editing index.html, builder CSS/HTML/JS, homepage
  CTAs, nav, or site branding on individualcontributordev.github.io.
---

# Polish site chrome

## Checklist

- [ ] Homepage, builder, and history share container width, header nav, type scale, panel/button styling via site.css
- [ ] No empty bordered boxes (`[hidden]` must actually hide; empty `.plan` hidden)
- [ ] Builder CTAs on homepage: nav + hero only
- [ ] CSR/Modding sections → GitHub only
- [ ] Highwind wording matches CSR README / builder blurbs
- [ ] Remote manifest failure shows the load banner; no demo fallback

## Files

| Concern | File |
|---------|------|
| Shared chrome | `site.css` |
| Homepage | `index.html` |
| Builder shell | `builder/index.html`, `builder/builder.css` |
| Builder logic | `builder/builder.js`, `builder/layer.js` |
| History | `history/index.html`, `history/history.css`, archive/chats indexes |

## Related repos

Pack JSON is **not** authored here — CSR and Modding Pages supply remote manifests.
