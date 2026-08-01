# History of FF7 PSX CSR and related mods

A chronological record of how cutscene-reduced **Final Fantasy VII** (PlayStation)
disc images, optional scene packs, the Highwind base, and encounter mods were
developed and used with the FF7 speedrunning community.

**Public page:** https://individualcontributor.dev/history/

## Sources

Sanitized Discord exports (cookies and auth headers removed; message text kept):

| Archive | Description | Date range | Messages |
|---------|-------------|------------|----------:|
| [CSR mentions (server search)](chats/2022-08-csr-mentions-search-messages.txt) | Search results for “csr” in a general/resource channel, plus related posts | 2022-08 – 2025-05 | 150 |
| [CSR development thread](chats/2024-09-csr-dev-thread-messages.txt) | Thread used for day-to-day CSR patch development | 2024-09 – 2024-11 | 1,355 |
| [CSR discussion channel](chats/2024-11-csr-channel-messages.txt) | Dedicated channel after the thread | 2024-11 – 2026-07 | 1,700 |

Also available: [Chat extracts](chats/), [HAR archives](archive/), [MANIFEST.json](archive/MANIFEST.json).  
Chat logs are ordered **oldest message first**.

Repos: Final-Fantasy-7-CSR (bases and scene packs), Final-Fantasy-7-Modding (encounter and engine mods), individualcontributordev.github.io (builder UI and this archive).

---

## Background

Final Fantasy VII Any% on PlayStation is paced by battles, routing, and long
**field scripts, FMVs, and dialogue**. Speedrunners already used turbo, save
states, and written routes. Separately, **cutscene-reduced** builds (often
called CSR in this community) existed for other games and for other FF7
platforms; practice ISOs that stripped or shortened non-gameplay segments were
also shared so runners could focus on steps and fights.

Building the same idea for **PSX retail disc images** adds constraints that do
not apply to PC file mods alone: three discs, Mode 2 sectors, field script
layout, burned-media and console disc-swap behaviour, and tools such as Makou
Reactor for editing field content.

---

## 2022–2024: Prior practice tools

Archived search hits include discussion of practice-oriented **ISO hacks**
shared in the server. One example, posted by **hopeproductions**, describes a
disc image arranged for step-route practice: non-preemptable bosses removed,
unnecessary inactive step screens skipped, content kept on a single disc image
so disc changes are not required during practice. Hope had also worked on earlier
CSR-style experiments used by runners.

Those tools are distinct from the later IndividualContributor CSR line (which
keeps skill-check scenes and ships versioned multi-disc patches). They are part
of the same problem space: less waiting, more time on gameplay that transfers
to real routes.

---

## September–October 2024: PSX CSR thread opens

**29 September 2024** — Development concentrates in a Discord thread  
(archive: development thread).

Early work includes:

- Field-script trims applied with Makou Reactor  
- Patches distributed as **PPF** (and later cleaner packaging) against NTSC-U `.bin` files  
- Testing on **DuckStation** and on **burned discs** (PS2 Slim, including MechaPwn setups for NTSC and backups)  
- Public GitHub hosting under Final-Fantasy-7-CSR  

**24 September 2024** (also visible in the search archive) — An announcement of
CSR patches for Any% and related categories (NMS, All Bosses, etc.), initially
emphasizing discs 1 and 2, with console burn testing called out explicitly.

Through October, versions move quickly. Examples recorded in chat:

| Approx. date | Milestone |
|--------------|-----------|
| Early–mid Oct | Repo online; iterative disc 1 patches; practice saves and DuckStation testing |
| ~26 Oct | **v0.3.0** — larger disc 1 trim pass (e.g. Temple); request for more disc 1 feedback |
| ~30 Oct | **v0.4.0** — optional mid-run break after Demon’s Gate (later moved) |
| Late Oct | Break relocation experiments; Reactor 5 and disc 2 shortening; scenes restored where movement mattered (e.g. post–Jenova Death positioning) |

**Feedback pattern:** someone plays a build, notes a softlock, missing cue, or
odd timing; a new patch is cut the same day or next. Full practice runs and PS2
burns are used as the real test harness.

### Disc 1 → disc 2 swap failure (late Oct – 10 Nov 2024)

After Jenova Life, some **physical** disc swaps from CSR disc 1 to disc 2 failed
on PS2 (error behaviour), while emulators often continued. Investigation included:

- Comparing CSR vs unpatched burns and retail discs  
- Memory-card saves from CSR runs vs clean saves  
- Confirming patched `.bin` file sizes still matched retail size  
- **Binary search** through git commits to find when the regression entered  
- Isolating field-script edits (e.g. around post-Motorball / related scripts)  

**10 November 2024** — **v0.4.10** notes a fix for disc 1→2 swap after Jenova Life
(script revert of problematic changes). Afterward the repo standardizes on a
single “latest” downloadable patch set with history in git rather than many
parallel version folders.

This episode fixed a hard requirement for console use of multi-disc CSR.

### Late October – mid-November 2024: skill-check definition in chat

Design goals are stated repeatedly in thread and announcements:

- Keep **player-required actions**: dialogue options that matter, movement during
  cutscenes, known skips, RNG-related windows (including elevator manip material
  tied to sequences such as Aerith’s house / waterfall observation for List).  
- Cut or shorten **FMVs and mash-only** stretches where scripts allow.  
- Prefer verification on **hardware**; treat DuckStation as convenient but not final.

