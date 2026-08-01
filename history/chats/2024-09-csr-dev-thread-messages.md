# CSR development thread (pre-channel)

Original forum-style thread where PSX CSR was born (Sep–Nov 2024).

Channel ID(s): 1288235003901120586
Messages: 1355

Timestamps in UTC as stored by Discord.

---

### 2024-09-29 14:51:16 — IndividualContributor

_(no text)_

### 2024-10-01 17:05:26 — Okamikaze

_(no text)_
- file: Whoopsie.mp4

### 2024-10-01 17:05:31 — Okamikaze

Whoops

### 2024-10-01 17:37:04 — IndividualContributor

Yeah I feel like you can do that in the original too but I'll check it out again tonight thank you!

### 2024-10-01 18:02:27 — Okamikaze

I wasn't anticipating the up left soon enough so didn't switch to just left in time, wouldn't surprise me honestly

### 2024-10-01 19:34:57 — IndividualContributor

I fixed the issue, I skipped a script that made Cloud a ghost so Tifa can't bonk him when she walks there, now he's a ghost and then gets brought back to life after Tifa moves like that so he's bonkable again

### 2024-10-01 19:35:17 — IndividualContributor

I'm uploading the fixed patch now

### 2024-10-02 08:09:26 — IndividualContributor

There should be absolutely zero bugs in the new patches <:Kappa:1075235124200886273>

### 2024-10-03 07:05:43 — IndividualContributor

I found another bug that starts in rocket town disc 1 and doesn't cause an issue until rocket town disc 2 🙃 updated patch for disc 1 incuming

### 2024-10-03 11:47:30 — Okamikaze

Schizo and my party both died last night so wasn't able to test that far, damn

### 2024-10-04 10:01:11 — IndividualContributor

Good <:Kappa:1075235124200886273> it's not a reset issue I don't think so should be fine but I've fixed it just need to test it today a bit

### 2024-10-05 12:47:26 — IndividualContributor

I've updated the main message of this thread to include a link to my GitHub where I'll keep the latest release of the patches.

### 2024-10-05 12:47:37 — IndividualContributor

Here is the link again https://github.com/individualcontributordev/FF7-PSX-Disc-CSR-Patches

### 2024-10-10 07:41:46 — IndividualContributor

Patch update, check the GitHub repo for the patch files

### 2024-10-12 17:38:08 — IndividualContributor

New update! Special surprise for any% runners 😉 (hint: what would you call Aerith if you had a choice?)

### 2024-10-13 15:03:32 — IndividualContributor

New update, made the Jenova, Sample, and Prisons stuff shorter

### 2024-10-13 20:26:24 — IndividualContributor

Added the sleep music back in for 7th heaven and prisons.

### 2024-10-14 00:01:19 — IndividualContributor

Fixed a bug after fighting Jenny from the block where the screen wouldn't load. Pushed new update to GitHub.

### 2024-10-14 00:52:05 — IndividualContributor

Reduced Rufus and after Motorball scenes, new update pushed to GitHub.

### 2024-10-15 20:24:34 — awesomeWaves

Having an issue in Rocket Town after Rude. I'm not even sure what scene is playing but 2 separate events are happening and it softlocks after the fight with the one guy.
- file: image.png

### 2024-10-16 02:42:35 — Okamikaze

Is that in relation to this maybe? Unless you're on the latest build

### 2024-10-16 02:42:58 — Okamikaze

I never encountered it myself so wasn't able to recall earlier unfortunately

### 2024-10-16 08:42:01 — IndividualContributor

Yes, <@248225699909861376> it's fixed in the latest version

### 2024-10-16 10:50:15 — awesomeWaves

Ah okay, thanks. I've had the new version a few days but I didn't have it when I did Rocket Town on Disc 1

### 2024-10-16 11:51:23 — IndividualContributor

Ah ok yeah the bug starts on disc 1 and shows up disc 2 which was a tricky one to debug. You might need to mod your .bin to get past it because it's a RAM value missing, or just use a save state after that point. Let know if you're stuck.

Or I could send you a patch to fix it temporarily.

### 2024-10-16 11:55:55 — awesomeWaves

I'm only making practice saves anyway so i just edited the story value and skipped Rocket Town. It was the only way I could figure a work around

### 2024-10-16 11:57:32 — awesomeWaves

The only other jarring thing I noticed was the Cargo Elevator in Junon. I guess the FMV for it moving up and down has been removed but I didn't know that so when I interacted with the button again it played a section of cloud giving Sephiroth the black materia in the Norther Crater. Jump scared the hell out me 😅

### 2024-10-16 11:58:48 — IndividualContributor

I haven't touched that section lol, I'll have to test the latest version. Is there any chance you just had the wrong disc loaded at that point?

### 2024-10-16 12:00:13 — awesomeWaves

No i don't think so, I only pointed Duckstation to the CSR files folder for the entire time I was making these saves

### 2024-10-16 12:04:24 — IndividualContributor

I'll test it anyway but maybe it was something on an older patch version that I'm unlikely to be able to reproduce, let's see. The latest patch has a ton of new stuff to shorten the CSR even further so definitely worth a go. 

And I'm getting close to finalizing the whole thing because I don't want to be updating it while others are running it and getting times.

### 2024-10-16 12:04:42 — IndividualContributor

Any suggestions are appreciated <@248225699909861376>

### 2024-10-16 12:05:42 — awesomeWaves

Absolutely, I just grabbed the newest version last night when I was softlocked in Rocket Town so I'll run through the whole thing again in the next few days and take some notes as I go

### 2024-10-16 12:05:55 — awesomeWaves

Thanks for making it, made skimming through the game a breeze

### 2024-10-16 13:17:39 — Okamikaze

Did you insert disc 2 early by chance?

### 2024-10-16 13:20:13 — Okamikaze

Granted when that happens, if you're running up to the highwind I've pondered that it maybe saves or loses steps. Because it messes up that fmv after doing so too. If you didn't encounter that then maybe not

### 2024-10-16 17:29:09 — Teeejj

how long are we estimating a no slots run on the newest version? any ballparks?

### 2024-10-16 23:21:46 — Okamikaze

I think it can definitely go atleast sub 4:40 currently. From what I gather IC's current goal is to make sub 4 possible with a sub 6:40 tier run, as arbitrary as that is

### 2024-10-17 00:22:31 — awesomeWaves

I got up to Temple this evening and I've a lot of notes taken and some suggestions. I'll finish my practice run tomorrow and I'll have a complete set of suggestions I can DM you then

### 2024-10-17 08:12:11 — IndividualContributor

Nice thanks <@248225699909861376> !

### 2024-10-17 08:14:14 — IndividualContributor

<@289891674660929538> yes sub 4 hours should be doable in the next week or so, I want to incorporate as much feedback as I can and fix all the bugs before setting it in stone hopefully end of next week.

### 2024-10-17 08:55:02 — Teeejj

My goat

### 2024-10-17 12:23:48 — Okamikaze

I wish I had more time to try it out myself, but waves has been embracing csr's longer than anyone I know so his feedback is incredibly valuable

### 2024-10-17 23:34:10 — IndividualContributor

Pushed a new update, more stuff refined up to Gongaga after temple. Warning, I haven't tested this update extensively yet but will over the next few days, but from what I have tested it's stable.

### 2024-10-18 00:21:10 — awesomeWaves

I didn't get time to completely finish my practice today as planned. I have notes for all of Disc 1 I can tidy up and send over if they help

### 2024-10-18 07:30:34 — IndividualContributor

Yes please, send them over.

### 2024-10-19 21:14:08 — IndividualContributor

Do you happen to have a DS save state for this? I think I know why you saw it, there is code to "save the next frame of a movie" before a movie is played, so it essentially fast forwards the movies to the next one each time one is played. So I may have skipped this fast forwarding to an elevator clip so when you hit the elevator the little clip of the elevator moving is not read from the right place on disc. It just happened to me before the gas chamber stuff on disc 2.

And just to clarify, you're using the elevator for "Return to Junon"? which is after "Cloud's Dreams"? on Disc 2?

UPDATE: I've just been trying to reproduce the issue and I can't get it to play the Cloud giving Seph the black materia video, but I can play the Golden Saucer videos if I switch to Disc 1 before going in the elevator before Carry Armor. The code also correctly sets the video stuff before hitting the button so with the right disc in it plays as normal on my save state. I'm wondering if some variable during the "Cloud's dream" scenes was skipped causing an issue in the elevator but I've tested from gas chamber up to the elevator before Carry Armor now and can't reproduce. So it's likely something before the gas chamber section messing with the elevator later on.

### 2024-10-20 09:33:44 — IndividualContributor

Final Fantasy 7 CSR Patches (IndividualContributor)

### 2024-10-20 14:36:55 — awesomeWaves

here's the save state for Duck for that issue. i tried it again and it's still the same. However, that wasn't noticed on redoing the saves so i'd assume it's already been fixed (but you can still see it on a newer version of the CSR using this save)
- file: 47_Enter_Junon_MENU.sav

### 2024-10-20 14:37:05 — awesomeWaves

but, for testing it's there if you wish to see it

### 2024-10-20 15:06:45 — awesomeWaves

Just checked the newest version and I can't get passed the start of the game

### 2024-10-20 15:06:54 — awesomeWaves

just stays on black screen

### 2024-10-20 15:12:25 — awesomeWaves

I repatched just to test and it still doesn't work. Once you hit New Game its just black screen

### 2024-10-20 15:12:31 — awesomeWaves

if anyone else has a moment to test

### 2024-10-20 16:30:18 — awesomeWaves

it could be something else, but to just get some practice in I loaded a state at the start of the game then manually changed disc to the new CSR. All worked as intended up until the APs exp screen. Once the fight had finished and I accepted the rewards etc, it froze at a black screen with the fanfare music still playing. Just said I'd mention it, but it might be a false error.

### 2024-10-20 18:30:15 — Okamikaze

Yeah I'm having the same issue

### 2024-10-20 18:41:45 — awesomeWaves

Thanks for checking, not just me then.

### 2024-10-20 18:54:30 — Okamikaze

Yw. It's even giving me black screens after loading save states I would normally swap in csr for

### 2024-10-20 19:18:46 — IndividualContributor

I'll push the latest patch that I'm working on now, starting a new game is fine for me I'm doing a run of Disc 1 now, and will checkout the Aps stuff too. I'm wondering if save states are causing the issues because your essentially saving RAM values which will remain broken if you saved on a previous patch and then load the saved state with a new patch, some issues will still be there because variables were not set correctly. I've also seen some issues using save states where I load one and then swap to the patched disc and I get double boss fights and stuff like that. I would say if you're using save states try to make a save at least 2 fields from a CSR edit, for example in temple make a save on the world map and then maybe another on the weird maze screen so that you can test entering template and the rolling rocks screen.

### 2024-10-20 19:19:06 — IndividualContributor

I'll push the new patch now and continue testing.

### 2024-10-20 19:20:15 — IndividualContributor

Oh and for testing while doing a run try to use a single run, i.e. only use save states created during the run and not from other runs. This way you'll be able to verify that RAM values are set correctly as you progress through the run based on the patch edits.

### 2024-10-20 22:45:11 — IndividualContributor

Using this save state I can get the Cloud giving Seph the black materia video lol. <@248225699909861376> did you say it's not happening with the latest patch?

### 2024-10-21 08:54:31 — awesomeWaves

From making CSRs I know the loading ran issues

### 2024-10-21 08:54:59 — awesomeWaves

I loaded the patched iso manually and booted the game from there

### 2024-10-21 08:56:02 — awesomeWaves

As for the FMV glitch Idk. I'll check a save state soon to see

### 2024-10-21 09:55:08 — IndividualContributor

I've just tested patching an original .bin and starting a new game and it's working for me, I'm interested to know more about this issue if you have more details.

### 2024-10-21 09:55:52 — IndividualContributor

I've also pushed the latest patch with changes to D1 based on the feedback, thank you again!

### 2024-10-21 18:09:51 — awesomeWaves

Unzipped a fresh ISO file to be sure nothing crazy was going on. Downloaded the latest patch files and tried to boot up

### 2024-10-21 18:09:59 — awesomeWaves

Same issue unfortunately, doesn't get past the opening FMV

### 2024-10-21 20:32:19 — Okamikaze

Yeah I just ripped a fresh ISO and applied the new patch. Still doing it for me too

### 2024-10-21 20:34:18 — awesomeWaves

Could you check after Aps also Okami

### 2024-10-21 20:34:31 — awesomeWaves

you'll have to load a state, then manually change disc. Then fight aps

### 2024-10-21 20:46:43 — Okamikaze

Yeah it gets stuck after the spoils screen

### 2024-10-21 20:49:28 — awesomeWaves

thanks for checking

### 2024-10-21 21:13:42 — IndividualContributor

I've just done the same and can reproduce the issue with the new game not loading... this is very weird because I have another .bin that it works fine with

### 2024-10-21 21:13:47 — IndividualContributor

I'll check it out now

### 2024-10-21 22:59:44 — IndividualContributor

Ok I've figured out when I introduced the issue but I have to basically erase all the edits made since then... haven't figured out what the root cause is though so I might just make the edits again, might be quicker than debugging this. I'll push the stable patches to the github repo but will be updating over the next few days to get back to where I left off.

### 2024-10-23 17:31:49 — awesomeWaves

hey, I'm planning to burn a version later this evening so I can run it tomorrow on PS2. If there's a new stable version that has anything you'd like checked just let me know and I'll burn with that patch.

### 2024-10-24 09:06:37 — IndividualContributor

I'll push the latest patch today, what time?

### 2024-10-24 09:07:42 — IndividualContributor

I had planned to work on it a bit today so if I have time I'll make more changes then push for you to test

### 2024-10-24 12:47:37 — awesomeWaves

Ah no worries, I'm just getting prepared now so I'm going to burn whatever version is currently pushed

### 2024-10-24 12:58:31 — IndividualContributor

wait gimme two minues

### 2024-10-24 12:59:36 — awesomeWaves

ah lol ok

### 2024-10-24 12:59:37 — awesomeWaves

thanks

### 2024-10-24 13:00:08 — awesomeWaves

is there any chance you could slap a version number onto the patches?

### 2024-10-24 13:00:12 — awesomeWaves

just for reference

### 2024-10-24 13:00:28 — awesomeWaves

or even just mention it in the changes log, which version it is.

### 2024-10-24 13:00:41 — awesomeWaves

and I'll put them into folders locally with that version number

### 2024-10-24 13:00:59 — awesomeWaves

it'll be easier to track changes/updates on my end then also to give correct feedback

### 2024-10-24 13:01:02 — IndividualContributor

I've been using the commit hash on GitHub but yeah I need do versioning better, I'll start after this one

### 2024-10-24 13:01:18 — awesomeWaves

perfect thanks

### 2024-10-24 13:06:18 — IndividualContributor

ok should be good to pull the latest patch https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-10-24 13:06:33 — awesomeWaves

Thank you kindly!

### 2024-10-24 13:11:24 — IndividualContributor

The latest version is v0.1.1 I'm reluctant to put the version number in the filename so I'll do as you mentioned and update the CHANGELOG.md file with the version and the changes, with the most recent version being the latest

### 2024-10-24 13:12:56 — IndividualContributor

I'm hoping that you don't encounter the Aps issue because I haven't tested it from start to Aps yet, but you should be fine, if not I'll be online today to fix it asap if needed

### 2024-10-24 13:14:06 — awesomeWaves

Honestly, don't worry about adding a version number. it's probably worth doing tbh

### 2024-10-24 13:14:39 — awesomeWaves

I have to manually remove `(patched)` from the filename already, so removing another few characters won't make any difference

### 2024-10-24 13:17:51 — IndividualContributor

done, filenames should include the version number now

### 2024-10-25 06:26:16 — IndividualContributor

New release v0.2.0

### 2024-10-26 23:16:55 — IndividualContributor

New release v0.3.0 https://github.com/individualcontributordev/Final-Fantasy-7-CSR

I'm pretty sure I've addressed all feedback related to Disc 1, so given there are no more suggestions for Disc 1 it could be done? 

<@248225699909861376> <@170713534726930432> <@289891674660929538> <@785294612444479568> <@191046608064872449>

If you have a chance to run Disc 1 and let me know if you have anymore suggestions that would be great!

The most significant changes were to Temple I'd say but I was able to trim a ton from other places too.

### 2024-10-26 23:22:53 — Okamikaze

Do you reckon I should burn discs this time around to test it?

### 2024-10-26 23:37:26 — IndividualContributor

No use emulator until we verify a run can finish Disc 1 start to end. I'd avoid using save states to jump around or even mem card saves because ideally we need a full end to end run of Disc 1.

### 2024-10-26 23:38:25 — IndividualContributor

I'm going to start a run and test it over a few days to be sure it's working before I burn discs.

### 2024-10-26 23:43:27 — IndividualContributor

Saves states are fine as you run, just don't use save states from different runs because of changes in RAM as the run progresses. E.g. a bug was found in disc 2 because some variables were incorrectly set mid disc 1

### 2024-10-27 00:37:13 — awesomeWaves

Yo IC, thanks for the update. I look forward to testing it. I'll just burn it anyway tbh and give it a proper run on console to see how it goes.

### 2024-10-27 00:37:38 — awesomeWaves

I'll try do it tomorrow but my next week is quite busy and tied up so fingers crossed

### 2024-10-27 12:17:48 — IndividualContributor

Preview of release v0.3.0, Start to Junon parade game test https://youtu.be/Lc3FmvNR6qo (might still be uploading so give it a little while). I got to Chocobo Ranch with an IGT of 1:10:XX and I'm shit at running <:KEKW:1074810897308069948>

### 2024-10-27 13:49:36 — awesomeWaves

Before I go burning both discs, am I right to believe D2 is the same in version 0.2 and 0.3?

### 2024-10-27 13:49:40 — awesomeWaves

so i just need a new D1

### 2024-10-27 14:35:16 — IndividualContributor

Yes

### 2024-10-27 14:35:40 — IndividualContributor

I have trimmed D2 but it hasn't changed in 0.2 or 0.3

### 2024-10-27 16:05:25 — IndividualContributor

Notes from the preview run above that I'll be doing next:

After materia tutorial 
Wall market fat guy to the right after menu
After eating Korean BBQ 
Scene before shinra building speed up
After key card in shinra building 
After mayor password 
Before Sample
Chocobo billy
Entering Junon
Junon granny's house

### 2024-10-27 16:57:34 — awesomeWaves

https://www.twitch.tv/awesomewaves/clip/StrongDeterminedCormorant4Head-nzrI6sBy32OH4s0D

### 2024-10-27 17:01:00 — awesomeWaves

my only 3 noted things from today were:
-wig/squats
Could trim before Big Bro starts to walk towards cloud and after he wig has been recieved.
-pre-Reno screen
After talking to Barret you could effectively skip the next screen where reno pushes the button. It serves no real purpose.
-boarding ship
After the send off Minigame could be trimmed. Lots of nothing happening there.

### 2024-10-27 17:23:40 — awesomeWaves

I just noticed it went up on SRC so I'll send a ping <@183261151746850816> because it's a critical error I would say

### 2024-10-27 19:45:06 — IndividualContributor

I saw that chocobo bug on your stream earlier for a couple minutes but had to go, sorry about that. It's very likely the world map cutscenes before and after Jenny on the boat. I'll fix it tonight push an update. Thanks for running it! Hopefully you're not getting discouraged with these run ending bugs. I almost got that far on my run earlier but didn't have time.

### 2024-10-27 19:53:39 — awesomeWaves

Yeah we figured that was the connection, with those Boat WM scenes being changed.

### 2024-10-27 19:54:02 — awesomeWaves

Always and ever, no need to apologise as I'm just learning NoSlots anyway I'm happy to send runs into the abyss as practice and testing

### 2024-10-27 19:55:26 — awesomeWaves

Lmk if/when you push a fix as I'm actually free tonight so i could potentially do more testing

### 2024-10-27 20:00:20 — IndividualContributor

Disc 2 needs alot of trimming I think if you have a chance to run that? I'll be working on D1 and D2 tomorrow for a few hours but I'll likely get online tonight maybe 11.30 / 12 to fix that chocobo bug. I'll post in here when I push it.

### 2024-10-28 00:04:03 — awesomeWaves

OK, I think there may be another 'hanging FMV' but this time it occurs during the Final Descent
- file: image.png

### 2024-10-28 00:04:24 — awesomeWaves

It's a Golden Saucer FMV thats playing in the background

### 2024-10-28 00:04:51 — awesomeWaves

I'm using an OG Disc 3, but I guess because I played all the way through Disc 2 to here with the CSR that some value is incorrect

### 2024-10-28 00:11:48 — awesomeWaves

lol
- file: image.png

### 2024-10-28 00:17:35 — Hope

This is actually awesome

### 2024-10-28 00:18:02 — awesomeWaves

Everyone wanted to see a Sephiroth Elevator fight

### 2024-10-28 00:18:13 — Hope

I just love the "Caution"

### 2024-10-28 00:18:20 — awesomeWaves

it kind of looks like everyone is jumping down to the elevator

### 2024-10-28 09:43:52 — IndividualContributor

Uh oh KEKW. I'll take a look soon, I'll first try fix the chocobo bug and push that fix then I'll look at these lol

### 2024-10-28 13:11:53 — IndividualContributor

Released v0.3.1 to fix the Cloud is a Choccobo bug KEKW

### 2024-10-28 13:13:07 — Hope

What parti ularly causes that do you know

### 2024-10-28 13:13:18 — Hope

The cutscene somehow makes cloud not a chocobo???.

### 2024-10-28 13:59:45 — IndividualContributor

Yeah I'm not sure because I don't have access to the WM script that is meant to run there

### 2024-10-28 14:21:34 — Doumeis

I'll patch my roms today and try NMS <:doumeiBday:1025884508110725140>

### 2024-10-28 14:21:42 — IndividualContributor

HYPE!

### 2024-10-28 14:21:47 — Doumeis

if I find anything weird I'll let you know

### 2024-10-28 14:21:48 — IndividualContributor

Ty Doumeis

### 2024-10-28 14:22:12 — IndividualContributor

Yes please do and take notes if you can for things you think should be changed

### 2024-10-28 14:22:24 — IndividualContributor

I'll be working on Disc 2 soon

### 2024-10-28 14:22:34 — Doumeis

will do 🫡

### 2024-10-28 14:22:38 — Doumeis

nice!

### 2024-10-28 18:01:51 — IndividualContributor

