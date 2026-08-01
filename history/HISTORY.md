# A history of FF7 PSX CSR and the mods around it

The story of a **PlayStation disc cutscene-reduced** path for *Final Fantasy VII*,
grown with the FF7 speedrunning community, then split into a skill-check-preserving
**CSR**, optional **CSR+ scene packs**, a separate **Highwind** base, and
**cross-base gameplay mods** (starting with encounter rates).

Primary sources (sanitized chat archives) on this site:

| Archive | What it is | Span | Messages |
|---------|------------|------|----------|
| [CSR mentions (server search)](chats/2022-08-csr-mentions-search-messages.txt) | General-channel search hits for “csr”, plus related posts | 2022-08 → 2025-05 | ~150 |
| [CSR development thread](chats/2024-09-csr-dev-thread-messages.txt) | Birth of the PSX CSR in a Discord thread | 2024-09 → 2024-11 | ~1355 |
| [CSR discussion channel](chats/2024-11-csr-channel-messages.txt) | Dedicated channel after the thread | 2024-11 → 2026-07 | ~1700 |

Downloads: [chats/](chats/) · [archive/](archive/) · [MANIFEST.json](archive/MANIFEST.json)

Cookies and auth headers were stripped before publishing. Public message text was kept.

---

## Why it existed

FF7 Any% on PSX is long not only because of battles and routing, but because of
**cutscenes, FMVs, and dialogue**. Runners already practiced with turbo, save
states, and route notes. What they lacked was a **console-faithful** disc image:
same game rules and skill checks, far less waiting.

There was precedent—other CSR experiments, FF8/FF9 CSR culture, PC/HD cutscene
work—but PSX **disc** work is unforgiving: three discs, field scripts, Mode 2
sectors, real hardware disc swaps, and Makou Reactor as the daily instrument.

The project’s north star, said many ways over many months:

> **Same game, shorter. Keep the parts that teach the run.**

---

## Chapter 0 — Lineage and practice tools

Before the long PSX CSR thread of autumn 2024, people in the community were already
building **shorter practice discs** and ISO hacks so runners could spend time on
steps and fights instead of cutscenes.

**Hope** (hopeproductions) publicly shared practice-oriented ISO work aimed at
step routes and exploration—bosses that were not pre-emptable removed, inactive
step screens skipped, material laid out so you stayed on a single disc image for
practice. That kind of tooling, alongside earlier CSR attempts on other platforms
and Hope’s own CSR experiments, is part of the soil this project grew from.

Credit is due for **opening that door**: showing that aggressive PSX-side
practice builds were possible, and that runners would use them if someone
maintained them.

The IndividualContributor PSX CSR later took a related but distinct line: keep
**skill checks** intact for transfer back to retail routes, ship **versioned**
patches on GitHub, and prove **burned discs on real hardware**.

---

## Chapter 1 — Thread years: inventing the loop (autumn 2024)

It starts in a Discord **thread**. Patches fly. Version numbers are messy. Someone
burns a disc for a PS2 session the same evening a fix lands. Practice runners treat
softlocks as weather and keep going.

Early rhythm:

1. Maintainers edit field scripts (Makou), ship a patch.
2. Runners play on DuckStation and **burned discs**.
3. Notes come back the same day: trim here, put a text box back there, something
   softlocked, music feels wrong.
4. Another patch. Repeat.

What the community taught immediately:

- **Muscle memory matters.** Strip too many boxes before a choice and the CSR
  stops training the real game.
- **Skill checks are load-bearing.** Elevator manip, Final Descent, certain
  movement windows—not optional flavor.
- **Emu green is not hardware green.** Disc1→Disc2 swap bugs and console QA
  became non-negotiable.
- **Save states lie across patch versions.** Yesterday’s RAM poisons today’s build.

A landmark technical saga: **disc swap after Jenova**. CSR D1 would not hand off
cleanly to D2 on real PS2 for a stretch. Binary search through git history, mixed
burned/retail discs, memory-card forensics, and runners willing to reburn and
retest tracked the break—and fixed it. Tone set: *if it only works on emulator,
it isn’t done.*

**awesomewaves**, **.okamikaze**, and others were especially deep in that
hardware-and-practice feedback loop—burns, full clears, notes on what still felt
wrong on console.

