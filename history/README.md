# History (site)

Public URL: https://individualcontributor.dev/history/

| Path | Role |
|------|------|
| index.html | Readable story + links (Pages) |
| HISTORY.md | Source narrative |
| archive/ | Sanitized HAR.gz backups |
| chats/ | Markdown + JSON chat extracts |

Add a capture from the site repo root with `scripts/sanitize_discord_har.py`.
Keep `HISTORY.md` and `history/index.html` in sync by hand.

Never commit raw unsanitized HARs.

Chat logs are ordered **earliest message first**.