I've found some Audio issues in D2 and I'm up to Cloud's dream. I've fixed the audio bugs and I'll fix whatever serious issues I find in the rest of the run tonight with the intention of pushing a new fix patch later tonight. I'll be gathering the feedback I have for D2 tomorrow and working through it.

FYI Latest v0.3.1 fixes the Chocobo Cloud bug that is a run killer.

### 2024-10-28 20:35:03 — IndividualContributor

Is FD Manip in CoTA different for emulator? I'm verifying list advances as expected in CoTA but I'm seeing a weird issue. Just before Cloud get's on the phone list is 55 which is correct, but when the FMV plays and the scene where Scarlet says "Sister Rays!" plays list stops but it's stopping on an incorrect list value while the FMV is playing, stone is 49.

### 2024-10-28 20:37:28 — IndividualContributor

So it should be list 141 when Scarlet says "Sister Rays!" but in Duckstation its two values behind at 43.

### 2024-10-28 20:37:43 — IndividualContributor

As if the FMV is playing faster or something

### 2024-10-28 20:43:06 — IndividualContributor

Ok so actually the dialogue boxes before the FMV load 1 list value before at 71 instead of 120. Comparing to Dash's tutorial after 3 text boxes the list is different.

Is this normal?
- file: image.png

### 2024-10-28 20:45:02 — IndividualContributor

If I advance to the next text box on Duckstation list goes to 33, it's like 1/2 text box behind since the start of the phone scene
- file: image.png

### 2024-10-28 20:56:04 — Hope

Isn't Dash's on bizhawk which is more likely the issue?

### 2024-10-28 21:02:45 — IndividualContributor

<@158301632776503296> are you aware of an issue with bizhawk or Duckstation for FD manip?

### 2024-10-28 21:15:37 — IndividualContributor

Ah I wasn't aware of Bizhawk being different to PSX slightly

### 2024-10-28 21:16:04 — Hope

I think he says it in the tutorial if I'm not mistaken? It's been a while since I watched the video though so grain of salt on my memory being bad

### 2024-10-28 22:08:10 — IndividualContributor

Ok it's looking like v0.3.1 is stable start to finish. I'll start working on D2 trims now
- file: image.png

### 2024-10-28 22:17:14 — Dash Retro

Yes, it takes Bizhawk too long to load the FMV when Cloud gets the phone call which makes you leave on a later List making the rest of the manip much tighter

### 2024-10-28 22:18:24 — Doumeis

I know on Duck you have to walk ~1.5 steps after entering Bone Village due to loading times

### 2024-10-28 22:18:33 — Doumeis

or just wait a bit more after the IGT shift but I prefer walking

### 2024-10-28 22:18:33 — IndividualContributor

Ah ok thanks, I couldn't get the correct list out of that section on Duckstation, but maybe it's just me

### 2024-10-28 22:18:46 — Dash Retro

Duckstation probably has the opposite problem of loading too fast, yeah

### 2024-10-28 22:19:14 — Dash Retro

But "too fast" should still work because the trick lands you at the end of the window usually

### 2024-10-28 22:20:58 — Dash Retro

Quick maybe dumb thing to make sure of is: what is the refresh rate on your Cheat Engine?  By default, it updates quite slowly so screenshots might have data that appears behind where it should be

### 2024-10-28 22:22:47 — Dash Retro

Near the bottom of General Settings
- file: image.png

### 2024-10-28 22:25:10 — IndividualContributor

Oh mine is 500ms

### 2024-10-29 21:02:26 — IndividualContributor

I have a break timer working https://youtu.be/khv_G7X_p7Y just need to set up the scene now

### 2024-10-29 21:03:15 — IndividualContributor

Any preference on the Cosmo music being played during the break?

### 2024-10-29 21:04:07 — IndividualContributor

I'm going to put the break after DG and before Gongaga where Cloud wakes up, so where it is now basically.

### 2024-10-29 21:04:48 — IndividualContributor

This seems to be half way in the CSR, and coincidentally half way in the non-CSR no slots too right?

### 2024-10-29 21:24:34 — IndividualContributor

And should there be a conversation happening? or just everyone silent sitting around the fire?

### 2024-10-29 21:32:24 — IndividualContributor

I want to put Sephiroth sitting by the fire too KEKW

### 2024-10-29 21:33:14 — IndividualContributor

Or off in the background on his own

### 2024-10-29 21:33:34 — IndividualContributor

But that's kinda sad, I'll put him by the fire lol

### 2024-10-29 21:39:08 — awesomeWaves

Great work! yeah he looks a tad lonely ha. It doesn't need any text imo but if the others were there it would be cool.

 Are you going to put the option to 'Continue Run' in also?

### 2024-10-29 21:40:09 — IndividualContributor

I have to add them each manually, forgot about the continue run option I'll put that in now
- file: image.png

### 2024-10-29 21:41:27 — awesomeWaves

and just a reminder, put the option to continue run as the 2nd option

### 2024-10-29 21:41:33 — awesomeWaves

just so you don't mash/turbo through it

### 2024-10-29 21:42:22 — IndividualContributor

Ah ok yes I'll put it second

### 2024-10-29 21:43:13 — awesomeWaves

as you had asked about the music. The FF8 and FF9 (PC) CSRs have an extra 2nd option to play a random track.

### 2024-10-29 21:43:49 — awesomeWaves

_(no text)_
- file: image.png

### 2024-10-29 21:43:55 — awesomeWaves

This is the FF8 CSR break screen

### 2024-10-29 21:44:41 — IndividualContributor

I think the random music selection should be easy enough to do, I'll leave it until last but should be fine

### 2024-10-29 21:44:49 — awesomeWaves

awesome

### 2024-10-29 21:45:38 — awesomeWaves

I have mentioned I've less time for testing this week but if there are some further updates to disc 1 or disc 2 I'll try check them out

### 2024-10-29 21:47:21 — IndividualContributor

Okami and I have verified v0.3.2 is stable from start to finish so I'm going to finish this break timer and then move onto trimming down big chucks of D2 based on feedback. Then we'll review the whole thing again for a final trim so I think when I'm done with D2 having you all test that would be great to give further feedback for the final trim.

### 2024-10-29 21:49:17 — IndividualContributor

I've taken a few notes myself for things in D1 but will do on the final trim because they're minor. And when I say "final" I mean almost final because once trimming is done I want to review it for muscle memory or expected number of text boxes before choices, etc. And maybe wait frames to allow for IGTs to be read.

### 2024-10-29 21:53:05 — awesomeWaves

Ah ok cool. I'll hold off on burning a new CD1 until the version with the break is done then as that will effect my current splits and I'll continue testing from there.

### 2024-10-29 21:53:11 — awesomeWaves

Thanks for all the work again

### 2024-10-29 21:55:05 — IndividualContributor

Cool I'll likely have it pushed tomorrow night, or maybe before if I can find a few hours.

### 2024-10-29 22:43:03 — IndividualContributor

Ok so I have the main cast in now https://youtu.be/jkaLAeB2JZU

### 2024-10-29 22:43:34 — IndividualContributor

Should I add Bugen and Sephi?

### 2024-10-29 22:45:30 — IndividualContributor

Can't add Bugen for some reason so meh

### 2024-10-29 22:45:34 — IndividualContributor

I'll try Sephi

### 2024-10-29 22:51:41 — Hope

It's going to be longer than 30 seconds right

### 2024-10-29 22:51:58 — IndividualContributor

Yeah I'm going to set it to 5 minutes

### 2024-10-29 23:02:01 — Teeejj

amazing work Contributer

### 2024-10-29 23:02:18 — Teeejj

I fully look forward to running this when its done

### 2024-10-30 00:38:38 — IndividualContributor

Ok so I've added a text box with 3 choices, first is for Turbo, second will just set the timer to zero and continue the run, the third let's you pick between the 3 songs available in this field. Unfortunately I don't think it's possible to play any song, I've tried a few things and Googled a bunch of stuff but no luck. Having 3 songs is better then none so I'll leave it in, and someone might know how to get random songs playing from here later. https://youtu.be/-EjQHtFeSxA

### 2024-10-30 00:43:20 — awesomeWaves

Astounding Job!

### 2024-10-30 00:45:06 — awesomeWaves

For consistencty between 7/8/9 you could put the music as option 2 is my only feedback 😅

### 2024-10-30 00:45:37 — awesomeWaves

and I guess you couldn't get Sephi in?

### 2024-10-30 00:46:48 — IndividualContributor

I just noticed the option positions and just did what you said there lol https://youtu.be/1hBDTBWhcXA

### 2024-10-30 00:47:18 — IndividualContributor

I tried to get Sephi in but he was showing up as a flesh colored rectangle KEKW

### 2024-10-30 00:48:24 — awesomeWaves

haha

### 2024-10-30 00:48:58 — awesomeWaves

love the rainbow text

### 2024-10-30 00:49:13 — IndividualContributor

I know it's class! lol

### 2024-10-30 01:35:13 — IndividualContributor

Release v0.4.0 which includes the 5 minute break after Demon's Gate. Prayge I haven't balls'd something up KEKW

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-10-30 01:35:54 — awesomeWaves

Well done dude.

### 2024-10-30 11:00:15 — IndividualContributor

I'm actually excited to play this myself properly lol

### 2024-10-30 11:01:47 — IndividualContributor

Easter egg: the 5 minute break scene happens at Game Moment 42069 <:KEKW:1074810897308069948>

### 2024-10-30 11:06:20 — IndividualContributor

I would have used 69420 but it's a 16 bit variable.

### 2024-10-30 11:07:08 — IndividualContributor

I need to remember to re-add the "Sephi in a blue egg" scene because there is movement

### 2024-10-30 11:58:16 — Teeejj

Ain't no way <:KEKW:1074810897308069948>

### 2024-10-30 22:49:44 — awesomeWaves

I was just considering what you guys said about the break not being useful in Any%

### 2024-10-30 22:49:53 — awesomeWaves

I guess you could always move it to the end of Disc1 if needed

### 2024-10-30 22:49:58 — awesomeWaves

then it would cover all bases

### 2024-10-30 23:01:29 — Hope

Is there a reason to add a break to a 3 hour run?

### 2024-10-30 23:01:41 — Hope

I'm assuming the break time is being discounted from the timer

### 2024-10-30 23:03:16 — awesomeWaves

it's the standard for CSRs now. FFX is 3 hours and is adding a break shortly

### 2024-10-30 23:36:45 — awesomeWaves

https://www.twitch.tv/doumeis/clip/DirtyTenuousWaffleBabyRage-KfBI5r4lBeFqiGIP

### 2024-10-30 23:37:03 — awesomeWaves

On entering the elevator it went down, instead of up lol

### 2024-10-30 23:37:15 — awesomeWaves

not sure if it's a CSR thing or not but just posting for reference

### 2024-10-30 23:41:14 — awesomeWaves

sorry forgot to reply to that. I think for FF9 they're planning on removing it manually

### 2024-10-30 23:41:34 — awesomeWaves

the easiest is to actually just leave the break play out and then remove 5 mins off the endtime

### 2024-10-30 23:41:47 — awesomeWaves

but it's up to the mods if/when the board is created

### 2024-10-30 23:42:45 — awesomeWaves

They're already discussing making the boards (for the PSX CSR, they already have the HD CSR boards) in their discord right now.

### 2024-10-30 23:43:04 — awesomeWaves

So there should be a good guideline of implementation shortly

### 2024-10-30 23:51:13 — IndividualContributor

For the PSX no slots no oceanfly? route it makes sense for it to be where it is now in CSR, after DG because that's roughly half way through. But if you're doing the oceanfly skip then where would half way be?

### 2024-10-30 23:52:47 — awesomeWaves

Until the run is actually fully routed and ran, it's going to be hard to guess. It's going to be a little later obviously

### 2024-10-30 23:53:18 — awesomeWaves

the skip itself takes like 8 mins? plus everything after (for a while) is slower

### 2024-10-30 23:53:23 — IndividualContributor

Would adding a break every X number of hours work?

### 2024-10-30 23:53:55 — awesomeWaves

I think that reduces the chance of it getting a board quicker, if mods need to retime mulitple breaks 😅

### 2024-10-30 23:54:12 — IndividualContributor

Yeah true

### 2024-10-30 23:54:30 — awesomeWaves

it might be a quick fix to slap the break at the end of Disc 1 or start of Disc 2

### 2024-10-30 23:54:48 — awesomeWaves

it is quite long until a break but it's managable

### 2024-10-30 23:54:56 — awesomeWaves

but it would cover all bases for now

### 2024-10-30 23:55:34 — awesomeWaves

but considering the Aerith House scene is in, which is 3 minutes it's not all that bad (if you're not doing elevator manip)

### 2024-10-31 00:00:21 — IndividualContributor

Ok I can move it to end of Disc 1, it's just DG, Bone Village and JLife then break right?

### 2024-10-31 00:01:02 — awesomeWaves

yup, it's not all the much. Another 10+ mins maybe?

### 2024-10-31 00:01:08 — IndividualContributor

Whereas with oceanfly skip it's Midgar, CoTA, JLife, then break?

### 2024-10-31 00:01:35 — awesomeWaves

yup. They might run back to Bone Village or some other stuff but yeah that's the jist

### 2024-10-31 00:02:15 — IndividualContributor

Ok that's not too much of a difference then I guess. Feels like the run will be longer past the break for oceanfly right?

### 2024-10-31 00:02:37 — IndividualContributor

I know we don't know for sure but roughly

### 2024-10-31 00:02:56 — awesomeWaves

yeah it's just an estimate, but at least they still get a break with moving it to after Jlife

### 2024-10-31 00:03:45 — IndividualContributor

I'll move it so to end of Disc 1 after Cloud is standing on the spiral, before the "Save game?" Choice

### 2024-10-31 00:05:01 — awesomeWaves

just a reminder to have a look at this also

### 2024-10-31 00:05:57 — IndividualContributor

😬 I hope that's not the CSR because I haven't touched any of that section, it's not in any%

### 2024-10-31 00:06:33 — awesomeWaves

I wonder if its something changed in the first reactor's elevator?

### 2024-10-31 00:06:41 — awesomeWaves

that some flag is left checked/unchecked

### 2024-10-31 00:10:30 — IndividualContributor

I did trim the "setting the bomb" in the GS part I'll check it out tomorrow

### 2024-10-31 10:11:49 — IndividualContributor

Break is at the end of Disc 1 now in the latest patch, releasing now https://youtu.be/qEmZ17lsNpY

### 2024-10-31 10:12:08 — IndividualContributor

Insert Disc 2 image was on point with the music lol

### 2024-10-31 10:35:55 — IndividualContributor

Release v0.4.2 https://github.com/individualcontributordev/Final-Fantasy-7-CSR/tree/main/v0.4.2

Break moved to end of disc 1

### 2024-10-31 10:54:13 — IndividualContributor

I'm going to re-add the "Sephi in a blue egg" scene now

### 2024-10-31 11:44:07 — Doumeis

thanks for clipping, Waves

### 2024-10-31 11:44:36 — Doumeis

on a previous run I just thought I turbo'd thru and pressed the elevator twice

### 2024-10-31 11:45:03 — Doumeis

but this time we noticed it went straight down lol

### 2024-10-31 11:46:23 — Doumeis

I was thinking this, it might have something to do with the elevator from the first reactor

### 2024-10-31 12:15:45 — IndividualContributor

_(no text)_
- file: 2024-10-31_12-14-49.mp4

### 2024-10-31 12:15:55 — IndividualContributor

I've just tested this and I can't reproduce sadge

### 2024-10-31 12:17:13 — IndividualContributor

I'll test from start because this was from "before Guard skip" so it's likely something going wrong from start and first reactor

### 2024-10-31 12:18:36 — IndividualContributor

just curios was your run from "new game"?

### 2024-10-31 12:18:47 — IndividualContributor

save states from other runs cause some weird stuff to happen

### 2024-10-31 12:26:46 — IndividualContributor

<@132969911239704576> was also surprised by this bug <:KEKW:1074810897308069948>
- file: 2024-10-31_12-24-38.mp4

### 2024-10-31 12:27:50 — IndividualContributor

I'll fix this today, it's 100% something going wrong in the first reactor changes

### 2024-10-31 12:28:17 — IndividualContributor

they must use the same variable or something and I've skipped it in reactor 1

### 2024-10-31 12:48:13 — Hope

You should be able to just check what the elevator field is checking for when you talk to the button?

### 2024-10-31 13:15:44 — IndividualContributor

Yeah true, weird though as I didn't touch any elevator stuff, literally just the start naming part and the planting the bomb part

### 2024-10-31 13:16:43 — IndividualContributor

And there is soooo many text boxes for NMS right now 😬 sorry Doumeis

### 2024-10-31 17:01:51 — Doumeis

hey it's all good <:doumeiLUL:1025884511046750378>

### 2024-10-31 17:02:19 — Doumeis

the any% parts that it skips is already worth a lot of time

### 2024-10-31 17:03:27 — Doumeis

I can always fast forward those anyway for now

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

### 2024-11-01 19:42:26 — IndividualContributor

Except after every change (incision) I have to sow them back up (save) and wake them (run emulator) to make sure they're not dead or something worse

### 2024-11-01 19:43:02 — IndividualContributor

There has to be surgery simulators right?

### 2024-11-01 19:44:37 — Hope

Oh I have mem card saves of like the entire no slots route with an op cloud I could have given you btw to test any section

### 2024-11-01 19:45:38 — IndividualContributor

I just use Cheat Engine to freeze stepid and danger, then add skips over bosses if I need to get to a specific section lol

### 2024-11-01 19:45:56 — IndividualContributor

There is a very high chance that I will skip a boss and forget to remove it before releasing

### 2024-11-01 19:46:34 — IndividualContributor

NoBosses%

### 2024-11-01 19:49:04 — IndividualContributor

But thank you! my current save states are sometimes too far behind or are right in a field I'm testing. The thing is that bugs can still be introduced because of variables and stuff being skipped in Disc 1 and used in Disc 2 like WTF

### 2024-11-01 19:55:33 — Hope

Closest thing I had to that was just forgetting kids naming

### 2024-11-01 19:55:37 — Hope

Cids

### 2024-11-01 20:00:25 — IndividualContributor

I did that same thing with Cait Sith, got to Prison and into a battle and Caits HP slowly drops to 0 and he dies, weird bug but happened because I didn't name him lol

### 2024-11-02 23:24:26 — IndividualContributor

Release v0.4.6 https://github.com/individualcontributordev/Final-Fantasy-7-CSR/tree/main/latest%20v0.4.6

- Lots of new trimming from Start to Don's
- Trimmed Reactor 5 and Airbuster for the NMS crew
- More trimming of JDeath to before Mideel and Cloud's Dream

This version trims almost all text boxes and some animations that were previously untouched in the sections mentioned above. I'm not sure about this approach and would love if you could play it and let me know how it feels. For example, previously I left in some text boxes to make sense of the trimmed sections but now it's just alot of movement with no text boxes. I did leave in 1 or 2 that I thought were warranted.

Also there are a significant number of changes in this version so I'm sorry if I have borked something, please don't burn this to disc until you've played on emulator at least until after Don's, preferably a full run. Having a full run verified as stable would be great, I'll be doing it myself this week regardless.

### 2024-11-03 08:01:08 — awesomeWaves

I've missed a few patches now so I'm looking forward to giving this a run through. I'm back home tonight so I'll get it's all set up and hopefully run everything by tomorrow

### 2024-11-04 19:14:04 — awesomeWaves

Got through a whole run today, however there's a critical Error with the break into the CD swap that needs to be addressed

### 2024-11-04 19:14:29 — awesomeWaves

I haven't gone back to check but Okami said that he tested it since. It only occurs when you leave the timer run out, then continue.

### 2024-11-04 19:15:04 — awesomeWaves

The simple solution imo, would be to move the break one scene earlier. So the last scene of the disc is the 1 text box in the Shell hut before the Disc Change

### 2024-11-04 19:15:18 — awesomeWaves

that way the game would progress as intended into the swap

### 2024-11-04 19:17:56 — awesomeWaves

Notes from today have the exact same stuff for Disc 2. I haven't noticed any changes there since I ran it last 🤷‍♂️

### 2024-11-04 19:37:57 — IndividualContributor

What happens when the timer runs out?

### 2024-11-04 19:38:24 — IndividualContributor

I'll have to check this out

### 2024-11-04 19:39:55 — IndividualContributor

https://www.twitch.tv/okamikaze/v/2292727896?sr=a&t=17822s

### 2024-11-04 19:40:07 — IndividualContributor

This looks fine?

### 2024-11-04 19:42:49 — awesomeWaves

<@170713534726930432> you checked it earlier ya?

### 2024-11-04 19:43:06 — awesomeWaves

That does look fine ya

### 2024-11-04 19:43:40 — awesomeWaves

Unless it's a Disc specific issue 🤷‍♂️

### 2024-11-04 19:54:58 — awesomeWaves

https://www.twitch.tv/videos/2293432724?t=03h30m13s

### 2024-11-04 19:55:10 — awesomeWaves

I assume you've already had a look but there's the link to my vod from earlier.

### 2024-11-04 20:02:12 — Okamikaze

Yep, crash

### 2024-11-04 20:06:59 — IndividualContributor

So how do I reproduce this? Is it just on disc I wonder? The thing is that the break scene into the save scene is fine, save scene to disc swap is also fine, so it might be the start of disc 2 or something.

### 2024-11-04 20:10:06 — awesomeWaves

was that on Emu?

### 2024-11-04 20:10:26 — awesomeWaves

the only think I could think of is maybe due to the music overlapping or something

### 2024-11-04 20:16:37 — IndividualContributor

Yes this ^

### 2024-11-04 20:17:06 — IndividualContributor

It could be this, but hard to know if I can't reproduce

### 2024-11-04 20:21:01 — Okamikaze

PS2

### 2024-11-04 20:21:21 — Okamikaze

Same version on duck yesterday was fine

### 2024-11-04 20:21:38 — awesomeWaves

Ah ok, it's a disc thing then

### 2024-11-04 20:23:30 — IndividualContributor

F, so both times it was disc?

### 2024-11-04 20:24:55 — IndividualContributor

Is there a chance that on Emu you loaded a save state before the break Okami?

### 2024-11-04 20:25:22 — IndividualContributor

Or was the Emu run all one run up to and past the break?

### 2024-11-04 20:26:23 — IndividualContributor

I mean anytime from Start to before the break? Because that might fix any RAM stuff that was borked