By mid-November 2024 the thread had a usable Any%-oriented CSR, feedback paths,
and a clear sense this was **shared infrastructure**.

---

## Chapter 2 — A channel, a craft (late 2024 → 2025)

Work moved into a **dedicated channel**. Releases stacked. People finished full
CSR runs and returned with timestamps and clips.

Category specialists pushed the product past a single route:

- **NMS**, **All Bosses**, and side content notes (Reactor 5, Wutai, Gelnika, …)
- dialogue **cue** counts so choices still felt like the retail game
- when to **put boxes back** after an over-trim

Design tension (balanced in practice):

| Pull | Meaning |
|------|---------|
| **Practice transfer** | CSR should make you better at retail routes |
| **Category breadth** | Different categories need different leftover scenes |
| **Feel** | Over-trim becomes empty warps; under-trim wastes lives |

---

## Chapter 3 — “Why not both?” (2026)

Years of leave-vs-cut skill scenes got an architectural answer:

| Product | Idea |
|---------|------|
| **CSR** | Skill checks kept; filler cut |
| **CSR+ packs** | Optional scene trims **on CSR** (Aerith house, Hojo FD, CoTA FD, …) |
| **Highwind** | Separate aggressive base—max short, not a pack stack |
| **Mods** | Gameplay layers for **every** base (encounter density first) |

The **browser builder** made that real: retail `.bin` in, choose base + packs +
mods, zip out with `APPLIED.txt`.

Encounter **Light / Standard / Dense** mods (field and world), per base, turned
battle density into a checkbox. Console burns of full stacks started to land.

CSR+ stayed honest about cost: cutting CoTA phone/FMV **changes FD List**.
Changelogs say so out loud.

---

## What was built

- A **shared language** for trims vs skill checks vs category packs
- A **hardware-first** QA culture
- **Runner-as-QA**: practice attempts doubling as testing
- Putting **boxes back** when the short path forgot the human
- A path from chaotic whole-disc patches to **versioned packs, bases, and mods**

---

## Credits

This work only exists because people showed up—with burns, VODs, bug reports,
trims, pushback, encouragement, and patience.

### Practice ISO / earlier CSR path

- **Hope (hopeproductions)** — practice ISO / step-route hacks and earlier CSR
  experiments that proved the space was real and useful for runners

### Day-one PSX CSR loop (thread → first stable patches)

- **IndividualContributor** — Makou disc work, versioning, GitHub shipping, builder
- **awesomewaves** — heavy practice testing, PS2 burns, continuous notes
- **.okamikaze** — hardware/console validation, POPStarter/FPGA angles, early clears
- **cornfed**, **phek1200**, **doumeis**, **.rendall**, **teeejj0102**, **jayrod316**,
  **katombaz**, and others who ran full routes and filed concrete scene notes

### Design and community framing

- Moderators and veterans who helped set expectations for skill checks, channels,
  and how CSR relates to retail categories (including early guidance from
  **acezephyr** and others in those conversations)

### Everyone in the archives

Usernames appear in the chat logs linked above. If you posted a softlock,
reverted a bad trim, reburned a disc, or wrote that a box count felt wrong—you
are part of this history. Thank you.

This section is **thanks**, not a ranking and not a claim on anyone’s ideas.

---

## How to read the archives

- [Chat log — CSR mentions / search](chats/2022-08-csr-mentions-search-messages.txt)
- [Chat log — development thread (2024-09)](chats/2024-09-csr-dev-thread-messages.txt)
- [Chat log — CSR channel (2024-11)](chats/2024-11-csr-channel-messages.txt)
- [JSON downloads](chats/) · [Sanitized HAR archives](archive/)

---

## Repos today

| Repo | Holds |
|------|--------|
| **Final-Fantasy-7-CSR** | CSR & Highwind bases, CSR+ scene packs |
| **Final-Fantasy-7-Modding** | Encounter (and future engine) mods, RE docs |
| **individualcontributordev.github.io** | Disc builder UI and **this history** |

Backlog: each product repo’s `docs/SUGGESTIONS.md`.
History home: https://individualcontributor.dev/history/
