# History of FF7 PSX CSR and related mods

How cutscene-reduced **Final Fantasy VII** (PlayStation) discs, optional scene
packs, the Highwind base, and encounter mods grew with the FF7 speedrunning
community.

**Public page:** https://individualcontributor.dev/history/

## Sources

| Archive | Description | Date range | Messages |
|---------|-------------|------------|----------:|
| [CSR mentions (server search)](chats/2022-08-csr-mentions-search-messages.txt) | Search hits for “csr” plus related practice-tool posts | 2022-08 – 2025-05 | 150 |
| [CSR development thread](chats/2024-09-csr-dev-thread-messages.txt) | Forum-style thread where PSX CSR was built day to day | 2024-09 – 2024-11 | 1,355 |
| [CSR discussion channel](chats/2024-11-csr-channel-messages.txt) | Dedicated channel after the thread | 2024-11 – 2026-07 | 1,700 |

---

## Background

Any% on PlayStation is already a long fight with battles, routing, and
**field scripts, FMVs, and dialogue**. Runners used turbo, save states, and
written step routes. Other games in the community already had cutscene-reduced
builds (often nicknamed CSR). FF7 had practice images and PC-side experiments
too. The missing piece for many console runners was the same idea applied to
**NTSC-U retail disc images** you could burn and put in a real machine.

That is harder than a PC file drop. Three discs, Mode 2 sectors, field layout,
disc-swap behaviour on PS2 burns, and field edits through tools like Makou
Reactor all matter. Emulator convenience is useful; hardware is the bar many
people care about.

---

## Before this CSR: practice tools in the server

Search hits from 2022 onward show the server already talking about CSR-style
ideas and practice ISOs. **hopeproductions** shared a step-route-oriented image
(non-preemptable bosses removed, inactive step screens skipped, single-disc
practice so you are not swapping mid-session) and earlier CSR-style experiments
runners actually used.

Those tools are not the same product as the later IndividualContributor line,
but they sit in the same problem: less waiting, more time on the gameplay that
still matters when you go back to a full retail disc.

---

## Autumn 2024: a thread, then a flood of patches

**Late September 2024** — Work concentrates in a Discord thread. Patches start
as **PPF** against clean `.bin` files. Testing is on DuckStation *and* burned
discs (PS2 Slim, MechaPwn, the usual backup setups). The repo goes public under
Final-Fantasy-7-CSR.

An early announcement frames the goal for Any% and related categories (NMS, All
Bosses, and friends): cut the dead air, keep what runners still have to *do*,
and prove it on console, not only in an emulator window.

October is rapid fire. Disc 1 gets iterative passes; Temple and other long
sections shrink; an optional **mid-run break** appears after Demon’s Gate and
then gets moved as people try different session shapes. Reactor 5 and disc 2
start to open up. When a trim deletes a movement cue runners rely on (for
example post–Jenova Death positioning), the next build often puts something
back. The loop is simple and loud: someone finishes a stretch, posts a softlock
or a weird box count, and a new patch lands the same day or the next.

Save states from old patches on new builds also create ghost bugs. Clean runs
and physical burns become the trusted checks.

### The disc 1 → disc 2 swap saga

Late October into early November, a problem shows up that emulators were happy
to hide: after **Jenova Life**, some **physical** swaps from CSR disc 1 to disc 2
fail on PS2 (error behaviour, black screens, “put the other disc back in and it
loads” weirdness). DuckStation often sails through the same path.

The investigation is a multi-day community science project. People compare CSR
burns to retail burns, try CSR saves vs clean saves, confirm patched `.bin`
sizes still match retail (so it is not a simple “file grew” story), try mixing
burned and retail discs, and float workarounds (swap to a clean disc 2 just to
load, then reseat CSR). Hope’s older practice CSR had its own console landmines
(for example lifestream hub crashes unless you briefly ran an official disc),
so nobody assumes “burned multi-disc” is free.