### 2024-11-04 20:26:47 — IndividualContributor

But on the PS2 runs they were all one run?

### 2024-11-04 20:26:52 — IndividualContributor

Just curious

### 2024-11-04 20:31:25 — awesomeWaves

Yeah I booted up today and ran all through Disc 1 in one sitting

### 2024-11-04 20:31:39 — awesomeWaves

from Disc 2 onwards, I loaded another save I had and continued from there

### 2024-11-04 20:35:09 — IndividualContributor

Can you load a disc 1 save and test the Break scene?

### 2024-11-04 20:35:35 — awesomeWaves

I've a save before JLife I can check

### 2024-11-04 20:36:13 — IndividualContributor

Cool because if it is a RAM thing then you likely be able to pass the break doing that

### 2024-11-04 20:36:50 — IndividualContributor

But if it crashes again it's more likely something about the break scene on disc, vs Emu

### 2024-11-04 20:42:56 — awesomeWaves

I need to test letting the break run out? Or just the break in general?

### 2024-11-04 20:48:39 — awesomeWaves

I let it run out

### 2024-11-04 20:48:41 — awesomeWaves

it crashed again

### 2024-11-04 20:51:45 — IndividualContributor

Ok cool so it's not a RAM thing then which is very good. Although if it's only reproducible on disc ima need to order more discs KEKW

### 2024-11-04 20:52:03 — awesomeWaves

I've about 10 left 😅

### 2024-11-04 20:52:31 — IndividualContributor

I think I've like 25ish so hopefully that's enough to debug lol

### 2024-11-04 20:54:02 — IndividualContributor

I'll reproduce with disc, then remove the break scene and test to verify it's the break scene. Then I'll try moving it and changing the music and stuff

### 2024-11-04 20:54:34 — awesomeWaves

I think the safest fix like I mention, would be to move the break before that one scene

### 2024-11-04 20:54:53 — awesomeWaves

surely the game would behave as normally intended if it's coming from a normal scene

### 2024-11-04 20:55:07 — awesomeWaves

but I guess if you can sort it, then all the better

### 2024-11-04 20:55:11 — IndividualContributor

Yeah that would save me messing with the music

### 2024-11-04 20:57:35 — IndividualContributor

And Cloud says "Lets go" in that scene too so it's perfect

### 2024-11-04 20:58:13 — IndividualContributor

https://tenor.com/view/emotional-cry-teary-eyes-tears-of-joy-gif-16812299677910042284

### 2024-11-05 00:49:41 — Okamikaze

0 chance of that, I just cycled through my states and there was none around that point

### 2024-11-05 00:50:42 — Okamikaze

One thing to note though is that I did load up a backup memory card save at DG in my "run" a couple of days back. I doubt that would cause the CSR to not crash on the timer running out though

### 2024-11-05 00:51:24 — Okamikaze

And then because the run was already invalid I opened cheat engine for bone village just to make sure stone was set to 49

### 2024-11-05 00:53:47 — Okamikaze

It's important to note that Hope's 0.4 version of CSR on PS2 would crash at the end of lifestream unless you swap in an official disc before you run up to enter the top part of the hub

### 2024-11-05 00:54:04 — Okamikaze

But yeah works flawlessly on emulator, so this situation isn't completely alien

### 2024-11-05 00:58:50 — Hope

Its very interesting to me that there is any difference on console for softlock/crashing.

### 2024-11-05 01:26:51 — Okamikaze

FF9 was the same for CSR, some extra backend code or w/e had to be removed for it to not crash going into BW3 on PS2 where on emu it had no issue at all

### 2024-11-05 01:28:08 — Okamikaze

I think it also doesn't help that in theory every different game has a different optimal burn disc speed

### 2024-11-05 10:17:59 — IndividualContributor

I think for FF7 x16 burn speed is what we're all testing right?

### 2024-11-05 10:19:06 — IndividualContributor

It's very likely caused by the break scene so I'll test the crap out of it this week

### 2024-11-05 11:41:54 — Hope

It's not the game moment is it lol

### 2024-11-05 11:52:29 — IndividualContributor

No I did have an issue with the game moment there already because the break was moved, Cloud comes out of the break, sees Sephiroth walking up towards North Crater, try to run up there and Tifa says "but Aeris is the other direction", can't play game KEKW

### 2024-11-05 14:25:30 — Okamikaze

That's what I'm using yeah

### 2024-11-05 14:25:40 — Okamikaze

As per your first post

### 2024-11-05 17:48:08 — awesomeWaves

<@521419888959684659> could you share the auto splitter here please?

### 2024-11-05 18:27:44 — TMD

_(no text)_
- file: Final_Fantasy_7_Autosplitter_emulator-v1.asl

### 2024-11-05 18:29:03 — TMD

I made it about 2 years ago but never really used it or tested it so hopefully it works <:KEKW:1074810897308069948>

### 2024-11-05 18:29:16 — awesomeWaves

Thanks very much, it will be a good starting point!

### 2024-11-05 22:47:06 — IndividualContributor

https://youtu.be/q9r-VyiOrc8

### 2024-11-05 22:55:13 — awesomeWaves

👍

### 2024-11-05 22:55:17 — IndividualContributor

_(no text)_
- file: image.png

### 2024-11-05 22:55:23 — IndividualContributor

is it this text box from jessie skip?

### 2024-11-05 22:55:34 — awesomeWaves

nope, its the one the guy says

### 2024-11-05 22:55:59 — awesomeWaves

oh mb

### 2024-11-05 22:56:01 — awesomeWaves

sorry thats it

### 2024-11-05 22:56:06 — IndividualContributor

_(no text)_
- file: image.png

### 2024-11-05 22:56:10 — awesomeWaves

try just leaving that one in

### 2024-11-05 22:56:19 — IndividualContributor

yeah the other one is from the guy sleeping

### 2024-11-05 22:56:24 — awesomeWaves

and I'll test tomorrow and see how it feels

### 2024-11-05 22:56:26 — IndividualContributor

if you over mash

### 2024-11-05 23:01:58 — IndividualContributor

https://youtu.be/sbyVUWfZSVM

### 2024-11-05 23:02:11 — IndividualContributor

I need to add in a text box at the end of the Jessie skip too

### 2024-11-05 23:04:25 — awesomeWaves

maybe the text boxes with Jessie ya

### 2024-11-05 23:04:34 — awesomeWaves

because they are kind of the timing for when to move

### 2024-11-05 23:04:40 — awesomeWaves

but it's not too bad without

### 2024-11-05 23:04:49 — awesomeWaves

because the lights changing is enough of a sign too

### 2024-11-05 23:04:58 — Hope

Most based discord server list I've ever seen

### 2024-11-05 23:05:05 — awesomeWaves

oh lol

### 2024-11-05 23:05:09 — awesomeWaves

didn't even notice

### 2024-11-05 23:05:09 — Hope

(Sorry waves)

### 2024-11-05 23:05:10 — awesomeWaves

just 1

### 2024-11-05 23:05:43 — awesomeWaves

I think whats more based is that its discord web browser and not the app 😅

### 2024-11-05 23:06:37 — IndividualContributor

Mine? <:KEKW:1074810897308069948>

### 2024-11-05 23:19:35 — IndividualContributor

https://youtu.be/hZb3mN61F3E

### 2024-11-05 23:19:50 — IndividualContributor

Added back in the final text box from Jessie, feels better

### 2024-11-05 23:20:47 — awesomeWaves

yeah looks good

### 2024-11-05 23:29:05 — IndividualContributor

https://youtu.be/gEQs4xwtsbw

### 2024-11-05 23:29:12 — IndividualContributor

Slap skip trimmed

### 2024-11-05 23:34:27 — awesomeWaves

I'm a little confused by that because I guess you removed the fight just to showcase the difference?

### 2024-11-05 23:37:46 — Hope

Isn't slap skip sorta rng. Cause turbo doesnt even get it every time right?

### 2024-11-05 23:38:07 — Hope

Idk that there is anything of value to keep like any of the textboxes in

### 2024-11-05 23:38:16 — Hope

besides like 1 for each "event"

### 2024-11-05 23:38:28 — awesomeWaves

Yeah I'd be inclined to remove more before and after reno

### 2024-11-05 23:43:28 — IndividualContributor

there are two text boxes for Tseng, i could remove the first and leave the second

### 2024-11-05 23:43:39 — IndividualContributor

Reno also has two I think, I can remove the first

### 2024-11-06 01:10:05 — IndividualContributor

Release v0.4.7 https://github.com/individualcontributordev/Final-Fantasy-7-CSR/tree/main/v0.4.7

