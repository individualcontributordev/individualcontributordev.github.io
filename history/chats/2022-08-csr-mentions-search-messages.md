# CSR mentions (server search)

Discord search for “csr” in a general/resource channel, plus hits from the CSR thread. Includes early announcements, hardware testing callouts, and related practice tools (e.g. Hope’s step-route ISO).

Messages: 150

---

### 2022-08-05 04:20:49 — Kitkat

Nice. I also remembered the ffx discord having them too, that's how I learned how to do CSR

### 2024-05-31 20:26:57 — lemon

Would it make sense to post the CSR into resources-no-discussion?

### 2024-09-24 20:25:59 — IndividualContributor

I made a CSR for any% and 100% (including variants NMS, All Bosses, etc.). I've only made patches for disc 1 and 2, I didn't touch disc 3 because there was no point. I've tested these by burning them to a disc and running it in my PS2 Slim (MechaPwn'd to play NTSC and backups).  But they also work for Emulator/Digital. Curious to know if anyone would be interested in further testing these? and if you have any suggestions?  

Apply the patches to your FF7 NTSC/US PS1 .bin files.

## Steps

1. Go to https://www.romhacking.net/patch/
2. Select your original .bin file, ignore the "file too big" warning
3. Select the patch .ppf file
4. Click the "Apply patch" button

Your browser should download a new patched version of the disc.

You can burn the patched version to disc or load it up in an emulator (I used duckstation version 0.1-7371-gb2577ef8b (dev) for testing). I used ImgBurn with write speed 16x on Verbatim CD-R 700MB discs.

## Details

These patches remove most if not all FMVs, shortens some in-game cutscenes, and reduces some mashing sequences.

**All "skill checks" are present in this CSR, if not let me know and I'll fix it.**

Latest patch releases are on GitHub https://github.com/individualcontributordev/Final-Fantasy-7-CSR

Change log https://github.com/individualcontributordev/Final-Fantasy-7-CSR/blob/main/CHANGELOG.md

Discussion on bugs and fixes in thread 🧵

### 2024-09-29 14:51:16 — IndividualContributor

Final Fantasy 7 PS1 Disc CSR Patches (IndividualContributor)

### 2024-10-05 12:47:37 — IndividualContributor

Here is the link again https://github.com/individualcontributordev/FF7-PSX-Disc-CSR-Patches

### 2024-10-16 12:00:13 — awesomeWaves

No i don't think so, I only pointed Duckstation to the CSR files folder for the entire time I was making these saves

### 2024-10-16 12:04:24 — IndividualContributor

I'll test it anyway but maybe it was something on an older patch version that I'm unlikely to be able to reproduce, let's see. The latest patch has a ton of new stuff to shorten the CSR even further so definitely worth a go. 

And I'm getting close to finalizing the whole thing because I don't want to be updating it while others are running it and getting times.

### 2024-10-17 12:23:48 — Okamikaze

I wish I had more time to try it out myself, but waves has been embracing csr's longer than anyone I know so his feedback is incredibly valuable

### 2024-10-20 09:33:44 — IndividualContributor

Final Fantasy 7 CSR Patches (IndividualContributor)

### 2024-10-20 14:36:55 — awesomeWaves

here's the save state for Duck for that issue. i tried it again and it's still the same. However, that wasn't noticed on redoing the saves so i'd assume it's already been fixed (but you can still see it on a newer version of the CSR using this save)

### 2024-10-20 16:30:18 — awesomeWaves

it could be something else, but to just get some practice in I loaded a state at the start of the game then manually changed disc to the new CSR. All worked as intended up until the APs exp screen. Once the fight had finished and I accepted the rewards etc, it froze at a black screen with the fanfare music still playing. Just said I'd mention it, but it might be a false error.

### 2024-10-20 18:54:30 — Okamikaze

Yw. It's even giving me black screens after loading save states I would normally swap in csr for

### 2024-10-20 19:18:46 — IndividualContributor

I'll push the latest patch that I'm working on now, starting a new game is fine for me I'm doing a run of Disc 1 now, and will checkout the Aps stuff too. I'm wondering if save states are causing the issues because your essentially saving RAM values which will remain broken if you saved on a previous patch and then load the saved state with a new patch, some issues will still be there because variables were not set correctly. I've also seen some issues using save states where I load one and then swap to the patched disc and I get double boss fights and stuff like that. I would say if you're using save states try to make a save at least 2 fields from a CSR edit, for example in temple make a save on the world map and then maybe another on the weird maze screen so that you can test entering template and the rolling rocks screen.

### 2024-10-24 13:06:18 — IndividualContributor

ok should be good to pull the latest patch https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-10-25 15:54:59 — Doumeis

so I'm a bit confused about the CSR versions that we have

### 2024-10-25 16:04:23 — awesomeWaves

if you check the threads of this channel, there is one for IC's CSR

### 2024-10-25 16:05:55 — awesomeWaves

I've been actively testing and providing feedback to IndividualContributor on the CSR. It has all the skill checks and plays true to full Any% routes

### 2024-10-26 23:16:55 — IndividualContributor

New release v0.3.0 https://github.com/individualcontributordev/Final-Fantasy-7-CSR

I'm pretty sure I've addressed all feedback related to Disc 1, so given there are no more suggestions for Disc 1 it could be done? 

<@248225699909861376> <@170713534726930432> <@289891674660929538> <@785294612444479568> <@191046608064872449>

If you have a chance to run Disc 1 and let me know if you have anymore suggestions that would be great!

The most significant changes were to Temple I'd say but I was able to trim a ton from other places too.

### 2024-10-27 12:17:48 — IndividualContributor