Examples of community-driven script detail: when dialogue box counts before a
choice diverge from retail, runners report it; some boxes are **restored** so
timing and muscle memory match the retail game more closely. Over-trim that made
sections feel empty is walked back in several releases.

**~12–13 November 2024** — Unofficial time tracking / submission links appear on
the GitHub README; feedback forms are linked for structured requests.

**~18–19 November 2024** — Discussion moves into a **dedicated Discord channel**
(archive: CSR discussion channel). The thread remains historical source material.

---

## November 2024 – 2025: Channel era and multi-category use

The channel archive covers continuous releases and playtesting. Themes:

### Categories beyond one Any% line

Runners and testers exercise **NMS**, **All Bosses**, side content (e.g. Wutai,
Gelnika, Gongaga Turks), and route variants. Scene lists and trim notes are
often category-specific. That tension shows up repeatedly: a cut that helps one
category may remove a sequence another category still uses.

### Restores and cue tuning

Multiple releases put text boxes or short animations **back** after playtests
(examples cited in chat include Wall Market cues, post-fight dialogue counts,
Highwind bridge / post–Rocket Town movement, Kalm break box counts). The record
shows both aggressive trim passes and corrective restores.

### Hardware matrix

Testing spans DuckStation versions, RetroArch, burned PS2 discs, POPStarter/USB
or network loads, and later FPGA reports. Bugs that appear only on one stack are
tracked separately from pure field-script mistakes.

### Disc 2 / disc 3 and long segments

Work expands through disc 2 (Rocket Town, Midgar return, trains, etc.) and disc 3
segments. Some FMVs remain when the game couples video to movement or flags
(e.g. elements of Midgar raid parachute sequences). World-map-linked scenes are
handled carefully after bugs such as incorrect world state when boat / Costa
transitions are removed incorrectly.

### Versioning and packaging evolution

Distribution moves from ad-hoc PPF lists toward **versioned packs**, changelogs,
and eventually (2026) a browser builder. Early repo layout experiments (many
version folders) are simplified after the disc-swap bisect showed commit history
was more useful.

---

## 2026: Product split — CSR, packs, Highwind, mods

### Structure

Chat from mid–late 2026 records a split of what had been one ambiguous “CSR vs
CSR+ vs CSR++” idea into explicit builder products:

| Product | Role |
|---------|------|
| **CSR** (base) | Field trims with skill-check scenes retained |
| **CSR+ scene packs** | Optional additional scene trims **on CSR only** (checkbox / preset) |
| **Highwind** (base) | Separate aggressive short playthrough; not stacked with CSR+ packs |
| **Mods** | Cross-base gameplay layers (e.g. field and world encounter density) |

Examples of shipped scene packs named in project docs and chat: Aerith house,
Hojo FD-related trim, CoTA / waterfall-related trim. Packs that change FD / List
behaviour document that impact in changelogs.

### Browser builder

**individualcontributor.dev/builder/** applies base + packs + mods in the browser
and downloads a zip (`.bin`, `.cue`, `APPLIED.txt`). Packs are loaded from GitHub
Pages manifests for the CSR and Modding repositories. UI later separates **packs**
(CSR+ scenes) from **mods** (e.g. encounters on Unmodified / CSR / Highwind).

### Encounter mods

Final-Fantasy-7-Modding publishes field and world **random encounter density**
packs (Light / Standard / Dense) as layers compatible with multiple bases.
Console burn tests of CSR/Highwind stacks with these mods are discussed once
the engine-side patches work on disc.

---

## Technical notes worth recording

| Topic | What happened |
|-------|----------------|
| **Field scripts** | Primary CSR work surface via Makou; trims, wait frames, text, movement |
| **Disc swap** | Multi-week hardware regression; fixed by locating bad script changes via git bisect-style testing |
| **File size** | Patched discs kept the same overall `.bin` size as retail in reported tests—swap bugs were not explained by simple “file grew” theories |
| **Save states** | Loading states from older patches onto newer builds caused false bugs; clean runs preferred for QA |
| **EDC/ECC** | Builder path repairs Mode 2 sector checksums after layer apply (site builder behaviour) |
| **Layers** | Later shipping uses `ic-layer-v1` JSON records rather than only whole-image PPF |

---

## Credits

People who appear in the archived chats (Discord usernames, order randomized):

Deleted User, uzuki7777, hopeproductions, chuky500, kitkatbars, fr3akzilla, luzbel, lemon6559, individualcontributor, kumatv, musclebelt, dylwingo, awesomewaves, bigspill, .okamikaze, dashretro, asleepyjake, blake.is.blue, mcswirls, petfriendamy, jayrod316, primitivedeath, acezephyr, katombaz, wedgiroth, kleinestennis, thebroodles, muttski, themattdavis, snake1982, phek1200, .rendall, doumeis, teeejj0102, cornfed, zheal, .theretrojay, rjthedestroyer

Names are limited to these archives.


## How to read the logs

```text
# oldest → newest plain text
history/chats/2024-09-csr-dev-thread-messages.txt
history/chats/2024-11-csr-channel-messages.txt
history/chats/2022-08-csr-mentions-search-messages.txt
```

Or open https://individualcontributor.dev/history/ and use the archive cards.

---

## Related links

- Disc builder: https://individualcontributor.dev/builder/  
- CSR repository: https://github.com/individualcontributordev/Final-Fantasy-7-CSR  
- Modding repository: https://github.com/individualcontributordev/Final-Fantasy-7-Modding  
- Suggestions backlogs: `docs/SUGGESTIONS.md` in the CSR and Modding repos  