Eventually the bug is traced with a **git bisect-style** walk of commits. The
smoking gun is not a dedicated “disc swap” edit sitting next to the swap script.
It is an earlier field change (around post-Motorball music / wait-frame
structure on a script that also participates in later disc-2 flow). A small
revert and restore of frames and music playback fixes the path. **10 November
2024 — v0.4.10** ships with the fix called out explicitly.

After that, the repo stops scattering many parallel version folders for
downloads and standardizes on “latest patch + git history.” The swap fight is
why console multi-disc CSR is treated as a first-class requirement, not a nice
extra.

### What “skill check” means in this CSR

Through the same weeks the design gets stated out loud, over and over:

- Keep **player-required** moments: meaningful dialogue options, movement during
  cutscenes, known skips, and RNG-related windows (elevator mash text, List /
  FD material around sequences such as Aerith’s house and the waterfall).
- Cut or shorten **FMVs and mash-only** stretches when the scripts allow it.
- Prefer hardware verification; DuckStation is convenient, not final.

When a choice appears with the wrong number of lead-in boxes, runners say so.
Several releases **restore** boxes so muscle memory still matches retail. The
CSR is intentionally not “delete every text box and teleport Cloud to the next
fight.” Hope’s practice tools and later Highwind sit further down that axis;
this base tries to keep the run’s skill spine.

Unofficial time-tracking and feedback forms appear on the README around
mid-November. **~18–19 November 2024** discussion moves into a **dedicated
Discord channel**. The old thread stays archive fuel; the channel becomes the
daily shop floor.

---

## Channel era: categories, restores, and the sub-4 chase

Once there is a channel, playtesting never really stops. Releases tick through
the autumn and into 2025. A few threads of story keep coming back.

### Same CSR, different categories

People run more than one Any% flavour. **NMS** gets a written notes dump from
cornfed (church, house, reactor 5, train, Kalm flashback arc, Cosmo, Midgar
return — scene by scene). Those notes turn into real disc 1 passes. **All
Bosses** and side content (Wutai, Gelnika, Gongaga Turks) show the other edge:
a cut that is free time for No Slots can still be dead air for a category that
never needed the leftover skill-check scene. That tension does not get fully
solved in 2024–25; it becomes the later argument for optional packs.

### Trim hard, then put the cue back

The channel is full of tiny craft notes. Wall Market needs an orient box. Kalm
after photoskip cannot lose the soldier boxes — mash there and you softlock;
that is a skill check, not filler. Junon locker tutorial text comes partly back
so options are not a surprise. Highwind bridge after Rocket Town gets shortened
until Cloud is already standing and Red runs up, then Cid’s movement is checked
again because it drifted from retail. Gold Saucer entry, clothes shop running,
date tubes, Fort Condor chatter, Carry Armor and UWR corridors, disc 3 endgame
boxes, the naked-Seph FMV — each shows up as a clip or a one-line request and
often as a changelog bullet days later.

IC’s own line captures the design tension: how do you push toward **sub-4**
without wrecking the *feel* of places like the Gold Saucer cart? Fade-to-black
is easy; keeping the session fun is the harder part.

### How much time does this actually save?

In late November 2024, **phek1200** estimates a full No Slots–style pace on
**v0.6.0** as roughly a **6h35** non-CSR equivalent — about **2h24** saved by
the CSR of that week. The room immediately does the arithmetic: a little more
trim and sub-4 on CSR is in reach for strong paces; PSX might need a few more
minutes of cut than emu. Disc 3 gets an explicit “route done?” release
(**v0.7.0**) once endgame boxes and the last FMVs are under control.

**10 January 2025** — phek posts what the channel had been aiming at: a
**first sub-4 No Slots on CSR** (emulator, v0.10.0), with the usual runner
footnotes (minutes left on the table to Palmer, and so on). That run becomes a
reference point; more trims and cue restores continue through the spring as
other people grind toward the same number on their own setups.

### Console keeps scoring own goals