Preview of release v0.3.0, Start to Junon parade game test https://youtu.be/Lc3FmvNR6qo (might still be uploading so give it a little while). I got to Chocobo Ranch with an IGT of 1:10:XX and I'm shit at running <:KEKW:1074810897308069948>

### 2024-10-27 16:57:34 — awesomeWaves

https://www.twitch.tv/awesomewaves/clip/StrongDeterminedCormorant4Head-nzrI6sBy32OH4s0D

### 2024-10-27 18:02:03 — awesomeWaves

Hey I was wondering if the script to generate chocobo times is available anywhere? I tried searching for it but I don't see any public release of it.

I ask because I'm running on IC's PSX CSR on PS2 and as the CSR might get shorter the IGTs might change. So rather than asking multiple times for a set of IGTs I thought it might be easier if I could generate my own. Thanks

### 2024-10-28 00:04:51 — awesomeWaves

I'm using an OG Disc 3, but I guess because I played all the way through Disc 2 to here with the CSR that some value is incorrect

### 2024-10-29 21:04:48 — IndividualContributor

This seems to be half way in the CSR, and coincidentally half way in the non-CSR no slots too right?

### 2024-10-29 21:43:55 — awesomeWaves

This is the FF8 CSR break screen

### 2024-10-29 22:43:03 — IndividualContributor

Ok so I have the main cast in now https://youtu.be/jkaLAeB2JZU

### 2024-10-30 00:38:38 — IndividualContributor

Ok so I've added a text box with 3 choices, first is for Turbo, second will just set the timer to zero and continue the run, the third let's you pick between the 3 songs available in this field. Unfortunately I don't think it's possible to play any song, I've tried a few things and Googled a bunch of stuff but no luck. Having 3 songs is better then none so I'll leave it in, and someone might know how to get random songs playing from here later. https://youtu.be/-EjQHtFeSxA

### 2024-10-30 01:35:13 — IndividualContributor

Release v0.4.0 which includes the 5 minute break after Demon's Gate. Prayge I haven't balls'd something up KEKW

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-10-30 23:37:15 — awesomeWaves

not sure if it's a CSR thing or not but just posting for reference

### 2024-10-30 23:42:45 — awesomeWaves

They're already discussing making the boards (for the PSX CSR, they already have the HD CSR boards) in their discord right now.

### 2024-10-30 23:51:13 — IndividualContributor

For the PSX no slots no oceanfly? route it makes sense for it to be where it is now in CSR, after DG because that's roughly half way through. But if you're doing the oceanfly skip then where would half way be?

### 2024-10-31 00:05:57 — IndividualContributor

😬 I hope that's not the CSR because I haven't touched any of that section, it's not in any%

### 2024-10-31 10:11:49 — IndividualContributor

Break is at the end of Disc 1 now in the latest patch, releasing now https://youtu.be/qEmZ17lsNpY

### 2024-10-31 10:35:55 — IndividualContributor

Release v0.4.2 https://github.com/individualcontributordev/Final-Fantasy-7-CSR/tree/main/v0.4.2

Break moved to end of disc 1

### 2024-10-31 17:57:56 — IndividualContributor

Release v0.4.3 fixes the Reactor 5 bug and shortens some stuff on D2 https://github.com/individualcontributordev/Final-Fantasy-7-CSR/tree/main/v0.4.3

### 2024-10-31 23:29:40 — IndividualContributor

Release v0.4.4 https://github.com/individualcontributordev/Final-Fantasy-7-CSR/tree/main/v0.4.4

- Added back in the scene where Cloud is upside down and Sephiroth is in a big blue egg (after JDeath)

Reasoning for this change is  because there is player movement here and you can save 1 to 3 seconds (I think) depending on where you position Cloud before he moves automatically

### 2024-11-01 11:05:41 — IndividualContributor

Release v0.4.5 https://github.com/individualcontributordev/Final-Fantasy-7-CSR/tree/main/v0.4.5

- Fixed bug with 5 minute break scene where the Game Moment was being incorrectly set after the timer ended causing an issue on Disc 2
- Added a version number to the first scene in Disc 1 and Disc 2

### 2024-11-01 19:40:33 — IndividualContributor

Making this CSR is like doing sugery holy shit

### 2024-11-02 23:24:26 — IndividualContributor

Release v0.4.6 https://github.com/individualcontributordev/Final-Fantasy-7-CSR/tree/main/latest%20v0.4.6

- Lots of new trimming from Start to Don's
- Trimmed Reactor 5 and Airbuster for the NMS crew
- More trimming of JDeath to before Mideel and Cloud's Dream

This version trims almost all text boxes and some animations that were previously untouched in the sections mentioned above. I'm not sure about this approach and would love if you could play it and let me know how it feels. For example, previously I left in some text boxes to make sense of the trimmed sections but now it's just alot of movement with no text boxes. I did leave in 1 or 2 that I thought were warranted.

Also there are a significant number of changes in this version so I'm sorry if I have borked something, please don't burn this to disc until you've played on emulator at least until after Don's, preferably a full run. Having a full run verified as stable would be great, I'll be doing it myself this week regardless.

### 2024-11-05 00:50:42 — Okamikaze

One thing to note though is that I did load up a backup memory card save at DG in my "run" a couple of days back. I doubt that would cause the CSR to not crash on the timer running out though

### 2024-11-05 00:53:47 — Okamikaze

It's important to note that Hope's 0.4 version of CSR on PS2 would crash at the end of lifestream unless you swap in an official disc before you run up to enter the top part of the hub

### 2024-11-05 01:26:51 — Okamikaze