- Moved the break scene to before the spiral hut scene to test a bug fix on PSX where Disc 2 wouldn't load correctly after putting it into the console. Suspected issue with the music still playing from the break scene when disc is being changed. Not an issue on Emulator. 
- Trimmed Reno text box
- Trimmed Slap skip (2 frame time save if you're lucky)
- Updates to Jessie skip
- Reverted Honey Bee Inn fat guy text boxes because they felt weird

IMPORTANT: there may still be a bug on PSX only, at the end of disc 1, maybe related to the break scene, where disc 2 won't load when you insert it. I've moved the break scene further back away from the "Save game" scene before disc swap but haven't tested it on PSX yet. Emulator does not have the same issue.

### 2024-11-06 15:00:24 — IndividualContributor

Word of caution, disc 2 still not loading correctly in latest version 0.4.7, I'm going to look at it later tonight.

### 2024-11-06 15:08:33 — IndividualContributor

I'm going to try removing the break scene completely to see if that makes a difference.

### 2024-11-06 15:45:34 — Teeejj

I'll be sad if we cant have break because it breaks the game

### 2024-11-06 16:00:55 — Hope

We can force a break much less gran if we have to. Like you could just make it wait a set time as a single script I think

### 2024-11-06 16:04:20 — awesomeWaves

Am I right in remembering that the break worked when it was after Demon's Gate?

### 2024-11-06 16:04:44 — awesomeWaves

so it is still possible. It was moved so that it would be included in any potential Disc 1 skip routes also

### 2024-11-06 16:06:26 — Okamikaze

I think after J-Birth there should be atleast one text box while Cloud is putting his head down or before, does feel weird to me

### 2024-11-06 16:07:57 — IndividualContributor

Anyone have a save file they could use to test removing the break scene just to see if it is actually the break scene? I can remove it and push a temp patch now. The problem could also be something with music or RAM I just want to narrow it down

### 2024-11-06 16:08:26 — awesomeWaves

if you could push a patch where you can skip JLife I'll be happy to test

### 2024-11-06 16:08:33 — IndividualContributor

I have a PS2 mem card due in the post in the next few days to allow me to copy saves from PC to PS2 so can test this stuff more thoroughly then

### 2024-11-06 16:08:34 — awesomeWaves

or just edit her hp to 1 or something

### 2024-11-06 16:08:43 — IndividualContributor

I can skip Jeno

### 2024-11-06 16:08:49 — awesomeWaves

then I can more accurately test

### 2024-11-06 16:08:59 — awesomeWaves

I think the 2nd option is a better test if possible

### 2024-11-06 16:09:10 — awesomeWaves

so the fight, starts, finishes etc. Exp screen and all

### 2024-11-06 16:09:22 — IndividualContributor

can edit the battle stuff

### 2024-11-06 16:09:26 — IndividualContributor

can't*

### 2024-11-06 16:09:43 — IndividualContributor

so only options are to skip Jeno or fight as normal

### 2024-11-06 16:10:03 — IndividualContributor

skipping is fine though I'm doing it loads

### 2024-11-06 16:10:04 — IndividualContributor

for dev

### 2024-11-06 16:14:59 — Okamikaze

For the sake of PS2 and oceanfly a break on entering cota if doable might be the best middle ground if these alternatives don't work out, I hope they do though

### 2024-11-06 16:19:16 — IndividualContributor

I've just spotted something in the console, it's an error reading RAM using the patched discs, that does not show when using normal discs. This is very likely the issue, PS2 can't handle reading the wrong memory address where the Emu might be able to compensate. I'll push the patch to remove the break scene and I'll look into this in the meantime

### 2024-11-06 16:21:38 — IndividualContributor

it might be Disc 2 that is the problem... has anyone tested using a normal disc for the swap?

### 2024-11-06 16:22:46 — IndividualContributor

nvm error still pops up in Emu using normal D2 for swap

### 2024-11-06 16:24:53 — IndividualContributor

ok so swapping in a normal D1 after Jenova fight to let it then go into the shell hut scene and disc swap into D2 patched works fine with no error

### 2024-11-06 16:25:20 — IndividualContributor

which tells me the error is being introduced before of during the Jenova fight trimming.

### 2024-11-06 16:25:44 — IndividualContributor

I'll try slowly undo stuff to see if I can get the error to resolve, and then see, without removing the break scene

### 2024-11-06 16:25:56 — IndividualContributor

this would be a better test than just removing the break scene I think

### 2024-11-06 16:28:03 — IndividualContributor

the error showing up was after I removed the break scene which is why I'm pretty sure it's not that scene but something I did before or after during trimming

### 2024-11-06 16:42:13 — IndividualContributor

ok bad news is that the error is being introduced prior to Jenova <:KEKW:1074810897308069948> it's looking like I've borked some RAM variable which is eventually causing the error to show in the console when D2 is trying to load

### 2024-11-06 16:42:28 — IndividualContributor

good news is that I'm almost certain it's not the break scene now

### 2024-11-06 16:42:38 — IndividualContributor

just need to figure out when I messed with vars and stuff

### 2024-11-06 16:43:44 — Hope

Check the bike scene or any other overworld

### 2024-11-06 16:44:50 — Hope

There's also a map for the disc swap iirc that should give you the values you need

### 2024-11-06 16:56:20 — Okamikaze

You maybe cut and paste too far when you moved the break?

### 2024-11-06 16:57:16 — Okamikaze

<@183261151746850816> Did you make any changes to disc 2 with the update to 0.4.7?

### 2024-11-06 16:57:48 — IndividualContributor

No changes to D2 in 0.4.7

### 2024-11-06 16:57:59 — Okamikaze

Ok thankyou, that saves a disc for now 👍

### 2024-11-06 17:00:52 — IndividualContributor

I'm going to test using normal D1 through Red Dragon and DG up to Bone Village / CoTA, then swap in D1 patched. This should tell me if the issue is introduced in the Bone Village / CoTA updates I've made

### 2024-11-06 17:01:46 — IndividualContributor

if not then it's somewhere in temple or before that I've borked up and I'll test that too

### 2024-11-06 17:02:27 — IndividualContributor

I just need to incrementally test back further and further until I find the section that introduces the error in the console. Shouldn't take long....

### 2024-11-06 17:18:59 — IndividualContributor

ok so, I've verified that changes in CoTA as of v0.4.7 have caused the issue, this includes the break scene. So somewhere between Bone Village and D2 swap on the patch is borking something. So I'll try to add the break scene to a D1 normal and then play through to D2 swap. This should tell me if the break scene specifically is causing the issue.

### 2024-11-06 17:19:50 — Teeejj

I'll be real, I dont think oceanfly(or whatever its called now) really warrants a break on csr

### 2024-11-06 17:20:37 — awesomeWaves

The most accessible option is to just include it anyway imo

### 2024-11-06 17:20:50 — awesomeWaves

if people decide to skip over it, they can

### 2024-11-06 17:20:51 — Teeejj

I get being accessible but if its breaking the game

### 2024-11-06 17:20:52 — Teeejj

idk

### 2024-11-06 17:21:14 — IndividualContributor

I could try to figure out a way to check some data that is not set using oceanfly and only show the break if not doing oceanfly

### 2024-11-06 17:21:23 — awesomeWaves

Ah I think this is just an issue right now that will be worked out.

### 2024-11-06 17:21:38 — awesomeWaves

I've have faith in IC

### 2024-11-06 17:21:45 — IndividualContributor

I'll have it fixed tonight I'd say

### 2024-11-06 17:21:51 — awesomeWaves

but yeah, worst case scenario just move it.

### 2024-11-06 17:22:00 — IndividualContributor

:peepoSweat:

### 2024-11-06 17:22:20 — Teeejj

you've been doin a great job so far dude, dont stress it

### 2024-11-06 17:23:38 — awesomeWaves

Yup, stellar effort man.

### 2024-11-06 17:23:54 — awesomeWaves

CSR is so easy to say 'this is wrong', 'this scene could be changed' etc

### 2024-11-06 17:24:05 — awesomeWaves

It's not intended to be all negative. Well done

### 2024-11-06 17:25:44 — awesomeWaves

Also, there was some preliminary work done with TMD's autosplitter last night

### 2024-11-06 17:25:56 — awesomeWaves

still isn't working to pause for the break, but it's a WIP

### 2024-11-06 17:56:04 — Teeejj

ayo autosplitter?

### 2024-11-06 17:56:16 — Teeejj

https://tenor.com/view/real-shit-i-sleep-shaq-triggered-woke-gif-17504394

### 2024-11-06 19:55:53 — IndividualContributor

ok it's not the break scene 🎉 I'm trying to fix up the patch now by reverting all changes in CoTA, testing, then slowly trimming it down again.

### 2024-11-06 19:56:24 — IndividualContributor

This is based on the assumption that the error showing in the console when swapping to D2 in the patch is causing the issue.

### 2024-11-06 19:57:05 — IndividualContributor

If not then

https://tenor.com/view/ron-swanson-throws-out-his-computer-gif-26050062

### 2024-11-06 20:17:51 — IndividualContributor

It seems to have been the spiral hut changes right before the "Save game" scene that were causing the error in the console. I've reverted all changes and no error, which is promising. Although something about reverting those changes has messed with the break scene, kinda weird, but making progress

### 2024-11-06 21:02:57 — IndividualContributor

nvm the error is back lol

### 2024-11-06 21:04:42 — awesomeWaves

it's surely nothing something simple like the game moment being way too high?

### 2024-11-06 21:04:49 — awesomeWaves

and confusing the memory

### 2024-11-06 21:05:09 — IndividualContributor

no I've re-implemented the break scene on a fresh D1 and everything is working fine, no error

### 2024-11-06 21:05:18 — IndividualContributor

so I'm positive it's not the break scene at this point

### 2024-11-06 21:05:24 — awesomeWaves

Ah okay, it was just an idea

### 2024-11-06 21:07:00 — IndividualContributor

yeah I was thinking the same about the game moment earlier, it being so high 42069 might be overwriting some other variables in RAM but it dosen't seem to be it

### 2024-11-06 21:07:19 — IndividualContributor

that I can see at least, given it's working with no errors in fresh D1

### 2024-11-06 21:07:27 — IndividualContributor

https://tenor.com/view/charlie-day-gif-18564553

### 2024-11-06 21:13:27 — IndividualContributor

ok I think this is worse than I thought <:KEKW:1074810897308069948> so if I played on fresh D1 with break scene implemented all the way through from Bone Village to D2 everything is fine. BUT if I swap to D1 patched at the spiral shell scene just before "Save game" scene then continue through to D2 the error shows up.

### 2024-11-06 21:14:34 — IndividualContributor

So this is telling me there is something really F'd on D1 that is not being "set" during the CoTA scenes. And if it's not being borked by changes in CoTA it must be borked somewhere on D1 and only showing up then during disc swap.

### 2024-11-06 21:16:56 — IndividualContributor

I've double checked the actual disc swap scripts and they are untouched for this section. I'm wondering now if it's something to do with music or text boxes, if I didn't reset a text box properly, or skipped some music initialization stuff at some point near the end of D1 it might be being reset of checked by scenes up to this point, so left borked from ages ago

### 2024-11-06 21:18:06 — IndividualContributor

I'll fix this but might be tomorrow night if i run out of time tonight 🙃

### 2024-11-06 21:32:44 — IndividualContributor

I think I found the bork

### 2024-11-06 21:33:22 — IndividualContributor

I'm going to test on a freshly patched 0.4.7 to see

### 2024-11-06 21:43:43 — IndividualContributor

https://tenor.com/view/kid-thinking-sit-bored-couch-gif-17483531

### 2024-11-06 21:43:47 — IndividualContributor

Ok I fixed the error

### 2024-11-06 21:44:08 — IndividualContributor

I'm going to add back in the Junon down right scene then push a patch

### 2024-11-06 21:44:30 — IndividualContributor

Hopefully this fixes the D2 not loading issue

### 2024-11-06 21:44:31 — awesomeWaves

awesome! GG

### 2024-11-06 21:44:54 — Hope

What was the issue

### 2024-11-06 21:52:02 — IndividualContributor

In losin2 632 > 9 cloud > Script 3, at the end blackbgb (103) is loaded which has a bunch of "if" statements. There are two "if" statements for Disc 2 swap. 

The first "if" checks: 

```
if Var[3][134] bitON 2 (else ....)
  ... do some stuff
  Ask for disc 2
  ... do some stuff
```

The second "if" statement checks:

```
if Var[3][136] bitON 4 (else ....)
  ... do some stuff
  Ask for disc 2
  ... do some stuff
```

The first "if" was running and causing an error in the console, the second "if" statement is the correct one, does not cause an error in the console.

So I must have skipped doing this somewhere

```
Bit 2 OFF in Var[3][134]
```
which caused the first "if" statement to run. I just manually turn off bit 2 in var[3][134] before loading the "Save Game" scene at the end of the spiral hut

### 2024-11-06 21:52:15 — IndividualContributor

hope that makes sense <:baHmm:1074812804747497503>

### 2024-11-06 21:53:48 — Hope

It does. Gonna find where that normally gets turned on when I get home

### 2024-11-06 21:54:58 — IndividualContributor

_(no text)_
- file: image.png

### 2024-11-06 21:58:46 — IndividualContributor

Quick search and it looks like that bit 2 in Var[3][134] is being turned on in the second "if" statement I mentioned above...

### 2024-11-06 22:00:07 — IndividualContributor

So I think the logic here is, it should be off initially so the second "if" statement should load, then if you save the game and this scene is re-loaded the bit is now on and the first "if" statement is run which skips the "Save game" question.

### 2024-11-06 22:01:30 — IndividualContributor

Now that I think about this, if the bit was on going into this scene initially and the first "if" statement is being called which is causing an error, the "Disc 2 image" should show up and you should not be getting asked to save your game, but you do...

### 2024-11-06 22:02:57 — IndividualContributor

Meh I don't know, I'm going to go fix Junon for a dopamine hit

### 2024-11-06 22:03:06 — IndividualContributor

https://tenor.com/view/dopamine-rickjames-rick-james-hell-gif-25037710

### 2024-11-06 22:26:54 — awesomeWaves

I can't recall if I had any other quick edits for D1

### 2024-11-06 22:27:01 — awesomeWaves

let me quickly check my notes

### 2024-11-06 23:19:35 — awesomeWaves

sorry I got side tracked <:NotLikeThis:585965887396511786>

### 2024-11-06 23:19:56 — awesomeWaves

The Battery Shop

### 2024-11-06 23:19:59 — awesomeWaves

might be an easy one

### 2024-11-06 23:20:14 — awesomeWaves

it's just enter mash, recieve batteries and leave

### 2024-11-06 23:20:44 — awesomeWaves

The other one that might be easy is the Gold Saucer Attendant

### 2024-11-06 23:20:48 — awesomeWaves

Sorry for the delay

### 2024-11-07 00:43:10 — Hope

So speaking to earlier I made an autosplitter a while back for Emu. I think it should work but my last test I didnt finish if someone is running soon and wants to give it go. https://pastebin.com/Lyu5p2rz

You do need to adjust this one repeated bit at the top for whatever your offset is in your emulator I think for the pointers to pick up the correct things. Otherwise I can probably test this weekend but thought I'd give what I had for people.
- file: image.png

### 2024-11-07 00:44:00 — Hope

Just uses game moment, field ID, formation ID, and gil to decide when to split

### 2024-11-07 00:44:29 — Hope

I didn't add anything to subtract time for the break that IC made, I'd have to look into how to do that but I doubt its too hard to add.

### 2024-11-07 00:45:12 — Hope

<@183261151746850816> does your game moment get set back at the same time effectively if you let the timer run out vs if you hit "continue" or w/e

### 2024-11-07 00:46:14 — Hope

I also had experiments for start/end but I couldn't find anything satisfying so those are manual.

### 2024-11-07 00:49:21 — IndividualContributor

Yes, actually hitting "Continue run" sets the timer to zero and the Game Moment is set back to 674 before loading the next scene

Going into the Break Scene the Game Moment is set to 42069

### 2024-11-07 00:50:05 — Hope

I just dont know how to add "pause the timer" or something to that affect, might look into it over the weekend if noone else does

### 2024-11-07 00:50:38 — IndividualContributor

Just let it run and split at 42069 and 674?

### 2024-11-07 00:50:52 — IndividualContributor

that split will be close to 5 minutes

### 2024-11-07 00:50:54 — Hope

That said the poitner treats the game moment as capping at 512 or some number and rolling over so idk what the actual number for that is

### 2024-11-07 00:51:34 — IndividualContributor

That's weird there are game moments of 512+ normally

### 2024-11-07 00:51:52 — Hope

Yeah idk if its my pointer or something with the game

### 2024-11-07 00:52:13 — Hope

I didnt formaly learn how to make the autosplitter I frankensteind a bunch of other stuff together and got it to work

### 2024-11-07 00:53:09 — IndividualContributor

I see byte7 there, might there be a byte15? or something

### 2024-11-07 00:53:27 — Hope

I stole that from the google sheet in resources

### 2024-11-07 00:53:33 — Hope

i have no idea  how that stuff actually works

### 2024-11-07 00:53:44 — IndividualContributor

no I mean in the code

### 2024-11-07 00:53:52 — IndividualContributor

byte7 keyitems

### 2024-11-07 00:54:20 — Hope

Oh i dont remember why thats that way but I think it needed to be. Though I think I gave up on keyitems as a source

### 2024-11-07 00:54:20 — IndividualContributor

oh wait that's the RAM position

### 2024-11-07 00:54:34 — Hope

I tried to have picking up the keycard be a split... but now it just splits when you get back in the elevator

### 2024-11-07 00:54:34 — Hope

lol

### 2024-11-07 00:57:44 — awesomeWaves

We also edited TMDs one but the break isn't working yet either

### 2024-11-07 00:57:58 — awesomeWaves

TMDs one works, irrelevant of which version of duck you're using

### 2024-11-07 00:58:14 — awesomeWaves

_(no text)_
- file: Final_Fantasy_7_Autosplitter_emulator-v1.asl

### 2024-11-07 00:58:17 — Hope

Oh I should look at that, I didnt evne know he had one until you mentioned it

### 2024-11-07 00:58:18 — awesomeWaves

This is the latest version we had

### 2024-11-07 00:58:58 — awesomeWaves

There's 2 ways of specifying to LiveSplit that it's duckstation

### 2024-11-07 00:59:24 — awesomeWaves

and TMD used one, whereas ElliotOrnitier uses a different one normally

### 2024-11-07 00:59:30 — IndividualContributor

```
byte gamemoment : "duckstation-qt-x64-ReleaseLTCG.exe", 0x007E16C0, 0x0009D288 range 0..65535;  -- Unsigned 16-bit integer
```

### 2024-11-07 00:59:32 — awesomeWaves

and Elliot was the one editing this file to make the break work

### 2024-11-07 01:00:06 — Hope

Well this looks much better I didnt know it was so far along

### 2024-11-07 01:00:16 — Hope

Thought you were starting fresh haha

### 2024-11-07 01:01:53 — IndividualContributor

Any other major D1 changes you can think of?

### 2024-11-07 01:02:12 — IndividualContributor

If not I'll go through notes tomorrow and release this patch with the D2 fix (fingers crossed)

### 2024-11-07 01:02:31 — IndividualContributor

<@248225699909861376> I've checked your D1 notes and I think I have all the changes made

### 2024-11-07 01:02:50 — IndividualContributor

there may be some tiny ones that I need to check again like in Battery shop

### 2024-11-07 01:02:53 — awesomeWaves

I'd honestly prefer at this stage we focus on D1 because it'll stop me burning extra discs 😅

### 2024-11-07 01:02:57 — IndividualContributor

but all done for the most part I think

### 2024-11-07 01:03:05 — awesomeWaves

So I won't need to burn a new D2 for a while then

### 2024-11-07 01:03:29 — IndividualContributor

yep I agree having D1 done also means I can play the god damn CSR

### 2024-11-07 01:03:30 — awesomeWaves

(within reason of course)

### 2024-11-07 01:04:23 — awesomeWaves

I just checked our DMs and you do have the most up-to-date feedback I had given

### 2024-11-07 01:05:19 — awesomeWaves

I think it might be a little bit more work, but I think the Hojo Room/Jenova Scene would be one that would benefit from the screen going black then when it fades back in the entie scene is over

### 2024-11-07 01:05:28 — awesomeWaves

there's still a lot of stuff there thats just time waste

### 2024-11-07 01:05:32 — IndividualContributor

I'm pretty sure I did most of the D1 stuff you mentioned, I'll check again tomorrow before pushing the patch out

### 2024-11-07 01:05:54 — awesomeWaves

by all means push the patch tonight and I'll burn it for when I run tomorrow morning

### 2024-11-07 01:06:07 — awesomeWaves

with whatever you have done

### 2024-11-07 01:06:12 — awesomeWaves

no pressure to do everything

### 2024-11-07 01:09:44 — IndividualContributor

https://youtu.be/fSMoGdHJOqo

### 2024-11-07 01:09:52 — IndividualContributor

This is what the scene looks like right now

### 2024-11-07 01:11:16 — IndividualContributor

I've trimmed this a few times, sped up Hojo, and cut the guy walking in, sped up Cloud hiding too, and there are no animations after seeing Jenova

### 2024-11-07 01:11:57 — IndividualContributor

it's probably 1/3 of what it was now, I kinda feel like removing it or the fade in to Cloud standing there might be a bit weird, but we can test it

### 2024-11-07 01:12:16 — awesomeWaves

I still feel like it could aggressively skip from 6s to 35s in that video and nobody would mind

### 2024-11-07 01:12:19 — awesomeWaves

it's almost 30s of waiting

### 2024-11-07 01:12:42 — awesomeWaves

you're just watching it play out

### 2024-11-07 01:13:04 — IndividualContributor

I'm curious how the fade to black, then back again with Cloud standing there would feel

### 2024-11-07 01:13:17 — IndividualContributor

I'll test it tomorrow

### 2024-11-07 01:13:27 — awesomeWaves

yeah absolutely worth a try

### 2024-11-07 01:13:48 — awesomeWaves

in FF8 we used the fade to black to move/play out animations at higher speeds we couldn't skip

### 2024-11-07 01:13:54 — awesomeWaves

but they were invisible to the player

### 2024-11-07 01:14:16 — awesomeWaves

and it looked less jarring than actually seeing the NPCs zoom about

### 2024-11-07 01:15:06 — IndividualContributor

ah nice I'll push the update early enough tomorrow if I get a chance

### 2024-11-07 01:15:14 — IndividualContributor

https://tenor.com/view/sleepy-dozing-off-napping-sleep-on-the-chair-funny-face-gif-15237617

### 2024-11-07 01:15:24 — IndividualContributor

chat tomorrow

### 2024-11-07 01:15:43 — awesomeWaves

Thanks man! I'll have any feedback for you

### 2024-11-07 09:21:16 — IndividualContributor

🎮 Release v0.4.8 https://github.com/individualcontributordev/Final-Fantasy-7-CSR/tree/main/v0.4.8

- Fixed error in Emu console which may be causing the Disc 2 loading issues after the Break Scene, testing on PSX disc needed to verify
- Restored scene where Cloud is carrying Aeris in the water (Aeris dying is a big deal so an extra ~10 seconds of a cutscene is worth it I think)
- Trimmed Rocket town first visit a bit more
- Fixed "Shake it" scene after Red Dragon
- Trimmed Gold Saucer date scenes and hotel lobby a bit more
- Fixed Junon down right scene missing and restored the command game tutorial section with text box queues (this whole section felt a bit weird after trimming so I started again and trimmed a tiny bit, can be reviewed)

No Disc 2 changes in this release

### 2024-11-07 09:58:00 — IndividualContributor

🎯 We're on the final push to finish Disc 1.

Can you all send me your suggestions to further trim Disc 1? Don't worry if it's already been sent or in this thread, I'm finding it difficult to gather it all up into a single list I can chip away at. 

I'd really appreciate it if you could test the latest version v0.4.8 on Emu or Disc to check for minor issues.

### 2024-11-07 10:01:18 — TMD

I'm not sure if you got this sorted yet but incase you haven't - you should only need to change the gameMoment read value from short to ushort
And make sure that livesplit is comparing against game time and not real time
- file: image.png
- file: image.png

### 2024-11-07 14:26:24 — Okamikaze

Disc 1 feedback - Some of this stands out more to me than others, I think some of it is more personal preference though and maybe not worth changing

•Top of wall market first visit, atleast 1 text box?
•Speed up handing over the energy drink in wall market
•After you see the highwind for the first time and you see the leader I personally look for a Cloud shrug as a visual cue to buffer my inputs
•You gain control immediately after putting Cait in the party for the first time, I normally use that paralysis to buffer movement
•Esther comes out immediately with a text box after the jockeys. Wasn't used to it but maybe not necessary to change
•On the Gold Saucer revisit I personally use Cid putting his arm out as visual cue to anticipate for the dialogue choice rather than Barret

### 2024-11-07 15:27:31 — IndividualContributor

- Tifa slap fight > Highwind deck, there should be at least 1 text box here for mashing/turbo muscle memory

### 2024-11-07 15:48:11 — TMD

Just thought I'd give the CSR a look and this happened? Is this known about?
I was grabbing a potion off the red dude and now I'm softlocked lol
- file: image.png

### 2024-11-07 16:28:38 — Okamikaze

I don't normally grab that so I haven't experienced it personally

### 2024-11-07 18:16:41 — IndividualContributor

<:KEKW:1074810897308069948>

### 2024-11-07 18:16:50 — IndividualContributor

I'll remove the label

### 2024-11-07 18:17:35 — IndividualContributor

I've used the same window used for the potion text

### 2024-11-07 18:37:39 — IndividualContributor

🎮 Release v0.4.9 https://github.com/individualcontributordev/Final-Fantasy-7-CSR/tree/main/v0.4.9

- Fixes that softlock above <:KEKW:1074810897308069948>

### 2024-11-07 18:38:30 — IndividualContributor

<@521419888959684659> stop using 0.4.6 lol

### 2024-11-07 20:03:07 — IndividualContributor

I need to reproduce the Disc 2 not loading bug so I'm going to try loading the patched Disc 1 from a USB on the PS2 using FreeMcBoot stuff, then see if I can get to Disc 2 swap and beyond. Hopefully loading from USB is equivalent to Disc and it borks

### 2024-11-07 20:03:39 — IndividualContributor

https://tenor.com/view/roll-up-sleaves-smile-daisy-ridley-bake-off-gif-21009101

### 2024-11-07 20:04:42 — IndividualContributor

I'll also skip from New Game to Disc 2 swap, then after Midgar to Disc 2 swap, etc. To figure out where I balls'd up, suck it oceanfly <:KEKW:1074810897308069948>

### 2024-11-07 20:11:03 — IndividualContributor

💡An artificial "oceanfly" Disc 1 for routing. Go into Kalm and get teleported to CoTA.

### 2024-11-07 20:11:13 — awesomeWaves

Ah nice

### 2024-11-07 20:11:21 — awesomeWaves

oh 🤔

### 2024-11-07 20:11:32 — awesomeWaves

Could you make a step count% for me lol

### 2024-11-07 20:12:29 — IndividualContributor

Every field resets to the correct stepid and danger <:KEKW:1074810897308069948> ez game

### 2024-11-07 20:17:21 — IndividualContributor

Wait I'm going to setup playing games on the PS2 from my network

### 2024-11-07 20:17:28 — IndividualContributor

https://tenor.com/view/yeah-gif-21319775

### 2024-11-07 20:50:31 — Okamikaze

Please help me set it up if you figure out how to patch FF7 to work on OPL. Or if you're using DKWDRV let me know if it's good and worth using 👍

### 2024-11-07 21:04:14 — IndividualContributor

Will do I'm just setting up my network stuff now

### 2024-11-07 21:23:46 — IndividualContributor

F, it looks like to play PS1 games over the network you need OPL + POPStarter, OPL is the network loader and POPStarter is a Sony Emulator. So even if I could get this working FF7 would run in an emulator on the PS2 hardware, as opposed to the game being loaded into memory as if from a disc. <:Sadge:1074826312767778950>

### 2024-11-07 21:27:57 — IndividualContributor

Apparantly you don't need the POPStarter emulator if they are on a USB drive, so ima try that

### 2024-11-07 21:29:50 — Okamikaze

On USB I had no such luck with FF7 in the past, though I've heard there's a patch now for it on POPStarter

### 2024-11-07 21:30:44 — Okamikaze

OPL Pop is actually what I use currently when I'm dabbling with FF9 CSR, don't wanna wear my laser out just to enable me to play a game badly

### 2024-11-07 21:31:13 — Okamikaze

Maybe with DKWDRV USB emulation FF7 is perfect though

### 2024-11-07 22:06:54 — IndividualContributor

So does FF7 play on the POP emulator regardless of disc, network, or USB?

### 2024-11-07 22:07:24 — IndividualContributor

I'm starting to suspect that backward compatibility on the PS2 Slim uses Pop emulator normally

### 2024-11-07 22:07:44 — IndividualContributor

i.e. if I put in my normal FF7 disc its loaded into Pop

### 2024-11-07 22:12:11 — IndividualContributor

ChatGPT FTW

POPS (PopStation Emulator)
POPS stands for PlayStation Operating System, and it's the name of the software emulator that the PS2 uses when running PS1 games from other sources, like burned discs, or digital versions of PS1 games stored on a memory card or external storage.

So this tells me that the burned CSR discs are running on Pops?

### 2024-11-07 22:13:19 — IndividualContributor

Which is what I'll be using over the network too, so if I can get this working it seems like the CSR will be running in the same environment, either over network or burned disc.

### 2024-11-07 22:13:24 — IndividualContributor

🤞

### 2024-11-07 22:16:05 — Okamikaze

Ain't no way dude, POPStarter ff7 doesn't even let you get to the presents splash. You need to patch it with something that was made the start of this year to get it to work

### 2024-11-07 22:16:47 — Okamikaze

As for games overall, I can tell you that an FF9 CSR Disc 4 burned disc doesn't have slowdown or slow loads to the degree that playing it on POP has

### 2024-11-07 22:19:20 — Okamikaze

If I had to digress even further about OPL being different to backup discs, this is probably the biggest example

### 2024-11-07 22:19:21 — Okamikaze

https://youtu.be/SF8KirKi3FU?si=xGWNaWS3zKWg-3Ln&t=1250

### 2024-11-07 22:20:36 — Okamikaze

You can't just drop down to the bottom floor by holding down left on a backup disc or even an original like you can here on both Integral/US releases

### 2024-11-07 22:20:43 — Okamikaze

But yeah, whole different game entirely

### 2024-11-07 22:38:17 — awesomeWaves

No sorry, I meant something where all the 'Live Step' screens play back to back kind of

### 2024-11-07 22:38:23 — awesomeWaves

we have one for FF8

### 2024-11-07 22:38:56 — awesomeWaves

so after you leave Mt. Nibel for example, you'd load into Gongaga. Then leaving Gongaga load into Temple

### 2024-11-07 22:38:58 — awesomeWaves

etc

### 2024-11-07 22:43:21 — IndividualContributor

ah ok lol that sounds like a great practice tool

### 2024-11-07 22:51:57 — Okamikaze

I think Hope was looking into making that at one point

### 2024-11-07 22:54:25 — Hope

IC is way more motivated a person if he wants to do it. I'd finish like next year lol

### 2024-11-07 23:26:12 — IndividualContributor

Ok so I got the CSR running on the PS2 using Popstarter without patching it, but the battles don't work right, gameplay seems fine.

### 2024-11-07 23:26:27 — IndividualContributor

I'll see if I can skip to Disc 2 swap

### 2024-11-07 23:50:58 — IndividualContributor

https://youtu.be/FkU2kLtk53w

### 2024-11-07 23:51:32 — IndividualContributor

Ok have the patch applied for the battles, seems fine. The color is slightly off on the pink in battles and the battle swirl

### 2024-11-07 23:52:10 — IndividualContributor

And GS missed both <:KEKW:1074810897308069948> caught me off guard a bit

### 2024-11-07 23:53:14 — IndividualContributor

Oooh nooo my IP address is visible..... <:Kappa:1075235124200886273>

### 2024-11-07 23:53:25 — awesomeWaves

<a:HACKERMANS:853654216307900426>

### 2024-11-07 23:54:13 — IndividualContributor

It's more like this over here

### 2024-11-07 23:54:32 — IndividualContributor

https://tenor.com/view/rocco-botte-rocco-botte-hacker-hack-gif-14810330

### 2024-11-07 23:54:51 — IndividualContributor

need moar keyboards

### 2024-11-07 23:55:40 — IndividualContributor

https://tenor.com/view/hacker-typing-hacking-computer-codes-gif-17417874

### 2024-11-07 23:58:57 — IndividualContributor

the workflow to make a change for the CSR and play it on ps2 has gotten alot more complex now <:KEKW:1074810897308069948> it was meant to be easier ffs

### 2024-11-08 00:34:48 — IndividualContributor

I can't swap the discs <:Sadge:1074826312767778950> this OPL thing won't load disc 2 when I put it in, I have to start D1 over network and use a physical D2 for the swap, but it's not supported apparantly

### 2024-11-08 01:59:53 — IndividualContributor

I got the disc swapping working

### 2024-11-08 02:00:02 — IndividualContributor

https://tenor.com/view/feels-good-man-nicolas-cage-gif-5444501

### 2024-11-08 02:00:59 — IndividualContributor

I'm trying to skip from start to before Jenova to see if it borks, skipping from start to the Break scene and then continue just works

### 2024-11-08 02:01:50 — IndividualContributor

but I'm hoping that this Popstarter emulator acts more like the ps2 emulator than Duckstation, given Popstarter is literally running on the Ps2 hardware

### 2024-11-08 02:02:12 — IndividualContributor

I would expect this to bork if I played D1 CSR through

### 2024-11-08 02:02:14 — IndividualContributor

let's see

### 2024-11-08 02:03:14 — awesomeWaves

Well done. Hopefully it works!

### 2024-11-08 02:03:32 — awesomeWaves

Push any changes anyway and I'll see about giving it another whirl tomorrow

### 2024-11-08 02:03:51 — awesomeWaves

I'm currently 50/50 on sending a full any% run though, so no promises yet

### 2024-11-08 02:04:18 — IndividualContributor

The plan is to reproduce the issue doing this, because I can't reproduce it unless I add in some skips, burn to disc, test, repeat

### 2024-11-08 02:04:32 — IndividualContributor

I need to narrow down where I made a change that broke this

### 2024-11-08 02:04:54 — IndividualContributor

so the trial and error needs to not involve burning discs, or i'll never find the bug <:KEKW:1074810897308069948>

### 2024-11-08 02:05:00 — awesomeWaves

was there by chance anything from when you moved the break?

### 2024-11-08 02:05:12 — awesomeWaves

was there anything left in memory from where it was, carried over to a newer version?

### 2024-11-08 02:05:52 — awesomeWaves

I'm just thinking as you said, what change broke it. I'm just spit balling 😅

### 2024-11-08 02:07:20 — IndividualContributor

I don't think so, I've tried to keep all Break Scene changes contained in that Cosmo field, and the trigger is setting the game moment and jumping to the Break Scene. I could remove the break scene jump completely and create a patch for that just to test it.

### 2024-11-08 02:07:56 — awesomeWaves

maybe that might be an interesting test. Just set the timer in the shell hut scene

### 2024-11-08 02:08:04 — awesomeWaves

so there's no jump to another section/field

### 2024-11-08 02:08:38 — IndividualContributor

I mean just remove the Break Scene entirely from the code/scripts, burn it to disc and test it

### 2024-11-08 02:08:47 — awesomeWaves

or out of interest, remove the entire break scene from the current version of CSR

### 2024-11-08 02:08:51 — awesomeWaves

and see if it loads D2

### 2024-11-08 02:08:54 — IndividualContributor

yeah

### 2024-11-08 02:09:18 — IndividualContributor

it would eliminate the Break Scene being the issue then

### 2024-11-08 02:09:21 — awesomeWaves

if you can remove it, and remove Jlife I'll test it now if you want

### 2024-11-08 02:09:27 — awesomeWaves

take me 2 mins to burn the CD

### 2024-11-08 02:09:44 — IndividualContributor

ok few mins

### 2024-11-08 02:09:49 — awesomeWaves

👍

### 2024-11-08 02:13:07 — IndividualContributor

oh wait

### 2024-11-08 02:13:13 — IndividualContributor

I need to remove the break scene

### 2024-11-08 02:13:22 — IndividualContributor

only skipped jenova lol

### 2024-11-08 02:14:53 — IndividualContributor

_(no text)_
- file: SCUS_941.63.FF7_CSR_D1.ppf

### 2024-11-08 02:14:59 — IndividualContributor

ok no break scene jump or Jenova fight

### 2024-11-08 02:15:17 — awesomeWaves

okie doke I'll patch/burn asap

### 2024-11-08 02:26:48 — awesomeWaves

No good

### 2024-11-08 02:27:20 — awesomeWaves

same situation, hangs on black screen after accepting the disc swap

### 2024-11-08 02:28:17 — IndividualContributor

and you loaded in the room with the steps before Aeris?

### 2024-11-08 02:28:41 — awesomeWaves

yup

### 2024-11-08 02:30:01 — awesomeWaves

So it's not the break then. I've no idea.

### 2024-11-08 02:30:56 — IndividualContributor

F, and I can't reproduce it on this setup I have either.

### 2024-11-08 02:31:22 — IndividualContributor

I'm going to have to buy more CDs on Amazon...

### 2024-11-08 02:32:14 — IndividualContributor

What can I do with a couple hundred borked CD-ROMs? <:KEKW:1074810897308069948>

### 2024-11-08 02:32:29 — awesomeWaves

my bin is full already 😅

### 2024-11-08 02:39:28 — IndividualContributor

Did you test loading a regular disc 2?

### 2024-11-08 02:39:35 — awesomeWaves

no I didn't actually

### 2024-11-08 02:39:56 — awesomeWaves

*removes disc from bin*

### 2024-11-08 02:39:59 — awesomeWaves

I'll try now

### 2024-11-08 02:40:28 — awesomeWaves

not even joking, it was already in there <:LUL:586302674513690636>

### 2024-11-08 02:41:47 — IndividualContributor

I might keep all the discs and stick them to a piece of plywood in the order they were trashed, as a reminder of how much of a pain in the ass this CSR is lol

### 2024-11-08 02:42:19 — IndividualContributor

I've been writing a note on each one of the bug it has

### 2024-11-08 02:44:12 — IndividualContributor

🙏

### 2024-11-08 02:44:50 — awesomeWaves

ok OG disc doesn't work either

### 2024-11-08 02:44:52 — IndividualContributor

https://tenor.com/view/stressed-out-suspense-eating-popcorn-waiting-to-see-what-happens-gif-1791560479908558440

### 2024-11-08 02:44:54 — awesomeWaves

I guess thats a win

### 2024-11-08 02:44:55 — awesomeWaves

?

### 2024-11-08 02:45:09 — IndividualContributor

Ah ok yeah it's definitely disc 1

### 2024-11-08 02:45:45 — awesomeWaves

<a:wavesYEET:1303691556305244212> Disc back in the bin

### 2024-11-08 02:47:44 — IndividualContributor

Not tonight, but you could try a normal D1, load in, swap in CSR, skip over Jenova, put normal D1 back in, stuff like that

### 2024-11-08 02:47:57 — IndividualContributor

To see if something allows you to continue

### 2024-11-08 02:48:16 — IndividualContributor

I don't have a save on memcard yet to try this but will soon

### 2024-11-08 02:50:36 — IndividualContributor

The fact it's not working from loading a save and there is no break scene means either the save is holding onto some broken RAM stuff or it's breaking between the load and the swap. But there is very little changes now without the break

### 2024-11-08 02:54:21 — IndividualContributor

Another test: just use a normal D1, load in, fight Jenova and try go through to disc swap. No CSR this time at all. That would test the save itself

### 2024-11-08 02:54:43 — awesomeWaves

Yeah I can try that tomorrow

### 2024-11-08 02:54:51 — awesomeWaves

makes sense

### 2024-11-08 07:51:26 — IndividualContributor

I got everything working I'll write some notes and send them over. I'm using SMB so sharing a folder on my PC, dropping in the CSR, then loading from PS2. It's great because there is zero input lag playing it on PS2 and it's the CSR with no discs involved but the colors are a little weird on battles so nothing major.

But it's still emulated, I can't reproduce the D2 issue because it just works on this, similar to Duckstation.

### 2024-11-08 07:53:50 — IndividualContributor

💡I might be able to get a save state over to my PS2 using this setup, <@248225699909861376> any chance you can get that save your using off your memcard and over to me?

### 2024-11-08 11:44:11 — awesomeWaves

yeah I can try work something out

### 2024-11-08 11:49:21 — awesomeWaves

_(no text)_
- file: MemoryCard3-5.mcd

### 2024-11-08 11:49:40 — awesomeWaves

This is the best I can do on short notice. That's the whole memory card file and slot 3 is before Jenova

### 2024-11-08 11:59:50 — IndividualContributor

Nice thank you I'll try get this onto the PS2 and run it. This is the one specifically that you are using for checking the disc swap stuff?

### 2024-11-08 12:01:38 — awesomeWaves

yup

### 2024-11-08 12:01:44 — awesomeWaves

it was made with the CSR also

### 2024-11-08 12:01:46 — awesomeWaves

the save I mean

### 2024-11-08 12:02:17 — awesomeWaves

I can probably grab another one also if you want

### 2024-11-08 12:02:28 — awesomeWaves

I'd just have to skim through the (virtual) memory cards

### 2024-11-08 12:13:56 — IndividualContributor

That one should be grand to reproduce the issue

### 2024-11-08 13:22:57 — Okamikaze

Yeah it's the same with FF9, it may still be emulation but feels a lot better than a PC emulator. Not that I would notice or benefit from it at my level on that game but yeah

### 2024-11-08 16:59:21 — IndividualContributor

<@248225699909861376> both saves are loading fine <:Sadge:1074826312767778950> on the PS2 Popstarter emulator

### 2024-11-08 17:02:33 — IndividualContributor

I'm going to copy the saves to my memcard and burn a disc

### 2024-11-08 17:54:07 — IndividualContributor

<@248225699909861376> so loading your save and using normal burned discs borks the disc 2 swap

### 2024-11-08 17:54:39 — IndividualContributor

https://tenor.com/view/this-is-fine-fire-house-burning-okay-gif-5263684

### 2024-11-08 17:54:52 — IndividualContributor

This means your save is borked and not the CSR disc??

### 2024-11-08 17:55:34 — awesomeWaves

So it's somewhere along the way through D1 something is corrupted?

### 2024-11-08 17:55:38 — IndividualContributor

and putting in a not-burned D2 loads

### 2024-11-08 17:55:51 — IndividualContributor

it seems to be specifically burned D2s from that save don't work

### 2024-11-08 17:57:11 — IndividualContributor

So I think a good next test is, load the save using the CSR, then at disc swap use a not-burned D2 to see if it loads

### 2024-11-08 17:57:51 — IndividualContributor

I'm burning a disc now

### 2024-11-08 18:03:25 — IndividualContributor

> So it's somewhere along the way through D1 something is corrupted?
I'm not sure because a normal D2 loads (non-burned)

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

### 2024-11-08 19:27:13 — IndividualContributor

Is it normal for D1 regular swapping to D2 burned to not work? Regardless of CSRs or save files.

Or can we mix and match regular and burned discs?

### 2024-11-08 19:44:23 — IndividualContributor

My assumption for remaining tests is that using a non CSR save state converted to PS1 memory card file and running through the above scenarios will show different results. Comparing the results of both save files will show that awesomeWaves save file was borked by D1 CSR. If this is true I'll need to compare the common RAM variables in both saves to determine the differences and hopefully find the issue. It's very likely going to be that a variable was not set correctly, let's see.

### 2024-11-08 21:38:32 — IndividualContributor

Regular Disc 1 at Gongaga before Temple PS1 save file + level 99 Cloud, Tifa, and some of the others, for anyone interested. You'll need to copy this onto a PS1 memory card to use it with discs.

It also has awesomeWaves CSR Disc 1 at Jenova life save in slot 1 which was used in the test scenarios above.
- file: BASCUS-94163FF7-S03

### 2024-11-08 23:07:32 — IndividualContributor

Just tested this and it looks like you can't start with a regular D1 then swap into a burned D2, you get error noise and it won't load.

### 2024-11-08 23:09:15 — IndividualContributor

And if you get an error noise during a disc swap that's a good thing, just means you need to put in a regular D2 for it to load, as opposed to no error noise during the disc swap which means it's borked and you have to reset and reload the save

### 2024-11-09 00:01:11 — IndividualContributor

<@248225699909861376> could you test something for me when you get a chance?

Put this save file on your PS1 mem card and start with D1 burned (not CSR), load the save, kill Jenova, don't save, swap to D2 burned (not CSR), let me know if your normal burned discs work with that save? The save is a regular disc save I pulled from Duck station, not a CSR save so should not be borked
- file: BASCUS-94163FF7-S02

### 2024-11-09 00:06:39 — awesomeWaves

I don't have normal backups

### 2024-11-09 00:06:48 — awesomeWaves

I've only actual NTSC discs

### 2024-11-09 00:07:27 — awesomeWaves

if they would be okay? Else I'd have to burn a set

### 2024-11-09 00:08:19 — awesomeWaves

Sorry i actually meant to read back over all the stuff from earlier, I spotted it while i was streaming but didn't read it properly.

### 2024-11-09 00:16:03 — IndividualContributor

Ah fair enough it's fine I've burned a second D2 regular to test this. I've been working under the assumption that my PS2 and backups have been working as expected, swaps and all. But I can't seem to get backups to swap from D1 to D2 at the moment, which makes it difficult to determine if it is the CSR or just the fact it's a burned disc

### 2024-11-09 00:16:27 — IndividualContributor

https://tenor.com/view/spider-man3-toby-maguire-peter-parker-crying-sad-gif-3434577

### 2024-11-09 00:16:57 — awesomeWaves

I'm sure it was working in a previous version?

### 2024-11-09 00:17:02 — awesomeWaves

let me check my VODs

### 2024-11-09 00:17:22 — IndividualContributor

if it was let me know what version of the CSR it was

### 2024-11-09 00:18:34 — IndividualContributor

Ok thank F my newly burned D2 works, phew

### 2024-11-09 00:19:54 — awesomeWaves

ok nvm, it wasn't working on version 0.1.1 😅

### 2024-11-09 00:20:04 — awesomeWaves

I've a VOD using that version and it didn't load D2

### 2024-11-09 00:20:04 — IndividualContributor

oh no

### 2024-11-09 00:20:27 — IndividualContributor

does that have the world map boat skip?

### 2024-11-09 00:20:55 — awesomeWaves

both boat scenes were in

### 2024-11-09 00:21:01 — awesomeWaves

🫠

### 2024-11-09 00:21:08 — IndividualContributor

that's reallly bad

### 2024-11-09 00:22:09 — IndividualContributor

there is something very wrong with the CSR then if that is the case, if it was borked since v0.1.1, that's literally the first version 😭

### 2024-11-09 00:22:37 — IndividualContributor

I'm going to have to test making a tiny change to a fresh CSR and then try a disc swap

### 2024-11-09 00:23:00 — IndividualContributor

luckly I have that save file at jenova based on a regular run

### 2024-11-09 00:23:20 — IndividualContributor

I'll make a change at Jenova somewhere to see if any kind of change breaks disc swapping

### 2024-11-09 00:24:09 — IndividualContributor

Did nobody get to D2 since v0.1.1? <:KEKW:1074810897308069948>

### 2024-11-09 00:24:26 — awesomeWaves

You'll have to ask Okami

### 2024-11-09 00:24:31 — awesomeWaves

I thought he did?

### 2024-11-09 00:24:54 — awesomeWaves

I'm still in learning mode, so I guess I wasn't the best trial run

### 2024-11-09 00:25:30 — awesomeWaves

I think I was blinded by the fact, I was learning on Duckstation first and it worked fine

### 2024-11-09 00:25:35 — awesomeWaves

so I recalled it working as intended

### 2024-11-09 00:25:36 — IndividualContributor

So a workaround for now could be to swap into a regular disc 2 to load and stay on formations, then just open the tray and put in D2 CSR

### 2024-11-09 00:25:58 — awesomeWaves

but that VOD from last week even had the version in the stream title (i've been trying to do that for reference)

### 2024-11-09 00:26:29 — awesomeWaves

well, maybe there's a 5 head move

### 2024-11-09 00:26:39 — awesomeWaves

put the break at the beginning of Disc 2

### 2024-11-09 00:26:47 — awesomeWaves

oh wait nvm

### 2024-11-09 00:26:52 — awesomeWaves

<:LUL:586302674513690636>

### 2024-11-09 00:27:09 — awesomeWaves

I was thinking we could swap discs during the break, but we can't even get to D2

### 2024-11-09 00:27:38 — IndividualContributor

Maybe I can put the break after the "Save Game" scene

### 2024-11-09 00:27:43 — awesomeWaves

what if we put in an OG D1 during the break

### 2024-11-09 00:27:48 — awesomeWaves

then see if it loads a CSR D2?

### 2024-11-09 00:27:56 — IndividualContributor

well no wait you need to first load a regular D2

### 2024-11-09 00:29:28 — IndividualContributor

It's worth a test, but I think it won't work because it's the RAM that F'd not the disc, and putting in a regular D1 at the break means you get all the text boxes of the spiral scene then into disc swap but the RAM values are still borked. That's be my guess

### 2024-11-09 00:30:56 — IndividualContributor

I wonder would skipping the disc swap work, and just putting the break scene in instead, during the break you swap in D2 CSR and see what happens

### 2024-11-09 00:31:21 — IndividualContributor

I think the only reason for the disc swaps are the FMVs

### 2024-11-09 00:31:27 — IndividualContributor

all game code is on all discs

### 2024-11-09 00:32:04 — IndividualContributor

leaving in D1 CSR and skipping over the disc swaps will bork the elevator FMVs and stuff like that iirc, but might not if we actually put D2 CSR in

### 2024-11-09 00:32:17 — awesomeWaves

I actually had pondered this earlier but I don't know enough

### 2024-11-09 00:32:27 — awesomeWaves

is it actually possible to just put the entire CSR on one disc?

### 2024-11-09 00:32:50 — awesomeWaves

I know you're losing a sort of skill check, but I think that would actually be a favorable workaround imo

### 2024-11-09 00:33:22 — IndividualContributor

No I tried, the FMVs for elevators on disc 2 will not work because you still have disc 1 in, and there may have been other weird stuff

### 2024-11-09 00:34:04 — IndividualContributor

And you have to swap in D3 because of Sephi and the whole final descent stuff. Some of the backgrounds are FMVs and are not on D1

### 2024-11-09 00:34:13 — IndividualContributor

Supernova is an FMV on D3

### 2024-11-09 00:35:19 — IndividualContributor

if it's the only way to get it to work on PSX then it should be done

### 2024-11-09 00:35:43 — awesomeWaves

it's interesting that there's no issue swapping to D3

### 2024-11-09 00:35:55 — awesomeWaves

I have been using an OG NTSC D3

### 2024-11-09 00:38:38 — IndividualContributor

Yes it is interesting, and maybe I did just mess something up waaay back in v0.1.1 and we're only finding it now on PSX. Disc swapping might actually be fine between D1 and D2 we I find and fix the but. And it being in v0.1.1 is also kind of good in that it eliminates the issue being introduced in v0.1.1+

### 2024-11-09 00:39:06 — IndividualContributor

I think starting from a fresh regular .bin and making a tiny change at Jenova will tell us if D1 to D2 swap is possible

### 2024-11-09 00:40:01 — awesomeWaves

Yeah start there I guess and if the disc swap works, I guess it's unfortunately it's just adding cuts back in until it stops working 😐

### 2024-11-09 00:41:32 — IndividualContributor

Exactly. It's not the world map boat scene too lol

### 2024-11-09 00:42:51 — IndividualContributor

What versions of the CSR have been burned to disc and run on PSX? <@248225699909861376> <@170713534726930432>

### 2024-11-09 00:45:26 — awesomeWaves

I'll list the versions but, as I mentioned only 0.1.1 got to D2 until 0.4.6

### 2024-11-09 00:46:03 — IndividualContributor

And both were on PSX?

### 2024-11-09 00:46:13 — awesomeWaves

0.1.1
0.2.0
0.3.0
0.4.6
0.4.7
0.4.8

### 2024-11-09 00:46:18 — awesomeWaves

all on PSX

### 2024-11-09 00:46:19 — awesomeWaves

yeah

### 2024-11-09 00:46:42 — IndividualContributor

ok cool so we're 100% v0.1.1 has the disc swap issue

### 2024-11-09 00:47:02 — awesomeWaves

yup

### 2024-11-09 00:48:07 — awesomeWaves

I can actually probably check what version that save file came from also

### 2024-11-09 00:48:10 — IndividualContributor

There isn't much done up to v0.1.1 really, so I'm hoping that making a tiny change doesn't break disc swaps

### 2024-11-09 00:48:21 — awesomeWaves

by checking the VODs, but I guess it's irrelevant

### 2024-11-09 00:48:27 — awesomeWaves

as it's 0.1.1 or later

### 2024-11-09 00:49:55 — Okamikaze

I've burned 0.4.6, 0.4.9, and the very first one

### 2024-11-09 00:50:12 — awesomeWaves

did they work to disc swap?

### 2024-11-09 00:50:55 — Okamikaze

The very first one softlocked in Don Corneo's basement, 0.4.6 and 0.4.9 both didn't let me through after letting the break timer run out

### 2024-11-09 00:52:18 — IndividualContributor

yeah the disc swap was there since the beginning and we just didn't catch it <:Sadge:1074826312767778950> dammit Duckstation!!

### 2024-11-09 00:52:40 — IndividualContributor

On the bright side it works in Duckstation, which is likely where most people will play it

### 2024-11-09 00:52:56 — IndividualContributor

hacking you ps2 and burning discs is a bit of a pain in the ass really

### 2024-11-09 00:52:59 — awesomeWaves

oh for sure. it'll be almost entirely Duck runners

### 2024-11-09 00:53:04 — awesomeWaves

if it goes ahead

### 2024-11-09 00:53:10 — IndividualContributor

are ff8 and 9 on disc?

### 2024-11-09 00:53:28 — awesomeWaves

FF9 works on Disc, but 99% run on Duck

### 2024-11-09 00:53:38 — awesomeWaves

FF8 doesn't have a PSX CSR

### 2024-11-09 00:53:48 — IndividualContributor

I really want 7 to run on disc though

### 2024-11-09 00:53:57 — awesomeWaves

either way, I'll do the same

### 2024-11-09 00:54:11 — awesomeWaves

I'll pause the timer and soft reset or whatever finding a way to make it work

### 2024-11-09 00:55:02 — IndividualContributor

I think skipping the disc swap might work and just putting D2 CSR in on the break

### 2024-11-09 00:55:55 — IndividualContributor

make it a requirement for the run that the runner does it as fast as possible on camera

### 2024-11-09 00:56:00 — awesomeWaves

that would be a fine work around for me

### 2024-11-09 00:56:00 — IndividualContributor

as the skill check <:KEKW:1074810897308069948>

### 2024-11-09 00:56:22 — awesomeWaves

You could just make 2 versions, one that has a disc swap for duck

### 2024-11-09 01:01:02 — IndividualContributor

I'm testing right now and the results are showing that your save file is not the issue

### 2024-11-09 01:01:09 — IndividualContributor

I'll post the result here in a few mins

### 2024-11-09 01:01:24 — IndividualContributor

So the save is not borked from D1 CSR

### 2024-11-09 01:01:59 — IndividualContributor

It's actually jus the CSR kekw, and loading your save on regular or burned discs works fine on disc swap

### 2024-11-09 01:05:46 — IndividualContributor

Also, the file sizes of the .bin files for D1 and D2 are the same for both regular and CSR so data being shited due to scripts being removed/moved/added etc. is not the issue

### 2024-11-09 01:10:35 — IndividualContributor

imagine it was because I removed the intro...

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

### 2024-11-09 01:20:52 — IndividualContributor

yes it was likely because i put them into folders for versioning

### 2024-11-09 01:21:04 — IndividualContributor

I only ever make changes to the most recent version

### 2024-11-09 01:21:28 — IndividualContributor

so v0.1.1 hasn't been updated since v0.2.0 came out

### 2024-11-09 01:21:38 — IndividualContributor

it's essentially locked in forever now

### 2024-11-09 01:22:26 — Okamikaze

Ah gotcha. I was able to discern the disc 1 I tried just now was that version by checking for the Don Corneo basement softlock. Not sure about for disc 2, but the fact it was right next to the disc 1 probably means this disc 2 is also 0.1.1

### 2024-11-09 01:22:59 — IndividualContributor

yes I'm keeping the versions for each disc the same even if there are no changes

### 2024-11-09 01:23:17 — IndividualContributor

D3 changes will start at whatever verison the latest is at by then

### 2024-11-09 01:24:18 — Okamikaze

Yeah sorry, just I recently moved some discs from my binder into a spindle so they were all stacked with no indication as to which was which

### 2024-11-09 01:33:10 — IndividualContributor

Here's what we know so far:

- file sizes for .bin files stays the same after patching
- previous CSR save files are not breaking the D1 to D2 swapping on CSR
- the disc swap issue was introduced in v0.1.1

Next tests:

- start from a fresh .bin, make a small change near D1 to D2 disc swap (jenova fight skip), skip from start to jenova, burn to disc, test in ps2 for disc swap issue
  - the result of this test will determine if any small change to the .bin breaks the D1 to D2 disc swap loading

- if making a small change does not break disc swap loading, then start reverting changes made in v0.1.1 until it works... more detail on this later

### 2024-11-09 01:34:09 — IndividualContributor

> the disc swap issue was introduced in v0.1.1
<@170713534726930432> I don't think I fully understand the test you did for v0.1.1. How did you go about testing this?

### 2024-11-09 01:34:53 — IndividualContributor

My understanding is that you were able to swap from D1 to D2 on v0.1.1?

### 2024-11-09 01:34:59 — IndividualContributor

on PSX

### 2024-11-09 01:37:13 — awesomeWaves

I think the confusion might also be that the versions weren't entirely labeled prior to 0.1.1? So maybe that referred to a few versions?

### 2024-11-09 01:37:52 — IndividualContributor

Yes you're right there were a bunch of patches released initially without a version number

### 2024-11-09 01:38:20 — IndividualContributor

Yours is definitely v0.1.1 which was the final "first" version

### 2024-11-09 01:38:27 — awesomeWaves

I've been keeping the ppfs in folders
- file: image.png

### 2024-11-09 01:38:35 — IndividualContributor

so Okami you likely have a earlier version than v0.1.1

### 2024-11-09 01:38:36 — awesomeWaves

but I still don't know when it went o 0.1 from 0.0 I guess

### 2024-11-09 01:38:46 — awesomeWaves

Okami was running this, before I ever even downloaded it

### 2024-11-09 01:38:50 — awesomeWaves

it my point

### 2024-11-09 01:39:03 — awesomeWaves

so it probably was an even earlier version yeah

### 2024-11-09 01:39:42 — IndividualContributor

<@170713534726930432> can you send me the .ppf or the .bin of the version that is working? I might be able to eliminate some of the changes in v0.1.1 based on that working version

### 2024-11-09 01:39:50 — IndividualContributor

should save me a ton of time testing

### 2024-11-09 01:54:36 — IndividualContributor

I'm burning v0.1.1 now so I can compare to the version Okami has and maybe determine what broke

### 2024-11-09 01:55:15 — IndividualContributor

I'll test this v0.1.1 by loading into the Jenova fight save and then attempting to disc swap

### 2024-11-09 01:56:17 — IndividualContributor

I feel like this will work fine though because I'm basically just teleporting in at that point skipping all the potential bad changes and then just continuing to disc swap. Let's see

### 2024-11-09 01:57:15 — IndividualContributor

Although there will be this change that will be tested by this

```
ancnt4 649 > 0 dir > S0 - Main ancnt2 647 > 0 dir > S0 - Main blue_2 641 > 0 dir > S0 - Main

removed some scenes where Aeris dies
```

### 2024-11-09 01:59:33 — awesomeWaves

that'll be covered within the Jenova save file

### 2024-11-09 02:00:06 — awesomeWaves

I don't even know if it'll help though, if the root cause it elsewhere

### 2024-11-09 02:00:09 — IndividualContributor

I think based on my testing results above today the save file is not making a difference to the disc swap stuff

### 2024-11-09 02:01:03 — awesomeWaves

so the save file doesn't matter? it'll load from OG D1 -> D2 from the save

### 2024-11-09 02:01:09 — IndividualContributor

loading your save on regular and burned discs works fine for disc swap, so if there was anything borked and saved in there it would break the disc swap

### 2024-11-09 02:01:16 — IndividualContributor

yes

### 2024-11-09 02:01:24 — awesomeWaves

is that maybe narrowing the issue down to the end of D1?

### 2024-11-09 02:02:13 — awesomeWaves

It's late I'm probably missing something you said earlier

### 2024-11-09 02:03:12 — IndividualContributor

I'll try to pull all this together tomorrow morning when I'm less tired and figure out the next tests

### 2024-11-09 02:03:42 — IndividualContributor

I'm doing a quick test now of v0.1.1 and loading into the Jenova fight to see what happens

### 2024-11-09 02:06:06 — IndividualContributor

well sheet ok so D1 v0.1.1 loading straight into the jenova saves from earlier, fighting Jenova, disc swap to D2 burned (not CSR / no modifications) is NOT working.

### 2024-11-09 02:07:46 — IndividualContributor

if I'm certain that the save file is not affecting this test, then this tells me the issue is between loading into Jenova and disc swap on v0.1.1. I'll look at this more closely tomorrow, revert everything I changed in this secion back to original, burn and test again.

### 2024-11-09 02:08:45 — awesomeWaves

Interesting, perhaps it just is something at the end of Disc 1

### 2024-11-09 02:08:53 — IndividualContributor

I hope so

### 2024-11-09 02:08:55 — awesomeWaves

setting some flags after the JLife fight

### 2024-11-09 02:08:59 — awesomeWaves

and confusing things

### 2024-11-09 02:09:06 — IndividualContributor

ancnt4 649 > 0 dir > S0 - Main ancnt2 647 > 0 dir > S0 - Main blue_2 641 > 0 dir > S0 - Main

removed some scenes where Aeris dies

### 2024-11-09 02:09:23 — IndividualContributor

this is what I have documented as changed there, but I may not have noted everything down

### 2024-11-09 02:09:34 — awesomeWaves

maybe just use a fresh bin, remove things 1 by 1 from JLife onwards

### 2024-11-09 02:11:35 — IndividualContributor

First I'm going to patch a fresh .bin with v0.1.1, revert everything from the save onwards, and test. If I can get v0.1.1. working then I can get the latest version working too

### 2024-11-09 08:40:13 — IndividualContributor

Yeah I'll do this later, didn't read properly last night it's a better next test.

### 2024-11-09 10:16:52 — IndividualContributor

_(no text)_
- file: IMG20241109101632.jpg

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

### 2024-11-09 12:35:08 — IndividualContributor

https://tenor.com/view/liam-neeson-i-will-find-you-taken-gif-5593626

### 2024-11-09 14:25:13 — awesomeWaves

I was away all morning but if there's anything you specificially need testing on hardware let me know as I have a few hours now

### 2024-11-09 14:29:34 — IndividualContributor

Could you test a specific patch for me on disc? I'll get the link

### 2024-11-09 14:41:44 — IndividualContributor

https://github.com/individualcontributordev/Final-Fantasy-7-CSR/blob/783be7dc1e88c45287371bf537cd160af0dfe0a7/Final%20Fantasy%20VII%20(Disc%201)%20CSR%20Patch.ppf

### 2024-11-09 14:42:08 — IndividualContributor

This is a version before v0.1.1

### 2024-11-09 14:42:38 — IndividualContributor

Just load into jenova and play through to disc swap to see if it works

### 2024-11-09 14:44:08 — awesomeWaves

ok I'll burn it now

### 2024-11-09 14:56:45 — awesomeWaves

so we're sure the save file doesn't matter?

### 2024-11-09 14:56:52 — awesomeWaves

so i can use one with more PD's 😅

### 2024-11-09 14:58:36 — IndividualContributor

Yes use your 1 PD one lol

### 2024-11-09 14:58:40 — IndividualContributor

Or use mine above

### 2024-11-09 14:59:00 — IndividualContributor

Mine has C and T lv 99

### 2024-11-09 14:59:17 — IndividualContributor

At that save from a non-CSR run

### 2024-11-09 15:00:24 — awesomeWaves

ah ok, I used a different one. Good practice for Jlife. I'll use the other save now

### 2024-11-09 15:00:31 — awesomeWaves

just checking if it will load

### 2024-11-09 15:00:43 — IndividualContributor

https://discord.com/channels/936291902133796955/1288235003901120586/1304596616166113361

### 2024-11-09 15:00:50 — IndividualContributor

Yours should be grand

### 2024-11-09 15:00:59 — awesomeWaves

well, the save I used was from the current CSR 0.4.7 so i assume it should be broken also

### 2024-11-09 15:01:53 — awesomeWaves

didn't work anyway

### 2024-11-09 15:03:49 — awesomeWaves

So that patch file for D1 -> Using save from 0.4.7 -> D2 0.4.7 = didn't load

### 2024-11-09 15:04:29 — awesomeWaves

I'll try the old save now

### 2024-11-09 15:04:51 — awesomeWaves

but I've a feeling that it wont work either

### 2024-11-09 15:06:16 — IndividualContributor

Cool yeah if you can test with my save file there that'd be good

### 2024-11-09 15:09:24 — awesomeWaves

I'll test with the old one I sent first

### 2024-11-09 15:09:32 — awesomeWaves

but I got Aqualunged so the old 1 PD isn't helping

### 2024-11-09 15:14:03 — awesomeWaves

Annnddddddd.... didn't work

### 2024-11-09 15:14:42 — IndividualContributor

With my save?

### 2024-11-09 15:14:47 — awesomeWaves

no with mine

### 2024-11-09 15:14:50 — awesomeWaves

the 1 PD one

### 2024-11-09 15:14:53 — awesomeWaves

I'll check the next one now

### 2024-11-09 15:18:10 — awesomeWaves

uhhh could export that save as an .mcd?

### 2024-11-09 15:18:32 — IndividualContributor

You can just copy it straight onto the card

### 2024-11-09 15:18:32 — awesomeWaves

memory card pro just takes thes mcds

### 2024-11-09 15:18:45 — IndividualContributor

Do you have ulaunch?

### 2024-11-09 15:18:47 — awesomeWaves

_(no text)_
- file: image.png

### 2024-11-09 15:19:35 — awesomeWaves

I can get uLaunch through my FMcB memory card I guess?

### 2024-11-09 15:19:43 — Okamikaze

So I just tried waves save with my first IC CSR burns and I got into disc 2

### 2024-11-09 15:20:23 — IndividualContributor

I'm not at the PC right now but I'll put my save on a .MCD, you can likely convert it with soft tool

### 2024-11-09 15:20:48 — Okamikaze

Can you remember what the first thing you ever trimmed on disc 2 was IndividualContributor? Just to confirm that the disc 2 I put in was a matching version

### 2024-11-09 15:21:29 — Okamikaze

I'm uploading the bin to Google Drive rn, I can't remember the ppf but know that I set it up on the 1st of October

### 2024-11-09 15:21:32 — Okamikaze

Might help narrow it down

### 2024-11-09 15:23:46 — IndividualContributor

You can create the patch using https://www.romhacking.net/patch/

### 2024-11-09 15:23:52 — IndividualContributor

Smaller file to upload

### 2024-11-09 15:23:56 — Okamikaze

If you use the DuckStation memory card editor it should allow you to import the 8kb saves aswell as .mcs

### 2024-11-09 15:24:04 — awesomeWaves

I'm using a memory card editor and I can't even add your file to an mcd

### 2024-11-09 15:24:10 — IndividualContributor

Disc 2 can be a burned regular disc

### 2024-11-09 15:24:13 — Okamikaze

Huh

### 2024-11-09 15:28:19 — IndividualContributor

I'm testing using a regular burned D2 not a CSR D2 to eliminate D2 CSR from the problem.

### 2024-11-09 15:28:25 — Okamikaze

How do you rip the patch from a bin/cue on that website? I can't see that option

### 2024-11-09 15:28:43 — IndividualContributor

There is a toggle top right

### 2024-11-09 15:28:57 — IndividualContributor

Put original disc in top and modified in bottom

### 2024-11-09 15:29:02 — awesomeWaves

Duckstation won't import your save file in it's memory card manager either 🤷‍♂️

### 2024-11-09 15:30:41 — IndividualContributor

Yeah it's a physical PS1card file, I copy it from USB to the physical real card using ulaunch on the PS2

### 2024-11-09 15:31:06 — awesomeWaves

ah ok

### 2024-11-09 15:31:12 — awesomeWaves

let me see if i can manage that so

### 2024-11-09 15:32:11 — Okamikaze

_(no text)_
- file: BASCUS-94163FF7-S02.mcs

### 2024-11-09 15:34:15 — Okamikaze

_(no text)_
- file: FINALFANTASY7.ppf

### 2024-11-09 15:37:54 — awesomeWaves

ok I worked it out

### 2024-11-09 15:37:59 — awesomeWaves

loaded in, level 99 tifa

### 2024-11-09 15:38:27 — IndividualContributor

BEEFA

### 2024-11-09 15:39:54 — Okamikaze

I just wanna let you know that when I loaded your save up Tifa got targetted twice and her limit was fill, so I buffered into Cloud's Cross-Slash with a Deathblow and it landed. Blessed save <:Kappa:1075235124200886273>

### 2024-11-09 15:41:49 — awesomeWaves

OK, Your new D1 Patch -> Your Save -> D2 0.4.6 = no load

### 2024-11-09 15:42:14 — awesomeWaves

gonna try an OG D2

### 2024-11-09 15:47:02 — awesomeWaves

Ok, no load. I think that definitively says it's a D1 issue then

### 2024-11-09 15:47:12 — awesomeWaves

because an actual Disc 2 isn't loading

### 2024-11-09 15:50:11 — IndividualContributor

Exactly regular D2 burned should work. The patch was the one from the link?

### 2024-11-09 15:59:01 — awesomeWaves

but an actual Disc 2 doesn't work, nor does version 0.4.6 so why would a backup D2 work?

### 2024-11-09 15:59:11 — awesomeWaves

todays patch yes. Your save also

### 2024-11-09 16:00:11 — IndividualContributor

Nice thank you

### 2024-11-09 16:02:36 — IndividualContributor

This patch is the next to be tested, same scenario and save https://github.com/individualcontributordev/Final-Fantasy-7-CSR/blob/7e3097f71627a7b62e789930c8ed9953761d3955/Final%20Fantasy%20VII%20(Disc%201)%20CSR%20Patch.ppf

### 2024-11-09 16:02:51 — IndividualContributor

If you can't no worries I'll be doing more later

### 2024-11-09 16:04:10 — IndividualContributor

I'm incrementally testing each version from v0.1.1 back to the initial commit

### 2024-11-09 16:07:01 — awesomeWaves

can we give them letters or some other identifier so i can write it on my discs not to be confused

### 2024-11-09 16:07:06 — awesomeWaves

are they dated with the commit?

### 2024-11-09 16:09:45 — IndividualContributor

Use the date and commit hash

### 2024-11-09 16:10:21 — IndividualContributor

The commit hash on its own is fine

### 2024-11-09 16:10:30 — IndividualContributor

I'm also updating the above post with the results

### 2024-11-09 16:10:42 — IndividualContributor

https://discord.com/channels/936291902133796955/1288235003901120586/1304764732380680212

### 2024-11-09 16:25:43 — IndividualContributor

This is the list I'm working from https://github.com/individualcontributordev/Final-Fantasy-7-CSR/commits/main

### 2024-11-09 16:27:59 — IndividualContributor

Not all of them need to be tested so I'm keeping track in this post and only doing certain ones. https://discord.com/channels/936291902133796955/1288235003901120586/1304764732380680212

### 2024-11-09 17:26:59 — Okamikaze

I just labelled mine that work Init commit, good enough differentiation for me

### 2024-11-09 17:28:12 — IndividualContributor

Ok but that's the one we actually don't know what the version is right?

### 2024-11-09 17:28:54 — IndividualContributor

It'll be between initial commit and the most recently tested

### 2024-11-09 17:31:33 — Okamikaze

Yeah, I can add a shape or something later 😅

### 2024-11-09 21:46:53 — IndividualContributor

Just want to confirm there were no more versions tested? 793be8d was the last one awesomeWaves tested today right?

### 2024-11-09 22:16:29 — IndividualContributor

Ok I'm testing 6b20e5a now

### 2024-11-09 22:21:46 — IndividualContributor

https://tenor.com/view/yeah-excellent-extra-hello-hello-u-gif-15963832525704708909

### 2024-11-09 22:21:49 — IndividualContributor

6b20e5a is working

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

### 2024-11-09 22:50:55 — IndividualContributor

5129385 is working, getting closer disc swap bug I can smell it

### 2024-11-09 22:51:04 — IndividualContributor

https://tenor.com/view/the-rock-smell-wwe-gif-15877234124744977095

### 2024-11-09 22:55:34 — IndividualContributor

I bet it was the world map boat skipping...

### 2024-11-09 23:12:44 — Hope

What did you do to remove that

### 2024-11-09 23:12:51 — Hope

Skip the map entirely?

### 2024-11-09 23:21:18 — IndividualContributor

Yep instead of jumping to the wm I jump to the costa scene

### 2024-11-09 23:21:34 — IndividualContributor

I'm testing this now, if it doesn't work I'll go back to the other testing

### 2024-11-09 23:21:43 — IndividualContributor

I feel like this might be this issue though, let's see

### 2024-11-09 23:27:25 — IndividualContributor

On v0.4.9 reverted this skip from Jenova boat to Costa, burning disc now

### 2024-11-09 23:33:13 — IndividualContributor

https://tenor.com/view/stressed-out-suspense-eating-popcorn-waiting-to-see-what-happens-gif-14120143

### 2024-11-09 23:33:16 — IndividualContributor

Loading disc

### 2024-11-09 23:37:22 — IndividualContributor

Nope, back to testing

### 2024-11-09 23:41:24 — IndividualContributor

Last two being tested

- 6bf4c1b (reduced rufus and after motorball scenes, Oct 14th, '24) - ...testing 🪛 

- 7e3097f (from jenny on the block until dyne reviewed and shortened, Oct 15th, '24) - ...testing 🪛 

<@191046608064872449> you mentioned something about the Bike game? can you give me more details? I'm pretty sure the scene that we load into for disc swap has some Bike stuff in there too

### 2024-11-09 23:41:53 — Hope

Yeah so if you fuck up certain variable

### 2024-11-09 23:41:56 — IndividualContributor

And from testing it yesterday if you change anything in there stuff breaks without explanation sometimes

### 2024-11-09 23:41:58 — Hope

Youll actually load like

### 2024-11-09 23:42:01 — Hope

part of the bike game

### 2024-11-09 23:42:04 — Hope

but still load into disc 2

### 2024-11-09 23:42:23 — Hope

So I would just start with the variables youre supposed to have to get to the disc change thing

### 2024-11-09 23:42:25 — Hope

on that map

### 2024-11-09 23:42:32 — Hope

vs what you have when you load the screen before

### 2024-11-09 23:42:33 — Hope

in the csr

### 2024-11-09 23:42:58 — IndividualContributor

I'll test this first then 

6bf4c1b (reduced rufus and after motorball scenes, Oct 14th, '24) - ...testing 🪛

because if this fails then the problem is in here

### 2024-11-09 23:43:10 — Hope

gl

### 2024-11-09 23:43:33 — Hope

Its very wild to me that they have 1 map for like a multiple of those kinda intermission scenes

### 2024-11-09 23:43:38 — Hope

and its all just variable controls

### 2024-11-09 23:45:21 — IndividualContributor

yeah same it's a pain to try reason about, poor devs <:KEKW:1074810897308069948>

### 2024-11-09 23:45:54 — IndividualContributor

ok burning 6bf4c1b now

### 2024-11-09 23:56:55 — IndividualContributor

https://tenor.com/view/good-boy-dance-gif-25381375

### 2024-11-09 23:57:45 — IndividualContributor

6bf4c1b (reduced rufus and after motorball scenes, Oct 14th, '24) -  D1 > D2 disc swap not working ❌

The disc swap issue was introudced here, I'll compare this patch with another that is working and figure out what changes were made that broke the disc swapping.

### 2024-11-10 00:29:01 — IndividualContributor

FeelsGoodMan https://tenor.com/view/feels-good-gif-19232182

### 2024-11-10 00:29:02 — IndividualContributor

https://youtu.be/vuachA46qHo

### 2024-11-10 00:30:02 — IndividualContributor

<@191046608064872449> look at this shit
- file: disc_swap_bug_fix.PNG

### 2024-11-10 00:30:42 — IndividualContributor

This was what broke disc swapping. It's not even in code related to swapping into disc 2 sort of, it's the Motorball battle code that is not run during disc 2 swap. Disc 2 swap IS in here though further down.

### 2024-11-10 00:30:53 — Hope

Which is new?

### 2024-11-10 00:30:54 — Hope

the right side?

### 2024-11-10 00:31:01 — IndividualContributor

Left is working, right is not

### 2024-11-10 00:31:28 — Hope

Its... playing the music?

### 2024-11-10 00:32:04 — IndividualContributor

After the Motorball fight it waits 80 frames and then plays music #0 of that scene

### 2024-11-10 00:32:22 — Hope

Yeah but you moved to where it will never play the music yeah

### 2024-11-10 00:32:31 — Hope

so playing the music is required to disc swap later?

### 2024-11-10 00:33:16 — IndividualContributor

The music is after the Motorball fight, disc swap is after the JenovaLife fight..... but yeah I reverted this and it fixes the disc swapping issue

### 2024-11-10 00:33:30 — Hope

I wonder if not playing the music causes that music volume transition to fuck something up

### 2024-11-10 00:34:03 — Hope

That or it might be the 80 frames thats important for the prior transition to finish?

### 2024-11-10 00:34:09 — IndividualContributor

The thing is I load a non-CSR save file straight into the JenovaLife area, then play from there

### 2024-11-10 00:34:22 — IndividualContributor

This code is not even run

### 2024-11-10 00:34:31 — Hope

Oh so its fucking with the data location

### 2024-11-10 00:34:40 — IndividualContributor

Yep that's what I'm thinking too

### 2024-11-10 00:34:49 — Hope

Try putting the wait 80 frames after the jump to map

### 2024-11-10 00:34:50 — Hope

kekw

### 2024-11-10 00:34:55 — IndividualContributor

Because a change was made to this scene it messed all of it up

### 2024-11-10 00:35:21 — Hope

If the moving 80 frames works, it's probably important to try to have all edits not change total number of code lines as a general practice

### 2024-11-10 00:36:34 — IndividualContributor

Yes I think that would be a good way to go moving forward, just move the code around instead of deleting the script entries

### 2024-11-10 00:36:56 — Hope

Well if you ever have to add something for some reason... maybe delete a line to compensate

### 2024-11-10 00:37:00 — IndividualContributor

And just don't ever touch blackbgb_103

### 2024-11-10 00:37:13 — Hope

Thats the transition one with the bike?

### 2024-11-10 00:37:25 — Hope

I honestly couldnt put the effort to even understand how that shit is supposed to work properly

### 2024-11-10 00:37:27 — Hope

its such a mess

### 2024-11-10 00:38:40 — IndividualContributor

I did do some testing to force where I wanted to go in the code for the disc swapping stuff but it didn't work as expected, I thought I was just tired and was F'n something up, but NO it's just this god damn weird code in here

### 2024-11-10 00:39:25 — Hope

Sooo....

### 2024-11-10 00:39:32 — Hope

What happens if you add a couple lines of code

### 2024-11-10 00:39:35 — Hope

some other random place

### 2024-11-10 00:39:39 — Hope

Does it fix it

### 2024-11-10 00:39:39 — Hope

lol

### 2024-11-10 00:39:59 — IndividualContributor

I'm going to add back in the 80 frames but put it under the jump, burn a disc and test

### 2024-11-10 00:40:10 — Hope

Just curious if its like

### 2024-11-10 00:40:15 — Hope

There is some total amount you can edit

### 2024-11-10 00:40:17 — Hope

Before it borks

### 2024-11-10 00:40:22 — Hope

or if that map specifically

### 2024-11-10 00:40:28 — Hope

is buffering something important to a location

### 2024-11-10 00:44:18 — IndividualContributor

To fix this I added back in the 80 frames and repositioned the Play music #0. So the issue was not because I added too much or went over a limit, it was either I went under some threshold in this scene for number of lines and something else is using line numbers as an index directly into here, or this scene is compiled to a block of binary that has to be in a certain structure in memory. So changing it's structure at all breaks some pointer or something. The reason I think this is because this code is not run during the JenovaLife fights and disc swap, based on my understanding of these scripts. But I guess Makou Reactor may not be showing us everything that is going on with this stuff.

### 2024-11-10 00:53:48 — IndividualContributor

Now after Motorball is borked ffs...

### 2024-11-10 00:54:02 — IndividualContributor

Easier to fix this though <:KEKW:1074810897308069948>

### 2024-11-10 00:54:42 — Hope

Well im saying you can probably just push it all to after the map jump

### 2024-11-10 00:54:47 — Hope

its just the total lines need to be there

### 2024-11-10 00:54:52 — Hope

to keep the other stuff in place

### 2024-11-10 00:57:31 — IndividualContributor

wait I think its fine actually, the music after motorball where everyone is on the bridge plays in the black then the Barret skip scene shows

### 2024-11-10 00:58:30 — IndividualContributor

I'll test skipping the music again tomorrow but instead of deleting the 80 frames I'll move them down with the play music #0 to see if it was actually changing the number of lines in the script that borked it

### 2024-11-10 01:00:59 — IndividualContributor

---

🎮 Release v0.4.010 https://github.com/individualcontributordev/Final-Fantasy-7-CSR

- Fixed the Disc 1 to Disc 2 swapping issue. After the JenovaLife fight disc 2 would not load correctly, this patch fixes this issue by making a change to the blackbgb_103 script to revert some changes made after Motorball

### 2024-11-10 01:10:38 — Hope

This is what i was asking yeah

### 2024-11-10 01:18:44 — IndividualContributor

Ah ok yeah my brain is a bit melted <:KEKW:1074810897308069948>

### 2024-11-10 14:34:27 — IndividualContributor

I've made a change to the repo so there is only one available version which is the latest, each patch will be versioned and stored in the git version history so no need for a folder system for version numbers. Debugging that disc swap issue showed that having all the versions in there own folder was useless because I just eneded up using the commit hash, which was better and more of a fine grained way to identify changes to the patches. 

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-11-10 16:12:47 — IndividualContributor

<@248225699909861376> your notes above

•You gain control immediately after putting Cait in the party for the first time, I normally use that parallysis to buffer movement

The end of the scene where Cait joins you hasn't been changed, Cloud leans forward and Cait walks into his pocket, then Tifa climbs in too, then you get control. Or are you talking about a different part?

•Esther comes out immediately with a text box after the jockeys. Wasn't used to it but maybe not necessary to change

Do you mean when all the jockey's leave the room, then a few seconds later she comes back in? I've check this and there is no change. A text box pops up saying "Cloud" and then she appears walking slowly. Let me know if you mean some other part. 

•On the Gold Saucer revisit I personally use Cid putting his arm out as visual cue to anticipate for the dialogue choice rather than Barret

This is the part where Barret puts up both his hands and then you need to pick an option? I just checked and when the scene loads in Cid raises his hand, then Barret, then the options. Would you prefer to have 1 text box before Cid raises his hand? so when the scene loads 1 text box, Cid raises hand, Barret, options?

•After you see the highwind for the first time and you see the leader I personally look for a Cloud shrug as a visual cue to buffer my inputs

This one is related to the locker room in Junon right? where the captain brings in a copule of guards to show you how to the Rufus mood mini-game?

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

### 2024-11-10 18:01:06 — Okamikaze

I believe I made these notes too, unless you meant to refer to me:

The first point was referring to Corel prison and manually putting Cait in, I can see the confusion though

For the second one - afaik those few seconds aren't there anywhere, she just instantly says "Cloud" as soon as the last jockey leaves the room. Not a huge deal though and I'm probably remembering incorrectly

Last 2 points have been covered

### 2024-11-10 18:05:16 — IndividualContributor

Sorry yeah it was you Okami <:KEKW:1074810897308069948> https://discord.com/channels/936291902133796955/1288235003901120586/1304089578088562719

Thanks for clarifying, I'll fix these in the next patch.

### 2024-11-11 09:35:47 — IndividualContributor

Has anyone been able to verify that FD manip still works? I'm confident it does just looking for verification. I'm also not good enough to do it yet <:Sadge:1074826312767778950> and Duckstation isn't the same as PSX, have to verify on disc

### 2024-11-11 12:13:38 — Okamikaze

Well I got it on Duck. When I loaded up my disc 2 save on console the other day I went to set it all back up, but I think when I ran into the village I moved too far

### 2024-11-11 12:13:56 — Okamikaze

I think that would be the cause of it not working for me more than anything

### 2024-11-11 12:22:12 — IndividualContributor

Ok cool if it's working on Duck then at least it's some verification it's working, and PSX should be fine. I think on Duck It's tighter.

### 2024-11-11 13:30:23 — Okamikaze

Yeah with current settings before we potentially move over, you need to delay going into bone village because of the faster load, but you also don't wanna delay it too much

### 2024-11-11 13:30:27 — Okamikaze

Makes it feel tighter

### 2024-11-11 13:32:01 — Okamikaze

With the new settings it looks like you will need to go in half a second to a second early depending on where you open the menu

### 2024-11-11 13:51:33 — IndividualContributor

New settings being "normal load speed" right? Currently it's x2

### 2024-11-11 14:44:22 — Okamikaze

read 2x (quad), seek normal

### 2024-11-11 15:20:09 — IndividualContributor

Oh I think I've been using read normal

### 2024-11-11 16:28:16 — IndividualContributor

nvm I am using read 2x (quad), seek normal already

### 2024-11-11 22:35:52 — IndividualContributor

After JenovaBirth on the junon boat after the fight what are the queues to choose the option not to explain to Tifa?

### 2024-11-11 22:38:14 — awesomeWaves

I had "Tifa turns -> 1 text box -> 2nd option" but it happens super quickly in CSR

### 2024-11-11 22:38:29 — awesomeWaves

Probably worth asking someone more familar with the run for that queue to be honest

### 2024-11-11 22:39:09 — IndividualContributor

Yeah I've just played through it and it's super quick, I feel like maybe 3 boxes then option right out of the fight would be enough

### 2024-11-11 22:39:42 — IndividualContributor

I'll ask in general

### 2024-11-11 22:47:32 — Okamikaze

I look for Cloud putting his head up, and when he puts it down I anticipate the Tifa text boxes

### 2024-11-11 22:52:37 — IndividualContributor

Thanks guys, Kuma said starting out he waits for 4 text boxes. I think I'll put in the 3 or 4 to make sure everyone is covered. 

Another question, first visit to gold saucer, Cait joins the party, you jump into the Battle Square hole. Currently I have the scene showing the guard falling over, but should I just jump to prison?

### 2024-11-11 22:52:46 — IndividualContributor

There is no movement required its just a scene

### 2024-11-11 22:53:10 — IndividualContributor

I think I left it in because jumping down a hole in gold saucer and appearing in prison was weird

### 2024-11-11 22:53:29 — IndividualContributor

But so is the whole Cloud's dream stuff so maybe it's fine to remove

### 2024-11-11 22:53:57 — awesomeWaves

Yeah I think it's probably fine to remove it?

### 2024-11-11 22:54:31 — awesomeWaves

I know it kind of feels odd but as there's actually 0 user input it's probably okay

### 2024-11-11 22:55:54 — IndividualContributor

Yeah I'll remove it, we can add it back if it's super jarring

### 2024-11-11 22:56:04 — awesomeWaves

yep sounds good.

### 2024-11-11 22:56:19 — awesomeWaves

I was away most of the weekend but is the disc swap issue resolved now?

### 2024-11-11 22:56:29 — IndividualContributor

yes fixed 🎉

### 2024-11-11 22:56:31 — awesomeWaves

I plan to run whatever current version is available tomorrow

### 2024-11-11 22:56:37 — awesomeWaves

Awesome. Great work

### 2024-11-11 22:58:19 — IndividualContributor

While I was debugging I removed the Boat to Costa scene again and saw the Cloud being a Chocobo issue, totally forgot about that <:KEKW:1074810897308069948>

### 2024-11-11 22:59:59 — awesomeWaves

oh I meant to mention also, that the scene after DG outside temple is the incorrect one afaik

### 2024-11-11 23:00:18 — awesomeWaves

so there's a small scene where you control young Cloud and normal cloud is slowly running to Sephiroth

### 2024-11-11 23:00:35 — awesomeWaves

thats the one where there is user input, which can gain/lose time from what i was told

### 2024-11-11 23:00:50 — awesomeWaves

if you don't move, you block Cloud a little bit I think or something

### 2024-11-11 23:02:12 — IndividualContributor

I know the one yes I'll add that back in.

### 2024-11-11 23:02:37 — Hope

We don't get to see the guy pull the lever with the wrong hand q.q

### 2024-11-11 23:03:52 — IndividualContributor

Is that in Battle Square?

### 2024-11-11 23:04:04 — Hope

Yeah when they open the pit

### 2024-11-11 23:04:07 — Hope

It's very funny

### 2024-11-11 23:04:50 — IndividualContributor

I kinda wanted to add some of that scene back in, as opposed to remove the one I mentioned above. Do you have a clip of it? I've never noticed

### 2024-11-11 23:05:05 — Hope

I can get you one.

### 2024-11-11 23:11:43 — Hope

https://www.twitch.tv/videos/2260003821?filter=archives&sort=time

### 2024-11-11 23:11:49 — Hope

@ 2:51:29

### 2024-11-11 23:12:12 — Hope

that said I just think its funny and you can jump from kneeling at the guy who falls over to prison and its better for a csr

### 2024-11-11 23:12:43 — IndividualContributor

https://www.twitch.tv/videos/2260003821?t=2h51m29s

### 2024-11-11 23:12:44 — IndividualContributor

lol

### 2024-11-11 23:12:45 — Hope

Actually once you jump the tube your only mashing i think? so jump down the tube allllll the way down hahaha

### 2024-11-11 23:13:14 — Hope

Like its so far off its kinda funny

### 2024-11-11 23:13:31 — IndividualContributor

yeah I'll just have Cloud land in Prison after jumping down the hole

### 2024-11-11 23:13:42 — Hope

I just want everyone to know about

### 2024-11-11 23:13:44 — Hope

the pull

### 2024-11-11 23:13:45 — Hope

lol

### 2024-11-11 23:14:01 — IndividualContributor

I'll be watching out for it now lol

### 2024-11-12 08:42:32 — awesomeWaves

Is this an issue in the current version? 👀

### 2024-11-12 08:44:04 — awesomeWaves

The changelog for 0.4.11 makes me think it is. I might just run 0.4.10 instead to be safe

### 2024-11-12 09:19:44 — IndividualContributor

No it's not 0.4.11 is stable

### 2024-11-12 09:20:04 — awesomeWaves

Ah ok, I'll burn it again ha

### 2024-11-12 09:20:08 — awesomeWaves

thanks!

### 2024-11-12 09:21:50 — IndividualContributor

We'll it's stable to CC skip at least I was playing it last night on disc

### 2024-11-12 09:22:06 — IndividualContributor

And I've tested the disc swap too and it's fine

### 2024-11-12 09:22:10 — awesomeWaves

So removing the boat scene didn't cause the Chocobo outside Costa softlock?

### 2024-11-12 09:23:05 — IndividualContributor

It does I was just messing around with the scripts for debugging and forgot why we need to leave it in

### 2024-11-12 09:23:42 — IndividualContributor

The WM boat scene from Junon to boat is removed and it's fine

### 2024-11-12 09:24:14 — IndividualContributor

The disc swap thing was a change to the structure of a loading script, really weird

### 2024-11-12 09:24:29 — awesomeWaves

Ah ok cool cool

### 2024-11-12 09:24:36 — awesomeWaves

I'll run 0.4.11 so today

### 2024-11-12 17:09:59 — Rendall

<@248225699909861376>  Saw you ran the CSR today, how are the state of things in general. Also was it PSX or Emu I did not catch that info.

### 2024-11-12 17:10:58 — awesomeWaves

It's in a very stable state with on-going patches removing more and more content on a regular basis.

### 2024-11-12 17:11:19 — awesomeWaves

I think it's estimated to be ~4 hours total for an Any% No Slots run when it's finished

### 2024-11-12 17:11:40 — awesomeWaves

I'm running it on a softmodded PS2 Slim but it works perfectly on Duckstation emulator also

### 2024-11-12 17:12:38 — Rendall

Right on thx for the info !  and 4 hours is much more friendly !

### 2024-11-12 17:14:22 — Rendall

what is the latest version 0.4.9 ? Might want it pinned up here.

### 2024-11-12 17:14:40 — Rendall

nm, 0.4.11 it is ... !

### 2024-11-12 17:16:27 — awesomeWaves

The most recent verison is always on the front of the github link as far as I know

### 2024-11-12 17:16:35 — awesomeWaves

yeah 0.4.11 was what i ran earlier

### 2024-11-12 17:18:32 — Rendall

Right on yeah I did search back in the thread to fetch the github link to bookmark on my side thx !

### 2024-11-12 18:32:52 — IndividualContributor

Let me know if you have any suggestions <@309356817169776641>

### 2024-11-12 18:46:45 — IndividualContributor

Latest patch is here https://github.com/individualcontributordev/Final-Fantasy-7-CSR there will only be the latest patch available for download so whatever is in the repo will be the very latest

### 2024-11-12 19:39:51 — Rendall

I am by no mean a reference or authority concerning those runs on FF7, but will do if I see something factually off.

### 2024-11-12 19:41:23 — Rendall

Very happy that you took the time to make a CSR of the game ! awesome stuff.

### 2024-11-12 19:41:55 — IndividualContributor

I'm still using versions but to avoid confusion on the front page of the repo I've removed all the other versions. If the latest is broken we can just use a previous version based on the commit history.

### 2024-11-12 19:42:11 — Rendall

nod

### 2024-11-12 19:42:48 — awesomeWaves

Yeah it's all good. i was able to find the previous version this morning that way. They'll all there as the previous commits

### 2024-11-12 19:42:53 — IndividualContributor

I don't have a lot of time after work in the evenings and I want to run the game, had to be done <:KEKW:1074810897308069948>

### 2024-11-12 19:43:34 — Rendall

I've seen the end of your run so it seemed that it went thru whatever version you used ! 5:17 right ?

### 2024-11-12 19:43:35 — awesomeWaves

Fun fact about bodcap, who made the FF9 HD CSR. Similar situation, made it to run it. When he was finished he was so fed up with FF9 he never ran it 😅

### 2024-11-12 19:43:58 — Rendall

ff9 is so long !

### 2024-11-12 19:44:09 — Rendall

CSR are savior  !

### 2024-11-12 19:44:14 — IndividualContributor

I hope that doesn't happen to me lol

### 2024-11-12 19:44:56 — awesomeWaves

5:18 today but it was a very poor run to be honest. I've had  a 5:08 or something last week and Okamikaze has had runs closer to 4:30 also.

### 2024-11-12 19:45:33 — Rendall

Would be nice if the board included CSR in the future ! not counting on it, but it would probably bring in more runners

### 2024-11-12 19:45:59 — Rendall

Long jrpg are rough on a schedule

### 2024-11-12 20:12:17 — IndividualContributor

I'm going to create a board using Google Sheets and link it in the GitHub repo for when this CSR is done. We'll keep track until there is a proper board.

### 2024-11-12 20:13:23 — awesomeWaves

Good idea, we did the same for FF8 before the boards were made.

### 2024-11-12 20:13:40 — awesomeWaves

Just add a space for version number and a link to the VOD

### 2024-11-12 20:14:35 — Hope

I feel with how much activity this has had lately it could get put to vote once you're finished

### 2024-11-12 20:15:38 — awesomeWaves

I would go ahead with the spreadsheet informally and maybe try make one solid push once the CSR is deemed finished.

### 2024-11-12 20:16:06 — awesomeWaves

I'm actually currently looking into the image based autosplitter. Which might be able to be used for timing the pause

### 2024-11-12 20:16:12 — awesomeWaves

(even on console)

### 2024-11-12 20:19:20 — IndividualContributor

The image based auto-splitter thing is cool, especially for console where you'd need to hook into the stream video and trigger auto-splitting on a range of frames. A lot of work in that though, has there been any progress?

### 2024-11-12 20:20:33 — awesomeWaves

It has potential for sure. I've only started messing with it a while ago. Will keep you posted

### 2024-11-12 21:01:59 — awesomeWaves

Yeah not ideal. I got it to split on a few things but it's incredibly finkiy from what i can tell

### 2024-11-12 21:02:25 — awesomeWaves

Plus using EXP screens isn't really ideal, as they're all very similar. So you might auto-split on a shop screen or a menu

### 2024-11-12 21:21:50 — IndividualContributor

I can see how that would be difficult to get consistent. Can you configure it to use the frames after fading into a scene?

### 2024-11-12 21:24:39 — awesomeWaves

It's single screen shots only. I thought that maybe it would work due to the drops from bosses being consistent etc, but the blue screen is just too much

### 2024-11-12 21:28:44 — IndividualContributor

Thinking about the CSR, I could add in something during the black screens like the name of the scene or something, then just screenshot them and configure it

### 2024-11-12 21:28:50 — IndividualContributor

Maybe a patch for later?

### 2024-11-12 21:29:40 — IndividualContributor

Would work on Digital and PSX if it's already capable of both

### 2024-11-12 21:30:11 — IndividualContributor

Just apply the "Auto-splitter" patch if you want to use it.

### 2024-11-12 21:43:27 — awesomeWaves

Ah to be honest, it's a bit awkward setting up in the first place. I think sorting the auto-splitter for emu would be enough for now.

### 2024-11-13 10:19:05 — IndividualContributor

No new patches, Bake Off was on last night. I'll probably have time for changes later today.

### 2024-11-13 12:38:32 — IndividualContributor

I've created an unofficial leaderboard and submission form, the links are on the repo here https://github.com/individualcontributordev/Final-Fantasy-7-CSR?tab=readme-ov-file#unofficial-leaderboard

And if you have any suggestions you can submit them to me using this form https://github.com/individualcontributordev/Final-Fantasy-7-CSR?tab=readme-ov-file#feature-requests-and-bug-fixes

### 2024-11-13 21:23:57 — Teeejj

name me a more british excuse than this

### 2024-11-13 22:47:26 — IndividualContributor

Battle Square to Prison, Cloud jumped down the wrong pipe https://youtu.be/408A4IIqWpA?t=46

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

### 2024-11-13 23:49:52 — Hope

Is there a reason you dont just go straight into the fight on bottomswell screen?

### 2024-11-13 23:56:02 — IndividualContributor

No technical reason that I can think of, but there is some mashing to be done there before the fight. 

Do you mean as you transition into that scene the fight starts immediately?

### 2024-11-13 23:56:27 — Hope

Yeah

### 2024-11-13 23:56:36 — Hope

Like we're not treating mashing as a skill check in a CSR right

### 2024-11-13 23:56:52 — Hope

The only player input on that screen is mashing

### 2024-11-13 23:57:49 — IndividualContributor

To some extent we are, in some scenes there will be at least 1 text box to not make it too jarring

### 2024-11-13 23:58:10 — awesomeWaves

I mentioned that earlier also

### 2024-11-13 23:58:17 — awesomeWaves

About Reno/Bottomswell

### 2024-11-13 23:58:29 — awesomeWaves

you could genuinely skip the field text before them imo

### 2024-11-13 23:58:32 — Hope

It's your choice but to me it feels like leaving a cutscene in to have a screen where the only input is mashing

### 2024-11-13 23:58:33 — awesomeWaves

just start the fight

### 2024-11-13 23:58:47 — awesomeWaves

yeah, if it's just straight mashing I'd be for removing it

### 2024-11-13 23:59:20 — awesomeWaves

Thanks for the update though I'll run it tomorrow 👍

### 2024-11-13 23:59:57 — IndividualContributor

I understand what you mean, I think when I was trimming those originally going too far with removing stuff felt weird. I wanted to keep some of the game in there ya know <:KEKW:1074810897308069948>

### 2024-11-14 00:00:20 — Hope

Itll feel weird if you keep the walk up

### 2024-11-14 00:00:30 — Hope

but its ironically less weird to start a battle and skip the scene

### 2024-11-14 00:01:06 — awesomeWaves

I think there has to be some flexibility with the CSR interms of aiming to try and remove time though

### 2024-11-14 00:01:10 — IndividualContributor

But you see Bottomswol coming up and know there's going to be a boss fight. I want to keep some of that stuff in

### 2024-11-14 00:01:34 — awesomeWaves

if there is text sections, or large scenes that auto-animate left in you're just missing on an opportunity to cut time

### 2024-11-14 00:02:06 — awesomeWaves

The further down we can bring the estimate the better, if it's at the expense of just straight mashing scenes especially

### 2024-11-14 00:02:22 — Hope

Yeah the only player input is the circle button

### 2024-11-14 00:02:49 — awesomeWaves

if there's a world where we can get it down to about 3:30 that would be phenomenal

### 2024-11-14 00:03:15 — Hope

3:30 is like an after work run

### 2024-11-14 00:03:27 — awesomeWaves

(and I am all for keeping the integrity and skill checks as I've said before)

### 2024-11-14 00:03:53 — awesomeWaves

but straight mashing or in the case of bottomswell, waiting for animations to play out is whatever

### 2024-11-14 00:04:33 — IndividualContributor

Reno for sure I can't trim anymore without breaking something or it feeling completely shit to play. Bottomswell I could try speeding up the animations and maybe getting into the fight sooner to see how it feels. I'm open to messing around with those for sure, just don't want to go to far.

### 2024-11-14 00:04:51 — Hope

reno part makes some sense after the fight

### 2024-11-14 00:04:58 — Hope

But bottomswell is just a cutscene

### 2024-11-14 00:05:31 — IndividualContributor

You're right but I want to see Bottomswol at least before the fight starts

### 2024-11-14 00:05:39 — awesomeWaves

To the same extent as some of the Flashback sequence that's been removed

### 2024-11-14 00:05:49 — awesomeWaves

just mashing and waiting for cutscenes to play out

### 2024-11-14 00:07:07 — IndividualContributor

The flashback needs reviewing but is really tricky to make sure queues and movement is still in there. And animations in between sometimes can't be changed. Similar to the 7th heaven scroll stuff

### 2024-11-14 00:07:13 — IndividualContributor

Shit breaks <:KEKW:1074810897308069948>

### 2024-11-14 00:07:59 — awesomeWaves

No it's all good, I just mean that the pre-Reno and pre-Bottomswell scenes are just the same as whats been removed from Flashback

### 2024-11-14 00:08:01 — IndividualContributor

Imagine if I inadvertently added in a new skip with all the F'n around lol

### 2024-11-14 00:08:10 — awesomeWaves

it's just downtime

### 2024-11-14 00:08:51 — IndividualContributor

Let's leave those two until last for D1 and we can test them out

### 2024-11-14 13:06:41 — awesomeWaves

<:KEKW:890963307937292298>

### 2024-11-14 13:06:59 — awesomeWaves

were you by any chance testing the scene after Jenova Birth?

### 2024-11-14 13:07:05 — awesomeWaves

and maybe removed the entire fight?

### 2024-11-14 13:14:05 — IndividualContributor

Yep F

### 2024-11-14 13:14:41 — IndividualContributor

I had a feeling I didn't revert that <:KEKW:1074810897308069948>

### 2024-11-14 13:29:14 — Hope

Can you increase the walk in speed on gold saucer tube screen

### 2024-11-14 13:29:53 — Hope

It takes ~9 seconds before anything happens currently

### 2024-11-14 14:18:28 — IndividualContributor

The animations are the tricky part there but yes, can you submit that using the feature requests form on the repo?

### 2024-11-14 14:18:56 — IndividualContributor

It's impossible to track when they're in here

### 2024-11-14 14:19:38 — Hope

Yeah I thi k you just add a walk speed line or something before and after

### 2024-11-14 14:20:04 — Hope

Can you relink or pin the git

### 2024-11-14 14:20:16 — Hope

Oh guess threads don't get pins

### 2024-11-14 14:41:43 — IndividualContributor

🎮 Release v0.5.1 https://github.com/individualcontributordev/Final-Fantasy-7-CSR

- Fixed an issue where JenovaBirth fight was skipped, oops

### 2024-11-14 14:42:11 — IndividualContributor

---

<@191046608064872449> Link to the form https://forms.gle/dW9rMCD9kQ3eBPSM8

### 2024-11-14 16:20:41 — awesomeWaves

Thanks for fixing that earlier. I'll wait until the morning to burn a new version in case there's any changes later tonight

### 2024-11-14 16:46:39 — IndividualContributor

Yeah do I'll hopefully be making a few more changes later

### 2024-11-14 21:20:13 — IndividualContributor

I've managed to cut alot off the Bottomswell fight
- file: 2024-11-14_21-19-07.mp4

### 2024-11-14 21:21:15 — IndividualContributor

It's 10 second from the scene loading in to the fight

### 2024-11-14 21:22:06 — awesomeWaves

Good stuff!

### 2024-11-14 21:22:43 — awesomeWaves

I don't know if it's just a line in the script for 'party exits cloud' and 'party reforms on cloud' but could they maybe be cut out?

### 2024-11-14 21:22:50 — awesomeWaves

that might cut another few seconds

### 2024-11-14 21:23:34 — IndividualContributor

Yeah I can cut them both lemme see

### 2024-11-14 21:28:49 — Hope

Maybe cut out everything past cloud running up

### 2024-11-14 21:30:21 — awesomeWaves

^

### 2024-11-14 21:30:44 — awesomeWaves

yeah I know I probably sound like a broken record now, but we don't need a visual queue that a fight will start

### 2024-11-14 21:31:00 — awesomeWaves

you could just try, cloud runs down
*bam*
Fight

### 2024-11-14 21:37:55 — IndividualContributor

_(no text)_
- file: 2024-11-14_21-37-11.mp4

### 2024-11-14 21:38:41 — IndividualContributor

I think that's the best I can do without F'n something up <:KEKW:1074810897308069948>

### 2024-11-14 21:39:07 — Hope

That's still a lot.

### 2024-11-14 21:39:23 — Hope

Move the returns up on Priscilla and cloud for after he runs up

### 2024-11-14 21:39:53 — awesomeWaves

Yeah thats quicker again! Good stuff

### 2024-11-14 21:41:43 — IndividualContributor

What's the issue with Barret's house in Prison? I think there is a queue in there somewhere I have removed?

### 2024-11-14 21:42:06 — awesomeWaves

it might be something between the party select and when you can move

### 2024-11-14 21:42:08 — awesomeWaves

iirc

### 2024-11-14 21:53:30 — IndividualContributor

https://www.twitch.tv/videos/1924927299?t=02h21m24s

### 2024-11-14 21:53:55 — IndividualContributor

it's whoever you picked in the PHS joins you then you can start moving, I think I skip the join party

### 2024-11-14 21:54:00 — IndividualContributor

ill take a look now

### 2024-11-14 22:02:06 — IndividualContributor

ok yeah i skipped it, fixed now

### 2024-11-14 22:09:20 — IndividualContributor

_(no text)_
- file: 2024-11-14_22-08-29.mp4

### 2024-11-14 22:09:52 — IndividualContributor

<:KEKW:1074810897308069948> this normal?

### 2024-11-14 22:11:11 — IndividualContributor

if you wait on this text box do they just keep animating like that? seems like a bug but you'd never know in a run cause mashing

### 2024-11-14 22:12:06 — awesomeWaves

you mean them animating or the camera panning? 👀

### 2024-11-14 22:12:15 — IndividualContributor

them animating in a loop

### 2024-11-14 22:12:32 — IndividualContributor

I think it's normal just odd to see when you stop on a text box

### 2024-11-14 22:15:20 — IndividualContributor

nvm it's not something to check or worry about just thought it was weird lol

### 2024-11-14 22:15:55 — IndividualContributor

I have one more thing to fix here and then I'll push a new patch, it has a ton of tiny changes that should smooth out alot of stuff

### 2024-11-14 22:20:24 — awesomeWaves

Ah very cool

### 2024-11-14 22:20:52 — awesomeWaves

look forward to giving it a spin tomorrow

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

### 2024-11-16 15:40:58 — IndividualContributor

Nice!

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

### 2024-11-16 21:58:15 — IndividualContributor

_(no text)_
- file: 2024-11-16_21-57-32.mp4

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

### 2024-11-16 22:49:53 — awesomeWaves

Amazing

### 2024-11-16 22:50:11 — awesomeWaves

GG on the new patch. Some nice stuff done there

### 2024-11-16 22:50:25 — awesomeWaves

I'd only potentially question the changing of the Yoshiyuki man

### 2024-11-16 22:51:01 — awesomeWaves

because it's a strat, to use that (I know it's currently the mainline routing) but it is a choice to get it and it makes the strat save more time over other strats.

### 2024-11-16 22:51:36 — awesomeWaves

maybe some others have an input there? If everyone is going to be using Yoshiyuki then its whatever though

### 2024-11-16 22:53:11 — awesomeWaves

for example, NMS routes don't get it. However if it saved time to get it in CSR as opposed to any% then maybe it could lead to alternative routing specific to CSR. 🤷‍♂️

### 2024-11-16 22:57:32 — Hope

How much time is actually saved there?

### 2024-11-16 22:57:38 — Hope

Isn't it like 10 seconds or something

### 2024-11-16 22:57:43 — IndividualContributor

Ah ok I hadn't thought of it that way. Best to revert it then given it's involved in a strat

### 2024-11-16 22:57:43 — Hope

max

### 2024-11-16 22:57:59 — Hope

I doubt that would ever change wether you pick up yoshiyuki

### 2024-11-16 23:03:39 — IndividualContributor

What is the alternative I wonder? I'll be reviewing Corn's run tomorrow for NMS and can have a look, but will revert until we know more.

### 2024-11-16 23:04:12 — awesomeWaves

Yeah it's minor, but it's just a consideration.

### 2024-11-16 23:04:39 — awesomeWaves

The alternative is using Tifa on DG instead I guess? Idk what they do for Red Dragon. Haven't watched as many NMS runs tbh

### 2024-11-16 23:07:48 — IndividualContributor

Ah ok yeah corn used Tifa and there is potentially some text boxes that can be cut using her

### 2024-11-16 23:09:40 — awesomeWaves

Yeah it gets very finiky if you go into such detail I guess

### 2024-11-16 23:10:00 — awesomeWaves

bringing different party members to different places would change some text boxes also

### 2024-11-16 23:10:08 — awesomeWaves

not sure where you would draw the line with it

### 2024-11-16 23:14:09 — IndividualContributor

I did put back in a text box in the Ghost Hotel for Cait if you don't put him in the party. He stops you leaving with a text box. So this might be similar, I'll need to check this myself I think and then ask in general if it's not clear.

### 2024-11-16 23:15:22 — IndividualContributor

Arriving at Costa too, Aeris asks a question about getting a tan if you don't add her to the party then

### 2024-11-16 23:15:33 — awesomeWaves

I've another request for 7th Heaven (before we completely finish D1 stuff)

### 2024-11-16 23:15:47 — awesomeWaves

the entire scene where Barret climbs up and gives Cloud the 1500g

### 2024-11-16 23:16:18 — awesomeWaves

if you could just move that gil recieve (and it's text box I suppose) to the previous screen, you could then entirely skip that scene. it would save quite a bit

### 2024-11-16 23:16:38 — awesomeWaves

so you'd try to leave the bar, recieve gil, then wake up downstairs

### 2024-11-16 23:16:46 — awesomeWaves

it is a sizable time save

### 2024-11-16 23:17:12 — IndividualContributor

I'll do it in the next patch, likely tomorrow evening.

### 2024-11-16 23:17:48 — awesomeWaves

nice! That along with the before Reno scene you could maybe be knocking off 45s from the early game

### 2024-11-16 23:17:58 — awesomeWaves

which is nice

### 2024-11-16 23:19:17 — IndividualContributor

I'll test the Reno one too but with the animations there it'll be tricky I think.

Do you mean go straight from black screen to fight?

### 2024-11-16 23:19:42 — awesomeWaves

Once you close the text box with Barret, to not change your equips

### 2024-11-16 23:19:49 — awesomeWaves

the game changes field to the next one

### 2024-11-16 23:19:57 — awesomeWaves

but just start the fight immediately

### 2024-11-16 23:20:07 — awesomeWaves

don't need Reno landing, pressing button etc

### 2024-11-16 23:20:17 — awesomeWaves

then everything after Reno is perfect at the moment

### 2024-11-16 23:26:52 — IndividualContributor

Yeah I think we're on the same page. Talk to Barret, menu thing, fade out to black screen, fight Reno. Won't it be odd getting into the Reno fight without seeing him?

### 2024-11-16 23:28:14 — IndividualContributor

I can't teleport him to the console because he starts off flying in and the helicopter is there, it's too messy.

### 2024-11-16 23:29:07 — awesomeWaves

Nah, i really feel that's a concession worth making there.

### 2024-11-16 23:29:18 — awesomeWaves

Everyone speedrunning knows it's reno

### 2024-11-16 23:29:25 — awesomeWaves

similarly for Bottomswell tbh

### 2024-11-16 23:29:41 — awesomeWaves

but you've already made that fairly snappy so not a huge concern

### 2024-11-16 23:30:02 — IndividualContributor

Cool let's do it for Reno. Bottomswell I like at the moment but we can always revisit later.

### 2024-11-17 03:50:24 — phek1200

NMS uses Tifa in temple, so it's worth looking at her dialogues and cut out some of it (if the current one focuses on cutting out Cait's). This will be applicable to no slots runner using Tifa temple as well, such as myself.
Edit: Hundo, All Bosses uses Tifa temple as well so definitely worth doing this

### 2024-11-17 03:51:33 — phek1200

One big difference is after RD fight, with Cait in party he will jump over to Cloud and said let him handle the Black Materia, but with Tifa in party then Cloud gets a phonecall from Cait instead

### 2024-11-17 10:38:58 — IndividualContributor

Thanks Phek, I've only covered the Cait route so far so I'll check that for the next patch.

### 2024-11-17 17:00:34 — IndividualContributor

_(no text)_
- file: 2024-11-17_17-00-02.mp4

### 2024-11-17 17:01:38 — IndividualContributor

Sped up Reno fight, 8 seconds from fade in to fight, I feel better about this than completely removing the scene and not seeing Reno before the fight.

### 2024-11-17 17:15:08 — IndividualContributor

Barret throwing Gil scene trimmed down to only 10 seconds. I prefer this over completely cutting the scene and showing a text box with "1500 gil" randomly.
- file: 2024-11-17_17-08-40_-_Trim.mp4

### 2024-11-17 17:18:18 — awesomeWaves

Honest opinion is that I think the Reno scene looks worse now sped up, I think it would just be neater if it was cut. Again, you're the creator so up to you but I think it makes it look 'janky' in that current state

### 2024-11-17 17:18:56 — awesomeWaves

As for the 1500 gil pop up appearing on its own, it's been used in the other 2 CSRs. Again, they're not the gospel to follow either but it does work for them

### 2024-11-17 17:19:52 — awesomeWaves

I know off the top of my head, you recieve an item at the end of Disc 2 in FF9 completely out of context of the scene its in. I'll grab a clip

### 2024-11-17 17:21:00 — awesomeWaves

https://www.twitch.tv/videos/2279033573?t=01h48m28s

### 2024-11-17 17:21:05 — awesomeWaves

thats time stamped there

### 2024-11-17 17:21:42 — awesomeWaves

You recieve the Aquamarine, which is given to the player during the next 6 minutes of cutscenes which are removed.

### 2024-11-17 17:31:24 — IndividualContributor

Ok fair enough it dosen't look too bad there, I'll make the change and share it here for a look, few minutes

### 2024-11-17 17:33:00 — IndividualContributor

_(no text)_
- file: 2024-11-17_17-32-20.mp4

### 2024-11-17 17:33:10 — IndividualContributor

Before I do that, this is the Tifa temple scene

### 2024-11-17 17:33:41 — IndividualContributor

I trimmed it previously, but it still is slower here relative to taking Cait, so shouldn't allow for an alternative strat to be introduced right?

### 2024-11-17 17:33:58 — IndividualContributor

My understanding is, taking Cait here is faster because no phone call, which is still the case I think

### 2024-11-17 18:17:06 — IndividualContributor

_(no text)_
- file: 2024-11-17_18-16-29.mp4

### 2024-11-17 18:18:09 — IndividualContributor

I tried putting the "1500 gil" text box in before the "sleep music black screen" but kept getting weird issues where the scene would load for a second with all the model stacked on each other in the middle of the room <:KEKW:1074810897308069948>

### 2024-11-17 18:18:48 — IndividualContributor

This works I think so I'm going to leave like this, I'll have another go tomorrow maybe. Going to push a release now with a few of these changes in

### 2024-11-17 18:25:12 — awesomeWaves

Good stuff. The 1500g definitely is added to gil also? 👀

### 2024-11-17 18:25:48 — IndividualContributor

Yeah I just double checked there now

### 2024-11-17 18:26:02 — awesomeWaves

speaking from experience there with some other CSRs ha

### 2024-11-17 18:26:37 — IndividualContributor

## 🎮 Release v0.5.4

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

- Trimmed Reno fight even more
- Trimmed Barret throwing 1500 gil at Cloud
- Reverted most of the Yoshiyuki man in Rocket Town interaction, scroll to see rocket remains

No changes to D2 in this release

### 2024-11-17 18:27:44 — IndividualContributor

Yeah messing with the 1500 made me nervous so I checked lol, hope I didn't F anything else up now though

### 2024-11-17 18:27:59 — Rendall

Seeing the elevator scene is still in.

### 2024-11-17 18:28:18 — Rendall

Disc 1 intro elevator that is - for the mini silly skip

### 2024-11-17 18:28:48 — IndividualContributor

You mean the fast Barret?

### 2024-11-17 18:28:52 — awesomeWaves

with Barrets text? Yeah that can be faster/slower depending on mashing

### 2024-11-17 18:29:00 — Rendall

yeah  .... 😦

### 2024-11-17 18:29:56 — Rendall

I don't run with turbo or anything, but I guess it's up to everyones, it's what a few frames, tho if CSR in itself is a thing and a category im sure not one would care that it is removed ?

### 2024-11-17 18:30:52 — Rendall

I am well aware ! i'd still remove it !

### 2024-11-17 18:31:00 — awesomeWaves

It's considered a 'skill check', it saves more than a few frames. it's maybe a couple of seconds?

### 2024-11-17 18:31:14 — Rendall

peoples are running turbo these days ?

### 2024-11-17 18:32:02 — IndividualContributor

I understand what you mean Rendall but there are a few things I'm leaving in subjectively, they aren't significant but I'd feel weird removing them. That elevator, if it wasn't important, would be important for the "flow" or "feel" of the game which I am also considering.

### 2024-11-17 18:32:04 — Rendall

cause then it's not a skill  check then or is it ?

### 2024-11-17 18:32:35 — Rendall

Oh yeah that is fine, it is what it is if you mash fast enough

### 2024-11-17 18:33:28 — awesomeWaves

I think with the idea that you want it to be true to any% strats, that is something you would want to pay attention to in a full run. So worth leaving it in to be sure.

### 2024-11-17 18:33:52 — awesomeWaves

You can't assume everyone is or isn't using turbo either.

### 2024-11-17 18:34:32 — awesomeWaves

and personally, I exclusively run with Turbo so it makes absolutely zero difference to me but I do understand why it's left in.

### 2024-11-17 18:34:54 — Rendall

oh yeah it is a selfish thing here really, as in Idc about my own timing, and will not mash 13 x a sec to play a game !

### 2024-11-17 19:13:51 — IndividualContributor

So is that D1 for any% done? I'll run through it this week again to make sure.

### 2024-11-17 19:22:00 — IndividualContributor

I had a look at this and I had trimmed this section previously, it looks fine to me with Cait or Tifa at the moment but we can revisit if someone finds something odd.

### 2024-11-17 21:49:03 — Rendall

What is up with the disc 1 Aerith house section ? and the past with Elmira section there was issue removing these ?

### 2024-11-17 22:09:30 — IndividualContributor

Those are used for the elevator manipulation, runners will review the recording of the waterfall glows during that cutscene to determine the RNG used in the elevator.

### 2024-11-17 22:12:04 — Rendall

hrm pretty sure they record that clip while they fetch the materia in the garden.

### 2024-11-17 22:13:13 — IndividualContributor

Yes, then play it back 25% speed to count the glows afterwards

### 2024-11-17 22:13:47 — Rendall

I guess they have to time it then at the end with the save point , but this is like 5 min of cut scene past with elmyra etc

### 2024-11-17 22:16:01 — Rendall

I mean if you checked on with runners etc about this part , I am under the impression alot of this part could go away.

### 2024-11-17 22:16:52 — IndividualContributor

Nah it's too subjective, better to just leave it as is

### 2024-11-17 22:16:57 — Rendall

Or they want actual time to load their cheat sheets ?

### 2024-11-17 22:17:30 — Rendall

whatever I suppose.

### 2024-11-18 01:52:50 — phek1200

I noticed that! Cloud got the phone call and picks up immediately and we're presented with the choice.
I think it's fine now and no changes are needed for now

### 2024-11-18 02:41:09 — phek1200

if this is referring to the reactor 1 elevator scene where barret shouts "the planet is dying, C!" then yes for non turbo run we need to mash as fast as possible for that 4 text boxes to have fast elevator. you lose 4s if not done correctly. on turbo (duckstation at least) it is free
i agree to keep this as is

### 2024-11-18 02:46:38 — phek1200

we record the fountain glow during cover and ether pick up all the way to entering Elmyra house. only after entering the house and clear out some of the initial text boxes, there is a ~1min scene of flashback where Elmyra is waiting for the husband at the train station, that is where we will playback the recording at 0.25 speed, write down the pattern and identify the current List value we're on.
so to do elevator manip, this part needs to be available as well. if need trimming down, we can always trim down half (the 2nd half of it). the whole cutscene is about 2.5mins, normally we'd be done by the first 1 min, however if i run on PSX disc, due to inconsistencies of ps2 graphics sometimes i struggle to find the fountain glow pattern and need to do it 2-3 times, which will take up the entire cutscene.
i think to keep it standardize, we keep it as is

### 2024-11-18 02:47:25 — phek1200

i finished a run last night (v0.5.3) with a time 4h 20m <:Kappa:1075235124200886273> 
am writing some of my feedback / comments but i would say generally everything good so far. really great work on this CSR  

https://www.youtube.com/watch?v=hszz1VB5ELk

### 2024-11-18 03:14:06 — Rendall

yeah figured as much, Still feel like some off it could go ! of course I have a very bad opinion of the recording playback to begin with but understand people need time to review the recording , slow it down and load the cheat sheet and fill it in to have a clue and this CSR is for the purpose of any% no slot% currently. I demand a complete CSR ! you runner chasing rng can just adjust w/o the cut scene and use the stair now !  (joking of course) cheers !

### 2024-11-18 03:16:25 — awesomeWaves

Have you ran a speedrun of ff7? <@309356817169776641>

### 2024-11-18 03:16:49 — Rendall

I have done any% no slot yes

### 2024-11-18 03:17:19 — awesomeWaves

Perfect so you understand the route and what can be changed

### 2024-11-18 03:17:48 — Rendall

I am not a runners at least not in most definition, I love learning route and doing a few run, not chasing rng and i only do a few runs, and jump to another game.

### 2024-11-18 03:18:41 — Rendall

I am up to date ish on ff7, as off ocean skip, I just don't have a great memory  ! (I choose to run games w/o notes)

### 2024-11-18 07:45:29 — IndividualContributor

I appreciate your perspective Rendall thank you for reviewing the CSR, there are a lot of little things like this throughout the run that we're trying to figure out so keep 'em coming! ❤️

### 2024-11-18 07:47:17 — IndividualContributor

4h20m? Nice <:Kappa:1075235124200886273> we should try make this time the absolute limit of the CSR <:KEKW:1074810897308069948>

### 2024-11-18 12:53:25 — Okamikaze

Yo sick! Is this with the newer settings or the standard ones?

### 2024-11-18 17:28:23 — phek1200

This is v0.5.3 with current duckstation settings for SRC

### 2024-11-18 17:41:15 — Okamikaze

Ah, my PB is v0.3.1 with the same settings

### 2024-11-18 17:41:22 — Okamikaze

GG

### 2024-11-19 00:07:01 — IndividualContributor

There is a channel for the CSR 🎉

https://discord.com/channels/936291902133796955/1307919162534006854

Go over there to follow the latest discussions.