Even after the big swap fix, multi-disc on real hardware stays spicy. A later
build regresses disc 2 load again; workarounds and version bisection return;
Rocket Town–adjacent disc 2 content is implicated and fixed. Midgar raid can
lose a lot of talk, but the Highwind jump / parachute FMV stays when movement
is wired into the video. Music bugs after jumping back toward Midgar show up on
full NMS clears. The lesson never really changes: a green DuckStation path is
necessary, not sufficient.

---

## 2026: “Why not both?”, packs, Highwind, builder, mods

By mid-2026 the CSR base is deep into the 0.14 line. Community talk turns from
“can this exist?” to “how many shapes should it come in?”

### Product split

A community pulse lands on **“why not both?”** — keep a skill-check CSR *and*
offer harder cuts for people who do not need elev/FD theatre every run. That
forces a cleaner product map than the old casual “CSR / CSR+ / CSR++” slang:

| Product | Role |
|---------|------|
| **CSR** (base) | Field trims with skill-check scenes kept |
| **CSR+ scene packs** | Optional extra trims **on CSR only** (checkboxes / all-scenes preset) |
| **Highwind** (base) | Separate aggressive short playthrough — “dad mode,” too-many-IRL-things mode — **not** stacked with CSR+ packs |
| **Mods** | Cross-base gameplay layers (field and world encounter density, and more later) |

Early CSR+ ships as a bulk idea (Aerith house and Hojo FD scenes cut on top of
CSR v0.14). Within days the plan narrows: **CSR+ is not a second full base**.
It becomes individual **scene packs** (Aerith house, Hojo FD, CoTA / waterfall
with explicit List/FD changelog notes) so runners pick what their category can
spare. Highwind absorbs the “go ham on filler” fantasy — shorter corridors,
freer Wall Market order experiments, prison and stairs nonsense — without
forcing that on the skill-check base.

### Browser builder

**https://individualcontributor.dev/builder/** lets you start from your own
clean NTSC-U `.bin`, pick a base, optional CSR+ packs, and optional mods, and
download a zip (`.bin`, `.cue`, `APPLIED.txt`). Nothing uploads. Packs load from
GitHub Pages manifests on the CSR and Modding repos. The UI learns to separate
**packs** (CSR+ scenes) from **mods** (encounters on Unmodified / CSR /
Highwind). Console burns of builder stacks, including CSR+ on MechaPwn setups,
show up in channel testing.

### Encounter mods on real discs

Field and world **random encounter density** packs (Light / Standard / Dense)
ship from Final-Fantasy-7-Modding as engine layers, not Makou day-trip edits.
Light is pitched as closer to a routed “few fights” feel; Standard nearer
vanilla density; Dense for chaos. When a CSR++/Highwind-era stack with the
encounter add-on boots on a **PS2 Slim burn** through Guard Scorpion, the room
treats it as proof that disc-level engine mods are not only an emulator party
trick — and as a green light for later ideas like battle fanfare or death-anim
shortening as optional mods rather than more cutscene work.

---

## Credits

jayrod316, awesomewaves, themattdavis, doumeis, uzuki7777, asleepyjake, katombaz, individualcontributor, .okamikaze, dashretro, wedgiroth, kumatv, muttski, .rendall, thebroodles, chuky500, kitkatbars, mcswirls, phek1200, musclebelt, teeejj0102, petfriendamy, kleinestennis, dylwingo, primitivedeath, lemon6559, blake.is.blue, rjthedestroyer, acezephyr, .theretrojay, cornfed, snake1982, luzbel, zheal, bigspill, fr3akzilla, hopeproductions

## Related links

- Disc builder: https://individualcontributor.dev/builder/
- CSR repository: https://github.com/individualcontributordev/Final-Fantasy-7-CSR
- Modding repository: https://github.com/individualcontributordev/Final-Fantasy-7-Modding
- Suggestions backlogs: `docs/SUGGESTIONS.md` in the CSR and Modding repos