FF9 was the same for CSR, some extra backend code or w/e had to be removed for it to not crash going into BW3 on PS2 where on emu it had no issue at all

### 2024-11-06 01:10:05 — IndividualContributor

Release v0.4.7 https://github.com/individualcontributordev/Final-Fantasy-7-CSR/tree/main/v0.4.7

- Moved the break scene to before the spiral hut scene to test a bug fix on PSX where Disc 2 wouldn't load correctly after putting it into the console. Suspected issue with the music still playing from the break scene when disc is being changed. Not an issue on Emulator. 
- Trimmed Reno text box
- Trimmed Slap skip (2 frame time save if you're lucky)
- Updates to Jessie skip
- Reverted Honey Bee Inn fat guy text boxes because they felt weird

IMPORTANT: there may still be a bug on PSX only, at the end of disc 1, maybe related to the break scene, where disc 2 won't load when you insert it. I've moved the break scene further back away from the "Save game" scene before disc swap but haven't tested it on PSX yet. Emulator does not have the same issue.

### 2024-11-06 17:19:50 — Teeejj

I'll be real, I dont think oceanfly(or whatever its called now) really warrants a break on csr

### 2024-11-06 17:23:54 — awesomeWaves

CSR is so easy to say 'this is wrong', 'this scene could be changed' etc

### 2024-11-07 01:03:29 — IndividualContributor

yep I agree having D1 done also means I can play the god damn CSR

### 2024-11-07 09:21:16 — IndividualContributor

🎮 Release v0.4.8 https://github.com/individualcontributordev/Final-Fantasy-7-CSR/tree/main/v0.4.8

- Fixed error in Emu console which may be causing the Disc 2 loading issues after the Break Scene, testing on PSX disc needed to verify
- Restored scene where Cloud is carrying Aeris in the water (Aeris dying is a big deal so an extra ~10 seconds of a cutscene is worth it I think)
- Trimmed Rocket town first visit a bit more
- Fixed "Shake it" scene after Red Dragon
- Trimmed Gold Saucer date scenes and hotel lobby a bit more
- Fixed Junon down right scene missing and restored the command game tutorial section with text box queues (this whole section felt a bit weird after trimming so I started again and trimmed a tiny bit, can be reviewed)

No Disc 2 changes in this release

### 2024-11-07 15:48:11 — TMD

Just thought I'd give the CSR a look and this happened? Is this known about?
I was grabbing a potion off the red dude and now I'm softlocked lol

### 2024-11-07 18:37:39 — IndividualContributor

🎮 Release v0.4.9 https://github.com/individualcontributordev/Final-Fantasy-7-CSR/tree/main/v0.4.9

- Fixes that softlock above <:KEKW:1074810897308069948>

### 2024-11-07 21:30:44 — Okamikaze

OPL Pop is actually what I use currently when I'm dabbling with FF9 CSR, don't wanna wear my laser out just to enable me to play a game badly

### 2024-11-07 22:12:11 — IndividualContributor

ChatGPT FTW

POPS (PopStation Emulator)
POPS stands for PlayStation Operating System, and it's the name of the software emulator that the PS2 uses when running PS1 games from other sources, like burned discs, or digital versions of PS1 games stored on a memory card or external storage.

So this tells me that the burned CSR discs are running on Pops?

### 2024-11-07 22:13:19 — IndividualContributor

Which is what I'll be using over the network too, so if I can get this working it seems like the CSR will be running in the same environment, either over network or burned disc.

### 2024-11-07 22:16:47 — Okamikaze

As for games overall, I can tell you that an FF9 CSR Disc 4 burned disc doesn't have slowdown or slow loads to the degree that playing it on POP has

### 2024-11-07 23:26:12 — IndividualContributor

Ok so I got the CSR running on the PS2 using Popstarter without patching it, but the battles don't work right, gameplay seems fine.

### 2024-11-07 23:50:58 — IndividualContributor

https://youtu.be/FkU2kLtk53w

### 2024-11-07 23:58:57 — IndividualContributor

the workflow to make a change for the CSR and play it on ps2 has gotten alot more complex now <:KEKW:1074810897308069948> it was meant to be easier ffs

### 2024-11-08 02:02:12 — IndividualContributor

I would expect this to bork if I played D1 CSR through

### 2024-11-08 02:08:47 — awesomeWaves

or out of interest, remove the entire break scene from the current version of CSR

### 2024-11-08 02:41:47 — IndividualContributor

I might keep all the discs and stick them to a piece of plywood in the order they were trashed, as a reminder of how much of a pain in the ass this CSR is lol

### 2024-11-08 02:47:44 — IndividualContributor

Not tonight, but you could try a normal D1, load in, swap in CSR, skip over Jenova, put normal D1 back in, stuff like that

### 2024-11-08 02:54:21 — IndividualContributor

Another test: just use a normal D1, load in, fight Jenova and try go through to disc swap. No CSR this time at all. That would test the save itself

### 2024-11-08 07:51:26 — IndividualContributor

I got everything working I'll write some notes and send them over. I'm using SMB so sharing a folder on my PC, dropping in the CSR, then loading from PS2. It's great because there is zero input lag playing it on PS2 and it's the CSR with no discs involved but the colors are a little weird on battles so nothing major.

But it's still emulated, I can't reproduce the D2 issue because it just works on this, similar to Duckstation.

### 2024-11-08 12:01:44 — awesomeWaves

it was made with the CSR also

### 2024-11-08 17:54:52 — IndividualContributor

This means your save is borked and not the CSR disc??

### 2024-11-08 17:57:11 — IndividualContributor

So I think a good next test is, load the save using the CSR, then at disc swap use a not-burned D2 to see if it loads

### 2024-11-08 18:04:44 — IndividualContributor

What might be the difference between a normal D2 and a burned D2? ignoring CSR

### 2024-11-08 18:13:41 — IndividualContributor

Ok I've just tested this:

- put in latest CSR D1
- mash through to D2 swap
- put in non-CSR burned D2
- error noise won't load
- put back in CSR D1
- it loads fine


... wtf

### 2024-11-08 18:54:19 — IndividualContributor

> D1 burned > load save > fight jenova > D2 burned > not working (error noise)

This one is weird, this tells me there is something wrong with the save that is preventing burned D2 from loading, not related to CSR (other than the save being made on a D1 CSR run). So likely the CSR broke the save which is then preventing burned discs from loading.

### 2024-11-08 18:59:52 — IndividualContributor

I'm going to test if deleting a script from the game decreases the file size too, my assumption here is that deleting a bunch of scripts as opposed to just moving them so they don't get executed is shifting where game data would normally live on the disc, and so when disc swap occurs the PS2 can't read the correct data because it's no longer in the right place on the disc. OR adding new scripts is shifting data.

> D1 CSR > load save > skipped jenova > D2 regular > not working (no error noise)

This is why I'm thinking that, CSR moves data around and the PS2 is confused, so then tries to load a regular disc but has the wrong pointers to data because of the CSR. Other scenarios that use regular D2 during the swap seem to work fine. It's only when the CSR D1 is used does it break in this scenario.

### 2024-11-08 19:44:23 — IndividualContributor

My assumption for remaining tests is that using a non CSR save state converted to PS1 memory card file and running through the above scenarios will show different results. Comparing the results of both save files will show that awesomeWaves save file was borked by D1 CSR. If this is true I'll need to compare the common RAM variables in both saves to determine the differences and hopefully find the issue. It's very likely going to be that a variable was not set correctly, let's see.

### 2024-11-08 21:38:32 — IndividualContributor

Regular Disc 1 at Gongaga before Temple PS1 save file + level 99 Cloud, Tifa, and some of the others, for anyone interested. You'll need to copy this onto a PS1 memory card to use it with discs.

It also has awesomeWaves CSR Disc 1 at Jenova life save in slot 1 which was used in the test scenarios above.

### 2024-11-09 00:01:11 — IndividualContributor

<@248225699909861376> could you test something for me when you get a chance?

Put this save file on your PS1 mem card and start with D1 burned (not CSR), load the save, kill Jenova, don't save, swap to D2 burned (not CSR), let me know if your normal burned discs work with that save? The save is a regular disc save I pulled from Duck station, not a CSR save so should not be borked

### 2024-11-09 00:16:03 — IndividualContributor

Ah fair enough it's fine I've burned a second D2 regular to test this. I've been working under the assumption that my PS2 and backups have been working as expected, swaps and all. But I can't seem to get backups to swap from D1 to D2 at the moment, which makes it difficult to determine if it is the CSR or just the fact it's a burned disc

### 2024-11-09 00:17:22 — IndividualContributor

if it was let me know what version of the CSR it was

### 2024-11-09 00:22:09 — IndividualContributor

there is something very wrong with the CSR then if that is the case, if it was borked since v0.1.1, that's literally the first version 😭

### 2024-11-09 00:22:37 — IndividualContributor

I'm going to have to test making a tiny change to a fresh CSR and then try a disc swap

### 2024-11-09 00:25:36 — IndividualContributor

So a workaround for now could be to swap into a regular disc 2 to load and stay on formations, then just open the tray and put in D2 CSR

### 2024-11-09 00:27:48 — awesomeWaves

then see if it loads a CSR D2?

### 2024-11-09 00:30:56 — IndividualContributor

I wonder would skipping the disc swap work, and just putting the break scene in instead, during the break you swap in D2 CSR and see what happens

### 2024-11-09 00:32:04 — IndividualContributor

leaving in D1 CSR and skipping over the disc swaps will bork the elevator FMVs and stuff like that iirc, but might not if we actually put D2 CSR in

### 2024-11-09 00:32:27 — awesomeWaves

is it actually possible to just put the entire CSR on one disc?

### 2024-11-09 00:42:51 — IndividualContributor

What versions of the CSR have been burned to disc and run on PSX? <@248225699909861376> <@170713534726930432>

### 2024-11-09 00:53:38 — awesomeWaves

FF8 doesn't have a PSX CSR

### 2024-11-09 00:55:02 — IndividualContributor

I think skipping the disc swap might work and just putting D2 CSR in on the break

### 2024-11-09 01:01:24 — IndividualContributor

So the save is not borked from D1 CSR

### 2024-11-09 01:01:59 — IndividualContributor

It's actually jus the CSR kekw, and loading your save on regular or burned discs works fine on disc swap

### 2024-11-09 01:05:46 — IndividualContributor

Also, the file sizes of the .bin files for D1 and D2 are the same for both regular and CSR so data being shited due to scripts being removed/moved/added etc. is not the issue

### 2024-11-09 01:15:46 — Okamikaze

So I managed to swap to burned disc 2 from the original CSR disc 1 (with the Don Corneo basement softlock) just fine

### 2024-11-09 01:16:28 — Okamikaze

Not sure which iteration this disc 2 is though, can you remember where the first place you trimmed disc 2 on the first csr version was?

### 2024-11-09 01:18:09 — IndividualContributor

If we can get a full run of v0.1.1 CSR all the way to disc swap on PSX into a regular burned D2 and continue that would eliminate v0.1.1 being the problem.

### 2024-11-09 01:18:37 — IndividualContributor

Here are my test results from today:

Tested on PS2 Slim MechaPwn'd NTSC/U using physical discs and physical memory card with save files


D1 -> Disc 1
D2 -> Disc 2
regular -> not burned discs
burned -> burned discs with no modifications
CSR -> burned discs with modifications


**awesomeWaves CSR PS1 memcard file converted to .mcd then converted back to PS1 memcard file, before Jenova**

D1 regular > load save > fight jenova > D2 regular > works fine
D1 regular > load save > fight jenova > D2 burned > works fine

D1 burned > load save > fight jenova > D2 regular > works fine
D1 burned > load save > fight jenova > D2 burned > works fine

D1 CSR > load save > skipped jenova > D2 regular > not working (no error noise)
D1 CSR > load save > skipped jenova > D2 burned > not working (no error noise)


 
**IC non-CSR savestate file converted to PS1 memcard file, before Jenova**

D1 regular > load save > fight jenova > D2 regular > works fine
D1 regular > load save > fight jenova > D2 burned > works fine

D1 burned > load save > fight jenova > D2 regular > works fine
D1 burned > load save > fight jenova > D2 burned > works fine

D1 CSR > load save > skipped jenova > D2 regular > not working (no error noise)
D1 CSR > load save > skipped jenova > D2 burned > not working (no error noise)

There are no differences between the results sets for 1) CSR save file and 2) non-CSR save file

### 2024-11-09 01:20:07 — Okamikaze

On GitHub it says 0.1.1 was updated 2 weeks ago. Is that still the same version as your very first CSR for 7?

### 2024-11-09 01:33:10 — IndividualContributor

Here's what we know so far:

- file sizes for .bin files stays the same after patching
- previous CSR save files are not breaking the D1 to D2 swapping on CSR
- the disc swap issue was introduced in v0.1.1

Next tests:

- start from a fresh .bin, make a small change near D1 to D2 disc swap (jenova fight skip), skip from start to jenova, burn to disc, test in ps2 for disc swap issue
  - the result of this test will determine if any small change to the .bin breaks the D1 to D2 disc swap loading

- if making a small change does not break disc swap loading, then start reverting changes made in v0.1.1 until it works... more detail on this later

### 2024-11-09 02:06:06 — IndividualContributor

well sheet ok so D1 v0.1.1 loading straight into the jenova saves from earlier, fighting Jenova, disc swap to D2 burned (not CSR / no modifications) is NOT working.

### 2024-11-09 10:17:33 — IndividualContributor

CSR workstation lol

### 2024-11-09 11:09:13 — IndividualContributor

**Testing using non-CSR save at JenovaLife, same save file as previous testing**

Save file https://discord.com/channels/936291902133796955/1288235003901120586/1304830909266001920

Fresh .bin of D1 with changes:
- significant changes made to Jenova life section to align with changes in latest v0.4.9: disc swap D1 > D2 works as expected
- + skipped intro: disc swap D1 > D2 works as expected (I wanted to see if this was causing the issue, it's not)


Additional tests:
- v0.4.9: disc swap D1 > D2 does not work
- v0.1.1: disc swap D1 > D2 does not work


Results of these tests show that:
- making any kind of change to the scripts/code does not break the disc swapping mechanism on PSX, D2 > D3 currently works in v0.4.9 and these tests confirm that D1 > D2 disc swapping works with significant modifications, so something I did specifically is breaking disc swap
- changes to the JenovaLife section from v0.1.1. to v0.4.9 are not causing the issue, the issue was introduced prior to v0.1.1, tests showed that making changes similar to those that are present in v0.4.9 in the JenovaLife section allows the disc swapping D1 > D2 to work as expected, and also just testing the v0.1.1 patch breaks the D1 > D2 swapping, not working as expected


Next steps, burn a patch prior to v0.1.1 and test the disc swapping. Do a binary search on versions prior to v0.1.1, burn them and test to narrow down where the issue was introduced.

### 2024-11-09 14:41:44 — IndividualContributor

https://github.com/individualcontributordev/Final-Fantasy-7-CSR/blob/783be7dc1e88c45287371bf537cd160af0dfe0a7/Final%20Fantasy%20VII%20(Disc%201)%20CSR%20Patch.ppf

### 2024-11-09 14:59:17 — IndividualContributor

At that save from a non-CSR run

### 2024-11-09 15:00:59 — awesomeWaves

well, the save I used was from the current CSR 0.4.7 so i assume it should be broken also

### 2024-11-09 15:19:43 — Okamikaze

So I just tried waves save with my first IC CSR burns and I got into disc 2

### 2024-11-09 15:28:19 — IndividualContributor

I'm testing using a regular burned D2 not a CSR D2 to eliminate D2 CSR from the problem.

### 2024-11-09 16:02:36 — IndividualContributor

This patch is the next to be tested, same scenario and save https://github.com/individualcontributordev/Final-Fantasy-7-CSR/blob/7e3097f71627a7b62e789930c8ed9953761d3955/Final%20Fantasy%20VII%20(Disc%201)%20CSR%20Patch.ppf

### 2024-11-09 16:25:43 — IndividualContributor

This is the list I'm working from https://github.com/individualcontributordev/Final-Fantasy-7-CSR/commits/main

### 2024-11-09 22:30:53 — IndividualContributor

These are the versions left to test:


**Oct 13th, '24**
https://github.com/individualcontributordev/Final-Fantasy-7-CSR/commits/main/?after=a131f848142391ef38630fc89c3e6b6c84cd7c44+34

4946a25d49a2d5516a518d6bd58f373003f26087 new updates for junon

588a8c5eff40c9bcd59a06e85cc6a46fb3fac1be moved part where you name Aeris in any%

3119511f0fb2adebaa601f69e3c565895abfaf74 updates to shinra building and prisons

51293858fbe23cc8a27f3cd6b2d921d65a3993bd added the sleep music back in for 7th heaven and prisons

**Oct 14th, '24**

https://github.com/individualcontributordev/Final-Fantasy-7-CSR/commits/main/?before=a131f848142391ef38630fc89c3e6b6c84cd7c44+35

51653270222384e3dd132aade02d8872ab87583b fixed a bug at jenova on the boat

e433176b2728b80242468c6497185eed4bd377df reduced after jenova dialogues

6bf4c1bb4e730cc97ff1678846e5ab5d2990f155 reduced rufus and after motorball scenes

**Oct 15th, '24**

https://github.com/individualcontributordev/Final-Fantasy-7-CSR/commits/main/?before=a131f848142391ef38630fc89c3e6b6c84cd7c44+35

7e3097f71627a7b62e789930c8ed9953761d3955 from jenny on the block until dyne reviewed and shortened


And next one I'm testing is the middle of these, so **51293858fbe23cc8a27f3cd6b2d921d65a3993bd added the sleep music back in for 7th heaven and prisons**, put your bets in now! Pass ✅  or Fail ❌  <:KEKW:1074810897308069948>

Current result set https://discord.com/channels/936291902133796955/1288235003901120586/1304940556312379492

### 2024-11-09 22:47:53 — IndividualContributor

Moved to here because of character limit:

For the binary search range I'll use the commit hashes in the repo, the dates of commits, and a rough estimate of the middle given the number of commits, the initial range is:

https://github.com/individualcontributordev/Final-Fantasy-7-CSR/commits/main/?before=a131f848142391ef38630fc89c3e6b6c84cd7c44+35

- 65dbdbb (initial commit, Oct 5th, '24) - D1 > D2 disc swap works as expected ✅ 

- 6b20e5a (new update, Oct 12th, '24) - D1 > D2 disc swap works as expected ✅ 

- 5129385 (sleep music back in for 7th Heaven, Oct 13th, '24) - D1 > D2 disc swap works as expected ✅ 

- e433176 (reduced after jenova dialogues, Oct 14th, '24) - D1 > D2 disc swap works as expected ✅ 

// no more versions in here to test

**- 6bf4c1b (reduced rufus and after motorball scenes, Oct 14th, '24) - D1 > D2 disc swap not working ❌**
- 783be7d (dyne..., Oct 15th, '24) - D1 > D2 disc swap not working ❌

- 43b4b0e (v0.1.1, Oct 24th, '24) - D1 > D2 disc swap not working ❌

---

### 2024-11-09 23:42:33 — Hope

in the csr

### 2024-11-10 00:34:09 — IndividualContributor

The thing is I load a non-CSR save file straight into the JenovaLife area, then play from there

### 2024-11-10 01:00:59 — IndividualContributor

---

🎮 Release v0.4.010 https://github.com/individualcontributordev/Final-Fantasy-7-CSR

- Fixed the Disc 1 to Disc 2 swapping issue. After the JenovaLife fight disc 2 would not load correctly, this patch fixes this issue by making a change to the blackbgb_103 script to revert some changes made after Motorball

### 2024-11-10 14:34:27 — IndividualContributor

I've made a change to the repo so there is only one available version which is the latest, each patch will be versioned and stored in the git version history so no need for a folder system for version numbers. Debugging that disc swap issue showed that having all the versions in there own folder was useless because I just eneded up using the commit hash, which was better and more of a fine grained way to identify changes to the patches. 

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-11-10 17:42:42 — IndividualContributor

🎮 Release v0.4.11 https://github.com/individualcontributordev/Final-Fantasy-7-CSR

- Removed the Junon to Jenova boat World Map scene again
- Removed the slow scroll when you first get to the Shinra building
- Top of Wall Market first visit talking to the doorman, 1 text box added back when talking to Aeris
- Sped up handing over the energy drink in wall market
- Added 1 text box before Cid raises hand in the Hotel Lobby for Golden Saucer keystone visit, some runners use Cid as the queue instead of Barret raising his two hands for the option choice
- In Junon after the Dolphin, added back in Cloud shrug when talking to the leader about getting dressed
- Trimmed after Rufus mood mini-game at Junon a bit more 

No changes to Disc 2 or 3 in this release. I also burned this one to disc and tested starting a new game and also the Disc 1 to Disc 2 disc swap after JenovaLife fight, both working as expected. I'll be playing through this patch on disc before making anymore changes, and I'll take some notes for a final trim while I'm doing it. Let me know if you have any further suggestions for changes to disc 1 because I'll be moving onto further trimming disc 2 very soon.

### 2024-11-10 17:49:28 — IndividualContributor

Quick update on the FF7 CSR that is currently being made, the latest release is out and you can get the patches here https://github.com/individualcontributordev/Final-Fantasy-7-CSR, we're nearly finished with Disc 1, and Disc 2 has already got some significant changes. Disc 3 will be trimmed but not until Disc 2 is finished. 

Also this is the thread where we are discussing changes and bugs https://discord.com/channels/936291902133796955/1288235003901120586/1305226142231433256

Message me for more detail.

### 2024-11-11 22:38:14 — awesomeWaves

I had "Tifa turns -> 1 text box -> 2nd option" but it happens super quickly in CSR

### 2024-11-11 23:12:12 — Hope

that said I just think its funny and you can jump from kneeling at the guy who falls over to prison and its better for a csr

### 2024-11-12 17:09:59 — Rendall

<@248225699909861376>  Saw you ran the CSR today, how are the state of things in general. Also was it PSX or Emu I did not catch that info.

### 2024-11-12 18:46:45 — IndividualContributor

Latest patch is here https://github.com/individualcontributordev/Final-Fantasy-7-CSR there will only be the latest patch available for download so whatever is in the repo will be the very latest

### 2024-11-12 19:41:23 — Rendall

Very happy that you took the time to make a CSR of the game ! awesome stuff.

### 2024-11-12 19:43:35 — awesomeWaves

Fun fact about bodcap, who made the FF9 HD CSR. Similar situation, made it to run it. When he was finished he was so fed up with FF9 he never ran it 😅

### 2024-11-12 19:44:09 — Rendall

CSR are savior  !

### 2024-11-12 19:45:33 — Rendall

Would be nice if the board included CSR in the future ! not counting on it, but it would probably bring in more runners

### 2024-11-12 20:12:17 — IndividualContributor

I'm going to create a board using Google Sheets and link it in the GitHub repo for when this CSR is done. We'll keep track until there is a proper board.

### 2024-11-12 20:15:38 — awesomeWaves

I would go ahead with the spreadsheet informally and maybe try make one solid push once the CSR is deemed finished.

### 2024-11-12 21:28:44 — IndividualContributor

Thinking about the CSR, I could add in something during the black screens like the name of the scene or something, then just screenshot them and configure it

### 2024-11-13 12:38:32 — IndividualContributor

I've created an unofficial leaderboard and submission form, the links are on the repo here https://github.com/individualcontributordev/Final-Fantasy-7-CSR?tab=readme-ov-file#unofficial-leaderboard

And if you have any suggestions you can submit them to me using this form https://github.com/individualcontributordev/Final-Fantasy-7-CSR?tab=readme-ov-file#feature-requests-and-bug-fixes

### 2024-11-13 21:51:39 — Deleted User

Does the current CSR work with the new skip?

### 2024-11-13 21:54:47 — Deleted User

Well now that I think about it csr with disc 1 skip might actually be slower than just running the old route 😂

### 2024-11-13 23:40:35 — IndividualContributor

🎮 Release v0.5.0 https://github.com/individualcontributordev/Final-Fantasy-7-CSR

- Added back in the scene after Demons Gate where Cloud gives the Black Materia to Sephiroth
- Added 1 text box before Barret leaves hut in Gongaga where Cloud is lying down
- Jump down the hole to Battle Square and land in Prison after naming Cait Sith
- 1.5 seconds added back in before Ester enters the bottom of the scene before the Chocobo race
- Added back in 1 text box before Bottomswell fight
- Trimmed bottom of tower
- Added back in 1 text box on Broken Road
- Added 4 text boxes back in after Jenova fight on the boat when arm disappears

### 2024-11-13 23:44:48 — IndividualContributor

<@456226577798135808> It does! it will be quicker too because the CSR is exactly like a non-CSR run except a bunch of FMVs are cut and some mashing sections are reduced. Anywhere there is player movement required is left in, but could be trimmed around it while leaving in queues and stuff.

This is the definition I have on the repo for the CSR:

All "skill checks" remain in this CSR (if not let me know and I'll fix it). A skill check is any action a player must perform in game, e.g. choosing an option in dialogues, movement in cutscenes, skips, manipulating RNG, etc. Most FMVs are removed, some cutscenes are shorter, and long mashing sequences have been reduced. This CSR is exactly like a non-CSR run, just shorter.

### 2024-11-13 23:46:59 — IndividualContributor

And I'll be doing the CSR all the way through for 100% too. I'm not sure yet what will be left after any% is done, but I'm sure there will be enough to warrant trimming a bit more. NMS is on the list too. I already have Reactor 5 done lol.

### 2024-11-13 23:48:33 — IndividualContributor

If you have any suggestions I'd appreciate them submitted here https://forms.gle/dW9rMCD9kQ3eBPSM8 so I can keep track of what's left to do

### 2024-11-13 23:56:36 — Hope

Like we're not treating mashing as a skill check in a CSR right

### 2024-11-14 00:01:06 — awesomeWaves

I think there has to be some flexibility with the CSR interms of aiming to try and remove time though

### 2024-11-14 14:41:43 — IndividualContributor

🎮 Release v0.5.1 https://github.com/individualcontributordev/Final-Fantasy-7-CSR

- Fixed an issue where JenovaBirth fight was skipped, oops

### 2024-11-14 14:42:11 — IndividualContributor

---

<@191046608064872449> Link to the form https://forms.gle/dW9rMCD9kQ3eBPSM8

### 2024-11-14 16:28:44 — Deleted User

Ooo 100% CSR exciting

### 2024-11-14 17:10:49 — lemon

I’ve been playing NMS on CSR  patched roms.  Works fine, but yeah almost all of the NMS specific stuff is still there.

### 2024-11-14 22:43:55 — IndividualContributor

## 🎮 Release v0.5.2 
https://github.com/individualcontributordev/Final-Fantasy-7-CSR

- Lots of small mashing/turbo 1 text boxes added back in, removed, or moved
- Don's basement sped up a bit
- Batteries shop trimmed
- Keycard in Shinra building trimmed
- Mayor's password trimmed
- Seeing Jenova in Shinra building sections sped up
- Bottomswell fight trimmed
- Arriving at Costa off the boat, cue for options restored
- Barret's house in Corel Prison cues fixed

### 2024-11-16 15:15:05 — phek1200

Got the CSR working on my duckstation, gonna test it in the next few days

### 2024-11-16 19:17:07 — IndividualContributor

I have the final list of changes for D1 any% https://docs.google.com/spreadsheets/d/19y6yHtODjS5R-VyvtHUKjAo3FL9Fif56p1REQsUzGWg/edit?usp=sharing 

I'll be hopefully making these changes tonight then I'll be playing through D2 and D3 using this form to track any new changes https://docs.google.com/forms/d/e/1FAIpQLSfcZVrLn6QF7-WJVihUU1IwoTfz8Q3eBKBbDSBJ5ez1Q8nWBA/viewform. 

Let me know if there is something missing from the this D1 list in any%. NMS and 100% to be done after any% which will be v1.0.0 of the patch.

## In the next version

- Enter rocket town scroll speed up
- Seeing bronco for the first time, speed it up
- Speed up getting yoshiyuki from old man in rocket town
- a ruined reactor scroll speed up
- entering temple for the first time, remove entire scene with Aeris running up and back to C
- add back in a text box after tseng gives you the key to the temple
- Add back in text box entering template weird field with steps
- add text box back in with Aeris at the fountain after rolling rocks
- in temple, first entering cliff with doors, remove text boxes after aeris asks you a question
- Demon's gate Cloud can just run back as DG is coming out of the wall
- leaving hut in gongaga after template 1 text box
- Reactor 5 train add in some text boxes
- remove R word on stairs

### 2024-11-16 22:06:27 — IndividualContributor

## 🎮 Release v0.5.3 
https://github.com/individualcontributordev/Final-Fantasy-7-CSR

- When first entering rocket town the scrolling to view the rocket was removed
- Seeing bronco for the first time is sped up
- Getting the Yoshiyuki from old man in rocket town is faster
- No scroll in Gongaga fro "a ruined reactor" section
- Entering temple for the first time, removed entire scene with Aeris running up and back to Cloud, party splits and joins then play resumes
- When entinring Temple where Tseng is, added back in 1 text box where Aeris is crying
- Added back in 1 text box entering template on the weird field with steps
- Added 1 text box back in for Aeris at the fountain after rolling rocks
- In temple, first entering cliff with lots of doors, removed text boxes after Aeris asks you a question and joins party again
- At Demon's gate Cloud now just runs back as DG is coming out of the wall
- Leaving the hut in Gongaga after Temple, added 1 text box
- Reactor 5 train added 1 text box for Jessie in 2nd carridge
- Removed R word on stairs

### 2024-11-16 22:53:11 — awesomeWaves

for example, NMS routes don't get it. However if it saved time to get it in CSR as opposed to any% then maybe it could lead to alternative routing specific to CSR. 🤷‍♂️

### 2024-11-17 17:21:00 — awesomeWaves

https://www.twitch.tv/videos/2279033573?t=01h48m28s

### 2024-11-17 18:26:37 — IndividualContributor

## 🎮 Release v0.5.4

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

- Trimmed Reno fight even more
- Trimmed Barret throwing 1500 gil at Cloud
- Reverted most of the Yoshiyuki man in Rocket Town interaction, scroll to see rocket remains

No changes to D2 in this release

### 2024-11-17 18:29:56 — Rendall

I don't run with turbo or anything, but I guess it's up to everyones, it's what a few frames, tho if CSR in itself is a thing and a category im sure not one would care that it is removed ?

### 2024-11-18 02:47:25 — phek1200

i finished a run last night (v0.5.3) with a time 4h 20m <:Kappa:1075235124200886273> 
am writing some of my feedback / comments but i would say generally everything good so far. really great work on this CSR  

https://www.youtube.com/watch?v=hszz1VB5ELk

### 2024-11-18 03:14:06 — Rendall

yeah figured as much, Still feel like some off it could go ! of course I have a very bad opinion of the recording playback to begin with but understand people need time to review the recording , slow it down and load the cheat sheet and fill it in to have a clue and this CSR is for the purpose of any% no slot% currently. I demand a complete CSR ! you runner chasing rng can just adjust w/o the cut scene and use the stair now !  (joking of course) cheers !

### 2024-11-18 07:45:29 — IndividualContributor

I appreciate your perspective Rendall thank you for reviewing the CSR, there are a lot of little things like this throughout the run that we're trying to figure out so keep 'em coming! ❤️

### 2024-11-18 07:47:17 — IndividualContributor

4h20m? Nice <:Kappa:1075235124200886273> we should try make this time the absolute limit of the CSR <:KEKW:1074810897308069948>

### 2024-11-19 00:07:01 — IndividualContributor

There is a channel for the CSR 🎉

https://discord.com/channels/936291902133796955/1307919162534006854

Go over there to follow the latest discussions.

### 2024-11-29 00:27:53 — awesomeWaves

Is there any publicly available version of the beachplug script? I've tried searching but I can only find the output of the script by Dash. Once again it's for CSR so if the actual script is available it might be easier so I can alter it if needs be as the CSR time changes. Thanks

### 2024-12-28 18:05:56 — IndividualContributor

But I can't seem to figure out the memory address for Var[6] which as you mentioned is a temp storage, I'm trying to debug an issue in the CSR where I suspect some hidden variable is being set/not set correctly causing an issue in the NMS route but not in the no slots route.

### 2025-05-04 14:50:24 — Hope

Hi I made a new thing and am curious if there is any feedback or if people want other versions of it. It's a iso hack for practicing steps or exploring new step routes. Currently it just handles the no slots route. Bosses that aren't pre-emptable have been removed, unecessary inactive step screens have been skipped. Additionally it's all on 'disc 1' so you don't need to change disc.
Heres the file: https://drive.google.com/file/d/1oJo8Zx2mj32krIWjJzojuACMjff4lv1w/view
Here's a video of it start to finish:
https://www.youtube.com/watch?v=EevrIl_bwxI

