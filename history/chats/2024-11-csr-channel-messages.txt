# CSR discussion channel

Dedicated CSR channel after thread (Nov 2024–Jul 2026).

Channel ID(s): 1307919162534006854
Messages: 1700

Timestamps in UTC as stored by Discord.

---

### 2024-11-18 04:22:37 — cornfed

<@183261151746850816> time to polish the baby!

### 2024-11-18 10:11:50 — awesomeWaves

Why is the channel labelled practice mod? Seems a bit biased

### 2024-11-18 10:17:52 — butterfly

I think that's where it's at right now

### 2024-11-18 10:41:42 — awesomeWaves

Just seems unnecessary labelling to be honest. It's not intended in it's final form to be just a practice mod

### 2024-11-18 13:21:06 — cornfed

than we change it when it transforms into a final mod lol

### 2024-11-18 13:21:20 — cornfed

i dont think ace ment any thing by it

### 2024-11-18 13:21:52 — cornfed

https://www.twitch.tv/videos/2303456081

### 2024-11-18 13:22:08 — cornfed

this video highlights the things we can do for nms, i might have missed some stuff but i commented on what i could

### 2024-11-18 13:22:44 — cornfed

id like to leave the hojo dialouge in midgar return as it deals with fd, im sure no slots would agree

### 2024-11-18 16:04:54 — Kuma

pretty sure it's meant to be CSR/practice mods but you can't have "/" in channel names

### 2024-11-18 16:05:06 — Kuma

look at the channel description

### 2024-11-18 17:25:46 — Doumeis

ah yea good point, a channel for mods in general, mainly csr

### 2024-11-18 18:47:48 — AceZephyr

From the perspective of the leaderboards for which this is a server for, it is true that CSR is a modded version of the game that would be illegitimate for submission. It is a practice mod, but I don't mean to imply that it's *just* a practice mod.

### 2024-11-18 18:49:12 — butterfly

Let's get back to the days of spreadsheet records c:

### 2024-11-18 18:51:37 — AceZephyr

Other tools that currently exist for which discussion here may be relevant include: Big Shoes, pinionsharp, and SCMSquare

### 2024-11-18 18:54:28 — Hope

I think people are wanting it to be a category

### 2024-11-18 18:56:28 — AceZephyr

Here is why that is, as of now, not a good idea. I had sent this to IndividualContributor when he asked me a similar question.

1. The changes that would be made would have to be approved by the moderators, or more likely by a community vote. Currently, they are decided and implemented by a single person.
2. The exact changes made seem like they may be based on the route that it is expected to use through them, i.e. FD manip, I believe. I assume (though I cannot prove without a good deal of effort) that IC added a couple areas where RNG is manually called extra times to match the expected state after the cutscenes in FD manip. This would assume that the number of RNG calls that happen is the number that happen in the current any% route, and if a different route were to use a different manipulation through there, it may need to be programmed to call RNG a different number of times, necessisating different versions of CSR for different routes.
3. There should be a way to compile a ROM from a patch file to the scripts, instead of a patch file directly to the ROM. It's somewhat difficult to tell what exactly was changed in the scripts as is, and while there is documentation to describe what was changed, it would be good to be able to easily audit these changes and their implementation (see the previous point).
4. It is still being updated with changes meant to change the amount of time runs take.

As such, relative to the current official SRC leaderboards, it can only be used as a tool and not as an official version of the game, and primarily as a tool for practice, again relative to the official leaderboards which this is the server for.

### 2024-11-18 19:02:26 — Hope

I'm assuming we can move the conversation towards what it would take to become a category. 
I'm seeing that changes should be route ambiguous.
More documentation/ability to compare
Finished state
More community input/voting specifically?
I don't understand 3 tbh.

### 2024-11-18 19:11:07 — AceZephyr

Since most of the changes are to field scripts, it would be good to be able to just see the changes to the field scripts in isolation and compile a version for yourself based on just those changes instead of having the only version available be a patch to the whole bin.

### 2024-11-18 19:12:31 — Hope

So a field by field access and comparison?

### 2024-11-18 19:12:56 — AceZephyr

i guess

### 2024-11-18 19:15:52 — cornfed

it still needs quite a bit of work before we propose it to the mods

### 2024-11-18 19:16:22 — cornfed

that being said, i love it, and its a great tool/ possible category in the future. but we cross that road when its readyu

### 2024-11-18 19:19:32 — AceZephyr

I (and most likely the other mods) aren't inherently against mods like this having official leaderboards, but they would require the same level of discussion, specification, community input, and transparency in implementation as SpeedSquare, if not more.

### 2024-11-18 19:20:03 — cornfed

it would be more i would guess, and thats where i stand too

### 2024-11-18 19:29:02 — IndividualContributor

<@122501498981711874> I hope you don't mind but I'll share my original request and my replies in relation to this from our private conversation.

---

My original request 

---

Morning Ace, just wanted to clarify with you that the CSR is not a practice mod/tool specifically. There has been a lot of demand for this CSR as it makes runs more accessible to a lot of folks. Of course people can use the CSR mods for practice but I think calling it a practice mod or tool is incorrect. 

Can I request that you remove "practice" and "tool" from the channel name and description?

Some names that would be fine:
- CSR
- Cut-Scene-Remover
- Cut-Scene-Remover-Mod
- Cut-Scenes-Removed-Mod
- CSR-mod
- FF7-CSR-Mod
- FF7-CSR

### 2024-11-18 19:29:49 — IndividualContributor

---

Your reply is stated above 

---

My response 

---

Thanks for the context Ace. 

Just to clarify, I'm not requesting a leaderboard and didn't realize it was a 1:1 relationship between channels and leaderboards.

1. Yes I think once the final version was released any further changes would need this.

2. The CSR will cover at least any% and variants with 100% as a stretch goal. 

I have not artificially manipulated RNG in any way, it performs exactly like the original game.

3. I'm using Makou Reactor and don't intend to change the dev process or environment. I understand your concern but I'm not aware of tooling to do this. Maybe we can chat when the final CSR version is released.

4. Yes still in progress, but as mentioned when the final version is released it won't be updated again, at least without very good reason to do so.

I think given your decision to not change the name of the channel and description it might be best to not have a channel at all because it's misrepresenting the CSR in my opinion.

I respect your decision and would appreciate that you respect my request to delete the channel entirely if we can't come to an agreement.

My request hasn't changed and just to highlight I'm not requesting a leaderboard. Is there a compromise?

### 2024-11-18 19:35:31 — IndividualContributor

---

As it stands I just want to say again, I'm not looking for a leaderboard I think a leaderboard should follow competition. I'm just looking for a place to more easily track discussion of the CSR.

And the reason for my original request again was to make sure the CSR that we are working on is not misrepresented as a practice mod or tool.

I'm happy to continue using the old thread and would appreciate it if you could delete this channel or remove CSR from the name and description if possible.

### 2024-11-18 19:43:36 — IndividualContributor

And <@122501498981711874> I'm noticing some differences between the reply you posted above and the one in my DMs, not hugely different but given you've already shared some of the private discussion I think it'd be best to post the reply so that my reply has full context available.

### 2024-11-18 19:43:52 — IndividualContributor

---

Reply to my original request 

---

I don't intend to for now.

As of now, I don't think it's reasonable for CSR to be supported with a leaderboard for a couple of reasons:
1. The changes that would be made would have to be approved by the moderators, or more likely by a community vote. 
2. The exact changes made seem like they may be based on the route that it is expected to use through them, i.e. FD manip, I believe. I assume (though I cannot prove without a good deal of effort) that you added a couple areas where RNG is manually called extra times to match the expected state after the cutscenes in FD manip. This would assume that the number of RNG calls that happen is the number that happen in the current any% route, and if a different route were to use a different manipulation through there, it may need to be programmed to call RNG a different number of times, necessisating different versions of CSR for different routes.
3. I'd like if there was a way to compile a ROM from a patch file to the scripts, instead of a patch file directly to the ROM. It's somewhat difficult to tell what exactly was changed in the scripts as is, and while there is documentation to describe what was changed, it would be good to be able to easily audit these changes and their implementation (see the previous point).
4. It is still being updated with changes meant to change the amount of time runs take.

As such, relative to the current official SRC leaderboards, it can only be used as a tool and not as an official version of the game, and primarily as a tool for practice, again relative to the official leaderboards which this is the server for.

### 2024-11-18 19:45:43 — AceZephyr

yes, I changed it slightly because I was responding to a different question.

### 2024-11-18 19:46:51 — IndividualContributor

No problem at all, my reply might seem a bit weird if read with the changes you made there.

### 2024-11-18 19:54:45 — awesomeWaves

All the above aside, the request was simply to have a channel to discuss the ongoing creation of the CSR mod, instead of using a thread. 

Can we just rename the channel to be specifically for the CSR and continue discussions on creating it.

You already have resource discussion to chat about big shoes or whatever else

### 2024-11-18 20:42:16 — AceZephyr

Creating a channel for CSR without similar tools for a similar purpose being discussed there feels like singling out CSR and treating it as inherently special. The fact that "CSR" is in the channel name already treats it as special from other tools that have been or could be made. If we made a channel for every such tool that exists, then we'd have the same problem that people are complaining about right now that plagues the leaderboards: many options that are barely used or feel redundant or serve little purpose (and to be honest, this feels like it's already happening in this server). Since the moderation team does not approve of the use of CSR as a version for leaderboard submissions and we don't have any plans to right now, I don't consider it appropriate to make a dedicated channel for only it.

### 2024-11-18 20:46:15 — AceZephyr

The thing I'm afraid of and don't want is for people to come and ask *us*, the moderation team, questions about or requests for CSR or other tools under the assumption that, since there's a channel for it, that we inherently support it.

### 2024-11-18 20:54:20 — IndividualContributor

Ace I understand your reasoning and respect your decision. Can you please consider removing references to the CSR from this channel's name and description. I feel very strongly about the CSR that we're making not being a practice mod or tool and would be disappointed to have it misrepresented as such.

### 2024-11-18 20:57:28 — AceZephyr

I have done so.

I don't understand why, even if you consider that a misrepresentation, there is a reason to feel that strongly about that representation. I don't understand how it isn't a practice tool, but I also don't understand why it would be a problem if it was a practice tool. Just because it could be considered a tool for practice doesn't mean it can't also be a platform for competition at the same time.

### 2024-11-18 20:58:30 — AceZephyr

That's something I'm more interested in myself than something that affects my decisions as a moderator of this game.

### 2024-11-18 21:24:02 — Rendall

"Since the moderation team does not approve of the use of CSR as a version for leaderboard submissions" <@122501498981711874> Is that subject to change in the future ?

 <@183261151746850816> is working hard to make it respect : Any% 100% and more, including not removing scene for elevator manipulation to still allow runners to have time to watch rerecording in slow motion/load data in a 3rd party program to proceed. 

Probably a good idea to set this straight now so he know, or does it have potential in the future given it respect every aspect of the current categories.

### 2024-11-18 21:28:11 — AceZephyr

Yes, it is open to change in the future. I had listed the reasons why it currently isn't above, so when at least most of them are mostly resolved, we can consider adding it.

### 2024-11-18 21:31:56 — AceZephyr

The main reason why those particular reasons are important is to prevent leaderboard chaos in the future. Our previous attempts to solve problems with the leaderboard usually resulted in the splitting of categories and the creation of new categories, but more recently we have seen that this overabundance of useless or redundant categories is unpopular.

### 2024-11-18 21:35:01 — Rendall

Right it's a trend in all game I suppose, and you'd end out with a category for every runners !

### 2024-11-18 21:36:36 — AceZephyr

I, as a moderator, do not want to accept an entirely new version of the game to the leaderboards unless A. it is agreed upon by much of the community, B. it is finalized enough to not need to worry about submissions becoming obsolete, and C. that we can audit it to confirm it does what it claims to do.

### 2024-11-18 21:36:37 — Rendall

Either way I did not meant to say he is wasting his time, I am sure a lot of peoples will run CSR even if it is un-official and simply because it is fun.

### 2024-11-18 21:37:54 — AceZephyr

I entirely agree. I think it's a good idea for this to exist and be developed and to be competed with.

### 2024-11-18 21:42:07 — AceZephyr

but this competition is subtly different from competition on the vanilla version. Consider the case where there are two options to pass through a certain segment: you can either watch a cutscene or you can bypass the cutscene using an intended or unintended method. If the bypass were faster when the cutscene was present but the CSR mod removed enough of the cutscene to make the cutscene faster than the bypass, then if this were a platform for competition entirely independent from the unmodified game, runners would never do the bypass and instead watch the shortened cutscene that was faster.

Except that's not the point of CSR. The point is to do the route you would have done on the original game without the downtime present in the game. That's why I consider it a practice tool.

### 2024-11-18 21:50:53 — Rendall

Right future potential skip, he is adjusting so these stay relevent atm.

### 2024-11-18 21:50:54 — lemon

I'm a bit confused about the evolving nature of this channel.  Is this a place for CSR discussion?

### 2024-11-18 21:53:31 — AceZephyr

I created it as such at the request of some community members including IndividualContributor and awesomewaves, but I also don't want to single out IC's CSR mod as the only thing that could be discussed here. IC then wanted CSR to be removed from the name and description.

### 2024-11-18 21:54:45 — lemon

Excluding CSR, are there any practice mods available?

### 2024-11-18 21:55:30 — AceZephyr

There are tools that alter the game or give extra information in a manner intended primarily or secondarily for practice, some of them include Big Shoes, pinionsharp (older BizHawk plugin that does something similar to Big Shoes) and SCMSquare (fork of SpeedSquare I created for SCM practice).

### 2024-11-18 21:56:15 — lemon

I've heard about pinionsharp, but wasn't able to find a download link.  Does anyone have one available?

### 2024-11-18 21:57:19 — AceZephyr

I can't find one either, but I can just upload the version I have here

### 2024-11-18 21:57:22 — AceZephyr

_(no text)_
- file: PinionSharp.dll

### 2024-11-18 21:57:38 — lemon

Thank you Ace.

### 2024-11-18 21:58:47 — AceZephyr

such tools can also include Cheat Engine and Lua scripts for BizHawk

### 2024-11-18 21:59:09 — Rendall

I think initially IC wanted a place where people can give him feedback on his CSR while he is developing it, instead of the feedback being in a thread. That is the important part I guess.

### 2024-11-18 22:02:03 — Rendall

Maybe a channel name such as : CSR  Development, would be more appropriate for what it need to be and would not be mixed with a category but still point at the fact it is for the CSR he is creating.

### 2024-11-18 22:04:24 — Rendall

I guess I just saw your post about other tools/3rd party program not having their channel, I get why this turned out like it is atm.

### 2024-11-18 22:21:12 — AceZephyr

Thinking about this whole situation a little more:
- I don't think we actually will ever have a leaderboard for CSR. (this is a prediction, not a judgement as a leaderboard moderator) This isn't because it won't be competitively ran, but rather because that competition will inherently be based on the routes done on the vanilla version of the game, rather than determining what route is the best for any given CSR version independent of what would be fastest on vanilla, or by trying to exploit the particular manner in which some parts of CSR may be implemented, which is not what CSR exists for. Trying to legislate rules around this kind of exploitation sounds like hell, trying to keep up with development to "fix" these issues in CSR means that many different versions of CSR could exist which would be hell to moderate (either runners would choose the fastest version for their route or there would be outdated versions on the leaderboard with an advantage that is no longer fair), but developing a "final" version means that, if the vanilla speedrun route ever changes in a manner that means that updates would need to be made to CSR to account for them, then CSR would be out of date and no longer as useful.

### 2024-11-18 22:26:28 — AceZephyr

- Because of that, I think I'm actually okay with this channel existing primarily for the development of CSR, either <@183261151746850816>'s versions or anyone elses' should they wish to make a fork of it or their own implementation, precisely because it's entirely independent of the SRC leaderboard, as opposed to this "compromise" I had thought was necessary to stay in a neutral position before to treat CSR identically to any other practice tool.

### 2024-11-18 22:33:48 — Kuma

I think the idea and the thought of many (including myself) was to try to preserve the route as much as possible while cutting down it down but maybe that's not the right approach. If it were to get a chance on the boards then it should just be cut without any of the bias of the current runs and let it become it's own thing

### 2024-11-18 22:35:09 — Rendall

That is what I was thinking, make a complete CSR no compromise. Route and run that.

### 2024-11-18 22:35:28 — AceZephyr

if so, then perhaps CSR shouldn't even be developed as a tool "for" speedrunning at all. in that case, maybe the Qhimm discord/forums may be interested?

### 2024-11-18 22:36:53 — Kuma

The one thing I'm always conflicted about is elevator manip VS stairs but this might just force arm swings back

### 2024-11-18 22:37:21 — Rendall

it would , or accept the rng

### 2024-11-18 22:37:37 — Rendall

I mean elevator in most case is still faster then stair ya ! ?

### 2024-11-18 22:39:22 — butterfly

I think it is even at 5 enc?

### 2024-11-18 22:39:25 — butterfly

or slower

### 2024-11-18 22:40:02 — AceZephyr

like I think I remember from last AGDQ that the FF5PR Cutscene Remover was developed by someone with no connection to the speedrunning community at all, but it was picked up by speedrunners as a practice tool anyway. As such, decisions about what to include or not to include weren't made based on what would preserve the speedrun route.

### 2024-11-18 22:40:30 — AceZephyr

but I don't think that's what CSR is being developed to be, as far as I'm aware.

### 2024-11-18 22:40:53 — lemon

Jessie Skip might not be worth it in a true CSR

### 2024-11-18 22:41:56 — Rendall

Nod , the 1st thing I picked on was the elevator skip in the 1st reactor, and the long cut scene with barret was in there still to preserve that 4 sec quick elev.

### 2024-11-18 22:42:37 — AceZephyr

Exactly. Things like Jesse Skip, Bar Skip, Photo Skip, or that skip in Icicle Inn may be worth it or not worth it depending on what cutscenes are implemented or not, and that would be based on whether CSR is trying to be a version of the game that removes cutscenes or a version of the game that removes downtime from a speedrun.

### 2024-11-18 22:43:28 — AceZephyr

and I don't know IC's intentions well enough to know which of those CSR is being developed to be

### 2024-11-18 22:44:31 — AceZephyr

but considering it's being developed by someone in the speedrunning community and requesting input from speedrunners in the speedrunning discord server, I'm assuming the latter

### 2024-11-18 22:45:07 — Rendall

I have seen a few game that tried that with CSR or mods, and your prediction seem fair Ace, having to update and verify probably was a pain : v1.04 , v1.5 ....v12 . then at a point you need to delete some cause well ...

### 2024-11-18 22:45:29 — Rendall

While having only 1 version however that never change you save tons of problem

### 2024-11-18 22:46:58 — AceZephyr

anyway <@183261151746850816> if you want me to rename this channel to "csr" or "csr-development" or "cutscene-remover" and change the description, let me know.

### 2024-11-18 23:00:27 — IndividualContributor

That's great news Ace a channel would be awesome. What do people think? I kind of like "csr" but I'm open to anything really, provided it doesn't have practice or tool in there <:Kappa:1075235124200886273>

### 2024-11-18 23:01:43 — Rendall

it's your baby pick one ! it's a CSR , it's in development ! 🙂

### 2024-11-18 23:02:18 — Rendall

CSR dev/Feedback ? that is why you wanted a channel in the 1st place yeah ?

### 2024-11-18 23:03:47 — Kuma

I think Cutscene-Remover is fine, newer people might not know what "CSR" is

### 2024-11-18 23:04:39 — IndividualContributor

Yeah true, thanks again Ace <:KumaUp:1074814980240703508>

### 2024-11-18 23:08:26 — Kuma

Before you make anymore development to your CSR, I think the idea of the CSR needs to be changed if the end goal is a leaderboard for it

### 2024-11-18 23:08:56 — Kuma

in short, the routes should work around CSR, and not the other way around

### 2024-11-18 23:09:58 — Rendall

I 100% agree with kuma.

### 2024-11-18 23:13:01 — IndividualContributor

A leaderboard would be awesome and my understanding is that competition has to exist for a leaderboard to be created and I'm perfectly fine with that. 

There are a lot of us now contributing to this CSR in one way or another and we're getting close to a final version. We'll be running and tweaking for a while yet.

And I'm completely open to changes so please run it, test it, write some notes and send them in here. I'm pretty excited to see where this goes <:bauseChamp:1074812447728349205>

### 2024-11-18 23:17:02 — Rendall

The idea is it need not to change if it get on the leaderboard, regardless of what would happen to any% 100% nms etc. Note that peoples however that are not familiar with the current category being ran might questions why some longer scene remain, if you choose to go that route.

### 2024-11-18 23:17:33 — Rendall

either way I'll play it and help the way I can !

### 2024-11-18 23:18:35 — AceZephyr

yeah, look at this in particular for why I don't think there will be an SRC leaderboard if CSR is meant to be reflective of speedrun routes https://discord.com/channels/936291902133796955/1307919162534006854/1308195333540544634

### 2024-11-18 23:32:05 — IndividualContributor

Old Discussion Thread on the CSR for anyone interested in the discussion so far https://discord.com/channels/936291902133796955/1288235003901120586

## 🎮 Latest Release v0.5.4

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

- Trimmed Reno fight even more
- Trimmed Barret throwing 1500 gil at Cloud
- Reverted most of the Yoshiyuki man in Rocket Town interaction, scroll to see rocket remains

### 2024-11-18 23:33:06 — McSwirls

Excited to see the channel, couldn't see the thread before.

### 2024-11-18 23:56:40 — cornfed

are these the new files?

### 2024-11-19 00:02:18 — IndividualContributor

Yes that link is to the GitHub repo where the latest patch will be. 

I actually just put the new patches in and delete the old ones so there is only 1 patch per disc at any time, which will be the latest.

There are no Disc 3 patches yet but there will be soon. I'll try to highlight if there are no changes made to a disc in a release to save you having to repatch, or burn a new disc.

### 2024-11-19 03:02:36 — lemon

Does CSR work with JP & JP INT?

### 2024-11-19 06:43:33 — Deleted User

actually no ill delete those two thanks

### 2024-11-19 10:32:31 — IndividualContributor

## 🎮 Release v0.5.5 

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

- Fixed bug with the Break Scene where if you choose music option 3 to mute then if the timer runs out there is no music for Disc 2, whoopsies

### 2024-11-19 10:33:40 — IndividualContributor

I'll be making some NMS changes later tonight hopefully, although Bake Off is on so we'll see.

### 2024-11-19 13:40:54 — Okamikaze

Honesty is the best policy

### 2024-11-19 13:58:00 — butterfly

I was excited for a Bkake Off as a resident Blake, dang

### 2024-11-19 16:42:35 — Wedgi

Nice! CSR hype!

### 2024-11-19 18:50:14 — IndividualContributor

https://tenor.com/view/hype-party-gif-23560775

### 2024-11-19 18:51:38 — Rendall

you update faster then I can check version !

### 2024-11-19 19:15:04 — Deleted User

i didnt realise IC had a leaderboard so I'll take mine down. Apologies for that

### 2024-11-19 19:58:30 — IndividualContributor

https://tenor.com/view/thumb-up-thumb-up-eating-thumb-up-moment-gif-14274157792711233320

### 2024-11-19 19:59:00 — IndividualContributor

https://tenor.com/view/hacker-typing-hacking-computer-codes-gif-17417874

### 2024-11-19 21:15:33 — IndividualContributor

Do we trim this guy?
- file: 2024-11-19_21-13-14.mp4

### 2024-11-19 21:17:46 — awesomeWaves

I have said we should, because the final text box take so long to populate that it's easy to see

### 2024-11-19 21:17:55 — awesomeWaves

but maybe other people feel differently

### 2024-11-19 21:19:52 — IndividualContributor

I can trim it to 1 text before the options? I'll share here in a few minutes. 

Also what a stream <@248225699909861376>!! I've never had a chance to join before, holy moly. Great stuff 🎶

### 2024-11-19 21:24:03 — IndividualContributor

_(no text)_
- file: 2024-11-19_21-23-42.mp4

### 2024-11-19 21:27:28 — IndividualContributor

It feels a little better with 3 text boxes before the options
- file: 2024-11-19_21-26-54.mp4

### 2024-11-19 21:28:08 — IndividualContributor

As you load into that field you can turbo the guy and it gives you a chance to see the pause before the options text box

### 2024-11-19 21:50:30 — awesomeWaves

Thanks!

### 2024-11-19 21:50:56 — awesomeWaves

Have you an example without a text box?

### 2024-11-19 21:51:18 — awesomeWaves

I don't see the advantage or 1 versus 3 as nobody is counting text boxes as far as I know?

### 2024-11-19 21:51:31 — awesomeWaves

so why 3 ya know

### 2024-11-19 21:51:51 — IndividualContributor

For me it gives me a chance to orientate, I'll remove the text box entirely and share

### 2024-11-19 21:51:52 — awesomeWaves

you're almost making people have muscle memory of 3 then

### 2024-11-19 21:52:27 — awesomeWaves

Yeah, be interestin to see. It's so slow to populate that I think it would be fine but maybe you'll know once you try it

### 2024-11-19 21:57:21 — IndividualContributor

_(no text)_
- file: 2024-11-19_21-56-49.mp4

### 2024-11-19 21:57:53 — IndividualContributor

It seems fine actually if you're paying attention and know it's coming

### 2024-11-19 21:58:14 — IndividualContributor

I imagine this might catch some runners out though on first encountering it

### 2024-11-19 21:58:43 — IndividualContributor

With the expectation that there is a ton of text boxes here ya know

### 2024-11-19 21:58:52 — awesomeWaves

the issue is, they'll be thrown by 1, 3, 5 or 20 text boxes also

### 2024-11-19 21:59:01 — awesomeWaves

if it's not the normal amount

### 2024-11-19 21:59:19 — awesomeWaves

so removing some isn't any more helpful is my point

### 2024-11-19 21:59:35 — IndividualContributor

gotcha makes sense I'll remove it

### 2024-11-19 21:59:49 — awesomeWaves

kind of all or nothing? unless you feel it's too quick when you enter the screen andthe text box is populating while the screen is fading in

### 2024-11-19 21:59:55 — awesomeWaves

then it might be hard to catch

### 2024-11-19 22:00:08 — awesomeWaves

but it seems okay to me in that clip

### 2024-11-19 22:03:47 — IndividualContributor

We can revert it if others are getting caught off guard

### 2024-11-19 22:22:22 — Rendall

<@248225699909861376>  Awesome music stream, love your voice tone ! (into music as well here as a hobby for the past 30+ years, lead guitar, starting to learn piano) cheers!

### 2024-11-20 00:53:57 — IndividualContributor

## 🎮 Release v0.5.6

Disc 1
- Fixed Reno glitching when he jumps over the rail after the fight on the tower

Disc 2
- Fort Condor old guy trimmed
- Fort Condor mini-game battle guy trimmed
- Fort Condor after mini-game battle trimmed
- Cloud chillin' with Hojo fixed

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-11-20 01:00:35 — lemon

> Cloud chillin' with Hojo fixed
<:LUL:1074811553821511800>

### 2024-11-20 02:23:45 — cornfed

<:KEKW:969389441800106045> i liked that

### 2024-11-20 03:05:05 — Zheal

so, what direction is the CSR now going? I am only following it on the side but I remember there was some discussion now about practice rom vs standalone run. Will cutscenes, that would be important for the speedrun categories, now be trimmed away or stay?

### 2024-11-20 07:57:11 — IndividualContributor

I can put it back in if you like <:KEKW:1074810897308069948>

### 2024-11-20 08:00:39 — IndividualContributor

Hey Zheal, cutscenes important for skill checks will remain. I'm not sure how this is going to end up honestly but runners are really enjoying it in its current state, and I'm excited to actually play it myself properly too (too busy making changes <:KEKW:1074810897308069948> )

### 2024-11-20 08:02:58 — cornfed

its still got some work to do on it, but its something i think <@183261151746850816> myself and a few others would like to improve on and maybe at some point . when its more polished, and maybe a few more ppl to try it out, but eventually propose it as a category would be the thought, im still new to it too, but am really enjoying

### 2024-11-20 08:07:03 — IndividualContributor

I'd love to see people compete on it that would be epic! I plan to compete on it myself when it's done, watch this space, WR grind incoming <:Kappa:1075235124200886273>

### 2024-11-20 08:07:04 — cornfed

to finish answering the ? i think the idea is to trim non essential cutscenes and leave in the stuff that is related to tech. and skill checks

### 2024-11-20 12:02:36 — Zheal

Actually, is there any reason it couldn't be both? Other than more work obviously. But there could be a version that has everything removed and a version that is the "skill check version" basically

### 2024-11-20 12:47:22 — IndividualContributor

<@191046608064872449> your CSR does this right? Share the details of yours for people to check it out!

### 2024-11-20 12:51:01 — IndividualContributor

https://tenor.com/view/aint-nobody-got-time-for-that-kimberly-wilkins-interview-gif-3531013

### 2024-11-20 12:51:23 — Hope

Mines a practice tool. You can skip chocobo racing, Priscilla is removed.

### 2024-11-20 12:51:36 — Hope

You can choose how much of saucer to skip

### 2024-11-20 12:51:51 — Hope

Did start work on step route% and it's surprisingly easier than I thought

### 2024-11-20 12:52:26 — Hope

That said ex-soldier is apparently incapable of equipping materia.... had to change screens for materia module to work even when turned on

### 2024-11-20 13:25:15 — cornfed

i think it would be extremely lame to cut out skill checks and scenes used for tech, this would cut out elevator manip, and fd manip right out the get go, among many other things, ff7 is a special beast in my eye for this. as we have so much that goes along with the run that isnt just normal game stuff. i.e igts,cutscene skips, abuse of in game ram values, all of these things are core to the run itself, and if you remove them, in my eyes, its a major "boner killer"

### 2024-11-20 13:26:07 — cornfed

that being said, hopes version would def cater to what elliot mentioned.

### 2024-11-20 13:28:00 — Zheal

sure but there are enough ways to play the game with those. If you just try to maintain all aspects of everything every time, you block yourself from creating a new experience and just try to maintain the experience you already got from other runs

### 2024-11-20 13:29:21 — Zheal

and it's not like ele or fd manip would not be possible anymore. You'd have to do arm swings for ele manip and just make a different FD manip for the missing cutscenes

### 2024-11-20 13:30:36 — Zheal

But that's obviously just how I see it. If all people want is "same run but shorter <a:bauserHypers:1229739259129233488> " then I mean, that's cool ofc

### 2024-11-20 13:31:18 — Zheal

when it's done I'll try it either way and see how it feels

### 2024-11-20 13:41:23 — cornfed

thats def how i perceived it. i dont wanna learn a new route. i already know 2 of them LUL

### 2024-11-20 13:42:10 — cornfed

and yeah time and development will tell the tale. im def on <@183261151746850816> 's level with it

### 2024-11-20 13:44:26 — cornfed

but i am just one person. and dont wanna sway the whole thing. im def for what the majority wants at the end of the day

### 2024-11-20 13:44:33 — cornfed

but it would determine my interest in it

### 2024-11-20 13:48:06 — cornfed

now that i think about it tho, maybe we make it how we want, and than we can see about a completely trimmed version. and have a "competition" or vote on it. but i think most would side with having the same tech translate to full runs. but that does imply practice mod, so i get the other side of the coin

### 2024-11-20 13:53:00 — cornfed

i would like to think about would be "cut out" on a trimmed version. and i think it would be damning. jessie skip, elevator manip, playground skip, junon fmv, corel skip, fd manip, parachute skip, midgar raid skip would be included in this too i spose. am i missing anything lol?

### 2024-11-20 13:55:19 — cornfed

imagine a world where oceanfly works , and you do the skip, and have to sit through midgar return LUL

### 2024-11-20 13:57:02 — cornfed

i think most would resort to a hard reset for elevator manip. and just do list 0 over counting arm swings, i know i would

### 2024-11-20 13:58:06 — cornfed

the above stated isnt me trying to convince either, im just typing this, so we can discuss the ramafacations of both sides of things

### 2024-11-20 16:57:33 — Doumeis

i like the same run but shorter scenario

### 2024-11-20 16:59:26 — Doumeis

only gripe i have with the csr atm is that some dialogue choices appear in different ways than the original

### 2024-11-20 17:00:02 — Doumeis

I havent run it in a while but the example that comes to mind is when learning the rufus parade

### 2024-11-20 17:00:39 — Doumeis

like I didnt know when the textbox that I needed to select option 2 would pop up

### 2024-11-20 17:01:13 — Doumeis

obviously I can learn the timing after running it a couple times but I feel like it kinda defeats the purpose of having the skill checks in the first place if they are a different timing/nº of textboxes than the original

### 2024-11-20 17:02:19 — Doumeis

but thats just my opinion ofc

### 2024-11-20 17:02:43 — Doumeis

also sucks to sit thru aeriths house if i'm gonna do stairs anyway <:KEKW:1074810897308069948> but thats just a meme complaint

### 2024-11-20 17:03:22 — cornfed

yeah i got bit once and was super safe through there after haha

### 2024-11-20 17:07:54 — cornfed

now that i think about it, last patch i remember the 1st tutorial  in junon was mash the boxes that pop up after the guys walk in place than 2nd option

### 2024-11-20 17:08:20 — cornfed

the command game was just and instant box tho, which i dont mind them, but knowing where they are when your used to full runs can catch you off guard for sure

### 2024-11-20 17:11:51 — IndividualContributor

I want to know about the queues for these so I can fix them, send them in here if you can?

### 2024-11-20 17:13:38 — IndividualContributor

If anyone gets caught by surprise then I need to fix it, so do let me know the details

### 2024-11-20 17:20:08 — Doumeis

sounds good, I'll do a full run and note the details <:emptysGuy:742324145785929789>

### 2024-11-20 17:56:09 — IndividualContributor

I fixed something in there, hopefully that issue, in the latest patch

### 2024-11-20 17:59:21 — cornfed

tomarrow ill do a stream <@183261151746850816> ill go through my pb and rewatch and comment on anything i see. some stuff i forget to mention cuz im doing the run too at same time

### 2024-11-20 17:59:35 — cornfed

than we can discuss over some baking shows haha

### 2024-11-20 18:00:08 — awesomeWaves

_(no text)_
- file: image.png

### 2024-11-20 18:01:01 — awesomeWaves

Finished my run of 0.5.6 earlier. Nothing major to note except also the guys in Junon. I noticed that I'm always terrified of over/undermashing there because I don't know the queue. Could be the I'm not familar with any% and what the queue should be, but it feels odd.

### 2024-11-20 18:01:27 — awesomeWaves

Also, I think, you can actually leave the room without talking to the guard the first time

### 2024-11-20 18:01:38 — awesomeWaves

I'll try clip it as I mentioned it on stream

### 2024-11-20 18:01:52 — cornfed

good catch

### 2024-11-20 18:02:27 — awesomeWaves

Other things to note is that I believe there's still more cutting that could be done in some areas, even on Disc 1 which were deemed complete. I'll try skim the VOD and send you some details

### 2024-11-20 18:02:42 — cornfed

yeah i agree fully on that

### 2024-11-20 18:02:57 — cornfed

and disc 2 still a work in progress but stuff there too obv

### 2024-11-20 18:03:01 — cornfed

disc 3 will be easy tho!

### 2024-11-20 18:03:02 — cornfed

haha

### 2024-11-20 18:04:19 — awesomeWaves

Yeah, i guess I've been more aware of whats done/not-done yet as I've been running it for a while now. It was planned to focus on Disc 1 and I believe work on newer Disc 2 stuff only started yesterday

### 2024-11-20 18:42:50 — IndividualContributor

Something else I need to figure out is if we need to make duplicate trims on multiple discs in case stuff is done in a different order, maybe someone works on a new route and notices a cutscene still exists or something.

Each disc has full game code, but I'm not sure what's possible on each disc.

### 2024-11-20 18:43:12 — IndividualContributor

I guess not really important when following an existing route but still

### 2024-11-20 18:45:27 — IndividualContributor

I had a ton of D2 stuff done originally but then started focusing on D1. Recent additional D2 work has started to trim even further. So at this point jumping around and making the final trims is the plan.

### 2024-11-20 18:45:52 — awesomeWaves

https://www.twitch.tv/awesomewaves/clip/ThirstyRelentlessMarrowRiPepperonis-c3mgwPPKYplnd66m

### 2024-11-20 18:46:27 — awesomeWaves

It might actually be normal behaviour, I'm just not too familar. it seemed like I could have exited before the Red guy

### 2024-11-20 18:47:28 — awesomeWaves

Sorry I meant that you had returned to Disc 2. There had already been a lot of content removed.

### 2024-11-20 18:48:09 — IndividualContributor

I'm almost certain I tested that and you can't get out it's the same as original

### 2024-11-20 18:48:30 — awesomeWaves

Ah ok, I just never noticed before. All good then

### 2024-11-20 18:49:17 — IndividualContributor

Cool just highlighting for others, D2 is trimmed too so go play it! 😄

### 2024-11-20 18:50:36 — IndividualContributor

Don's basement is like this too, I saw you run down and over to the ether and then you can move around but can't leave the dungeon. Then talk to Tifa to continue

### 2024-11-20 18:50:53 — awesomeWaves

thats normal too though

### 2024-11-20 18:51:05 — awesomeWaves

I was told going under the table was faster ages ago when I was learning

### 2024-11-20 18:51:08 — awesomeWaves

🤷‍♂️

### 2024-11-20 18:51:32 — awesomeWaves

as in, I learned that before using CSR

### 2024-11-20 18:51:32 — IndividualContributor

It seems faster to me too, you don't double back to grab ether

### 2024-11-20 20:45:12 — cornfed

def  shorter but it does give the runner a chance to react

### 2024-11-20 20:45:19 — IndividualContributor

I'm strimming for a few hours working on this if anyone wants to chat about this stuff

### 2024-11-20 20:45:25 — cornfed

but yeah lock cloud in the room LUL

### 2024-11-20 21:10:49 — lemon

I think this channel needs a pin mentioning where to download the latest CSR

### 2024-11-20 21:11:12 — lemon

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-11-20 21:26:29 — IndividualContributor

<@122501498981711874> any chance you could pin this link in the channel?

### 2024-11-20 21:27:48 — AceZephyr

even better, it's in the channel description at the top. but i can also pin it

### 2024-11-20 21:28:07 — AceZephyr

_(no text)_

### 2024-11-20 21:32:08 — lemon

oooh, channel description is a good place too.  Pins is just the first place I looked for it, and I think others might look there first too.  ty

### 2024-11-21 00:39:27 — IndividualContributor

## 🎮 Release v0.5.7

- Start of Disc 2 Sephiroth walking north cut
- After snowboarding landing in snow trimmed
- Big Shoes field walking in trimmed
- After Big Shoes field misty floor scene trimmed
- Trains, after fight with two guards at the entrance trimmed
- Trains section trimmed
- Cloud's dream trimmed a bit more

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-11-21 20:26:19 — IndividualContributor

💡Rename some random character after DG to "Chuck Norris" and when you talk to him he gives you a Mastered Enemy Away and Mastered Preemptive and says "Take these, I've no use for them".

Using these invalidates the run but runners could finish for fun if they bork steps by avoiding tons of encounters.  <:Kappa:1075235124200886273>

### 2024-11-21 20:39:53 — Dash Retro

Can you specify Materia mastery in Makou Reactor?

### 2024-11-21 20:40:37 — Hope

You can add materia with any set amount of ap i think

### 2024-11-21 20:43:32 — IndividualContributor

Yeah I'm pretty sure you can too, I'll check in a bit

### 2024-11-21 21:23:42 — awesomeWaves

_(no text)_
- file: image.png

### 2024-11-21 21:24:00 — awesomeWaves

No issues with 0.5.7!

### 2024-11-21 21:34:09 — IndividualContributor

Nice! <@289891674660929538> did you say your Duckstation crashed at heligunner? can you share the details of your setup? Duckstation version and CSR version?

### 2024-11-21 21:34:39 — Teeejj

yeah hold up

### 2024-11-21 21:35:17 — Teeejj

_(no text)_
- file: image.png

### 2024-11-21 21:35:37 — Teeejj

_(no text)_
- file: image.png

### 2024-11-21 21:38:20 — Teeejj

https://www.twitch.tv/teeejj/clip/BlightedRelatedZebraLitFam-a_CiI9BT3rSmTi_E

### 2024-11-21 21:38:48 — IndividualContributor

These are the default settings I'm using in the latest Duckstation 0.1-7878
- file: image.png

### 2024-11-21 21:39:09 — Teeejj

async has to be disabled for the boards

### 2024-11-21 21:39:31 — Teeejj

and seek speedup infinite/instantaneous

### 2024-11-21 21:41:18 — Teeejj

using newest csr version

### 2024-11-21 21:41:24 — Teeejj

downloaded it after work earlier

### 2024-11-21 23:02:17 — IndividualContributor

I'll check this out in a bit thanks for the details!

### 2024-11-22 00:57:45 — IndividualContributor

## 🎮 Release v0.5.8

Disc 1
- Speed up entering Gold Saucer for the first time

Disc 2
- Trains, trimmed small animations by party before fighting two guards
- Flashback after JenovaDeath with Sephrioth burning down Nibelheim, added some text boxes back in
- Trimmed Carry Armor
- Trimmed Submarine before mini-game and getting Key of the Ancients

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-11-22 00:59:35 — IndividualContributor

---
Not sure who submitted this feature request, but it's a question and in here is the only place I can think to answer it <:KEKW:1074810897308069948> 

> "Did the "looking up to rocket" together with old man, which got removed in 0.5.3, does not roll over to 0.5.4 onwards ?"

No I reverted that change so the scroll up to the rocket is still in the CSR.

### 2024-11-22 01:02:34 — IndividualContributor

---

For this suggestion

> The UWR section before and after Carry Armor can be trimmed down more. Also the rocket town fmv can be further trimmed down

Got Carry Armor done in the latest release above, thank you for the suggestion! keep 'em coming. For rocket town FMV do you mean inside the rocket with Cid at the controls?

### 2024-11-22 01:02:37 — phek1200

That would be me

### 2024-11-22 01:02:50 — phek1200

For both request

### 2024-11-22 01:03:05 — IndividualContributor

Ah nice ok thanks Phek

### 2024-11-22 01:03:09 — phek1200

I see, alright !

### 2024-11-22 01:03:37 — phek1200

I'll get back to you later on this

### 2024-11-23 14:51:45 — awesomeWaves

Some IGTs for CSR if anyone needs them
- file: 02_Choco_ranch_choco.txt

### 2024-11-23 14:56:13 — awesomeWaves

I guess they're slightly subject to change, but I left ~10 min range for both and intentionally lower ranges than my average

### 2024-11-23 14:57:12 — awesomeWaves

_(no text)_
- file: 03_nibel_to_rocket_town.txt

### 2024-11-23 14:58:08 — awesomeWaves

I'm gonna just run with these for now until the CSR and my times settle, then add Icicle etc

### 2024-11-23 15:05:13 — IndividualContributor

Nice I need to learn how to use IGTs

### 2024-11-23 15:08:22 — awesomeWaves

The only concern is that you're going to have to be super quick on finding an IGT after Motorball. It'll be kind of similar to how you can time Nibel from the moment MK dies

### 2024-11-23 16:44:02 — Doumeis

good stuff

### 2024-11-23 16:44:08 — Doumeis

ty Waves

### 2024-11-23 16:44:26 — awesomeWaves

I meant to post this earlier sorry, this is the correct Midgar -> Choco

### 2024-11-23 16:45:05 — awesomeWaves

I got the scripts before I realised the difference in the 2 WM manips

### 2024-11-23 17:53:38 — IndividualContributor

I can put these on the repo too?

### 2024-11-23 17:56:01 — awesomeWaves

feel free to but again, it's subject to everyones individual pace/route and any changes made the CSR 😅

### 2024-11-23 17:57:11 — awesomeWaves

Dash released the full chocobo list a few weeks ago and I used that to get the chocobo times, which is more important than the other IGT manips imo so maybe add that for now?

### 2024-11-23 17:57:31 — awesomeWaves

This one
- file: 02_Chocobo_FULL_ranch_choco.txt

### 2024-11-23 17:57:50 — awesomeWaves

it's got every IGT up to 3 hours

### 2024-11-23 17:58:03 — awesomeWaves

it's overkill but you're covering all bases there

### 2024-11-23 18:30:27 — IndividualContributor

Nice I'll add that later

### 2024-11-23 20:31:57 — IndividualContributor

I have a few hours to work on the CSR what am I doing? I don't think I have any more notes or suggestions in the Google sheet. Is there anything anyone wants done? I'll be streaming so we can chat in more detail in a bit.

### 2024-11-23 23:25:32 — IndividualContributor

## 🎮 Release v0.6.0

Disc 1
- No changes

Disc 2
- Rocket town cutscenes trimmed even further
- Highwind before Cosmo Canyon trimmed down a bit more
- Fixed an issue with FD manip on Hojo skip cutscene where 55 wait frames were missing compared to original disc 2

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-11-24 08:58:05 — cornfed

<@158301632776503296> maybe worth adding these to the one stop shop

### 2024-11-24 10:10:25 — IndividualContributor

One stop shop?

### 2024-11-24 10:11:09 — cornfed

its where we house the igts for all the ff7 categories for ez access

### 2024-11-24 10:11:58 — IndividualContributor

Oh nice send on the links if you have them handy

### 2024-11-24 10:12:25 — IndividualContributor

I'm awful at keeping track of this kind of stuff

### 2024-11-24 10:12:42 — cornfed

dash has too add them in, its his sheet

### 2024-11-24 10:13:34 — cornfed

wtf you mean we have a whole sheet that houses all the igts

### 2024-11-24 10:13:35 — cornfed

all i said

### 2024-11-24 10:15:17 — cornfed

https://docs.google.com/spreadsheets/d/1vUXxWHt6pCq0O7CLcTWyXLu2Wwe8CoqNrx_w4ilgp8E/edit?usp=sharing

### 2024-11-24 10:15:26 — cornfed

found it 1 min

### 2024-11-24 10:15:38 — cornfed

but we dont have edit access

### 2024-11-24 10:16:53 — cornfed

just hovering in here to bash the fuckin discord

### 2024-11-24 10:16:54 — cornfed

fuck off

### 2024-11-24 10:17:02 — cornfed

no

### 2024-11-24 10:17:04 — cornfed

its bullshit

### 2024-11-24 10:17:24 — cornfed

i dont give a shit how 8 10 or whatever does crap

### 2024-11-24 10:17:55 — cornfed

i suggest something and you come in with a half cocked snippity remark

### 2024-11-24 10:18:02 — cornfed

i dont come into those discords and say that crap

### 2024-11-24 10:21:27 — cornfed

https://discord.com/channels/936291902133796955/936608106601934918

### 2024-11-24 10:21:51 — cornfed

i had to scroll up for like 2 secs. and if anyone has any trouble finding anything, we can provide it on the spot if @'d

### 2024-11-24 12:09:13 — awesomeWaves

I don't see it mentioned but did you finish the submarine field screen? Namely the scene where you get the key of the ancients

### 2024-11-24 12:09:37 — awesomeWaves

I'm hoping to do a run today of 0.6.0 so I'll check it out. Thanks again

### 2024-11-24 13:01:21 — IndividualContributor

Yes I think we did that the other day on stream and the latest v0.6.0 has it.

### 2024-11-24 13:03:25 — awesomeWaves

Ah ok, I recall you finished stream when you got the submarine but maybe I'm mistaken

### 2024-11-24 13:05:35 — IndividualContributor

Might be worth quickly checking on emulator beforehand but I'm almost certain because we did UWR and Carry Armor and the Sub mini game and then the Key and maybe called it there.

### 2024-11-24 13:07:02 — Luzbel

Individualcontributor

### 2024-11-24 13:07:21 — Luzbel

Is it possible somehow to add a cheat for noencounters in the wm?

### 2024-11-24 13:08:09 — Luzbel

Doing the oceanskip with superlow igts is gonna be bad, I was wondering how feasible is to trigger a noenka cheat in wm after zolom

### 2024-11-24 13:08:55 — Luzbel

Or just deactivate the wm enkas except chocobo

### 2024-11-24 13:10:34 — awesomeWaves

as far as I know, Makou reactor doesn't deal much with WM stuff but IC can confirm that

### 2024-11-24 13:13:59 — IndividualContributor

Yeah Makou Reactor for some reason doesn't expose the WM the same as it does normal Fields, I'm sure there are probably ways to set RAM values to disable encounters but I don't know at the moment how to do it unfortunately

### 2024-11-24 14:52:56 — Luzbel

okay thanks

### 2024-11-24 18:16:54 — cornfed

<@183261151746850816> im replying to your @ in the general.  i appreciate your work with even adding nms stuff in ❤️ and no rush i know your one guy, and when its ready i will do more runs of it. i just didnt wanna get a "good" time , with an untrimmed product. and no slots getting done is def the prio here

### 2024-11-24 18:17:10 — cornfed

so no rush , and ill pick it up whenever you have the time to do it is what i mean

### 2024-11-24 18:38:24 — awesomeWaves

Another run done, no issues with 0.6.0 (apart from user error 😅 )
- file: image.png

### 2024-11-24 18:39:23 — IndividualContributor

And FD manip works!!1

### 2024-11-24 18:39:31 — awesomeWaves

Yeah FD manip worked perfect

### 2024-11-24 18:39:49 — awesomeWaves

if you can patch out Super Nova though please

### 2024-11-24 18:56:44 — cornfed

i will say now after playing ff9 csr, which is much more polished. that over trimming, can take away from some of the learning, i like how ff7 csr has momments where the txt boxes arent playing, but the scene kinda plays out. in ff9 im constantly caught off guard by being warped around and such, but im still really enjoying it, its just a dif experience for sure

### 2024-11-24 18:57:17 — awesomeWaves

I'm heavily in agreement corn

### 2024-11-24 18:57:34 — cornfed

did you figure your igt stuff out?

### 2024-11-24 18:57:45 — awesomeWaves

FF8 CSR also plays out most of the scenes in a way that you're always clued into whats going on.

### 2024-11-24 18:58:06 — cornfed

yeah thats how i prefer it, although id play both

### 2024-11-24 18:58:22 — cornfed

theyy are just too good for derusting for console runs

### 2024-11-24 18:58:49 — awesomeWaves

I've made notes of things I noticed today that I sent to IC but the first thing that came up in my notes is the 'Fast Elevator'. Originally I considered it as a skill check but at the moment, it's the only text section slowing down the early game

### 2024-11-24 18:59:10 — awesomeWaves

so I'm kind of pushing towards it being removed to be honest. Just throwing it out there to see what you guys think

### 2024-11-24 18:59:17 — cornfed

have you ever tried mashing for it lol?

### 2024-11-24 18:59:22 — cornfed

its def a skill check

### 2024-11-24 18:59:26 — awesomeWaves

no and I never will 🤷‍♂️

### 2024-11-24 18:59:44 — awesomeWaves

but the same can be said for all the text breaks in the game, you'll save time mashing versus not mashing fast

### 2024-11-24 18:59:49 — cornfed

but yeah after that i dont think it rlly matters, but that would discourage potential runners like mc and zheal, the no turbo guys enjoy that

### 2024-11-24 19:00:11 — cornfed

does it count as a skip?

### 2024-11-24 19:00:15 — cornfed

idk

### 2024-11-24 19:00:18 — awesomeWaves

Again, I'm just throwing it out there for discussion

### 2024-11-24 19:00:30 — cornfed

yeah im just thinkin bout it ..

### 2024-11-24 19:00:42 — awesomeWaves

it's not that it's not something that needs to be performed, more that it has less merit in the CSR

### 2024-11-24 19:01:02 — cornfed

yeah i can see an arguement for both sides on that. cuz its txt box related

### 2024-11-24 19:01:19 — cornfed

and csr , means no boxes, and the otherside of the coin is that it does save 4 secs

### 2024-11-24 19:01:37 — awesomeWaves

It doesn't bother me either way, I'll be turboing through it anyway.

### 2024-11-24 19:01:43 — cornfed

same

### 2024-11-24 19:02:31 — cornfed

but yeah id be interested to see what the otherse think about it

### 2024-11-24 19:03:06 — awesomeWaves

Back to the IGT thing, I might send you a save Corn and see if it works for you. I can't get it working on CSR through Duck with the IGTs I have for it

### 2024-11-24 19:03:25 — cornfed

o like a csr save?

### 2024-11-24 19:03:36 — cornfed

i can just roll back time on my emulator too

### 2024-11-24 19:03:38 — awesomeWaves

but it may entirely be me. The Nibel to Rocket worked fine, but not the Midgar to Chocobo one

### 2024-11-24 19:03:59 — cornfed

okay here in a few ill boot it up and see what the variance is

### 2024-11-24 19:04:09 — awesomeWaves

Ah yeah, just try it yourself so. Plug in a time that works from the sheet above

### 2024-11-24 19:04:16 — awesomeWaves

Thanks

### 2024-11-24 19:04:21 — cornfed

k ill lyk

### 2024-11-24 19:18:36 — IndividualContributor

On the elevator, I understand your perspective <@248225699909861376> but I feel pretty strongly about leaving that as it is. Fast elevator is something I always try to get, mashing or turbo, I know turbo is free but I still feel good when I get it if that makes sense. Removing it would just feel wrong or something so I hope you don't mind.

### 2024-11-24 19:21:07 — awesomeWaves

No worries, like I said. It's not a concern to me personally. So I can see it from either side

### 2024-11-24 19:21:22 — awesomeWaves

just thought of an extra few seconds removed 😅

### 2024-11-24 19:22:29 — IndividualContributor

Nothing I can do about this I'm afraid <:KEKW:1074810897308069948>

### 2024-11-24 19:23:51 — Okamikaze

I know when I first patched Hope's original CSR I got to the elevator and without the text boxes it just felt weird, even with me using turbo

### 2024-11-24 19:24:14 — IndividualContributor

I've been trying to figure out how we get this to sub 4 hours without ruining the "feel" in some parts, e.g. gold saucer cart thing, I could try just fade to black when you step in and same on the other side

### 2024-11-24 19:25:52 — awesomeWaves

the notes I've sent you (I know they're brief as I was trying to type them and play) mention some scenes like that where you could maybe do harder cuts

### 2024-11-24 19:26:06 — awesomeWaves

for example, i was able to take a wc break during the date today

### 2024-11-24 19:26:12 — cornfed

gold saucer return date scene, you could save a few secs there by trimming it more

### 2024-11-24 19:26:16 — awesomeWaves

which I know is cool, but it's still very long

### 2024-11-24 19:26:19 — awesomeWaves

for CSR

### 2024-11-24 19:26:22 — cornfed

the gondala part for sure

### 2024-11-24 19:27:00 — awesomeWaves

Reno/Bottomswell/Dyne all the precursor scenes to those fights could be cut imo

### 2024-11-24 19:27:22 — awesomeWaves

I know you've sped up Bottomswell, but you can actually bin all 3 of those scenes entirely imo with no lost to continuity

### 2024-11-24 19:27:33 — cornfed

yeah bottomswell felt good

### 2024-11-24 19:27:44 — IndividualContributor

The Gondala part has an option iirc, they walk in Gondala moves, black screen, gondala moves, option, go.  Could see about removing the Gondala animations

### 2024-11-24 19:28:02 — awesomeWaves

It's first option anyway?

### 2024-11-24 19:28:11 — awesomeWaves

which means nobody is looking for it

### 2024-11-24 19:28:12 — cornfed

yeah i think, unless ive been doing it wrong all along

### 2024-11-24 19:28:13 — cornfed

haha

### 2024-11-24 19:28:14 — awesomeWaves

so you could remvoe it

### 2024-11-24 19:28:28 — IndividualContributor

I know but it's an option and I'm not removing any player input

### 2024-11-24 19:29:01 — awesomeWaves

I get that for 2nd options etc, but people just mash through when the first option is the preferred option

### 2024-11-24 19:29:17 — awesomeWaves

i.e. even if someone learns with the CSR, they won't be learning the 'skill check' incorrectly

### 2024-11-24 19:29:25 — cornfed

also inside the gondala are options to tap right for more fmvs

### 2024-11-24 19:29:29 — cornfed

3 of them i think

### 2024-11-24 19:29:40 — cornfed

its left not right my bad

### 2024-11-24 19:30:18 — IndividualContributor

I didn't know that, is that when he leans to look out the window or something?

### 2024-11-24 19:30:33 — cornfed

yeah , its like dlc date stuff haha, i only do it for st jude runs haha

### 2024-11-24 19:31:48 — cornfed

also while we are talking about gold saucer, it hasnt been removed i dont think, but barret 2nd option in hotel is faster

### 2024-11-24 19:31:49 — IndividualContributor

It's a slippery slope and sets precedence and I don't want to argue against this kind of stuff later for stuff I feel weird about removing. I can see removing any type of player input coming back to bite me in the ass.

### 2024-11-24 19:32:00 — cornfed

barret shakes his shoulders, than 1 box 2nd option next

### 2024-11-24 19:33:53 — cornfed

o man im on a roll, if you have tifa in your party leaving hotel for temple. theres 1 txt box at the door for whatever reason that doesnt proc with cait LUL this could get tifa temple users for no slots and nms

### 2024-11-24 19:34:45 — cornfed

you could just leave the txt box withe the dialouge and trim everything else around it, idk if its possible just a thought

### 2024-11-24 19:34:52 — cornfed

for gondala

### 2024-11-24 19:35:40 — cornfed

ff9 csr has momments like that , dagger has a 2nd option that stayed in when shes talking the queen, that turbo runners wouldnt have known about. and also amarant has one in disc 3 too. sso i get it

### 2024-11-24 19:37:27 — IndividualContributor

This I can definitely take a look at to see if it can be trimmed even further

### 2024-11-24 19:38:03 — IndividualContributor

Is this CSR only? Do I need to fix it?

### 2024-11-24 19:38:21 — cornfed

well idk if its trimmed is why i mention, its just 1 random txt box haha

### 2024-11-24 19:38:28 — Okamikaze

It's still there

### 2024-11-24 19:38:35 — cornfed

and it only procs with tifa so its easy to miss

### 2024-11-24 19:39:18 — awesomeWaves

`old lady after sleeping in lower junon` is one of my notes from earlier also that probably needs some background.

After you get Shiva from Priscilla, you run down towards the beach again. However, because maybe the time it takes for the conversation to play out is shorter, you bonk into the old lady when you're running down.

I never recall that happening in Any%

### 2024-11-24 19:39:41 — awesomeWaves

simply increasing her movement speed by a small bit would probably resolve that issue

### 2024-11-24 19:39:57 — Okamikaze

I recall having that happen too yeah

### 2024-11-24 19:40:08 — cornfed

the great wall of junon KEKW

### 2024-11-24 19:40:11 — IndividualContributor

Ok cool I can fix that

### 2024-11-24 19:40:11 — cornfed

i notice that too

### 2024-11-24 19:40:27 — awesomeWaves

but, you've to be careful, because you have to also have her in the way when you leave the house initially, like any% ha

### 2024-11-24 19:40:45 — cornfed

fast granny def do be a thing LUL

### 2024-11-24 19:41:55 — IndividualContributor

Good shout, isn't Fast Granny before the Shiva thing? I'll check it

### 2024-11-24 19:42:13 — awesomeWaves

so you leave the house, you need to go down and around her

### 2024-11-24 19:42:16 — awesomeWaves

as she's in the way

### 2024-11-24 19:42:35 — cornfed

yeah. so theres 2 fast grannys, one talking to her to enter the house, and avoiding her on the way out

### 2024-11-24 19:45:27 — IndividualContributor

Oh entering the house I think I trimmed or sped her up

### 2024-11-24 19:46:58 — cornfed

the only diff is talking to her while holding x, because cloud runs in the house, vs walking in, ff7 be weird like that , if your holding run , cloud runs during dialougue momments, if not he walks all slow. not sure what we should do about that, but it doesnt seem to relavant

### 2024-11-24 19:47:21 — awesomeWaves

Ah that probably functions as intended then

### 2024-11-24 19:47:32 — awesomeWaves

same as grabbing ledges/ladders etc

### 2024-11-24 19:48:01 — cornfed

a good way to see it, is in the dress store in wall market, talk to the shop owner while running, cloud runs into  the dressing room, if not he walks its like 4 secs slower

### 2024-11-24 19:49:17 — IndividualContributor

This is what I'm thinking too, speeding up the granny shouldn't affect Cloud running or walking because of X being held or not

### 2024-11-24 19:49:38 — awesomeWaves

Yeah it's all fine so for thre fast Granny as it stands

### 2024-11-24 19:49:44 — IndividualContributor

I didn't know about this, I've sped up Cloud in there too

### 2024-11-24 19:49:55 — awesomeWaves

it's just after you grab Shiva, she hasn't finished walking over to the old man

### 2024-11-24 19:50:08 — cornfed

thats why i said its not relavant, cuz it happens all over , in sooo many places

### 2024-11-24 19:50:16 — cornfed

well i dont think it is atleast

### 2024-11-24 19:50:20 — cornfed

opinion only

### 2024-11-24 19:50:34 — awesomeWaves

but it only applies to the first movement

### 2024-11-24 19:50:34 — cornfed

i just wanted to make sure you were aware of it

### 2024-11-24 19:50:42 — awesomeWaves

then he's on-rails within the script

### 2024-11-24 19:51:00 — awesomeWaves

so from my understanding, it hasn't changed for CSR at all

### 2024-11-24 19:51:09 — IndividualContributor

Ok so potentially if you don't know about that you miss a time save right?

### 2024-11-24 19:51:13 — cornfed

i dont think anything jumped out at me when playing it

### 2024-11-24 19:51:16 — cornfed

in that regard

### 2024-11-24 19:51:41 — awesomeWaves

I'd say it's more likely you're already doing it by accident

### 2024-11-24 19:51:52 — awesomeWaves

holding X and mashing while interacting with things

### 2024-11-24 19:52:11 — cornfed

yeah its mostly installed into ppls muscle memory

### 2024-11-24 19:52:42 — IndividualContributor

Do non-turbo runners get these too? Like hold X and use another finger to hit O at the same time

### 2024-11-24 19:53:03 — cornfed

yes

### 2024-11-24 19:53:17 — cornfed

let go of run while your mashing it through, youll get a walk

### 2024-11-24 19:54:39 — IndividualContributor

So I feel like fixing this in places where it's significant won't have any affect to runners, not fixing means it goes unnoticed but is now free time save for all?

### 2024-11-24 19:55:06 — cornfed

me thinking about things right now i dont think its an issue, but we may find something specific down the line

### 2024-11-24 19:55:45 — awesomeWaves

I think you're misunderstanding the extent of this

### 2024-11-24 19:56:17 — awesomeWaves

it doesn't set Clouds movement speed for the entire interaction. Just until he gets the the first position in the script

### 2024-11-24 19:56:31 — cornfed

yeah than the script takes over

### 2024-11-24 19:56:47 — awesomeWaves

i.e. grabbing a ladder, he'll walk to the ladder if you just press O. If you're holding X and then press O, he'll run to the ladder.

### 2024-11-24 19:56:50 — awesomeWaves

that's the extent.

### 2024-11-24 19:57:04 — awesomeWaves

For an NPC, he'll run to the position in front of them

### 2024-11-24 19:57:07 — awesomeWaves

or not

### 2024-11-24 19:57:15 — awesomeWaves

but everything after the fact, will be as intended

### 2024-11-24 19:57:22 — cornfed

^

### 2024-11-24 19:57:49 — awesomeWaves

So this isn't even within your control in makou as far as I'm aware

### 2024-11-24 19:58:11 — IndividualContributor

Oooh ok sorry yeah I misunderstood, I don't think that would be affected by changes in CSR then, I think.

### 2024-11-24 19:58:23 — cornfed

yeah i didnt think so, just wanted to bring it up

### 2024-11-24 19:58:48 — IndividualContributor

Ah ok cool cool good to know

### 2024-11-24 20:00:44 — IndividualContributor

I need to also investigate the graphic glitches that Corn and Expanse saw on Emu

### 2024-11-24 21:45:51 — cornfed

oo in kalm, after photoskip, when you fall off the bridge, the txt boxes that follow when the soldier walks up need to stay, mashging there results in a softlock, and its a skill check

### 2024-11-24 21:46:03 — cornfed

well atleast the first box needs to stay

### 2024-11-24 23:09:49 — Doumeis

yea keep the first box, the rest doesnt matter

### 2024-11-25 12:49:25 — awesomeWaves

Corrected WM Midgar -> choco IGTs. Load time was incorrect 😐 Sorry
- file: 01_midgar_choco_1enc.txt

### 2024-11-25 15:14:55 — phek1200

so it wasn't my skill issue yesterday.... 😬

### 2024-11-25 15:15:37 — phek1200

bam
- file: image.png

### 2024-11-25 15:17:58 — awesomeWaves

GG! Sorry about that

### 2024-11-25 15:21:55 — phek1200

no worries ❤️ appreciate the IGTs

### 2024-11-25 15:23:44 — phek1200

i estimated this run to be about 6h35m run without CSR, so we can say  v0.6.0 saves about 2h 24m ish

### 2024-11-25 17:07:20 — IndividualContributor

That is wild, GG. So we need to trim ~12 minutes for sub 4 hours, maybe ~15 minutes for sub 4 on PSX?

### 2024-11-25 17:55:21 — awesomeWaves

there's maybe 4 minutes on D3 alone

### 2024-11-25 17:55:30 — awesomeWaves

so not far off

### 2024-11-25 18:25:15 — IndividualContributor

I think D3 should be super quick if it's just the text boxes at the end and stuff

### 2024-11-25 18:28:19 — IndividualContributor

<@385844703091884033> are you seeing any graphics issues?

### 2024-11-25 18:29:11 — IndividualContributor

Corn and Expanse are getting two graphics issues, one at the top of Tower and another during the Nibelheim being burned down flashbacks iirc.

### 2024-11-25 18:30:35 — IndividualContributor

I suspect it's something to do with graphics settings in Duckstation because I can't reproduce them, specifically making the models look like the PC with smooth edges, no pixels.

### 2024-11-25 18:57:35 — lemon

I don't think I have any settings to make models look smooth in my duckstation

### 2024-11-25 18:58:35 — awesomeWaves

it's normally this section of the Duckstation settings that refer to that:
- file: image.png

### 2024-11-25 18:59:06 — awesomeWaves

So maybe worth checking those settings (namely the 1x, 2x, 3x etc) next time you're testing IC

### 2024-11-25 19:46:22 — IndividualContributor

I thought your stream the other day had smooth models? And it had the graphics issue? I'm likely mistaken though.

### 2024-11-25 19:49:13 — IndividualContributor

I'm using the latest Duckstation because of SRC ruleset for Digital, and I don't think it has that Enhancements section. I'll check again in a bit. But I couldn't replicate the settings exactly or configure the latest Duckstation to reproduce the graphics glitches.

### 2024-11-25 19:55:42 — lemon

I am sufficiently ignorant to duckstation that I cannot say anything regarding my setup with confidence.  Happy to look at its settings and report anything, and do experiments with changing specific settings

### 2024-11-25 19:56:53 — awesomeWaves

Sorry yeah, my version is long outdated. I stopped updating when I hooked up Big Shoes to it ages ago. The same setting should still be available though to increase the internal resolution, just in a different menu.

### 2024-11-25 21:01:25 — IndividualContributor

Ok on the Junon section, the first scene in the locker rooms is exactly the same as original in the CSR, it's the second scene that is different. The Rufus mood mini-game tutorial scene in the locker room is different. In original you have to see the tutorial at least once, whereas in the CSR I've cut out the mandatory first viewing. I'm thinking this is the difference you mentioned <@248225699909861376> ?

### 2024-11-26 01:03:30 — phek1200

Not at all. I didn't use any graphic enhancement on duckstation. Could be the 1x 2x 3x setting yeah, but can't confirm...

### 2024-11-26 01:23:12 — IndividualContributor

## 🎮 Release v0.6.1

Disc 1
- Updates to Barret throwing gil at Cloud in 7th Heaven
- Sped up the granny in Junon after Bottomswell
- Put back in some of the Rufus mini-game tutorial in the locker room to provide a queue before the options
- Trimmed Sample fight a bit more

Disc 2
- No changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-11-26 14:05:33 — phek1200

In disc 2 rocket town, after exiting the escape pod where cid says "so long shinra no.26", can the scene be trimmed? All the way to the part where the team said let's go to visit bugenhagen. That's about 2 min timesave I think 

I'm not sure if this will have any effect on 0fd manip

### 2024-11-26 14:06:32 — awesomeWaves

Is that with all the stuff on the highwind bridge also?

### 2024-11-26 14:07:17 — awesomeWaves

I had mentioned that also

### 2024-11-26 14:07:24 — awesomeWaves

There's a bit there and it's quite janky

### 2024-11-26 14:09:27 — phek1200

In proper run u can actually take a break from when the escape pot detaches from rocket. The dialogue boxes where cid admires the outer spaces does not matter, the cutscene will advance

### 2024-11-26 14:10:14 — IndividualContributor

Highwind bridge was updated. There shouldn't be any rocket or space cutscenes

### 2024-11-26 14:11:05 — phek1200

Is it ? I still see it in 0.6.0 though. I haven't upload the vod so I can't show it

### 2024-11-26 14:11:30 — IndividualContributor

That's worrying 😬

### 2024-11-26 14:11:38 — IndividualContributor

I'll check it later

### 2024-11-26 14:13:21 — phek1200

I'm not talking about the scene where rocket launches yeah, it's the after part where it hits the meteor

### 2024-11-26 14:13:35 — phek1200

The part where rocket launches is fine

### 2024-11-26 15:13:29 — uzuki7777

has the code been gone over with a fine-toothed comb to know for sure there aren't any junon weapon or midgar skip where you control an invisible character?

### 2024-11-26 15:14:54 — awesomeWaves

Are you wondering if they still function as normal? Because those skips still need to performed in the CSR

### 2024-11-26 15:15:12 — awesomeWaves

or do you want to know if creating the CSR could find more? 😅

### 2024-11-26 15:23:05 — uzuki7777

oh wait this a channel about a program that removes cutscenes not a channel about removing cutscenes? <:LUL:1074811553821511800>

### 2024-11-26 15:24:05 — IndividualContributor

Hey <@1202784191473786920> I'm removing cutscenes with Makou Reactor

### 2024-11-26 15:24:10 — awesomeWaves

This is a channel for work/discussion on the Cuscene-remover mod

### 2024-11-26 15:24:44 — uzuki7777

aaah a mod for the pc version

### 2024-11-26 15:25:15 — IndividualContributor

No PSX disc, you can run it on Emulator (Digital) or burn to disc

### 2024-11-26 15:25:34 — IndividualContributor

I actually haven't looked at PC at all

### 2024-11-26 15:25:35 — uzuki7777

oohh it's like a romhack or I guess an iso-hack?

### 2024-11-26 15:25:52 — butterfly

Kind of yeah

### 2024-11-26 15:26:53 — uzuki7777

oh so you could burn it onto a disc and play it on console? or does it need the emulator?

### 2024-11-26 15:27:03 — awesomeWaves

Softmodded PS2 or Emulator

### 2024-11-26 15:27:30 — uzuki7777

oh yeah it's not like a cartridge where you can just put in a flashcart lol

### 2024-11-26 15:27:33 — awesomeWaves

it's the same game, with the same stuff, just about 2.5 hours shorter in terms of a No Slots Speedrun

### 2024-11-26 15:27:36 — IndividualContributor

Yeah I'm using FreeMcBoot and Mechapwn

### 2024-11-26 15:28:09 — IndividualContributor

2.5 hours cut so far is wild

### 2024-11-26 15:28:21 — uzuki7777

I thought I got something from stoneagegamer though I haven't tried it that's a ps1 but it uses sd cards or something instead of cds

### 2024-11-26 15:33:52 — uzuki7777

how do you decide what cutscenes to remove? can you just remove almost every textbox and fmv? like you select new game and suddenly you're cloud ready to run forward to fight the 2 guards?

### 2024-11-26 15:36:41 — awesomeWaves

Almost every FMV is removed (except for ones like elevators in Junon) or ones related to background RNG progressing

### 2024-11-26 15:37:06 — awesomeWaves

Most text boxes are removed but replaced with one just text box, so you still have to close a text box like you would in a run

### 2024-11-26 15:37:19 — awesomeWaves

animations are trimmed in sections where there's no user input etc

### 2024-11-26 15:38:11 — awesomeWaves

I can't find the section you're referring to at all. I've been skimming my VOD of 0.6.0 to try and find it

### 2024-11-26 15:38:26 — awesomeWaves

I'll timestamp a link to my VOD of that section

### 2024-11-26 15:38:43 — awesomeWaves

https://www.twitch.tv/videos/2310231881?t=04h10m02s

### 2024-11-26 15:39:01 — awesomeWaves

That is just when you defeat the last soldier and enter the rocket

### 2024-11-26 15:41:08 — awesomeWaves

and for <@183261151746850816> the section immediately afterwards, once you spawn on the Highwind bridge is the section I think could be vastly trimmed. 

You could maybe just have the camera pan to red, him running up, mentioning Cosmo Canyon and then go.

### 2024-11-26 15:42:06 — uzuki7777

you could run to the oxygen tank and as it explodes suddenly you're on the world map again lol

### 2024-11-26 15:42:48 — awesomeWaves

there's still user input before that though, you have to actually run to the pilot on the highwind etc

### 2024-11-26 15:43:29 — uzuki7777

oh yeah it's been a while >< way too long lol oh ok then you teleport to the highwind?

### 2024-11-26 15:43:36 — IndividualContributor

Yep just looked at the link there and the music is weird too

### 2024-11-26 17:42:39 — IndividualContributor

Probably no CSR work tonight, Bake Off is on

### 2024-11-26 17:43:03 — IndividualContributor

https://tenor.com/view/prue-leith-great-british-bake-off-bake-off-filling-gif-15660835156958466581

### 2024-11-26 17:49:39 — DylWingo

omg my family religiously watches that show lol

### 2024-11-26 17:49:48 — DylWingo

ive seen a bit of it, I can see the appeal

### 2024-11-26 17:51:28 — IndividualContributor

It is quite possibly the greatest show ever made...

### 2024-11-26 17:52:04 — DylWingo

sorry mate, this is the correct answer for that
- file: p8696131_b_h10_aa.png

### 2024-11-26 17:52:23 — DylWingo

or this
- file: better-call-saul.png

### 2024-11-26 17:52:45 — IndividualContributor

I do like Breaking Bad too, although the fly episode was awful and the director should be ashamed of themselves.

### 2024-11-26 17:52:55 — IndividualContributor

<:Kappa:1075235124200886273>

### 2024-11-26 17:52:58 — DylWingo

you either love the Fly or you hate the Fly

### 2024-11-26 17:53:04 — DylWingo

I do not like it either its ok

### 2024-11-26 17:53:28 — IndividualContributor

Better call Saul is also excellent I need to rewatch these

### 2024-11-26 17:53:32 — DylWingo

its funny cuz the director of that episode (Rian Johnson) also directed Ozymandias, which is regarded the best of the show/ one of the best episodes in TV history

### 2024-11-26 17:53:48 — DylWingo

same

### 2024-11-26 17:55:10 — IndividualContributor

Ozymandias is the big shootout? I really need to watch BB again

### 2024-11-26 18:09:52 — DylWingo

||the episode after the shootout where a major character dies||

### 2024-11-26 20:37:52 — IndividualContributor

_(no text)_
- file: 2024-11-26_20-33-18.mp4

### 2024-11-26 20:39:27 — IndividualContributor

I've trimmed the scene before hojo skip, this seems fine to to me, the queues are Reeves turning and using the phone a second time right? you hold run + right for the skip before then

### 2024-11-26 20:41:35 — IndividualContributor

Also ouchy
- file: image.png

### 2024-11-26 20:41:46 — IndividualContributor

Didn't notice her eye before lol

### 2024-11-27 00:09:37 — phek1200

Huh wow this one skipped what I was referring to. My run didnt, that's weird <:baHmm:1074812804747497503>

### 2024-11-27 08:40:07 — IndividualContributor

Did your disc 2 have other CSR edits? Is it possible the patching tool held onto the disc 1 patch and so you ended up patching disc 2 with the disc 1 patch?

It's happened to me a couple times where the patching tool web app does this. I refresh the page after each patch now.

### 2024-11-27 15:40:47 — IndividualContributor

_(no text)_
- file: 2024-11-27_15-39-13.mp4

### 2024-11-27 15:41:58 — IndividualContributor

Trimmed the rocket scenes to highwind so that Cloud is already standing up at the top of the bridge and Red runs up immediatly, there is no music in the section originally before the "planet screaming" sounds

### 2024-11-27 15:42:43 — awesomeWaves

awesome, that was certainly a place where the CSR dragged for a moment

### 2024-11-27 15:43:04 — awesomeWaves

is the camera pan a bit abrupt maybe? That's the only feedback I'd have for that

### 2024-11-27 15:43:46 — IndividualContributor

I did speed it up but can revert it

### 2024-11-27 15:43:51 — IndividualContributor

one sec

### 2024-11-27 15:44:26 — awesomeWaves

or if the camera started on red and followed him up maybe/

### 2024-11-27 15:44:38 — awesomeWaves

as opposed to zooming straight down then following him up

### 2024-11-27 15:45:25 — IndividualContributor

the first text box appears up with Cloud from Red, then camera pan. And that text box I think should stay in, so would look weird I think if the text box was in a different position

### 2024-11-27 15:45:31 — IndividualContributor

I can check though

### 2024-11-27 15:45:39 — awesomeWaves

Ah ok yea

### 2024-11-27 15:46:04 — awesomeWaves

Do you need all that text anyway? there's about 7 or 8 boxes there?

### 2024-11-27 15:50:58 — IndividualContributor

_(no text)_
- file: 2024-11-27_15-50-16.mp4

### 2024-11-27 15:52:28 — awesomeWaves

that looks smoother

### 2024-11-27 15:52:39 — IndividualContributor

The long delay from the rocket to the highwind is just a result of all the fields being loaded, no wait frames to remove. But I think there should be music playing in the rocket at that field, but because I skipped over Cid getting trapped under the steel thing it's just silent for a bit

### 2024-11-27 15:53:03 — IndividualContributor

I could try to put the music back in but it would only be there for like 5 seconds I think which would be more noticable

### 2024-11-27 15:53:14 — IndividualContributor

So I'm leaning towards leaving it as it is

### 2024-11-27 15:53:55 — awesomeWaves

Ya, looks good now 👍

### 2024-11-27 15:56:10 — Teeejj

man thats so much better

### 2024-11-27 15:56:29 — Teeejj

goat shit

### 2024-11-27 15:59:15 — IndividualContributor

I'll take a look at the remaining disc 1 suggestions now in here https://docs.google.com/spreadsheets/d/19y6yHtODjS5R-VyvtHUKjAo3FL9Fif56p1REQsUzGWg

Once these disc 1 changes are done I'll do some NMS and then Disc 3

### 2024-11-27 16:16:52 — IndividualContributor

_(no text)_
- file: 2024-11-27_16-16-13.mp4

### 2024-11-27 16:16:59 — IndividualContributor

Getting Diamond tiara sped up a bit more

### 2024-11-27 16:19:07 — awesomeWaves

can you speed up or pull more of his animation?

### 2024-11-27 16:19:41 — awesomeWaves

the 'pling' or audio queue is absolutely plenty there to signal the scene is over imo

### 2024-11-27 16:19:48 — awesomeWaves

plus Aerith rejoins Cloud

### 2024-11-27 16:19:52 — IndividualContributor

I can speed up the animations slightly I think

### 2024-11-27 16:19:57 — awesomeWaves

so you don't really need him getting it

### 2024-11-27 16:20:18 — IndividualContributor

ok let me test cloud walking in and getting it immediately? no Aeris

### 2024-11-27 16:20:34 — awesomeWaves

you can leave his animation of handing it to cloud

### 2024-11-27 16:20:51 — awesomeWaves

if he stood up, gives it. then received, Aerith and go maybe

### 2024-11-27 16:23:50 — IndividualContributor

_(no text)_
- file: 2024-11-27_16-23-24.mp4

### 2024-11-27 16:24:11 — awesomeWaves

Seems good!

### 2024-11-27 16:30:30 — IndividualContributor

Clothes shop trim, now they are running around instead of walking, sped up the movement speed.
- file: 2024-11-27_16-28-17.mp4

### 2024-11-27 16:31:02 — IndividualContributor

Aeris joining at the end I can speed up too

### 2024-11-27 16:35:38 — IndividualContributor

_(no text)_
- file: 2024-11-27_16-35-07.mp4

### 2024-11-27 16:47:01 — IndividualContributor

_(no text)_
- file: 2024-11-27_16-46-24.mp4

### 2024-11-27 16:47:23 — IndividualContributor

The text boxes during the siren are required as the siren will play for as long as the text boxes are progressing

### 2024-11-27 16:47:38 — IndividualContributor

So if I remove the text boxes the siren will play for a second and will sound weird

### 2024-11-27 16:47:51 — IndividualContributor

But I have sped up Barret and removed some text boxes, I think it's pretty quick now

### 2024-11-27 16:48:59 — IndividualContributor

And when you initially talk to Barret there is 2 text boxes then you get control again, so you can run off to the right prematurely if you buffer run + right too early, which is a skill check so I left those two in

### 2024-11-27 17:52:10 — IndividualContributor

_(no text)_
- file: 2024-11-27_17-51-33.mp4

### 2024-11-27 17:52:31 — IndividualContributor

Sped up Aerith (or whoever is on the date) and Cloud so they run here

### 2024-11-27 20:05:06 — IndividualContributor

Aerith Aerith Aerith ...

### 2024-11-27 20:05:20 — IndividualContributor

I keep calling her Aeris

### 2024-11-27 20:14:41 — IndividualContributor

I've trimmed off the bits where Cloud runs from one tube to another, so the date scene is just the scenes now. I've sped up Cloud and (insert person on date) so they run here. I'm going to look at the gondola thing to see if I can speed that up too
- file: 2024-11-27_20-12-07.mp4

### 2024-11-27 20:31:53 — IndividualContributor

_(no text)_
- file: 2024-11-27_20-30-17.mp4

### 2024-11-27 20:32:09 — IndividualContributor

https://tenor.com/view/amy-poehler-chefs-kiss-amy-poehler-chefs-kiss-really-seth-and-amy-gif-25804339

### 2024-11-27 21:02:12 — IndividualContributor

Pre-Jessie skip update. Cloud closes the door himself
- file: 2024-11-27_21-00-42.mp4

### 2024-11-27 21:18:47 — IndividualContributor

This one is better, has Jessie, she's sped up, and there are 2 text boxes for the mashing / turbo check.
- file: 2024-11-27_21-17-18.mp4

### 2024-11-27 21:25:37 — IndividualContributor

Credit to <@248225699909861376> for these little nuggets, if anyone has any suggestions get them onto this list https://docs.google.com/spreadsheets/d/19y6yHtODjS5R-VyvtHUKjAo3FL9Fif56p1REQsUzGWg

Use this form https://docs.google.com/forms/d/e/1FAIpQLSfcZVrLn6QF7-WJVihUU1IwoTfz8Q3eBKBbDSBJ5ez1Q8nWBA/viewform
- file: 2024-11-27_21-23-49.mp4

### 2024-11-27 21:36:37 — IndividualContributor

## 🎮 Release v0.6.2 (this is a beefy one)

Disc 1
- Trimmed getting the Diamond Tiara a bit more
- Trimmed the clothes shop a bit more
- Trimmed Barret text boxes and animations on the Jenova boat where he is looking in at Rufus and Heidegger
- Trimmed pre-Jessie skip scene more
- Trimmed Don Corneo picking a girl a bit more

Disc 2
- Big shoes screen party split and join slowed down a little to be less weird
- Scene before Hojo skip trimmed with Reeves on the phone 
- Trimmed scenes between Rocket town rocket and the Highwind again (the planet screaming bit)

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-11-27 21:50:36 — Okamikaze

My first finished run on PS2 (Break time included in the LiveSplit time this time)
- file: image.png

### 2024-11-27 21:51:09 — Okamikaze

In terms of runs that actually survived to rocket town, probably the worst combined Bio luck I've ever had

### 2024-11-27 22:01:07 — IndividualContributor

GG

### 2024-11-27 22:01:34 — IndividualContributor

How did it "feel"? Was there anything weird that you noticed?

### 2024-11-27 22:21:11 — Okamikaze

I feel like most of it is covered by the 0.6.2 update you just posted.
If I had to nitpick though the first thing that comes to mind is after I run up the bridge first going into the reactor, and I run up right and hold circle towards Barret (to interact on the earliest possible frame), the text box comes out immediately so I have to be quick about switching from circle to turbo circle. But on non turbo you'd just release and start mashing. Dr Masho and Kiwami you'd have turbo setup for that part already, so basically a Brook only caveat afaik

### 2024-11-27 22:21:22 — Okamikaze

Other than that muscle memory felt 1:1 I would say

### 2024-11-27 23:30:46 — IndividualContributor

Just before he joins you and you run up to talk to Biggs for the door?

### 2024-11-27 23:31:44 — awesomeWaves

I don't think the text box happens any sooner than it would in Any%

### 2024-11-27 23:31:50 — awesomeWaves

it's just that there's only 1 text box

### 2024-11-27 23:31:56 — awesomeWaves

I don't know how thats any different

### 2024-11-27 23:32:22 — awesomeWaves

but I've never used a brook adapter for turbo so maybe I'm misunderstanding the issue

### 2024-11-27 23:34:59 — Okamikaze

On vanilla Barret puts his left arm up before the first text box, on here it's boom 1 text box then go

### 2024-11-27 23:36:11 — Okamikaze

On Kiwami that is enough window to apply turbo now that I'm thinking about it though

### 2024-11-27 23:36:40 — awesomeWaves

yeah I just checked, you're 100% right

### 2024-11-27 23:36:52 — IndividualContributor

I may have skipped the start and left the last text box? Which may also have skipped the animations

### 2024-11-27 23:36:54 — awesomeWaves

there is an animation before the first text box

### 2024-11-27 23:37:11 — IndividualContributor

I can fix that tomorrow 👍

### 2024-11-27 23:37:19 — awesomeWaves

on kiwami i have turbo push-to-turbo from the end of the soldiers encounter

### 2024-11-27 23:37:25 — awesomeWaves

there's no reason to remove it

### 2024-11-27 23:37:45 — awesomeWaves

so i guess it has never been an issue

### 2024-11-27 23:37:58 — awesomeWaves

it's like 0.5s so it's not an issue to put the animation in I assume

### 2024-11-27 23:39:28 — Okamikaze

I think back when I was trying to exclusively use kiwami I found myself doing that yeah, not worth sacrificing the qol when the turbo can hit it on the earliest possible frame anyway

### 2024-11-27 23:39:48 — IndividualContributor

I'll put the start of that bit back in and then skip the rest

### 2024-11-27 23:40:44 — awesomeWaves

I'll do a run tomorrow with the newest version and report back anything I spot

### 2024-11-28 15:44:31 — IndividualContributor

I might have some time later to work on this, there are no more suggestions in the list https://docs.google.com/forms/d/e/1FAIpQLSfcZVrLn6QF7-WJVihUU1IwoTfz8Q3eBKBbDSBJ5ez1Q8nWBA/viewform so I'll move on to NMS specific changes.

### 2024-11-28 15:45:28 — awesomeWaves

Could I suggest doing D3 next? If that's completed then you could actually have a full finished version 0.7.0 for No-Slots .

### 2024-11-28 15:45:51 — IndividualContributor

No

### 2024-11-28 15:45:56 — IndividualContributor

<:Kappa:1075235124200886273>

### 2024-11-28 15:45:59 — butterfly

Lmao

### 2024-11-28 15:46:02 — awesomeWaves

ok lol

### 2024-11-28 15:46:09 — IndividualContributor

I can do D3 next no bother

### 2024-11-28 15:46:28 — awesomeWaves

it came up in Clippers chat last night or the night before that she wasn't using it because she believed it wasn't 'finished'

### 2024-11-28 15:46:30 — butterfly

Just 
"No"
Bahaha

### 2024-11-28 15:46:46 — awesomeWaves

so I think having D3 finished, you can actually promote that it's completed for the No-Slots route

### 2024-11-28 15:47:37 — awesomeWaves

My run today died early so I didn't get much testing done. Everything seemed fine though.

### 2024-11-28 16:12:34 — IndividualContributor

Ah ok gotcha yeah let's do D3 then and I'll continue with NMS afterwards.

### 2024-11-28 18:25:04 — cornfed

screen after save crystal with up down options should be fully intact for fd reasons

### 2024-11-28 18:25:34 — cornfed

the rest i think is okay for fd

### 2024-11-28 18:26:20 — awesomeWaves

I think the only things removed will be the stuff around/between the final boss fights

### 2024-11-28 18:26:25 — IndividualContributor

I think trimming only the end would be enough?

### 2024-11-28 18:26:31 — awesomeWaves

and the FMV before the 1v1 with sephy?

### 2024-11-28 18:26:37 — cornfed

yeah i think so

### 2024-11-28 18:26:42 — awesomeWaves

the rest is required

### 2024-11-28 18:27:20 — IndividualContributor

Cool I'll share as I'm trimming or maybe strim so we can chat about it

### 2024-11-28 18:27:44 — cornfed

sounds good, ima eat some ham and play ff7 or ff9 tonight, havent decided

### 2024-11-28 18:27:47 — awesomeWaves

I'm working this evening but as D3 is so short I can always just run a D3 to see it after

### 2024-11-28 18:27:51 — cornfed

happy turkey day

### 2024-11-28 18:28:07 — awesomeWaves

same to you corn

### 2024-11-28 18:38:00 — cornfed

o yeah

### 2024-11-28 18:38:24 — cornfed

scene that plays in return to junon , in the middle of the road otw to under water reactor. is that trimmed?

### 2024-11-28 18:44:06 — awesomeWaves

yeah all done

### 2024-11-28 18:45:12 — cornfed

sweeet

### 2024-11-28 18:45:19 — cornfed

just popped into my head

### 2024-11-29 01:50:59 — IndividualContributor

## 🎮 Release v0.7.0 🏁 any% no slots route done?

Disc 1
- no changes

Disc 2
- no changes

Disc 3
- Trimmed text boxes before Jenova fight
- Trimmed after Jenova where Cloud is doing a base jump
- Trimmed Sephiroth pushing the party with green awesome waves
- Removed the FMV of Cloud flying down to fight naked Sephiroth

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-11-29 02:29:38 — IndividualContributor

<@170713534726930432> that Barret change I'll do in 0.7.1 completely forgot. And there was something in Don's basement too that you mentioned I'll need to get more details on.

### 2024-11-29 12:52:12 — Okamikaze

I realized when you and Waves were discussing the ether pick up order that ether before interacting with Tifa is probably faster anyway, so probably not even necessary tbh

### 2024-11-29 12:53:51 — Okamikaze

That's what I've been doing lately anyway. Recently though up to Don's basement my Wall Market's have been faster than my average or slower than my average so I haven't measured it on the fly

### 2024-11-29 12:55:17 — IndividualContributor

Ah ok I'll just do the Barret bit then

### 2024-11-29 12:56:15 — Okamikaze

Thankyou. I might do some more of this tomorrow

### 2024-11-29 13:01:47 — IndividualContributor

Reminder to self
- file: Screenshot_2024-11-29-13-01-25-41_f90b96e7af3c5a594eb0c92de7fc5fe1.jpg

### 2024-11-30 04:18:29 — Rendall

<@183261151746850816>  Weird model not rendering properly , patch 0.7 , duckstation 0.1-6292-g0bc42c38 (dev)
- file: image.png

### 2024-11-30 04:19:03 — Rendall

Reno section  helicopter scene.

### 2024-11-30 04:19:27 — Rendall

_(no text)_
- file: image.png

### 2024-11-30 05:45:18 — Rendall

Texture/model rendering issue as well in the shinra HQ store FMV
- file: image.png

### 2024-11-30 08:19:20 — IndividualContributor

Thanks <@309356817169776641> ! Any chance you can test the same scenarios on the latest Duckstation? Do you have any graphics settings on that are not default?

### 2024-11-30 09:06:34 — IndividualContributor

I'm unfamiliar with the HQ store FMV I'll have to check it out and remove it.

### 2024-11-30 17:54:45 — Rendall

I could but not sure I want to unless I can preserve that version. As for the setting it's those Kuma recommended for ff7 emu standard. These graphic issue do not happen with the OG bin files.

### 2024-11-30 19:33:17 — IndividualContributor

Thanks Rendall no worries I think given the rules of SRC are to use the latest Duckstation (I think) and I'm pretty sure these graphical issues don't occur on the latest version, this might be something we can ignore. It's also something I can't effectively debug because I couldn't reproduce on previous attempts and it's not happening on PSX. 

The FMV in the Shinra HQ store I can see about fixing though.

### 2024-11-30 22:14:31 — uzuki7777

that looks like Cloud! I think you accidently typed "psychedelic" instead of "disappear" in your code for the field models <:LUL:1074811553821511800>

### 2024-11-30 23:33:09 — IndividualContributor

## 🎮 Release v0.7.1

Disc 1
- Fixed queue at Barret and Biggs opening the first reactor 1 gate
- Sped up Aerith in clothes shop before wig

Disc 2
- no changes

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-12-01 18:13:13 — cornfed

i seen the post that said your basically done with no slots. lmk if you need anything for the dlc areas IC <@183261151746850816>

### 2024-12-01 19:04:52 — IndividualContributor

Thanks Corn! If you have any written notes send them in here, I'll be reviewing your VODs for the changes for dlc content. I'm unfamiliar with NMS so need to play through it myself to understand the scenes and dialogue. But it's next on the list now that no slots is "done" (might be tiny changes here and there)

### 2024-12-01 19:06:54 — cornfed

i didnt make a list, but i can go through later and check it, might be tomorrow tho

### 2024-12-01 19:08:25 — IndividualContributor

No worries it might help me familiarize myself with the route if I just watch your VoD

### 2024-12-01 19:14:03 — cornfed

theres not much in reactor 5, i think the train scene is mostly trimmed already? aeris church is the big one. and a bit in aeris house. i dont think its a time save but 2nd option for aeris in her house is widely joked to be "girlfriend skip" , up to you guys, upstairs aeris house, everything can go except the last txt box before getting control of cloud. as we can do a 1 sec para dodge there called grounded skip, by talking to the item sack and bed together

### 2024-12-01 19:15:50 — cornfed

ill sit down here in a bit and type the rest

### 2024-12-01 19:15:53 — cornfed

for kalm and cc

### 2024-12-01 19:15:57 — cornfed

midgar return also super ez

### 2024-12-01 19:46:54 — cornfed

reactor 5 notes, train section can be trimmed, car 1 run to tifa right away, 2nd car, 1 box to start timer, this is a skill check this timer start might not be needed rlly. but a thought, as you need hi pot from weird guy, (which he can just give in 1 box , than your menuing to remove ice and maybe back row barret, or if your swag, change menu color , than little dialouge at the end with barret and tifa. in train tunnel, dialouge after jumping off, there is some dialougue at the end of the tunnel, you want option 2 there, not sure how that looks with trim or not, prob can be trimmed a bit. reactor 5 inside reactor scene at bottom when planting bomb, button mini game, 1 box prompt to start game is enough. air buster scene. church, 2nd option after moving right to talk to aeris, after that she can just run up to be named, than it gets a bit weird, you normally look for "sorry i just" from aeris to know to run to reno, but honestly, can just run to him and back. than to barrels, not much here camera pans to first barrel choice might be needed , 2nd barrel is just mash (unless you get short barrel) which idk than, 3rd barrel is 3rd otpion, but its got camera pan to alert the runner. 1 box after barrels on next screen from aeris can go, outside church can be trimmed completely, til g/f skip at aeris house, which is 1 box , than upstairs, grounded skip starts when cloud walks to door,

### 2024-12-01 19:47:27 — cornfed

than pg skip we need to wait for the vote , so id just leave that

### 2024-12-01 20:00:50 — cornfed

entering kalm, small scene to start, can be trimmed. run up stairs, 1 box at stairs can go, run down, skip to green dragon, than you get some scene, where cloud can just run up to next scene instead of the scene, next screen is sephiroth telling cloud to visit his family before entering the inn, trim that, run into in, 1 box from sephy, 2nd option, than photo skip happens. can trim til run up to tifa on bridge, fall . when cloud wakes up its a skill check to not mash the first box until the blue soldier gets into place, mashing results in a softlock. so that can just be 1 box, than run through to next screen, small trim inside mines. warp to cloud running into reactor, inside reactor, you can flash the room to remove sephy from blocking you, but this isnot a timesave on psx, pc only as load times. so nothing til you enter the room that houses all the body pods or idk what you call them, cloud runs up, cloud runs to work on a "pod" than runs right to sephy, talks to sephy, than you warp to mansion, run to basement, can trim the txt from the library here, cloud wakes up in bedge, run back downstairs, deeper library txt can be trimmed. run down as sephy walks way, drop the  mic sephy, than proceed to outside, weird hero guy can be trimmed, than run into h ouse, trim everything after til barret 2nd option in the inn at stairs trim txt after that , red fascinating story txt gotta go sadge, run down stairs and get the phs from barret or red, depending on what route your u sing, than leave SMILERS, also somewhere later in an inn txt sequence barret has an option, 1st is timeloss because it prompts you to save. 2nd option is proper. there, but would require a small scene in the inn that i suggested we bypass altogether but obv thats just my thought

### 2024-12-01 20:02:38 — cornfed

ooo i forgot a sequence, cloud return to reactor after the town burns, cloud runs to tifa, txt trim there, cloud runs to tifa again inside, 1 box can get trimmed, than run into main door up the stairs and trim it all til you get the barret 2nd option

### 2024-12-01 20:05:37 — cornfed

cosmo notes, enter cosmo, 1 box 2nd option from the gate keeper, than can trim all stairs convo, and store prompts , run up to boogs, trim all that inside boogs, run to cait , than back to boogs for the big scene, which can obv be trimmed. than campfire , tricky one, one box for barret , aeris, red , and tifa. as a perfect candle is a skill check. but this still trims alot of it. now to cave of gi, talking otw to stinger skip can be trimmed, but the triggers for them should remain,  especially the 2nd boog coming out to talk before stinger ., as its part of the setup. post stinger skip, small talk with the crew can be trimmed, than the big scene, which is already trimmed iirc

### 2024-12-01 20:06:07 — cornfed

after that, campfire can get trimmed, small talk with red and boog before you leave can get trimmed, and thats it

### 2024-12-01 20:07:50 — cornfed

ooooo, return to golden saucer, for tifa temple plebs, as you leave the hotel, theres 1 box there IF  YOU HAVE TIFA in your party, cait will not proc that. idk if that got hit with the no slots stuff

### 2024-12-01 20:12:11 — cornfed

midgar return, ship dialouge can just skip til 2nd option before the parachute scene, skip the parachute scene, this gets a bit weird cuz of parachute skip, but when cloud deploys his chute, you can hold right run, i think up run too, and it skips a few secs. idk if we just trim the whole fmv. or try to leave that somehow,. but it does allow the runner to have 1-2 secs running at the LAMP to set list. which could make or break a fast lamp.no trim needed at the ladder. as you can just squeeze by cait and get on the ladder. so not doing that should result in getting txt. okay, turks fight. small talk with them leading to fight. easy trim. but cloud needs to be able to run to the proper spot to trigger fight, as we setup  PE on it. and just as important hes in the spot after the fight too . proud clod can be full trimmed once you hit the trigger for him. than hojo remains normal for fd

### 2024-12-01 20:12:13 — cornfed

ezpz

### 2024-12-01 20:12:18 — cornfed

any ?s let me know

### 2024-12-01 20:12:39 — cornfed

btw i typed this here in case anyone else reads this and i missed something

### 2024-12-01 20:36:19 — lemon

If I recall correctly there's stuff to trim in Raid on Midgar.

### 2024-12-01 20:41:03 — cornfed

idk if i missed something but its the last paragraph i typed

### 2024-12-01 20:45:28 — lemon

oooh, sorry yeah I missed that paragraph about midgar

### 2024-12-02 01:51:14 — phek1200

late to this. i finally got to try it again, pretty sure i've patched it correctly but it still doesnt cut out this part.
thinking if Duckstation version has something to do with this....?

### 2024-12-02 01:51:16 — phek1200

https://youtu.be/cxey-fndwls?si=ijbTs-MDT8IBvCtB&t=12729

### 2024-12-02 01:51:29 — phek1200

^ timestamped in the link

### 2024-12-02 01:51:49 — phek1200

the rest of the d2 and newly trimmed d3 are working properly

### 2024-12-02 01:51:59 — phek1200

oh and PB by the way <:SMILERS:1074813154770558976>

### 2024-12-02 08:54:15 — IndividualContributor

4:03:09 <:POGGIES:1074812242836603032>

### 2024-12-02 08:55:56 — IndividualContributor

Can you send me your D2 .bin file directly in DMs? I'll take a look at it in Makou Reactor

### 2024-12-02 08:56:49 — IndividualContributor

---

Thank you <@266664783502245888> !! Those notes are going to be super useful while I'm making changes

### 2024-12-02 13:59:28 — cornfed

<a:LebronJam:969389555121799260>

### 2024-12-02 14:37:43 — awesomeWaves

GG! Sub 4 Inc

### 2024-12-02 15:09:41 — IndividualContributor

<@385844703091884033> I'm seeing slight differences between my current patched D2 and your D2 .bin you sent me. I'm going to patch a D2 now using the latest patch for D2 and see what the result is. 

Are you re-patching the same D2? or are you using an original .bin when patching? you'll need to use an original .bin every time you want to use a new patch, you are likely using a new .bin each time but just want to confirm.
- file: image.png

### 2024-12-02 15:11:08 — IndividualContributor

And the above screenshot is showing the issue, the left is my D2 and the right is yours. I'm not setting the Var[3][136] and your D2 is, there is another difference that I've noticed and either will bork the changes and cause the FMV to load I think.

### 2024-12-02 15:29:42 — IndividualContributor

Ok I've patched a new D2 .bin with 0.7.1 and it's identical to my local D2 patched, and it shows the same difference to your D2. This tells me there is something going wrong in the patching process on your end <@385844703091884033>. 

I'm going to test re-patching an older version with 0.7.1 to see if I can reproduce your D2. But in the meantime can you try patching a new/original D2 .bin with 0.7.1 and testing this section again?
- file: image.png

### 2024-12-02 15:34:57 — IndividualContributor

So I've tried re-patching an already patch .bin and it makes the changes, but if you try to make further changes and save the .bin it crashes Makou Reactor, and from previous testing the .bin won't work correctly. So it seems a .bin can only be patched a single time, which means if you were able to play your D2 .bin then you didn't re-patch it. 

I'm actually not sure what could be the cause of your D2 being different to mine after a patch. Let me know when you get a chance to re-patch an original D2 and I'll check it again if you can upload and send me the link. 

Just to make sure our envs are the same:
- Patcher app https://www.romhacking.net/patch/
- D2 patch https://github.com/individualcontributordev/Final-Fantasy-7-CSR/blob/main/Final%20Fantasy%20VII%20(Disc%202)%20CSR%20Patch%20v0.7.1.ppf

### 2024-12-02 15:36:56 — phek1200

Thanks IC, will give it a test again.

### 2024-12-02 15:45:20 — phek1200

Thanks! definitely in the sub4 region now when i get the d2 rocket scene trimmed. and also faster IGTs 
We need faster IGT timing for midgar -> ranch and also MK -> rocket town <:SMILERS:1074813154770558976>  
my MB split is 1:00:58 with 4 encounter yolovator, this can be faster by 1.5~2m i think with better rng + elevator manip
and MK split is 1:44:18, i think this can be faster by 3~4m with better rng + execution

### 2024-12-02 15:46:45 — awesomeWaves

If you can give me the preferred ranges for the manips I have, I can try and get them done. I also now have access to the beach plug manip, so if you have a range for that after Dyne I can work that out too

### 2024-12-02 16:01:39 — IndividualContributor

https://tenor.com/view/chris-pratt-andy-dwyer-jimmy-kimmel-interview-excited-gif-22198805

### 2024-12-02 16:01:43 — IndividualContributor

Sub 4

### 2024-12-02 18:35:19 — Okamikaze

_(no text)_
- file: 01_midgar_choco_1enc_59-110.txt

### 2024-12-02 18:35:31 — Okamikaze

I generated these yesterday, hope it helps

### 2024-12-02 22:00:33 — cornfed

<@158301632776503296> hate to  ping you again, but can we add this to the 1 stop shop lol ^

### 2024-12-02 22:00:36 — cornfed

happy holidays

### 2024-12-02 22:02:09 — Dash Retro

Starting stream soon with FF7 related things so I'll do it then

### 2024-12-02 22:02:17 — cornfed

❤️

### 2024-12-02 23:54:01 — IndividualContributor

https://youtu.be/_cAdgBnv7Ms

### 2024-12-02 23:54:38 — IndividualContributor

I've made some changes for NMS tonight but haven't released a patch because I may have missed some queues or borked something, let me know what this looks like.

### 2024-12-02 23:59:08 — IndividualContributor

There is also a scene in Reactor 5 of Cloud falling on the floor and a ringing sound that I've trimmed down

### 2024-12-03 00:03:38 — IndividualContributor

_(no text)_
- file: 2024-12-03_00-02-34.mp4

### 2024-12-03 00:11:12 — IndividualContributor

Some stuff from just watching back the recording there:
- train choo choo noise missing, put it back
- cut to tunnel when Barret jumps out of moving train like a mad lad
- speed up Barret walking in tunnel
- try to speed up Cloud falling on floor in Reactor scene
- Aerith fixing flowers speed it up

### 2024-12-03 13:26:26 — cornfed

wll look at this this afternoon

### 2024-12-03 17:30:22 — fr3akzilla

Congrats on the pb <:zhealThisIsFine:842794110486446110> <@385844703091884033>

### 2024-12-03 20:19:57 — IndividualContributor

<@385844703091884033> are you going to submit your run to the leaderboard? https://docs.google.com/forms/d/e/1FAIpQLSd0GWzCxWHQn-881TKnZPckH87L7CHteM8Fep2hWeGSgHkurQ/viewform

### 2024-12-03 21:26:41 — IndividualContributor

Aerith's church trimmed a bit more
https://youtu.be/JQaSuPUMClw

### 2024-12-03 21:28:52 — IndividualContributor

And as for these:
- train choo choo noise missing, put it back
There is no choo choo, it's earlier when the guard starts animating, so nothing to put back
- cut to tunnel when Barret jumps out of moving train like a mad lad
There is a ton of stuff happening in Clouds script and I don't want to move it to Barrets in case something breaks, not worth the risk for 1 sec save?
- speed up Barret walking in tunnel
Speeding up Barret creates a weird glitch where Tifa just stays there, not sure why
- try to speed up Cloud falling on floor in Reactor scene
Can't speed this up because of loading scenes just takes time
- Aerith fixing flowers speed it up
Did this one

### 2024-12-03 21:46:06 — IndividualContributor

_(no text)_
- file: 2024-12-03_21-45-43.mp4

### 2024-12-03 21:53:29 — IndividualContributor

_(no text)_
- file: 2024-12-03_21-52-53.mp4

### 2024-12-03 22:00:02 — cornfed

k im watchn now , ill type notes in 1 message and post at end

### 2024-12-03 22:12:29 — cornfed

1 box after talking to tifa in 1st car of train still there, b and t can prob just run insde cloud after cloud hits the trigger ther, this one might need some. not sure if you were just mashing in 2nd car start, but i saw 2 boxes there ? lmk what you think bout those, def keep the bum guys box tho, hes tech a skil check i guess haha , but talking to hi pot guy , can be just the box that gives you the item. thoughts on that anyone? PROPS ON THE MENU COLOR SWAG once timer ticks and you run down to proc the scene to jump off 1 box there can go, when im mentioning these boxes, im not smart enough about csr to know if they need to stay in certain circumstances or can be trimmed. train tunnels, cloud tifa run into barret and there is a box, prob could cut that to, plenty of time to see them running to b. , end of train tunnel, can trim box where cloud hits trigger before holding left, than after doing left by the vent, 1 box , than the 2nd is the option 2, anything after that can go. you skipped passed button, for that the first txt should stay and the rest after go, and air b has 1 txt box at the beginning that cou ld go. lmk what you think , or if leaving some of those boxes is needed, cuz like i said idk haha,

### 2024-12-03 22:18:15 — IndividualContributor

> not sure if you were just mashing in 2nd car start, but i saw 2 boxes there 
I was turboing and talked to the guy accidentally

> 1 box after talking to tifa in 1st car of train still there, b and t can prob just run insde cloud after cloud hits the trigger ther, 
This whole scene I've trimmed alot and that last bit with the sirens and them joining is more of a queue to run down + right for hundo that I would use, but we can revisit this if it's annoying during a run to see if we can avoid breaking queues and stuff

Alot of the other changes are either queues or turbo/mashing checks. I'll leave as is for now so far and we can review each one individually to see if it can be trimmed even more after a few runs. 

> you skipped passed button, for that the first txt should stay and the rest after go, 
What button did I skip? 😬

### 2024-12-03 22:18:59 — IndividualContributor

---
From after Air Buster to PG Skip currently
https://youtu.be/reqdmywTzjM

### 2024-12-03 22:19:43 — cornfed

okay ill omit the singular boxese for now til we know more

### 2024-12-03 22:20:52 — IndividualContributor

I'm going to release this as is now in a new patch for testing and I'll start working on Kalm after this right? we'll circle back to these changes when they've been played a bit

### 2024-12-03 22:23:52 — cornfed

church post air b, 1st two txts can go, cloud runs right and the choice box for 2nd option, after this option, can just run up, and get an insta aeris naming, than when you come out of it , you run to reno and back to her. some ppl use the "im sorry" box to know to run to reno, than return to aeris and the scene can play out without txt until  your upstairs in the church, cloud can run to the trigger . the scene can play, and for triggers, cloud does 2 boxes before the 1st set of options, can prob pan til there and skip the soliders and aeris talking

### 2024-12-03 22:25:04 — cornfed

love the aeris spinning video

### 2024-12-03 22:26:28 — cornfed

just watched 2nd churt, i like that alot , until we can decide further, keeping the 2 at the beginning and the im sorry one

### 2024-12-03 22:27:48 — IndividualContributor

## 🎮 Release v0.7.2

Disc 1
- 7th Heaven train to Reactor 5 trimmed
- Reactor 5 tunnels and reactor scene trimmed
- Airbuster trimmed
- Aerith's church trimmed
- Aerith's house trimmed up to Playground Skip

Disc 2
- no changes

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-12-03 22:30:06 — IndividualContributor

Thanks Corn! yes all this is up for review in a bit I'll get through the full NMS and when NMS folk get a chance to play through it and get a feel for it we'll go back and do some more trimmings.

### 2024-12-03 22:30:23 — cornfed

cool just watched the rest, cple boxes we can talk about later, ill send a run of it this week for data and feedback

### 2024-12-03 22:31:02 — cornfed

ill see if i can rope jaydad into testing it LUL

### 2024-12-04 20:42:41 — awesomeWaves

Some updated IGTs for y'all
- file: 02_Choco_ranch_choco_101-114.txt
- file: 03_beachplugs_135-145.txt
- file: 04_nibel_to_rocket_town_143-155.txt

### 2024-12-04 20:43:56 — awesomeWaves

It's almost at a stable point where they shouldn't be moving too much after that point. The only issue is they're don't suit NMS I guess

### 2024-12-04 20:44:10 — awesomeWaves

<@385844703091884033> hopefully they help you out

### 2024-12-05 00:01:15 — PrimitiveDeath

Once you have finished nms it will probably be quite easy to do all bosses right? As for a vast majority it follows the same pathing as nms, just with a few extra bits

### 2024-12-05 00:01:29 — PrimitiveDeath

Or am i massivly mistaken?

### 2024-12-05 05:26:57 — cornfed

gongaga, and the extra stuff like gelnika would need work but yeah most of it for sure

### 2024-12-05 08:24:58 — IndividualContributor

<@201151418579550208> do a run, write some notes on what could be trimmed, and send them in here! I'll be doing All Bosses after NMS.

### 2024-12-05 16:07:41 — awesomeWaves

Updated the midgar-choco 1enc script. removed the duplicate IGTs
- file: 01_midgar_choco_1enc_59-109.txt

### 2024-12-05 16:32:45 — PrimitiveDeath

<@183261151746850816> will you need a specific order of events because mine and johns route is done in a different order

### 2024-12-05 17:27:07 — awesomeWaves

I doubt it will matter, just the specific screens/events

### 2024-12-05 17:56:23 — IndividualContributor

No order needed I can jump around and make edits, testing afterwards does require that a single run be used, i.e. don't use save states from other runs because RAM values may end up being different between OG and CSR because of skipping stuff.

But anything you can think of that might be a bit boring to mash through or FMVs specifically in All Bosses would be super helpful

### 2024-12-05 18:38:47 — Teeejj

does All Bosses pick up Vincent?

### 2024-12-05 18:39:50 — Teeejj

I imagine it would for Mug glitch right?

### 2024-12-05 18:56:33 — petfriendamy

It's necessary for Ruby AFAIK

### 2024-12-05 18:57:17 — petfriendamy

Because Mug glitch + KotR

### 2024-12-05 19:32:23 — Teeejj

pretty much all the dialogue when recruiting Vincent

### 2024-12-05 20:03:59 — PrimitiveDeath

Yeah vincent is got

### 2024-12-05 22:54:07 — Teeejj

butt load of dialogue in Wutai can go too for the Yuffie sidequest

### 2024-12-05 22:54:19 — Teeejj

Rapps is needed for All Bosses

### 2024-12-07 23:17:19 — IndividualContributor

Version #1 of this bit
- file: 2024-12-07_23-14-20.mp4

### 2024-12-07 23:17:45 — IndividualContributor

Version #2 of this bit
- file: 2024-12-07_23-15-54.mp4

### 2024-12-07 23:19:13 — IndividualContributor

Version #1 keeps some of the cutscene before entering the reactor to allow for input buffering (Run + Up + Right) when the reactor field loads. Version #2 just skips from the stairs straight into the reactor. 

I'm curious which do you prefer?

### 2024-12-08 00:52:50 — IndividualContributor

## 🎮 Release v0.7.3

Disc 1
- First half of Kalm trimmed

Disc 2
- no changes

Disc 3
- no changes

https://youtu.be/T0ir8eW9m8M

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-12-08 00:57:14 — IndividualContributor

Things I need to go back and do after reviewing these changes:
- 1 text box entering Kalm add back in
- speed up Sephi walking into Nibelheim
- speed up Cloud and camera guy running up to Sephi
- test photo skip
- bonking Sephi in the reactor? speed him up so no bonking
- speed up scroll to Cloud before looking into Pod
- can't remove text boxes before being asked to save, code is weird

### 2024-12-08 05:51:00 — cornfed

ill run it monday, sorry i kinda forgot hehe

### 2024-12-10 19:05:34 — awesomeWaves

_(no text)_
- file: image.png

### 2024-12-11 15:07:13 — IndividualContributor

No more free timesave now Waves, all the trimming is done <:Kappa:1075235124200886273>

### 2024-12-12 20:31:08 — awesomeWaves

So I noticed something today from having done a full run yesterday.

After the Junon escape once you're back on the Highwind Bridge. You talk to Red then run and talk to the pilot. There's some inconsistency with how Cid moves. It's not the same on CSR and the base game.

### 2024-12-12 20:43:46 — Muttski

cry about it

### 2024-12-12 20:43:48 — Muttski

😐

### 2024-12-12 20:43:58 — Muttski

lmao--what does he do in CSR?

### 2024-12-12 20:44:28 — Teeejj

bro woke up and chose pure violence

### 2024-12-12 20:44:32 — Teeejj

<:KEKW:1074810897308069948>

### 2024-12-12 20:44:45 — Muttski

ah...took a nice, hot shower*

### 2024-12-12 20:44:52 — Teeejj

pics or it didnt happen

### 2024-12-12 20:44:57 — Muttski

that's nothing when it comes to my friendship with waves tbf

### 2024-12-12 20:45:07 — Muttski

you should hear my thoughts when he talks about N64 games

### 2024-12-12 20:45:09 — Muttski

🤢

### 2024-12-12 20:45:11 — Muttski

lmao

### 2024-12-12 20:45:14 — Teeejj

LOL

### 2024-12-12 20:47:38 — awesomeWaves

He's already in position beside the pilot on the Base Game but not in CSR

### 2024-12-12 20:48:08 — awesomeWaves

it's minor, but this is the kind of feedback you want

### 2024-12-12 20:48:08 — awesomeWaves

_(no text)_
- file: Cid-CSR.gif
- file: Cid-Full.gif

### 2024-12-12 20:48:14 — awesomeWaves

You move differently around him otherwise

### 2024-12-12 20:48:25 — Teeejj

oh

### 2024-12-12 20:48:34 — Teeejj

it super minor but yea

### 2024-12-12 20:48:40 — Teeejj

can be annoying on muscle memory

### 2024-12-12 20:48:44 — awesomeWaves

^

### 2024-12-12 20:49:00 — awesomeWaves

on CSR right now, you can kind of just go directly to the pilot

### 2024-12-12 20:49:05 — awesomeWaves

but you normally cannot

### 2024-12-12 20:49:57 — awesomeWaves

just speeding up cid a small % would sort it

### 2024-12-12 20:50:20 — awesomeWaves

it's similar to the old lady in Junon, where she wasn't where you'd expect because there was less text

### 2024-12-12 20:50:39 — Teeejj

the cougar who invites Cloud into her home?

### 2024-12-12 20:52:26 — awesomeWaves

I meant to take more notes today on the CSR as I feel there is more trimming that could be done to knock off maybe another minute across the run. Just small things that add up.

The scene where you meet Rufus on the Shinra HQ for example. No purpose to it. The scene where Cait gives the Keystone to the turks helicopter in the Gold Saucer also.

### 2024-12-12 20:52:39 — awesomeWaves

Those 2 scenes alone, maybe 20s or so saved

### 2024-12-13 00:21:26 — IndividualContributor

Nice! thanks Waves, I've been moving house the last week and won't have my stuff set up until the end of next week probably, sorry about the lack of updates. Keep them coming! Could you put these on the list using the feedback form? Or just manually write into the sheet? I tend to check that first then dig around in here.

### 2024-12-13 13:36:30 — Okamikaze

I did notice it felt weird, wasn't sure if it needed to be changed though. I think it does because talking to Cid an extra time is super punishing, and this changes how you anticipate the following interactions

### 2024-12-14 08:41:07 — IndividualContributor

Anything that feels even remotely weird or strange should be fixed I think so post them in here big or small, or even better use the feedback form https://forms.gle/dW9rMCD9kQ3eBPSM8

### 2024-12-14 11:37:25 — PrimitiveDeath

someone may want to pin that

### 2024-12-14 12:00:53 — IndividualContributor

Summon > <@122501498981711874>

### 2024-12-19 08:27:54 — the broodles

Some awesome work going into this 🎉 ! I think I already know the answer but does oceanfly happen to brick the csr mod at all?

### 2024-12-19 08:47:00 — AceZephyr

_(no text)_

### 2024-12-19 08:47:22 — IndividualContributor

Thanks broodles! ♥️ Oceanfly can be done as normal as far as I understand, I haven't tested it though.

### 2024-12-26 01:56:36 — IndividualContributor

## 🎮 Release v0.7.4

Disc 1
- Added a text box back in after blowing up reactor 1 and meeting Aerith
- (NMS) Fixed bug in Aerith's house for boyfriend skip, choosing option 1 triggers a loop you can't get out of
- Sped up the restaurant scene in Wall Market
- Removed meeting Rufus scene after President Shinra found dead
- Removed scene where Cait gives the Keystone to the turks helicopter in the Gold Saucer
- (NMS) 1 text box entering Kalm added back in

Disc 2
- Fixed issue on Highwind after Junon escape where Cid is not in position quick enough after talking to Red

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-12-26 01:59:53 — IndividualContributor

I'll be picking this back up a little more now, made a few changes as suggested in this thread. 

⭐  Use this form to submit change requests to the CSR and be as description as possible, include a link to a clip if possible, If I can find where to make the changes in the code quickly I can get more done in a session so every little bit of information helps! https://forms.gle/dW9rMCD9kQ3eBPSM8

### 2024-12-26 02:03:11 — IndividualContributor

https://tenor.com/view/one-more-thing-uncle-chan-jackie-chan-jackie-chan-adventure-gif-15700184

### 2024-12-26 02:07:09 — IndividualContributor

I'm using v0.1-7878 of Duckstation to play and test this CSR https://github.com/stenzek/duckstation/releases/tag/v0.1-7878

There seems to be a few glitches and weird stuff being found by people using older versions of Duckstation. I would suggest using this v7878 version to play the CSR so that if anymore issues are found we are all on the same version of Duckstation and it might be easier for me to reproduce and fix.

### 2024-12-26 02:11:30 — IndividualContributor

https://tenor.com/view/jim-carrey-dance-tutu-gif-15953334

### 2024-12-26 02:11:52 — IndividualContributor

I'm also loving all the feedback and playtesting LFG! ❤️

### 2024-12-26 08:54:30 — IndividualContributor

For the NMS runners, is Photo Skip allowed? and is it still possible in this CSR? I'm not familiar with the setup.

### 2024-12-26 11:01:13 — IndividualContributor

I should have a patch update for the second half of NMS Kalm later today.

### 2024-12-26 20:41:56 — IndividualContributor

NMS Kalm visit changes https://youtu.be/P7-NSw9U0es

### 2024-12-26 20:45:35 — awesomeWaves

Yo IC. GG on the changes, I look forward to giving it a spin in the new year.

### 2024-12-26 20:45:45 — awesomeWaves

Just wondering what exactly you changed in the Diner of Wall Market?

### 2024-12-26 20:56:29 — IndividualContributor

When you select the BBQ the guy that cooks it just stays standing where he is instead of walking down, walking up, doing the frying pan, walking up. The waiter guy just takes your money then gives you the food and you start eating, 3 mouthfuls then menu.

### 2024-12-26 20:59:58 — IndividualContributor

_(no text)_
- file: 2024-12-26_20-58-17.mp4

### 2024-12-26 21:00:54 — awesomeWaves

Ah ok, I don't know enough about how that would potentially change the Diner Skip. I don't know anyone who does it on PSX though or how much it's supposed to save. I learned it when I originally learned PC and I've been doing the same movement since. If I trigger the paralysis I go for it still though

### 2024-12-26 21:01:38 — IndividualContributor

I had no idea there was a diner skip, can it still be done given the changes I wonder?

### 2024-12-26 21:02:13 — awesomeWaves

I'll find the Phrayse video I learned it from. I think it might still be okay, even if you do the skip because if I recall most of the time save is distance to the door.

### 2024-12-26 21:03:14 — butterfly

I think it's like a second save. It's just a hard paralysis dodge

### 2024-12-26 21:03:30 — butterfly

Or awkward rather

### 2024-12-26 21:03:50 — awesomeWaves

https://www.youtube.com/watch?v=QWXJ-IhyZbQ&list=PLHxcs0RsY2izd0HJK2UJXwcQkh2RbgzEI&index=3

### 2024-12-26 21:04:55 — awesomeWaves

yeah I figure the time save is the exiting from the kitchen entrance instead of the seat, so I guess it still works either way

### 2024-12-26 21:05:14 — awesomeWaves

as in, you still save time doing the 'skip' in the current CSR changes

### 2024-12-26 21:16:39 — IndividualContributor

Ah ok yeah I think the change is fine then

### 2024-12-26 21:17:46 — IndividualContributor

I have accidentally caused an issue where NOT doing Photo skip is faster 😄 I'm reverting to put the photo scene back in so it can be skipped

### 2024-12-26 21:24:17 — IndividualContributor

_(no text)_
- file: 2024-12-26_21-22-01.mp4

### 2024-12-26 21:24:23 — IndividualContributor

Ok Photo skip is now possible again

### 2024-12-26 21:26:18 — IndividualContributor

_(no text)_
- file: 2024-12-26_21-25-37.mp4

### 2024-12-26 21:26:40 — IndividualContributor

Photo skip (top), talking directly to Sephi (bottom)

### 2024-12-26 21:29:15 — IndividualContributor

## 🎮 Release v0.8.0

Disc 1
- (NMS) Kalm visit done

Disc 2
- no changes

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-12-26 21:34:40 — IndividualContributor

I think the CSR changes cut the NMS Kalm visit from ~19m12s to ~8m30s, so almost 8 minutes trimmed ✂️

### 2024-12-26 21:36:21 — IndividualContributor

Oh Waves I made those changes you suggested a while back in the thread too, skip meeting Rufus and Cait throwing the keystone to the choppa

### 2024-12-26 21:37:59 — awesomeWaves

I spotted that earlier! Thanks

### 2024-12-26 21:38:49 — IndividualContributor

We still need to trim a bit more to get you sub 4 though <:Kappa:1075235124200886273>

### 2024-12-26 22:34:44 — awesomeWaves

I think you'd have to cut out a disc for me to get sub 4 man

### 2024-12-26 23:35:26 — Katombaz

hey ic , ill post some of the issues i had doing nms csr

### 2024-12-26 23:35:28 — Katombaz

https://www.twitch.tv/katombaz/clip/InnocentRespectfulCurlewCclamChamp-0gfbF4by55xzTxPu

### 2024-12-26 23:35:40 — Katombaz

at this point Aeris dissappeared

### 2024-12-26 23:36:00 — Katombaz

https://www.twitch.tv/katombaz/clip/AdorableIronicFerretAliens-mZVrPrDYzakW7a6Z

### 2024-12-26 23:36:17 — Katombaz

This happened stright after mighty guards upon entering the elevator (a soft reset didnt fix it, a hard reset did)

### 2024-12-26 23:36:40 — Katombaz

*When going to aeris house the first time if u select the first option the game softlocks (selecting the 2nd option is fine)

### 2024-12-26 23:37:10 — Katombaz

*i also had the weird big barret cloud after Reno fight

### 2024-12-26 23:38:44 — Katombaz

*Also after every battle as the screen changes to the item art the audio glitched (like slowed for a split second)

### 2024-12-26 23:39:22 — Katombaz

*Also had just weird softlocks after some battles, After one of the icicals and also one after the pincer soldier fight before carry armor

### 2024-12-26 23:39:27 — Katombaz

_(no text)_
- file: image.png

### 2024-12-26 23:39:32 — Katombaz

Thats the version of DS i was using

### 2024-12-26 23:41:51 — Katombaz

If u wana know anything else mate just let me know

### 2024-12-27 08:57:35 — IndividualContributor

Thanks Kato! Those are some weird glitches. I'm going to download that version of Duckstation later and see if I can reproduce them. 

I did fix the Aerith's house issue in the latest patch, that was a bug I introduced with the CSR changes.

Do you use any specific settings in Duckstation that are not default?

If you want a more stable experience playing the CSR can you try Duckstation version 7878? I'm using that for play testing and haven't seen any glitches at all, using default settings except for the load speed ones.

### 2024-12-27 09:55:36 — IndividualContributor

https://youtu.be/eePr_0fc3N8

### 2024-12-27 09:58:22 — IndividualContributor

I've tried to reproduce that big Barret and Cloud on Reno's tower glitch using Duckstation v0.1-7928 using the CSR but I can't. I've shown the settings I used which are mostly default
- file: image.png
- file: image.png

### 2024-12-27 10:06:10 — IndividualContributor

Also burning the  CSR to disc and playing on console hardware does not have any glitches. 

There is another weird glitch that Phek is seeing with a patched Disc 2, in Rocket Town the escape pod cutscene is still playing even though the CSR skips it. I can't reproduce that one either. This suggests that the issue may be related to Duckstation version + PC specs.

<@934998544971079710> <@385844703091884033> <@266664783502245888> can you share some of your PC specs like OS, RAM installed, Graphics Card, etc? Mine look like this, I'm on Windows 10
- file: image.png
- file: image.png

### 2024-12-27 13:11:49 — IndividualContributor

<@544242471496974347> mentioned to me that for FF9 CSR two different patches need to be created, for Greatest Hits and Black Label. 

If you guys seeing glitches could share the specific version of FF7 you are using that might also help to find and fix these.

### 2024-12-27 18:14:18 — IndividualContributor

About the "big Barret model after Reno fight" glitch that a couple of runners have seen while playing the CSR, I'm trying to reproduce the glitch using fresh rips of my Greatest Hits and Black Label discs patched with the latest CSR (v0.8.0) on Duckstation v0.1-7878. 

So far Greatest Hits works as expected, no glitching. I'm testing the Black Label rip now.

### 2024-12-27 18:25:55 — IndividualContributor

New rip of Black Label discs patched and it's working as expected. So I still can't reproduce the big model glitch after Reno with either GH or BL discs

### 2024-12-27 18:26:59 — Katombaz

<@183261151746850816> where can i find the lastest patchs , ill give them a test?

### 2024-12-27 18:27:00 — IndividualContributor

https://tenor.com/view/gorilla-side-eye-gorilla-side-eye-bell-pepper-gorilla-eating-side-eye-gif-14494718117786928974

### 2024-12-27 18:28:07 — IndividualContributor

Ducktation v0.1-7878 https://github.com/stenzek/duckstation/releases/tag/v0.1-7878
FF7 CSR patches https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-12-27 18:28:33 — IndividualContributor

<@934998544971079710> the latest patch is v0.8.0 in the repo

### 2024-12-27 18:28:48 — Katombaz

thx mate i get them now

### 2024-12-27 18:29:56 — IndividualContributor

Are you going to try using Duckstation v0.1-7878? because I think it might be DS

### 2024-12-27 18:31:48 — Katombaz

im guna test actaull PSX

### 2024-12-27 18:32:19 — Katombaz

but ill probly try the version of DS ive got atm and see how it goes ,as i dont wana have to have 2 different installs of DS for 7 and 9

### 2024-12-27 18:32:52 — IndividualContributor

Oh nice! did you use Mechapwn to softmod your PS2?

### 2024-12-27 18:33:32 — Katombaz

yeah , i got a spare ps2 ive soft modded

### 2024-12-27 18:36:46 — IndividualContributor

You shouldn't have any issues then, hopefully <:KEKW:1074810897308069948>

### 2024-12-27 18:38:26 — IndividualContributor

Just FYI, you probably already know, patch original .bin files with the new patch, because patching an already patched .bin will not work. And the burn setup I use is ImgBurn on x16 write speed

### 2024-12-28 01:09:16 — phek1200

So yeah even with the 7878 version I still couldn't skip the Disc 2 rocket town scene, seems like PC might be the issue here. I'll post my PC spec here in a while

### 2024-12-28 08:24:09 — IndividualContributor

Thanks Phek, yes please do send me your PC specs and I'll dig around in the Duckstation stuff to see if it behaves differently between our setups.

### 2024-12-28 08:38:30 — IndividualContributor

Phek can you zip up your Duckstation settings folder and send it to me?

### 2024-12-28 09:14:39 — phek1200

will DM you

### 2024-12-28 09:17:18 — phek1200

_(no text)_
- file: image.png

### 2024-12-28 09:17:42 — phek1200

_(no text)_
- file: image.png

### 2024-12-28 09:18:11 — phek1200

_(no text)_
- file: image.png

### 2024-12-28 09:19:08 — phek1200

also about which version my ff7 is, how do i find it out? i download the ROM from website which is ff7 usa version....

### 2024-12-28 09:21:51 — IndividualContributor

I'm not sure if it's possible to find out from a .bin file which version was used for the rip, no worries I ripped a few .bins from my GH and BL discs yesterday for testing.

### 2024-12-28 09:29:41 — phek1200

https://coolrom.com.au/roms/psx/

### 2024-12-28 09:29:53 — phek1200

here's the website i got it from i believe. any many other ps1 games i played casually

### 2024-12-28 09:42:02 — phek1200

also we need faster MK -> Rocket town IGT <:Kappa:1075235124200886273> i hit a late (1:41:4x) MK today, IGT not in range and got pincered

### 2024-12-28 09:43:05 — phek1200

i guess a 1:40:00 or 1:39:00 onwards should be future proof (for no slots) assuming no more major trimming before MK

### 2024-12-28 09:43:35 — phek1200

<@248225699909861376>  😁

### 2024-12-28 09:50:42 — awesomeWaves

Must have been a nice run at that pace. I'll make those IGTs when I get a chance later

### 2024-12-28 09:56:09 — phek1200

no rush at all, thanks and appreciate it

### 2024-12-28 10:10:46 — IndividualContributor

Ok making some progress on the weird graphics glitches, MuscleBelt has been testing and figured out that it's an NMS specific thing. Not doing Guard skip will cause the issue, meaning I borked something between Guard skip and Wall Market (where routes sync up). This might also highlight some other weird issues on the NMS side of things, and at least rules out PC specs and Duckstation being the root cause. Progress!
- file: image.png

### 2024-12-28 10:11:04 — IndividualContributor

https://tenor.com/view/steve-harvey-happy-excited-clap-applause-gif-16690392677197548515

### 2024-12-28 16:36:48 — IndividualContributor

🐛 Another bug Kato found in Wall Market dress shop first visit, A gets stuck leaving C's pocket to talk to the Dress shop lady

### 2024-12-28 17:18:20 — awesomeWaves

That hasn't been changed in ages I thought? I never had any issues there

### 2024-12-28 17:18:29 — awesomeWaves

is there a clip of it?

### 2024-12-28 17:28:08 — IndividualContributor

No clip, and yeah no changes in ages. Kato is running v0.8.0 I think, and it only happened on the second attempt, his first run through was fine no glitch

### 2024-12-28 17:28:36 — IndividualContributor

It seems to happen randomly which is a pain to reproduce

### 2024-12-28 20:25:17 — IndividualContributor

https://tenor.com/view/sigh-of-relief-omg-hard-case-oh-my-god-sarcastic-smile-gif-23094385

### 2024-12-28 20:25:34 — IndividualContributor

I fixed the weird model glitchyness after the Reno fight on the tower. Well I think I did, it's fixed on my machine <:KEKW:1074810897308069948>

### 2024-12-28 20:27:19 — IndividualContributor

Setting "Camera Movie" to 0 did the trick. I think this sets the camera depth or something so that "movies" will play in front of the field and models. The issue seemed to be that the movie of the pillar collapsing was playing in front of the field but behind the models, so you end up seeing the models while the movie is playing.
- file: image.png

### 2024-12-28 20:29:51 — IndividualContributor

I suspect it was related to the Air Buster fight, but haven't confirmed. When you fight Air Buster in NMS there is a scene afterwards of the bridge exploding and Cloud grabbing onto the edge, before he falls into Aerith's church. The explosion here plays behind the models and I think this is where the camera is being set to 1 (play movies behind models). So when you do Guard Skip this isn't set and the camera movie value is 0 (play movies in front of the models)

### 2024-12-28 20:31:08 — IndividualContributor

There is another glitch like this in Nibelheim when Sephi burns it down, and this is also likely the cause.

### 2024-12-28 20:31:49 — IndividualContributor

I'll be looking into the Rocket town FMV glitch after I fix these, and one other bug where Aerith gets stuck in the Dress shop.

### 2024-12-28 20:37:15 — IndividualContributor

I'm able to reproduce the Aerith getting stuck glitch, you need to be either walking up and turboing to talk to the Dress shop lady, or be running up but talk to her on a specific frame it seems. So when runners are buffering Up + Turbo it might only happen randomly depending on the frame they talk to her on 🤦‍♂️

### 2024-12-28 20:37:57 — IndividualContributor

_(no text)_
- file: 2024-12-28_20-37-25.mp4

### 2024-12-28 20:40:25 — IndividualContributor

Also happens with walking Up + Right while turboing
- file: 2024-12-28_20-39-42.mp4

### 2024-12-29 10:55:39 — IndividualContributor

I've fixed all of the above issues and am working on Cosmo Canyon trims right now, some tricky bits in here that will need testing but so far so good.

### 2024-12-29 13:46:27 — IndividualContributor

CC edits done for CSR, will share a recording soon, first one had no sound 😑

### 2024-12-29 23:30:48 — IndividualContributor

https://youtu.be/tJTMsq2Q-b0

### 2024-12-29 23:51:55 — IndividualContributor

_(no text)_
- file: 2024-12-29_23-48-30.mp4

### 2024-12-29 23:53:20 — IndividualContributor

I've trimmed Bugen out completely in this scene because it was too awkward to keep him in and have the animations be correct, e.g. he walks in, says something, then leaves again. This was being interrupted because all the dialogue was cut and so he would just stay standing there. Sorry Boog

### 2024-12-30 00:17:16 — IndividualContributor

## 🎮 Release v0.9.0

Disc 1
- Fixed model glitches after Reno fight on the tower
- Fixed bug with Aerith getting stuck in Dress shop
- Fixed graphics glitch after Mighty Grunts when Cloud leaves elevators
- (NMS) Cosmo Canyon trimmed ⭐ 

Disc 2
- Trimmed before J-Death fight
- Fixed issue with Rocket Town escape pod FMVs and cutscene playing

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2024-12-30 00:20:45 — IndividualContributor

I'll be finishing off the rest of the NMS stuff next, I'm using your notes here Corn https://discord.com/channels/936291902133796955/1307919162534006854/1312873906377457738 if there is anything not covered let me know so I can make the changes.

### 2024-12-30 15:51:13 — IndividualContributor

Run killer bug reported by Phek where Disc 2 won't load on disc swap, I'm going to look at it later tonight and release a fix hopefully. Hold off burning this new version to disc.

Workaround is to put in original disc 2 to load then swap in CSR disc 2 to continue

### 2024-12-30 18:10:43 — Doumeis

will wait for the fix and try a NMS run🫡

### 2024-12-30 21:51:49 — IndividualContributor

<@246736771067543552> It might be very useful if you could do a run on v0.9.0 with the expectation that Disc 2 might not load and do the workaround if it happens. I'm doing a run myself of no slots now to try and reproduce but it's difficult to rule anything out with a single data point. No worries if you'd rather wait, the workaround shouldn't take any time at all, and you can swap in Disc 2 of the CSR immediately once it loads correctly on the disc swap.

### 2024-12-31 00:11:31 — IndividualContributor

I've just run from start to disc 2 and found no issues in the latest release v0.9.0. I'm using Duckstation v0.1-7878. <@385844703091884033> were you using the same version of Duckstation when you saw the issue? and you were running no slots right?

### 2024-12-31 00:15:01 — Doumeis

Sure, I could try a run on 0.9.0 no problem

### 2024-12-31 00:16:12 — Doumeis

but I'll only be available on the weekend, I'll be on a trip for a few days

### 2024-12-31 00:16:56 — Doumeis

maybe I can bring a notebook and sneak a test run during the night <:KEKW:1074810897308069948>

### 2024-12-31 00:18:10 — IndividualContributor

Who needs sleep, testing the CSR is more important for sure <:KEKW:1074810897308069948>

### 2024-12-31 00:20:06 — IndividualContributor

I'll burn discs tomorrow and try to get a run to disc 2 done to test console hardware.

### 2024-12-31 02:08:19 — phek1200

i am actually not using the 7878 version, i tested and made a run the other day and at 1 point the emulator just stops / hangs randomly (with the music continue playing). this happened twice actually. has anyone faced this issue ? 🤔

### 2024-12-31 02:12:42 — phek1200

I deleted the vod so can't show any clips on that...

### 2024-12-31 02:20:05 — phek1200

also DM-ed you on the simulation of this where i believe the issue is on the 0.9.0 patch for d2, not d1

### 2024-12-31 08:04:16 — IndividualContributor

This is interesting, I've only used 7878 for testing and never had any issues. But I don't do full runs to test each change so I'm likely missing these issues that you see when doing a full run. However, I do sometimes get a black screen with music playing usually after battles but only when I'm fast forwarding through stuff when testing. I just reload the save state and not fast forward that bit and it works every time. It seems DS does have some unique issues that are not present on console, which I guess is to be expected.

### 2024-12-31 09:50:40 — phek1200

i think that is exactly the issue i got, post battle song continues to play but screen is dark. there's another spot where DS just hangs there and music continues to play, but i forgot where cause i just close it and shift delete the whole folder <:Kappa:1075235124200886273>

### 2024-12-31 19:19:11 — IndividualContributor

Stuff like this I'm pretty sure is just Duckstation and not related to CSR changes. It's difficult to know if glitches are CSR or Duckstation so I think the gold standard should be 100% based on PSX console hardware and Duckstation be used as an alternative with the expectation that your run is at risk if you use Duckstation. Very frustrating and I will of course investigate all issues and glitches runners find to determine if it's the CSR or Duckstation, just keep in mind Duckstation is a not very stable it seems.
- file: 2024-12-31_19-15-51.mp4

### 2024-12-31 19:19:28 — IndividualContributor

https://tenor.com/view/where-is-my-free-coffee-gif-25537785

### 2024-12-31 19:24:03 — IndividualContributor

Unless someone else also is having trouble on the latest patch with snowboarding... then it's just something I borked.

### 2024-12-31 21:09:22 — IndividualContributor

Found the issue, I'm using Cheat Engine to set the enemy hp to 1 so I can test through the game easily. If you freeze that memory address and go into snowboarding Duckstation graphics crash. If you unfreeze it and go into snowboarding Duckstation is fine.

#protip runners, don't use Cheat Engine with Duckstation when you're running, it might crash <:Kappa:1075235124200886273>
- file: 2024-12-31_21-07-11.mp4

### 2025-01-04 14:14:32 — IndividualContributor

Update on the latest patch. It's stable for me start to finish, but not for Phek. We've both tested on different Duckstation versions and in each case Phek can reproduce and I can't. So if anyone gets a chance to do a run and verify that v0.9.0 is either stable or broken that would great. The latest changes include Cosmo Canyon trims that are not visited during any%, but in NMS they are. Phek is running any%, but verifying either/both routes would be super useful. 

I don't want to continue making additional changes until I'm certain v0.9.0, the latest version, is stable for Duckstation and PSX.

i.e. 📢  requesting more runners to run any route on the latest patch v0.9.0 using Duckstation or PSX to verify that it is working as expected.

### 2025-01-05 04:04:58 — Katombaz

i burning some .9 disks now ill try a run sometime in the next few days

### 2025-01-05 10:01:34 — IndividualContributor

Nice thanks Kato, I've also burned v0.9.0 discs and will test them out this week too. 

I'll also be testing Duckstation 7878 for v0.9.0 because the issue Phek is having is specifically the disc 1 to disc 2 swap loading. 

Based on the console logs from his Duckstation there is a read error, that I'm not getting when I do a run and can't reproduce using his save states. So the next test for emulator is to run disc 1 v0.8.0 and then swap to disc 2 v0.9.0. This will tell us which disc the issue is on. If it loads correctly then the issue is with disc 1 v0.9.0. If it does not load then the issue is with disc 2 v0.9.0.

### 2025-01-05 20:06:41 — IndividualContributor

<@934998544971079710> v0.9.0 fails to load on disc 2 swap for PSX, I've just encountered it. + <@385844703091884033> ok so it's not just your emulator or PC setup now. 

I'm going to test a run of disc 1 v0.8.0 into a disc 2 swap of v0.9.0 to figure out which disc is the problem. If anyone else has tried this test already let me know.

### 2025-01-05 20:20:20 — IndividualContributor

Ok I'm pretty sure it's disc 2 that is the problem. I can't load the save from the disc swap screen when using disc 2 v0.9.0 but I can load the save if I use disc 2 v0.7.3 (is equivalent to v0.8.0 because no changes to this disc in v0.8.0)

I'm going to release a patch that reverts disc 2 changes, and figure out a way to make thos Rocket Town changes <@385844703091884033>

### 2025-01-05 20:23:22 — IndividualContributor

## 🎮 Release v0.9.1

Disc 1
- no changes

Disc 2
- (Revert) Trimmed before J-Death fight
- (Revert) Fixed issue with Rocket Town escape pod FMVs and cutscene playing

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2025-01-05 20:24:17 — IndividualContributor

I'll release each of the reverted changes separately, starting with the "Trimmed before J-Death fight" which are very minor.

### 2025-01-05 20:25:19 — IndividualContributor

<@934998544971079710> if I'm correct, you only need to burn a new disc 2 using the latest v0.9.1 patch, your disc 1 and 3 of v0.9.0 are fine.

### 2025-01-05 22:18:28 — IndividualContributor

## 🎮 Release v0.9.2

Disc 1
- no changes

Disc 2
- Fixed issue with Rocket Town escape pod FMVs and cutscene playing

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2025-01-05 22:20:22 — IndividualContributor

This release fixes the Rocket Town issue you were having <@385844703091884033> and I've tested it with the disc 1 -> disc 2 swap save from the run I did earlier on PSX, and all is working as expected 🎉 

I'm hoping this release is now stable, i.e. disc 1 to disc 2 swap should work as expected and the Rocket Town FMVs and cutscenes on disc 2 should not play.

Let me know if you find any issues with this latest release.

### 2025-01-05 22:21:57 — IndividualContributor

Also just to highlight, the edits for "Trimmed before J-Death fight" are still reverted, they were very minor so I might do them in a later release again.

### 2025-01-05 22:22:17 — IndividualContributor

https://tenor.com/view/nerd-alert-gif-19367699

### 2025-01-05 22:25:09 — IndividualContributor

So the root cause of this issue, I think, was a corrupt base Disc 2. When I re-patched my "Original Disc 2" and tried to edit it in Makou Reactor I was getting an "Invalid archive error." The edits were very trivial, moving scripts around in the field, and majority of the edits I tried resulted in this error. So I fetched a known working "Original Disc 2" from my server and patched that one. Then opened it up in Makou Reactor and could edit as normal, no "Invalid archive error." when I tried to save.

Duckstation was somehow able to error correct resulting in Phek being able to reproduce the issue but I could not. I don't know what I missed trying to align our setups for testing but I suspect the error correction capability is PC spec related, not confirmed.

### 2025-01-05 22:26:40 — IndividualContributor

<@934998544971079710> burn disc 2 with the latest v0.9.2 patch applied.

### 2025-01-06 01:03:59 — phek1200

Gonna test it later today, thanks for the hard work and appreciate it

### 2025-01-06 02:11:47 — Katombaz

hey mate , yep i shall , i just patched with new patch

### 2025-01-07 03:39:23 — Katombaz

<@183261151746850816> just ran to DW on psx , not a single issue.

### 2025-01-07 07:39:25 — IndividualContributor

Nice thanks Kato! And the Rocket Town FMVs didn't play? That was an issue Phek was having

### 2025-01-07 08:44:00 — awesomeWaves

Yo <@183261151746850816> I'll be able to give the latest version a run today also. It won't be NMS but it should help hopefully.

### 2025-01-07 08:45:38 — awesomeWaves

I don't see any changes to Disc 3 since I last ran (0.7.2) so I'll just burn new 0.9.2 Disc 1 and Disc 2

### 2025-01-07 15:30:22 — IndividualContributor

Thanks Waves, yes no changes to disc 3. Hope you had a good break and happy new year!

### 2025-01-08 07:58:49 — IndividualContributor

## 🎮 Release v0.9.3

Disc 1
- Sped up Don Corneo's a bit more
- Removed old woman walking really slowly in the Junon house after Bottomswell
- Added back in 1 text box entering Rocket Town for the first time

Disc 2
- Sped up before Jenova Death fight

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2025-01-08 07:59:11 — IndividualContributor

Some minor changes in this one but wanted to push it out before starting on the Midgar Raid stuff for NMS

### 2025-01-08 08:54:00 — IndividualContributor

## 🎮 Release v0.10.0

Disc 1
- no changes

Disc 2
- (NMS) Midgar Raid trimmed

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2025-01-08 08:55:32 — IndividualContributor

Midgar Raid trimmed alot, the FMV of the crew jumping off the Highwind and the parachuting down has to stay in there because there is movement during the video that plays, I can't remove it unfortunately.

### 2025-01-08 14:43:23 — awesomeWaves

I'm a day behind with the version but I finished a run on 0.9.2 earlier with zero issues.

### 2025-01-08 14:43:51 — awesomeWaves

Thanks for all the work. If there's a new version due today I'll burn that and run it tomorrow also

### 2025-01-08 15:14:21 — IndividualContributor

Nice glad to hear there were no issues! v0.10.0 is the latest with mostly NMS stuff but there are some other minor trims for no slots.

I've nothing explicitly planned for the next release so I'm open to suggestions, waiting for NMS feedback before continuing there.

### 2025-01-08 15:17:17 — awesomeWaves

I probably have some feedback but I have not been taking notes on anything for a while now. I'll try and keep a notepad open tomorrow if I do a run and note stuff down. It will be minor stuff I'm sure.

### 2025-01-08 15:18:12 — awesomeWaves

it might be nice to get some other noSlots runners to give it a whirl now that it's basically finished for that route now

### 2025-01-08 15:20:35 — awesomeWaves

3 things off the top of my head though,
* Maybe remove some of the text outside the Honey Bee Inn again. When it was removed it felt odd, but since then other text has similarly been removed so it's actually probably ok to cut down the text there.
* The door in Shinra HQ when you follow Hojo up from the meeting doesn't make a noise. I think I mentioned that when you were in stream before, but I recalled it today.
* After Red Dragon I think the text before you interact with the black materia can be reduced. The easier queue is Aerith shakes her head -> 2 text boxes -> "Leave it"

### 2025-01-08 18:07:09 — IndividualContributor

I was thinking about the Honey bee inn today too, I'll make a few changes and see how it feels.

Yes the door needs fixing good shout.

I left in all the black materia stuff because it's kind of a meme in the run, but it can be trimmed.

### 2025-01-10 06:32:45 — phek1200

Thanks to IC + everyone's contribution, presenting to you the first sub4 No Slots on CSR (emulator)
CSR v0.10.0 all good ✅ 
this run had 2 mins lost on Palmer for no poison stick <:Sadge:1074826312767778950> and 1min on Aqualung recovery
skipped Omniswag for the sake of sub 4, we'll do it again on the next pb
- file: image.png

### 2025-01-10 08:38:08 — IndividualContributor

Awesome Phek! This is very cool I'm looking forward to grinding this myself and having a sub 4 verified is super exciting.

### 2025-01-10 08:55:17 — IndividualContributor

Look at that time save between Rude and Diamond!

### 2025-01-10 08:55:54 — IndividualContributor

https://tenor.com/view/raquita-dave-chappelle-tyrone-biggums-itchy-scratch-gif-12224918

### 2025-01-10 10:51:03 — phek1200

The long awaited RT cutscene to be removed <:KEKW:1074810897308069948>

### 2025-01-10 11:00:20 — phek1200

Anyway I have 1 feedback: disc 2 post Lifestream, entering and exiting those elevators and doors going into UWR, those sound effects of button press and elevator moving are not there.
This has been here all these while on emulator at least, but it's a minor issue

### 2025-01-10 11:08:29 — awesomeWaves

GG phek! Great time

### 2025-01-10 18:59:08 — Katombaz

<@183261151746850816> just ran nms to the end, only bug was a music bug after jumping out the the highwind into return to midgar the music keeps playing which in turn dosnt play the correct music or battle music it gets to turks and the music stops till hojo

### 2025-01-10 18:59:23 — Katombaz

other then that no issues what so ever.

### 2025-01-10 18:59:28 — Katombaz

everything went great

### 2025-01-11 08:21:01 — IndividualContributor

Nice thanks Kato! I'll look into those issues ASAP, they are likely caused by me skipping over some volume settings in the code.

### 2025-01-11 18:32:45 — IndividualContributor

#todo test the CSR on RetroArch

### 2025-01-14 17:35:11 — Okamikaze

Did the 1:39+ IGT's end up being generated for Nibel to Rocket town?

### 2025-01-14 19:06:52 — Okamikaze

I'm sure they have been but I'll just put them here for now

### 2025-01-14 19:06:59 — Okamikaze

_(no text)_
- file: 04_nibel_to_rocket_town_139-155.txt

### 2025-01-15 01:54:53 — phek1200

not yet, but now we do, thanks Okami

### 2025-01-15 19:30:21 — Jayrod

Is it true that the nms changes are done?

### 2025-01-15 19:32:18 — Jayrod

I may be a version or two behind on my practice pc I think all the reactor 5 has been trimmed but the church dialogue and aeriths house are still in

### 2025-01-15 19:33:09 — awesomeWaves

The latest version had trimmed all the way up through Raid on Midgar. Along with all the Any% stuff trimmed, it should be pretty much complete as far as I know

### 2025-01-15 19:33:30 — awesomeWaves

Aeriths House isn't going to be trimmed, as it's for elevator manip

### 2025-01-15 19:33:54 — awesomeWaves

it's to maintain the time difference for stairs/elevator, as per any%

### 2025-01-15 19:34:09 — Jayrod

I mean the first time you go there in nms/Hundo only

### 2025-01-15 19:34:20 — awesomeWaves

oh sorry, I think that has been done

### 2025-01-15 19:34:45 — awesomeWaves

You can skim the changelog here: https://github.com/individualcontributordev/Final-Fantasy-7-CSR/blob/main/CHANGELOG.md

### 2025-01-15 19:35:20 — awesomeWaves

looks like those edits were done on version 0.7.2
- file: image.png

### 2025-01-15 19:44:52 — Jayrod

Ok I looked through it, my version must be old haha I’ll fix it tonight

### 2025-01-15 21:30:07 — IndividualContributor

If you have any suggestions after you play through let me know in this channel, big or small. I'm trying to catch all the skill checks and anything that feels "odd" with muscle memory and stuff.

### 2025-01-15 21:42:48 — Jayrod

Will do!

### 2025-01-16 00:22:18 — Jayrod

ok confirmed that i was using an old version, R5 feels good, church is okay except for the last screen when you run on the beams to leave

### 2025-01-16 00:23:03 — Jayrod

something feels off about the timing or something there, not sure what it is

### 2025-01-16 00:24:12 — Jayrod

i only bring it up because if you don't time it correctly cloud kind of gets stuck and you have to run backwards a bit to trigger the loading zone

### 2025-01-16 00:25:09 — Jayrod

other than that, midgar feels good

### 2025-01-16 04:40:48 — phek1200

there is also a minor 1 upon entering Nibel. this is exactly like the grandma situation at corel where she moved slow
u would have longer textboxes without CSR when entering nibel, by the time you can move you should be able to run through the yellow line here because the black caped person would've moved to the right

however the challenge is, this is assuming you dont pick up the elixir in the item shop (i didnt for this screenshot below)
if you do pick up the elixir, the position will reset and you will need run around the right side instead
so, not sure how to fix this.. 🤔
- file: image.png

### 2025-01-16 07:30:53 — IndividualContributor

Thanks Jayrod I'll take a look at this. I'm trying to remember if I made any trims on that field, I have encountered that "glitch" before on the original where I had to wiggle Cloud to trigger him to jump out the hole in the roof.

### 2025-01-16 07:36:30 — IndividualContributor

Thanks Phek, I can likely reposition the cape guy to compensate for the text box trims. The elixir strat is tricky though as you said. Maybe I can check what the previous field Id was and conditionally change the cape guys position.

### 2025-01-16 11:29:42 — Jayrod

Another thing basically identical to the church one: in Kalm flashback the scene where the reactor pans in and you have to move a tiny bit to get on the stairs. The issue (for me) is basically the same. The screen loads in faster and changes the timing of that little movement.

### 2025-01-16 11:30:20 — Jayrod

Also the Turks conversation in the mines could be shortened if possible.

### 2025-01-16 11:49:47 — IndividualContributor

Nice thank you! Yeah the Turks convo is something I missed I'll do that no problem. 

And that stairs at the reactor is a tricky one, I'll review it and see if I can maybe put some of the scene prior to it back in.

### 2025-01-16 13:36:44 — Jayrod

It’s wierd how you get accustomed to certain loads and things haha, if it can’t be fixed it’s not a big deal.

### 2025-01-17 05:05:54 — cornfed

i got the new csr downloaded, hopefully i dont have emu issues

### 2025-01-17 05:11:52 — phek1200

Back to back, and this time honoring the Omniswag!
- file: image.png

### 2025-01-17 05:12:08 — cornfed

ggs mate

### 2025-01-17 09:19:16 — IndividualContributor

Nice Phek! GG! I get giddy when I see this because my road to sub 4 is going to keep me occupied for years <:KEKW:1074810897308069948>

### 2025-01-17 09:23:55 — IndividualContributor

https://discord.com/channels/936291902133796955/944289296066691182/1329642356743340184

CSR is working on RetroArch 🥳 thanks Jayrod!

### 2025-01-17 19:35:16 — cornfed

llocked at trains sadge

### 2025-01-17 19:49:18 — awesomeWaves

can you clip it corn. I've never had any issues there running NoSlots. Perhaps it's something else from the NMS sections which causes the issue here

### 2025-01-17 19:52:55 — Jayrod

Could just be a duckstation thing too

### 2025-01-17 19:53:24 — Jayrod

I’ve seen weird stuff happen around that part even on console too

### 2025-01-17 22:21:15 — IndividualContributor

You were running NMS on Duckstation Corn?

### 2025-01-17 22:21:31 — awesomeWaves

he was

### 2025-01-17 22:21:41 — awesomeWaves

I asked while he was live

### 2025-01-17 22:21:53 — awesomeWaves

2x speed or whatever new settings

### 2025-01-20 17:38:01 — MuscleBelt

I changed TMD's .asl to start on hitting New Game, and changed it to work with emu-help-v2 (I think).  Everything else is TMD's work still.
Only tested the auto start and GS split (on Duckstation), but with emu-help-v2 I believe it should work with other emulators too, and someone else (Elliot?) edited in a pause for the CSR break.
- file: Emu-help-v2_Final_Fantasy_7_Autosplitter_emulator-v1.asl

### 2025-01-23 11:28:57 — IndividualContributor

I should have some time to work on this CSR tomorrow, if you want something prioritized put it in the sheet pinned to this channel using the form. I'll be scrolling through here anyway to collect the recent stuff.

### 2025-01-26 01:25:07 — phek1200

I thought about this the other day, why not just de-CSR this part 🤔 it isn't really a long cutscene tbh, less than 10s for sure. Solves the problem without a doubt

### 2025-01-26 08:35:33 — IndividualContributor

You're right that would be easier too than adding code to compensate, I'll try both and share here

### 2025-01-27 20:53:30 — Doumeis

Gonna to a full NMS test run 🫡

### 2025-01-27 20:53:42 — Doumeis

and report back here after

### 2025-01-28 03:00:27 — Doumeis

I messed up doing a savestate with a wrong stinger skip setup <:KEKW:1074810897308069948> will try again tomorrow

### 2025-01-28 03:00:41 — Doumeis

but I have a few things to suggest cutting out already

### 2025-01-28 09:21:17 — IndividualContributor

Nice thanks Doumeis!

### 2025-01-28 09:21:48 — IndividualContributor

I'll be trying to carve out some time this week to tackle as much as possible

### 2025-01-30 11:39:36 — Jayrod

<@183261151746850816> I’ve finished making NMS save states on retroarch. 

1) I had the same music glitch as kato described after the parachute scene in midgar. 

2) Turks cutscene in Mythril mines needs trimming. 

3) The return to midgar can be trimmed down more, specifically the dialogue before Turks and Proud Clod. 

Other than that, I can’t think of anything major.

### 2025-01-30 11:41:16 — IndividualContributor

Thanks Jayrod I appreciate it. I'm going to work on it today and will hopefully have a new release later.

### 2025-01-30 13:16:01 — IndividualContributor

I'm trying to reproduce this but I can hear all the sound effects for buttons and elevator moving. Can you send me a clip? or is this still an issue?

### 2025-01-30 13:22:33 — IndividualContributor

_(no text)_
- file: 2025-01-30_13-20-06.mp4

### 2025-01-30 13:36:28 — IndividualContributor

I'll run through the lifestream section into UWR and test

### 2025-01-30 13:47:21 — IndividualContributor

Ah ok I have it now, I'm able to reproduce if I play through the lifestream, so I borked some audio settings in there that I need to fix at the end of the lifestream section

### 2025-01-30 16:45:43 — IndividualContributor

_(no text)_
- file: 2025-01-30_16-43-46_-_Trim_2.mp4
- file: 2025-01-30_16-43-46_-_Trim_1.mp4

### 2025-01-30 16:46:44 — IndividualContributor

Phek I've increased the cloaked guys speed only slightly and left in the trims, so now you can run along the optimal path, and if getting the elixir strat you still bonk him, I think this might work for both strats?

### 2025-01-30 17:21:58 — IndividualContributor

There are two options here, looking at the code neither saves any time it seems, so I'm assuming you just mash through right?
- file: image.png

### 2025-01-30 17:22:26 — Jayrod

Yes just mash

### 2025-01-30 17:23:17 — awesomeWaves

I've got some recommendations again from having done a few runs lately. All related to NoSlots so they'll overlap with the NMS sections.

### 2025-01-30 17:23:24 — awesomeWaves

I'll add them to the sheet

### 2025-01-30 18:21:07 — IndividualContributor

## 🎮 Release v0.11.0

Disc 1
- Fixed door when first seeing Hojo in Shinra HQ
- Trimmed text boxes at Honey Bee Inn
- Trimmed "Black Materia!" section after Red Dragon
- Fixed issue in Nibel where the black cloak dude is in the way
- (NMS) Trimmed Turks in Mythril Mines

Disc 2
- Trimmed Guards in UWR elevator
- Fixed audio issues in UWR after Cloud's dream section
- (NMS) Fixed audio issues during Raid on Midgar
- (NMS) Trimmed Raid on Midgar Turks
- (NMS) Trimmed Raid on Midgar Proud Clod

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2025-01-30 18:22:12 — awesomeWaves

Thanks IC man!

### 2025-01-30 18:22:36 — awesomeWaves

there's another not very important thing I noticed, so I'm not even going to add it to the main list

### 2025-01-30 18:23:00 — awesomeWaves

In Costa Del Sol, is there anyway to have the music continue to play when you leave the screen originally?

### 2025-01-30 18:23:22 — awesomeWaves

As it stands, it restarts as you exit the screen, which makes sense as it typically does in the full run

### 2025-01-30 18:23:34 — awesomeWaves

as it's interrupted with Rufus and the helicopter etc

### 2025-01-30 18:23:51 — awesomeWaves

but in CSR it just stops, then starts again.

### 2025-01-30 18:24:21 — awesomeWaves

again, super minor but said I'd mention it.

### 2025-01-30 18:24:49 — IndividualContributor

Put it in the list on the sheet and I'll definitely take a look at it! I'm afraid I'll miss stuff in this thread but if it's on the list I won't miss it.

### 2025-01-30 18:25:31 — awesomeWaves

Cool Cool, added there 👍

### 2025-01-30 18:27:48 — IndividualContributor

I've added this to the Google sheet, and there was another about the Reactor stairs? what disc is that?

### 2025-01-30 18:28:49 — IndividualContributor

Thank you! hopefully I haven't borked anything in this new release 🤞

### 2025-01-30 18:32:13 — IndividualContributor

I've marked NMS as being "Done" now, would that be correct to say? 

There are going to be more changes but I think the bulk of those categories are done now. 

https://github.com/individualcontributordev/Final-Fantasy-7-CSR?tab=readme-ov-file#final-fantasy-7-psx-cutscenes-removed
- file: image.png

### 2025-01-30 18:44:37 — Jayrod

Disc 1 during the Kalm flashback. The screen where you have to run up right just a bit to get onto the reactor stairs

### 2025-01-31 16:28:18 — IndividualContributor

Waves I've tried to cut the pre-Reno fight scene but it's too much messing around here post-fight to put all the characters and stuff in the right places. I've already made a ton of changes here and it's a tricky bit of the code to work in so I'm going to leave it as it is right now.
- file: 2025-01-31_16-25-41.mp4

### 2025-01-31 16:51:47 — awesomeWaves

Ah I see. They retain their positions after the fight.

### 2025-01-31 16:51:58 — awesomeWaves

Fair enough then, probably best to leave that one as is.

### 2025-01-31 16:53:00 — awesomeWaves

Another one that sprung to mind today was the scene with Pricilla in Lower Junon, after you sleep. There's a lot of long animations there I bet you could just speed up and trim some time.

### 2025-01-31 16:53:10 — awesomeWaves

She runs, stops and turns (could be removed) and speed the running up

### 2025-01-31 17:11:02 — IndividualContributor

Just made these changes there now, and the one thing I can't change is Cloud walking down the stairs while Pricilla follows. It's a looped animation as opposed to a "Move" command that you can speed up. 

I was able to speed Pricilla up though so that whole thing is quicker

### 2025-01-31 17:24:27 — IndividualContributor

Nevermind I think I figured out how to move everyone, i'll share a clip in a sec

### 2025-01-31 17:29:53 — IndividualContributor

_(no text)_
- file: 2025-01-31_17-28-04.mp4

### 2025-01-31 17:36:44 — IndividualContributor

## Release v0.11.1 🚀 

Disc 1
- Added back in 1 text box when entering Wall Market
- Removed Cloud bending down at vending machine in the Wall Market Inn
- Trimmed Don's basement again
- Sped up Don's choice
- Trimmed Don's bedroom a bit more
- Fixed bug in Costa Del Sol first visit where you could run back into the boat scene and re-trigger the crew getting off the boat 
- Fixed the music in Costa to not stop and start on boat scene exit
- (NMS) Aerith's church scene before beams in attic put back in for timing
- Trimmed Pricilla scene in Junon getting Shiva materia

Disc 2
- no changes

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2025-01-31 17:38:02 — IndividualContributor

I think I've made all the changes requested in this thread and in the [Google sheet](https://docs.google.com/spreadsheets/d/19y6yHtODjS5R-VyvtHUKjAo3FL9Fif56p1REQsUzGWg/edit?gid=1468535119#gid=1468535119). If you have any other suggestions for changes use [this form](https://docs.google.com/forms/d/e/1FAIpQLSfcZVrLn6QF7-WJVihUU1IwoTfz8Q3eBKBbDSBJ5ez1Q8nWBA/viewform) to submit them to the sheet, please and thanks ❤️

### 2025-01-31 17:41:46 — IndividualContributor

I think we're close to getting you sub 4 now Waves with all these new trims <:Kappa:1075235124200886273>

### 2025-01-31 17:43:52 — IndividualContributor

<@538796370975260763> I've fixed the Aerith's church attic beams thing you mentioned by putting the previous scene back in, is this what you meant? and also any chance you have a Duckstation save state for the Flashback reactor stuff? ideally a save state that is at least 1 scene away from the reactor. I don't have any NMS ones

### 2025-01-31 22:20:45 — Jayrod

I will try to send you one in a bit

### 2025-02-01 03:42:42 — Doumeis

ok so I did a full NMS run

### 2025-02-01 03:42:53 — Doumeis

and I have some things I could see being cut off

### 2025-02-01 03:43:13 — Doumeis

some of them are very nitpicky so its not like we NEED to change, its just a preference <:emptysGuy:742324145785929789>

### 2025-02-01 03:53:18 — Doumeis

1 - Reno stepping on church flowers - can remove, no inputs there
2 - Wall Market pink guy - either 4 boxes after the option or none, I feel like 2 creates bad muscle memory
3 - Cut Shinra stairs down, Hope's CSR did this, it was like the elixir floor and a couple more only
4 - Inn break textboxes during Kalm - keep it 4 boxes before the option, muscle memory again
5 - Turks in mines - Cloud ends in wrong position? I might be wrong, gonna double check
6 - Granny house Under Junon - can cut the dream dialogue and Tifa's dialogue to maybe 1 box only
7 - Boat - cut Tifa Red and Aerith dialogue (Aerith option doesnt matter) - not sure about this one, maybe keeping the whole thing is good for muscle memory, but I feel like it could be cut
8 - After Jbirth - either all 7 boxes or only 1, might be only me but I always count the 7 textboxes to choose the option, so having only 3~4 feels weird
9 - Remove the second boat animation, the "parking"
10 - Costa del sol landing dialogue can be cut as well (option doesn't matter AFAIK)
11 - Dyne's dialogue, could jump straight to the fight when you transition the screen
12 - Jlife - Cloud swinging his sword straight to the fight, no need to have Aerith falling there imo
14 - Slap Fight - no category wants to beat this, so theres no input, could remove it
15 - Submarine friends - either all 11 textboxes or only 1, again for the muscle memory thing, feels weird
16 - Rocket - can remove Cid asking you to go to the materia
17 - Revisit cutscenes on CC - this is a funny one, if you go to CC the first time, theres no overview cutscene neither the sign telling you to sleep there, but when you revisit it after UWR those cutscenes play

### 2025-02-01 03:53:27 — Doumeis

like I said, some of these are very nitpicky

### 2025-02-01 03:53:32 — Doumeis

lmk what you guys think

### 2025-02-01 03:54:11 — Doumeis

all the rest of the mod feels amazing, the cuts are great and intuitive, really well done

### 2025-02-01 08:53:11 — IndividualContributor

Thanks Doumeis this is great! I'll go through each of them and provide some additional context where I can, e.g. the boat parking in Costa if you cut that scene Cloud ends up on a Chocobo on the world map and you're stuck in place. 

I really appreciate the thorough list 🫡 

Would love to hear what others think about these too so I'll hold off until we discuss them a bit.

### 2025-02-01 11:54:53 — awesomeWaves

2- Wall Market Pink Guy.  
That's the guy outside the Honey Bee Inn I guess? That was cut, then returned and now cut again. I'm not sure what would make sense there as a happy medium

### 2025-02-01 11:55:14 — awesomeWaves

if there's a text box you guys look for when mashing, maybe that box could be left in after the option?

### 2025-02-01 11:55:58 — awesomeWaves

3- Shinra Stairs
pretty sure this won't change as the CSR plans to keep the difference from Elevator manip to Stairs intact. Same reason Aeriths House scene still plays

### 2025-02-01 11:57:05 — awesomeWaves

6- Grannys House in Lower Junon
That is cut? you walk in, 1 text box. Sleep. 
Wake up maybe 1 text box with Tifa and run out. Perhaps there's an NMS specific issue there?

### 2025-02-01 11:58:08 — awesomeWaves

7- Boat
I'd be in favor of leaving it as is. As far as I know the 2nd option with Tifa is faster also? maybe someone can confirm that

### 2025-02-01 11:59:24 — awesomeWaves

8- After J-Birth
I agree this feels strange still. If someone has a visual cue they look for or amount of boxes before Tifas option it might be more solid

### 2025-02-01 12:00:19 — awesomeWaves

11+12 Dyne and J-Life, I agree. Both scenes before the fights could be trimmed imo

### 2025-02-01 12:00:57 — awesomeWaves

14- Slap Fight. 
I feel it's still a consideration to stop mashing and then start mashing as soon as you lose?

### 2025-02-01 12:01:30 — awesomeWaves

15- Submarine Friends
This one was my suggestion. I've always looked for the soldier swinging his sword. Then it's 2 text boxes and 2nd option.

### 2025-02-01 12:02:36 — awesomeWaves

IC can explain further, just that I've been here while he was doing some of those changes so hopefully that helps his workload in explaining also

### 2025-02-01 12:03:41 — awesomeWaves

I skipped point 10. After the Boat arrives in Costa del Sol.
 I was told 2nd option was faster here also? Maybe it's not true. If it's not true, then it should be cut I guess. It is a lot of text right now

### 2025-02-01 12:06:32 — awesomeWaves

I just checked MC's run and he picks 2nd option with Tifa while on the Cargo Ship. In Costa del Sol arrival he just mashes through all the text and options

### 2025-02-01 12:07:11 — awesomeWaves

Zheal does 2nd option

### 2025-02-01 12:10:19 — awesomeWaves

ok, from a quick eyeball of both VODs watching their livesplits. Its 2s faster to pick 2nd option

### 2025-02-01 14:49:03 — Jayrod

Making stairs shorter will not work if people ever want to compete with CSR. The stairs being longer than elevator manip needs to be preserved if it’s going to eventually be used for competition.

### 2025-02-01 14:50:46 — Jayrod

I have not tested the newest version, but if Cloud is in the wrong position after Turks in mines, that is a big problem for setting up Jenova PE.

### 2025-02-01 18:52:23 — Doumeis

ah yea good point about the elevator comparison, keep stairs normal then <:doumeiLUL:1025884511046750378>

### 2025-02-01 18:53:03 — Doumeis

might be NMS then, I had the full dream and Tifa dialogue

### 2025-02-01 18:56:04 — Doumeis

nvm that waves 😐

### 2025-02-01 18:56:08 — awesomeWaves

I think you replied to a different bit than I meant. When you climb up the ladder on the boat, it's 4 then 2nd option. Which is the same in CSR

### 2025-02-01 18:56:10 — Doumeis

I was answering the wrong part

### 2025-02-01 18:56:11 — Doumeis

yea yea

### 2025-02-01 18:56:13 — Doumeis

my bad

### 2025-02-01 18:56:16 — awesomeWaves

lol np

### 2025-02-01 18:56:25 — awesomeWaves

i had replied before you deleted it, all good

### 2025-02-01 18:57:36 — Doumeis

I'll take a look in the animation, probably a better cue than counting all boxes lol

### 2025-02-01 18:58:35 — Doumeis

also on Costa arrival I just realized the choices might be different if I have Aerith on the party or not

### 2025-02-01 18:58:52 — Doumeis

I'll double check that, I think if Aerith is not on the party, 2nd option is indeed faster

### 2025-02-01 18:59:36 — Doumeis

honestly I never knew that second option here was faster, that makes sense then

### 2025-02-01 19:03:51 — Doumeis

here it is, Zheal's run vs my VOD
- file: image.png

### 2025-02-01 19:04:21 — Doumeis

cloud should move to confront tseng before the cutscene ends, and in the CSR he doesn't

### 2025-02-01 19:05:22 — Doumeis

also I have an idea of what mightve caused the full dream in under junon

### 2025-02-01 19:05:33 — Doumeis

I selected to not sleep by accident, and then went in again to sleep

### 2025-02-01 19:05:42 — Doumeis

that could be the issue, I'll test it again later

### 2025-02-01 23:23:55 — Jayrod

Which second option saves time when getting off the boat? There are two selections

### 2025-02-02 01:14:42 — awesomeWaves

the first one, when they're talking about Barret wearing the Sailor Uniform

### 2025-02-02 01:50:57 — Jayrod

<:SMILERS:1074813154770558976> thx waves

### 2025-02-02 12:15:49 — IndividualContributor

Ok so the edits I made for the CSR were to speed up the scrolling and have Cloud run into that scene. I've revert this back to normal. So now the scrolling is slower and Cloud walks, right before you need to do that up + right onto the stairs. 

Hopefully this fixes the muscle memory, but if not I can put the previous scene back in too.
- file: 2025-02-02_12-14-49.mp4

### 2025-02-02 12:18:35 — IndividualContributor

I'm fixing this now

### 2025-02-02 12:25:23 — IndividualContributor

_(no text)_
- file: 2025-02-02_12-24-32.mp4

### 2025-02-02 12:48:23 — IndividualContributor

1 - Reno stepping on church flowers - can remove, no inputs there
    Todo

2 - Wall Market pink guy - either 4 boxes after the option or none, I feel like 2 creates bad muscle memory
    Todo (cut to 4)

3 - Cut Shinra stairs down, Hope's CSR did this, it was like the elixir floor and a couple more only
    Waves, Jayrod replied

4 - Inn break textboxes during Kalm - keep it 4 boxes before the option, muscle memory again
    Todo

5 - Turks in mines - Cloud ends in wrong position? I might be wrong, gonna double check
    Fixed in 0.11.2

6 - Granny house Under Junon - can cut the dream dialogue and Tifa's dialogue to maybe 1 box only
    Todo (this is likely a bug)

7 - Boat - cut Tifa Red and Aerith dialogue (Aerith option doesnt matter)
    Keeping all options but will check the dialogue again, todo

8 - After Jbirth - either all 7 boxes or only 1, might be only me but I always count the 7 textboxes to choose the option, so having only 3~4 feels weird
    Todo

9 - Remove the second boat animation, the "parking"
    Cloud becomes a Chocobo if this is cut, so leaving as is

10 - Costa del sol landing dialogue
    Todo 

11 - Dyne's dialogue, could jump straight to the fight when you transition the screen
    Todo

12 - Jlife - Cloud swinging his sword straight to the fight, no need to have Aerith falling there imo
    Todo

14 - Slap Fight - no category wants to beat this, so theres no input, could remove it
    Leaving as is because player input required

15 - Submarine friends - either all 11 textboxes or only 1, again for the muscle memory thing, feels weird
    Todo

16 - Rocket - can remove Cid asking you to go to the materia
    Todo

17 - Revisit cutscenes on CC
    Todo (oops this is likely a bug)

Once I make these changes we can test and review again 🚀

### 2025-02-02 12:53:41 — IndividualContributor

# Latest leaderboards

### CSR No Slots
🏆 (WR) Phek w/ 3:59:46

### CSR No Major Skips
🏆 (WR) ?? 

Get your VODs [submitted](https://docs.google.com/forms/d/e/1FAIpQLSd0GWzCxWHQn-881TKnZPckH87L7CHteM8Fep2hWeGSgHkurQ/viewform)!
- file: image.png

### 2025-02-02 12:57:56 — IndividualContributor

## Release v0.11.2 🚀 

Disc 1
- (NMS) Reverted changes to Reactor scene during Kalm flashback
- (NMS) Fixed Mythril Mines Turks scene

Disc 2
- no changes

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2025-02-02 13:05:28 — awesomeWaves

just in relation to points 8/10/15

### 2025-02-02 13:05:53 — awesomeWaves

I feel like just leaving 1 text box before an option is worse muscle memory than haivng some animations or all the text boxes

### 2025-02-02 13:06:13 — awesomeWaves

jayrod mentioned on stream that he's in favor of all the text boxes outside the honey bee inn for example

### 2025-02-02 13:06:49 — awesomeWaves

I think 1 text box then an option will cause more issues than the second or two to have some animations/textboxes so you can pre-empt the selection as you normally would

### 2025-02-02 13:07:34 — IndividualContributor

So in those cases your saying revert to original before the option choices?

### 2025-02-02 13:08:06 — awesomeWaves

so i guess it's just finding the cues that people use and trimming to that. Most are really good right now, but I agree that after J-Life and outside the boat when you arrive at Costa are a little iffy right now

### 2025-02-02 13:09:05 — awesomeWaves

so from what I can tell outside the boat in Costa, red appears and has 1 text box. Then there's 2 more and then option. Perhaps that could be where the text starts in that scene?

### 2025-02-02 13:10:21 — awesomeWaves

Not revert everything just make sure that the cues in the lead up to the options are still there. Like, for me the Black Materia (Aerith shakes her head aggressively, then 2 boxes, last option) and before the Dolphin Jump in Lower Junon (Barret shrugs, 2 boxes, 2nd option) are all perfect examples

### 2025-02-02 13:11:00 — IndividualContributor

Cool let's figure out the cues then for those sections you've mentioned and I'll put them on the todo list

### 2025-02-02 13:11:07 — awesomeWaves

sounds good

### 2025-02-02 17:28:41 — IndividualContributor

## Release v0.11.3 🚀 

Disc 1
- (NMS) Reno stepping on flowers in Aerith's church cut
- Wall Market outside Honey Bee Inn reverted to original (4 text boxes after talking to pink guy)
- (NMS) Kalm flashback break, 4 text boxes before save option
- Junon Granny's house, fixed bug if you leave and go back in to rest triggers the dream dialogue
- After JBirth fight, put 7 text boxes in before option choice
- Reverted boat docking in Costa scene to original (under review)
- Dyne fight trimmed even more
- Trimmed before JLife fight
- Reverted Submarine friends to include 11 text boxes before the menu (under review)

Disc 2
- Trimmed the Rocket cockpit scene after Rude where Cid mentions the huge materia
- Trimmed Cosmo Canyon revisit after UWR

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2025-02-02 17:28:56 — IndividualContributor

https://tenor.com/view/beavis-computer-pressing-gif-24389723

### 2025-02-02 17:33:41 — IndividualContributor

I think I covered everything up-to-date in the new release. The bits that need us to figure out the cues I've reverted to original, so only the Costa boat and Submarine friends parts. But everything is still up for review even if we've cut, reverted, cut, reverted. So don't be afraid to voice your suggestions related to muscle memory or timing or anything at all, it's all great feedback.

### 2025-02-02 17:34:23 — IndividualContributor

https://tenor.com/view/that70s-show-eric-foreman-light-bulb-idea-gif-4680281

### 2025-02-02 17:35:10 — IndividualContributor

I've also had an idea, I'd like to add an easter egg for each of the contributors. 

I'm thinking renaming a character in the game for each contributor and have them say something when you talk to them. I'd even go as far as animating them a bit if I can. So have a think and let me know if you want something like that added in. 

Not something in the critical path of a run, but some other NPCs would be fine.

### 2025-02-02 17:35:23 — awesomeWaves

Thanks for all the work IC. I'll give it this version a whirl from tomorrow

### 2025-02-02 22:24:06 — IndividualContributor

Just had a run end because I was 20 gil short for Chocobo Lure, not sure how that happened <:YEP:1074813056045039688>  but I did notice that I can trim just before the Motorcycle game. When Aerith leaves the elevator you run left and down to trigger Tifa running down the stairs, hitting that trigger can just skip to the bike game starting.

### 2025-02-02 22:54:56 — Okamikaze

Hmm, maybe. But afaik some routes involve making use of the menu before the mini-game starts. Last I saw I think even Any% does that now?

### 2025-02-02 22:55:20 — Okamikaze

As for the Chocobo Lure that usually happened to me when I bought 1 too many grenades

### 2025-02-02 23:22:22 — IndividualContributor

Ah I just mean skip to that menu at the start of the mini game. When you hit the trigger it takes a while for Tifa to run down the stairs and for the crew to run up into the  building.

### 2025-02-02 23:23:53 — IndividualContributor

I was buying 49 but reduced to 46 now, I need to verify my Gil route because my notes might be based on doing elevator

### 2025-02-02 23:36:23 — awesomeWaves

Not sure of your route but I was originally buying 19+43 I think, but 46 should be fine

### 2025-02-03 04:29:31 — Doumeis

thanks for the update IC <:emptysGuy:742324145785929789> I'll try to finish a run this week

### 2025-02-03 09:04:20 — phek1200

I've had enjoyable days off from Lunar New Year holidays, and now I'm back.
Great job everyone for the contribution and new version releases. Think I'll get some NMS csr runs going these few days <:SMILERS:1074813154770558976>

### 2025-02-03 14:19:49 — awesomeWaves

Before I forget the Granny needs to be edited after getting Shiva materia. She's too fast/slow

### 2025-02-03 15:59:37 — IndividualContributor

I did edit her recently because you bonk on her, is it happening again?

### 2025-02-03 17:38:15 — awesomeWaves

Getting there 💪
- file: image.png

### 2025-02-03 17:43:53 — awesomeWaves

oh with break btw, I haven't been pausing the timer

### 2025-02-03 17:44:26 — Doumeis

nice run <:emptysGuy:742324145785929789>

### 2025-02-03 17:44:43 — Doumeis

thats a good point, what will be our strat there

### 2025-02-03 17:44:57 — Doumeis

manually pause the timer? cause youre not forced to take the break right

### 2025-02-03 17:45:03 — Doumeis

or manually subtract the time later

### 2025-02-03 17:45:12 — awesomeWaves

If you're running on Emulator, the auto splitter will pause the timer automatically (comapare against Game Time, not Real Time)

### 2025-02-03 17:45:38 — Doumeis

I think I'll want to burn the discs at some point

### 2025-02-03 17:45:44 — Doumeis

console feels much better lol

### 2025-02-03 17:45:45 — awesomeWaves

but for PSX you've really got no consistent option other than letting the entire time expire naturally and that amount, can be timed and removed consistently

### 2025-02-03 17:46:07 — Doumeis

fair enough, I guess the break is healthy either way

### 2025-02-03 17:46:14 — Doumeis

would be like waiting on a cutscene

### 2025-02-03 17:56:49 — IndividualContributor

## Release v0.11.4

Disc 1
- Trimmed post Jessie skip Cloud and Barret on train scene
- Junon Granny's speed reverted back to original to avoid bonking her with latest trims
- Trimmed before Bike minigame in Shinra HQ
- Trimmed old man carrying Priscilla to house after Bottomswell

Disc 2
- Trimmed Cait Sith on Highwind after Cloud's dream section

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2025-02-04 09:03:45 — IndividualContributor

#todo trim before JLife before hopping on pillars in the water, animations mostly

### 2025-02-04 09:05:31 — awesomeWaves

when you enter Corneos for the first time there's a noise that happens that takes about 1s before the guy leaves. Could be trimmed

### 2025-02-04 09:06:19 — awesomeWaves

oh and after J-Death. There's supposed to be 'receive black materia' then 3 text boxes before you can move to red

### 2025-02-04 09:06:28 — awesomeWaves

I think thats worth putting back in

### 2025-02-10 22:36:24 — IndividualContributor

https://tenor.com/view/hmm-suspect-gif-22611582

### 2025-02-10 22:38:48 — IndividualContributor

It's been pretty quiet here, I'm hoping it's because the CSR is perfect and working as expected.

If anyone has any suggestions they want ASAP shout in here.

### 2025-02-10 22:39:18 — awesomeWaves

I had noticed a few bits earlier today but they are all really small things at this point

### 2025-02-10 22:40:29 — IndividualContributor

That's good to hear actually, let me know what they are and I'll collect them up for the next release to make it beefy and worth it.

### 2025-02-10 22:41:01 — awesomeWaves

I'll try note them tomorrow when I do another attempt and I'll fire them into the sheet 👍

### 2025-02-11 04:20:30 — Doumeis

I havent done another run yet, soon tm 🫡

### 2025-02-12 07:06:10 — phek1200

ok, surely next one is gonna be NMS CSR <:Kappa:1075235124200886273>
- file: image.png

### 2025-02-12 07:07:33 — phek1200

1. i agree that the part post j-death has too little textboxes as indication of when to move, maybe it'd be good to put some back in
2. the part after exiting COTA, getting into Highwind and trigger Diamond weapon appearance, can that be cut down further? or are those necessary to advance List for 0FD manip ?

### 2025-02-12 11:32:23 — awesomeWaves

Amazing time dude. GG

### 2025-02-12 11:32:56 — awesomeWaves

do you have any estimate as to what the equivalent time would be for a full run? Was that sub 6:35 pace?

### 2025-02-12 14:24:37 — phek1200

Thanks dude ❤️

### 2025-02-12 14:28:45 — phek1200

i recorded down important details of all my CSR runs so far, and for this one:
Failed elevator manip - 3 encounters
No. of tries - Bottomswell 1st, MK 1st, Palmer 1st, Deathclaw 1st, Beachplug 2nd, Spiderweb steal 2nd
Great fights - MK, Palmer, RD, DG, 3 Icicles, CA, DW, Hojo (Good)
Average Schizo, J-Death
RA steal
Got Egged twice - 1 cancels out the RA timesaves
Above average WM traversal (except Midgar -> Ranch and MK -> Rocket Town with IGT manip)

I'd say this is a solid sub 640 run in console, but probably just around 6:39 or high 6:38-ish

### 2025-02-12 18:09:30 — awesomeWaves

Ah ok, thats interesting to know. I was hoping it was lower for my own estimations 😅  4 hours is about 6:43 or so then

### 2025-02-12 19:22:10 — IndividualContributor

So sub 4 CSR is an easy sub 7 non-CSR. This makes me giddy.

### 2025-02-13 00:37:11 — Doumeis

GG Phek <:Pog:1074812009494876272>

### 2025-02-13 18:44:58 — Jayrod

YOLO Phoenix down <:Kappa:1075235124200886273>

### 2025-02-14 13:03:02 — Jayrod

When updating to a newer version of csr can you just patch the previous image or do you have to start with the original every time?

### 2025-02-14 13:31:08 — awesomeWaves

I think it's strongly advised to patch a fresh iso

### 2025-02-14 18:48:46 — IndividualContributor

Yeah patch an original iso every time. I don't think patching an already patched iso will load up correctly.

### 2025-02-15 12:29:37 — Snake

got a nice 7:46 nms run thanks to CSR appreciate all the hardwork

### 2025-02-16 13:00:46 — Jayrod

<@183261151746850816> https://clips.twitch.tv/CleanTenuousGooseTinyFace-HhTc58MPeKQ-HjRm

### 2025-02-16 13:01:12 — Jayrod

Idk if this has anything to do with csr but this happened lol

### 2025-02-16 13:13:33 — awesomeWaves

Oh dang I've never had it but I have not updated my Disc 2 to the latest version

### 2025-02-16 13:13:40 — awesomeWaves

Maybe it was introduced then?

### 2025-02-16 14:16:42 — IndividualContributor

😬 Sorry about that, I'll check it out today. I did a full run through the other day and didn't get this but is very likely a CSR thing with all the stuff that is skipped in RT

### 2025-02-19 20:19:42 — IndividualContributor

I can't reproduce the issue you encountered on Duckstation <@538796370975260763> I'll try testing RetroArch now
- file: 2025-02-19_20-18-10.mp4

### 2025-02-19 20:22:00 — IndividualContributor

Ok I only have save states up to the start of Disc 2 on RetroArch, <@538796370975260763> do you happen to have a save state close to where the issue is?

### 2025-02-19 20:23:57 — IndividualContributor

```
D:\RetroArch-Win64\states\SwanStation
```

### 2025-02-19 20:25:29 — IndividualContributor

In the meantime I'll try make an in-game save in Duckstation and transfer the memory card over to RetroArch to see if I can use it

### 2025-02-19 20:28:03 — Jayrod

I won’t be able to get anything to you until later on when I’m home

### 2025-02-19 20:28:19 — IndividualContributor

That's fine whenever you get a chance

### 2025-02-19 20:28:38 — Jayrod

I was running on v0.11.3 if that makes any difference

### 2025-02-19 20:29:04 — Jayrod

I’m going to update to the latest version and burn my discs at 1x and hope for the best

### 2025-02-19 20:30:13 — IndividualContributor

The latest is 0.11.4 and there were no changes to RT stuff so it's likely on 0.11.3 and the latest 0.11.4. Hopefully I can reproduce this and push a fix before you burn discs.

### 2025-02-19 20:32:50 — IndividualContributor

This worked 🎉 I'll continue testing here

### 2025-02-19 20:37:01 — IndividualContributor

Still can't reproduce on RetroArch, I'll try a few different input buffers and stuff to see if I can get Cloud stuck.
- file: 2025-02-19_20-35-34.mp4

### 2025-02-19 20:39:02 — IndividualContributor

Ok I can reproduce it be holding Up + Right and Turbo into that scene, I'll keep testing
- file: 2025-02-19_20-38-13.mp4

### 2025-02-19 20:40:21 — IndividualContributor

Down + Right + Turbo also causes the issue. Only Down + Turbo does not.

### 2025-02-19 20:41:20 — IndividualContributor

Down + Right, no Turbo, causes the issue.

### 2025-02-19 20:41:56 — IndividualContributor

I'm wondering if I'm moving on one of the skipped scenes and initiating a trigger or dialogue with something.

### 2025-02-19 20:42:55 — IndividualContributor

Some scenes are not entirely skipped, they are initialised and then I immediately jump to another field/scene. So it could be that during the initialisation of one of these scenes something is getting borked.

### 2025-02-19 20:44:05 — IndividualContributor

Holding Left + Turbo causes the issue

### 2025-02-19 20:45:41 — IndividualContributor

So I think it's specifically holding Left as the scene is loading in that causes the issue.

### 2025-02-19 20:46:54 — IndividualContributor

_(no text)_
- file: 2025-02-19_20-46-20.mp4

### 2025-02-19 20:47:28 — IndividualContributor

https://tenor.com/view/mum-mumprobs-gif-26640474

### 2025-02-19 20:48:58 — IndividualContributor

Holding only Left as the scene is loading in causes the issue on Duckstation too

### 2025-02-19 20:49:12 — IndividualContributor

So not an emulator thing thankfully

### 2025-02-19 20:57:59 — Jayrod

Oh wow making progress! Have you tried any tests on the base game? It could be something that can always happen

### 2025-02-19 21:03:43 — IndividualContributor

I haven't but I will try now to eliminate it being an existing thing

### 2025-02-19 21:05:10 — IndividualContributor

Ok so it's not existing, holding Left and letting the whole escape pod scene play out all the way up to the highwind and I can move Cloud

### 2025-02-19 21:06:09 — IndividualContributor

So 100% a CSR thing, something I skipped over unintentionally like Cloud being "auto moved" a tiny bit out of the way of some field object boundary or something. 

I did notice a little tiny walk in the original there so I'll see if I skipped over that in the CSR

### 2025-02-19 21:09:03 — IndividualContributor

I think that was it, I've found a tiny walk the Cloud normally does that I skipped over and it seems to have fixed the issue putting it back in

### 2025-02-19 21:09:06 — IndividualContributor

I'm testing more now

### 2025-02-19 21:09:39 — IndividualContributor

Wait no it wasn't that specifically, but moving him a bit does fix it. I'll keep looking

### 2025-02-19 21:13:20 — IndividualContributor

Ok found it I think, I'll do a few more tests of inputs then push a new patch
- file: 2025-02-19_21-12-34.mp4

### 2025-02-19 21:15:52 — IndividualContributor

Ok I've tested a bunch of inputs, Left, Left + Down, Up + Left, with and without Turbo I think it's fixed. Pushing a new patch now

### 2025-02-19 21:19:18 — IndividualContributor

>i agree that the part post j-death has too little textboxes as indication of when to move, maybe it'd be good to put some back in

I'll fix this while I'm at it in the same patch

### 2025-02-19 21:22:27 — IndividualContributor

Is it this scene?
- file: image.png

### 2025-02-19 21:25:24 — awesomeWaves

Yeah. That's the one I mentioned.

### 2025-02-19 21:25:41 — awesomeWaves

In my full notes I had '3 text boxes then move to red'

### 2025-02-19 21:29:53 — IndividualContributor

_(no text)_
- file: 2025-02-19_21-28-41.mp4

### 2025-02-19 21:33:50 — IndividualContributor

## Release v0.11.5 🚀 

Disc 1
- no changes

Disc 2
- Added text boxes back in after JDeath fight where Cloud picks up the Black Materia
- Fixed Cloud getting stuck on Highwind cockpit after Rocket Town escape pod scene skips

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2025-02-19 21:35:58 — IndividualContributor

https://tenor.com/view/dwight-schrute-king-crown-the-office-gif-26831211

### 2025-02-19 23:24:28 — Jayrod

Thanks so much for fixing for researching and fixing that!

### 2025-02-20 07:11:36 — IndividualContributor

No bother sorry it took so long!

### 2025-02-20 16:20:18 — Katombaz

Any chance someone could link me CSR psx chocobo igts and midgar igts if possible?

### 2025-02-21 13:22:56 — IndividualContributor

Not the CSR igts Kato but we should add them to the One Stop Shop IGT sheet https://docs.google.com/spreadsheets/d/1vUXxWHt6pCq0O7CLcTWyXLu2Wwe8CoqNrx_w4ilgp8E/edit?usp=sharing

### 2025-02-21 13:23:33 — IndividualContributor

<@248225699909861376> <@266664783502245888>  do you have access?

### 2025-02-21 13:24:41 — awesomeWaves

Sorry for the 5 text files, but here's my CSR IGTs
- file: 01_midgar_choco_1enc_59-109.txt
- file: 02_Choco_ranch_choco_101-114.txt
- file: 03_beachplugs_135-150.txt
- file: 04_nibel_to_rocket_town_139-160.txt
- file: 05_icicle_inn_215-255.txt
- file: 05_icicle-inn-armswings_215-255.txt

### 2025-02-21 13:57:05 — cornfed

i dont have access, jayrod made all the ones for nms last night. maybe get em al together and send em to dash all at once

### 2025-02-21 14:13:41 — Okamikaze

Thanks for the Icicle Inn one, I've been too lazy to generate it lately 😅

### 2025-02-21 14:14:02 — awesomeWaves

is it worth someone just running off ALL the possible IGTs from reasonable starting times all the way up to an hour passed the expected usage time. Then there would be a sheet that works for almost every category

### 2025-02-21 14:14:42 — awesomeWaves

so you could make 45 mins - 2.5 hours Midgar to Choco manip sheet, that would work for everything and then people can pick the ranges they want from that text sheet

### 2025-02-21 14:15:43 — Okamikaze

Not a bad shout

### 2025-02-21 14:16:12 — awesomeWaves

Would just stop people continuously asking for them to be generated 🤷‍♂️

### 2025-02-21 17:50:16 — cornfed

the prob is we do midgar to klam, kalm to zolom

### 2025-02-21 17:50:22 — cornfed

but the rest im sure would fal in line nicely with that

### 2025-02-21 17:51:09 — cornfed

lets just <@538796370975260763>  so noone runs un needed script cuz he ran some last night

### 2025-02-21 18:04:45 — Jayrod

I just need the mines to junon script from ace and i think i have all the scripts for no slots and nms

### 2025-02-21 18:07:52 — cornfed

idk if this helps
- file: junon.txt

### 2025-02-21 18:07:57 — cornfed

but those are psx times

### 2025-02-21 18:17:39 — AceZephyr

i'll put this here
- file: message.txt

### 2025-02-21 19:56:33 — cornfed

<@538796370975260763> ^

### 2025-02-22 13:14:54 — IndividualContributor

*lemme try one of those igt thingys for midgar to ranch*... 1:11:18 <:Sadge:1074826312767778950>

### 2025-02-22 13:19:35 — IndividualContributor

what is this column in the igts?
- file: image.png

### 2025-02-22 14:23:03 — Zheal

when you leave the ranch and hold Right+R1 cloud runs in circles. Those numbers mean after how many circles you have to menu while running. A full round is when cloud passes the ranch building

### 2025-02-22 14:25:08 — Zheal

and in case you wonder about the next column too, that's the number of frames for the encounter. 1:02:46 and 03:03 in this picture are very slow ones for example

### 2025-02-22 14:26:19 — IndividualContributor

Thanks Zheal

### 2025-02-22 14:28:10 — awesomeWaves

Dash has a nice video tutorial on it too: https://www.youtube.com/watch?v=Y93EYEZeQYI&list=PLnkJWlotsWcT0etZdZ65yfZEdRiR615yr&index=28

### 2025-02-23 04:23:40 — phek1200

Personally I will also look at the list and remove any unoptimal IGTs.
Example an IGT that is 3 secs later have lesser frames and/or better formation (PE, therefore no need to set ATB wait) and/or no mc special menu required

### 2025-02-23 15:41:20 — cornfed

i weed all mine out, and if its successful in rta, it gets a shiny pink color

### 2025-02-23 15:41:56 — cornfed

if its a tough manip, or tight, it gets marked poop brown

### 2025-02-23 15:42:11 — cornfed

and i only have tight manips to fill gaps

### 2025-02-27 05:31:36 — cornfed

sub 40 nms possible
- file: image.png

### 2025-02-27 05:32:26 — cornfed

was ran on x2 speed, mayors password lined up, gonna check the igts to see if the timer matches igt for psx

### 2025-02-27 05:32:32 — cornfed

but i have a feeling its right on or close

### 2025-02-27 05:33:48 — cornfed

everything looking pretty good, theres prob a few more boxes, scenes , and things generally being sped up to go with the csr, but its really coming along nicely.

### 2025-02-27 06:09:56 — cornfed

at 2x speed there was a 2 sec variance at the jenova synth menu with zheals timer

### 2025-02-27 06:10:11 — cornfed

so its bit faster but not much

### 2025-02-27 06:10:37 — cornfed

_(no text)_
- file: image.png

### 2025-02-27 06:11:22 — cornfed

also bronco manip cannot be done currently, prob talk about changing that?

### 2025-02-27 06:13:23 — cornfed

1 sec off at corel to temple
- file: image.png

### 2025-02-27 06:14:33 — cornfed

and also here is before bg manip
- file: image.png

### 2025-02-27 06:28:06 — IndividualContributor

What is preventing the manip to be done?

### 2025-02-27 06:28:30 — cornfed

you need the final txt box on the bronco in the scene before to set the igt

### 2025-02-27 06:29:53 — cornfed

so after tiny bronco crashes, it could just be clouds final txt box

### 2025-02-27 06:30:04 — IndividualContributor

Ok cool I'll add the scene back in with a few text boxes. It's the one where they're standing on it in the water?

### 2025-02-27 06:30:16 — cornfed

yeah

### 2025-02-27 06:32:00 — IndividualContributor

The IGT timer being off is an emulator thing. Was this what you were testing? PSX is faster slightly compared to the current emulator settings?

### 2025-02-27 06:32:34 — cornfed

i was running on emultaor with 2x speed, and was just comparing how close it is to psx, and its remarkably close

### 2025-02-27 06:33:24 — cornfed

keeps it an even playing field i spose

### 2025-02-27 06:33:54 — IndividualContributor

Yeah that is pretty interesting. What emulator did you use?

### 2025-02-27 06:34:00 — cornfed

duck

### 2025-02-27 06:34:39 — IndividualContributor

And the specific version? I know some duck versions have pretty bad issues

### 2025-02-27 06:34:49 — cornfed

uhh let me check quick

### 2025-02-27 06:35:20 — cornfed

_(no text)_
- file: image.png

### 2025-02-27 06:36:51 — cornfed

ive had crashes with it on csr a few times, but today i had nothing, i was taking save states every so often to prevent not being able to finish

### 2025-02-27 06:36:57 — cornfed

but it was deathless and finished

### 2025-02-27 06:38:37 — IndividualContributor

Ah ok yeah crashes on Duckstation seem to be a common occurrence. Have you tried RetroArch yet?

### 2025-02-27 06:38:56 — cornfed

i considered it, but all the save state work ive done would all have to be redone

### 2025-02-27 06:38:59 — cornfed

so id rather suffer

### 2025-02-27 06:39:07 — cornfed

i run psx mostly anyways

### 2025-02-27 06:39:50 — IndividualContributor

The IGT timer diff would be interesting to know for RetroArch too. I wonder could I set up the timer and just let it run for a few hours to check

### 2025-02-27 06:39:58 — cornfed

maybe after i move ill look into mechaponing a ps2 , but until than this is fine

### 2025-02-27 06:40:32 — cornfed

yeah im not sure what the offset is for that

### 2025-02-27 06:40:51 — cornfed

could just let the timer run yeah

### 2025-02-27 06:41:11 — IndividualContributor

I could use your settings for it and see how far off the variance gets

### 2025-02-27 06:44:30 — cornfed

yeah for sure, emulator is in a really sadge place rn with normal speed, so ithink a bit of testing and maybe talk to the mods about the 2x thing

### 2025-02-27 06:47:28 — IndividualContributor

It would be great to verify a setup that is comparable to PSX. And RetroArch has almost zero input lag compared to Duckstation it feels great. Very little configuration to be done too, it's mostly for Turbo actually. Can you send me the igt timer and settings?

### 2025-02-27 06:48:39 — cornfed

should be tuned for ps2 already
- file: ff7igt_1.html

### 2025-02-27 06:49:32 — cornfed

_(no text)_
- file: image.png

### 2025-02-27 06:50:08 — IndividualContributor

Thanks corn I'll try it today. And GGs on the NMS time 🔥. Where did the -12:xx time save come from?

### 2025-02-27 06:50:35 — cornfed

it was origonally ran on normal disc speed, and i think on a prior patch

### 2025-02-27 06:50:45 — cornfed

and it was overall a decent run

### 2025-02-27 06:52:20 — IndividualContributor

So the x2 configuration plus maybe a few additional trims accumulated to -12 minutes time save!?

### 2025-02-27 06:52:30 — cornfed

yeah haha, ballin

### 2025-02-27 06:52:34 — cornfed

igts too

### 2025-02-27 06:53:54 — cornfed

i can only think of 1 major timeloss in the run and thats red dragon, theres 30 secs here and there in a few spots, but overall pretty solid, if it were a psx nms full run id say its prob 850 or so, which is about 7 mins slower than my pb

### 2025-02-27 06:54:20 — cornfed

750*

### 2025-02-27 06:55:32 — IndividualContributor

That time, given the igt is very close to PSX, means NMS on CSR is roughly ~50 minutes longer?

### 2025-02-27 06:55:47 — IndividualContributor

Than non-NMS*

### 2025-02-27 06:55:57 — cornfed

yeah i would say roughly

### 2025-02-27 06:56:03 — cornfed

which is about normal

### 2025-02-27 06:56:06 — IndividualContributor

Current no slots time is 3:56:xx I think

### 2025-02-27 06:57:26 — cornfed

i could push a sub 40 out of this run prob fairly easily if i grinded it and was more prepared with igts, i used jayrods sheet tonight which is rock solid, im just not used to it lmao

### 2025-02-27 06:57:37 — cornfed

so i lost some time llooking for times on a cple

### 2025-02-27 06:59:15 — IndividualContributor

Did you record the run and call out the trims? If so I can watch it and make a list

### 2025-02-27 06:59:55 — cornfed

i did , ill highlight it tomorrow, i called out what i saw, and just general pointing things out that could even maybe be talked about

### 2025-02-27 07:00:40 — cornfed

the current link for it is in my submission to your board

### 2025-02-27 07:08:36 — cornfed

after dg too i had a thought

### 2025-02-27 07:09:20 — cornfed

you kill dg, and get prompted with the menu to feed aeris planet protector, and as soon as you close it, you wake up in gongaga, that would cater to all categories and trime a nice bit

### 2025-02-27 08:32:37 — IndividualContributor

I think that's a skill check for hundo. If you don't make her learn it before DG then your hundo is borked if you miss the 1 frame window.

### 2025-02-27 14:24:15 — cornfed

in that case we could leave a gap for the hundo player to press triangle. and still skip the phsyco cloud and  young cloud stuffs

### 2025-02-27 16:58:01 — awesomeWaves

LFG, the sub 25 finally. (sub 20 without the break)
- file: image.png

### 2025-02-27 17:28:47 — Okamikaze

Good shit my dude. Gonna have to start digging my own grave I reckon 🫠

### 2025-02-27 17:31:29 — awesomeWaves

It's closer to where I want to be for sure, but with the silly stuff that happened like the Pincer outside Temple. There's plenty scope for improvement too 🤞

### 2025-02-27 17:59:34 — Jayrod

GG waves!

### 2025-02-27 18:26:15 — DylWingo

GG

### 2025-02-27 18:57:42 — IndividualContributor

GG

### 2025-02-27 18:58:57 — IndividualContributor

I actually removed the whole scene with kid Cloud but we put it back in because that's also a skill check, you have to move the kid out of the way to avoid talking to Cloud while he's running and slowing down that part

### 2025-02-27 18:59:55 — IndividualContributor

I think the scene with the 1 frame window also has kid Cloud and you can talk to Aerith or something which causes time loss?

### 2025-02-27 20:05:58 — cornfed

im not sure without looking into it further, im usally not paying attention very much there after the slog of temple. we can always revisit it later, i just remember it was something i noticed

### 2025-02-27 20:10:05 — awesomeWaves

I was told at some point that leaving Turbo on there has kid cloud interacting with Cloud trying to give Sephiroth the materia or something. I think that'd where that sprung from.

### 2025-02-27 20:10:22 — awesomeWaves

if it really is a frame or two only, it's worth removing again

### 2025-02-27 23:03:28 — Okamikaze

If you leave Kid Cloud mashing next to Cloud you lose a noticeable amount of time

### 2025-02-27 23:04:00 — Okamikaze

I used to remove Fire Ring and Fury Ring at this point when my menu route was a lot worse, so I like having it in for no slots too

### 2025-02-28 02:09:48 — phek1200

GG Waves

### 2025-02-28 13:07:59 — Okamikaze

Decided to play out a painful run, good to see the game can still hit you with this stuff. Thankyou for the mercy kill o7
- file: Replay_2025-02-28_13-05-50.mp4

### 2025-02-28 13:10:22 — Okamikaze

This isn't CSR specific, merely noting that my first time witnessing this was on CSR

### 2025-02-28 15:08:44 — cornfed

okami and i were just discussing too, we should probably fix the karen and kevin skill check after vent in shinra

### 2025-02-28 15:08:56 — cornfed

if you have good movement you can ALWAYS get around them

### 2025-02-28 15:08:57 — cornfed

soo

### 2025-02-28 15:09:06 — cornfed

bad movement can lose a sec or 2

### 2025-02-28 15:24:00 — awesomeWaves

Yeah that's been on my radar to mention also. They need to be sped up a little bit because they rarely get in your way in CSR

### 2025-02-28 15:45:36 — Okamikaze

Would be hilarious if they ran to the spot

### 2025-02-28 15:59:49 — IndividualContributor

Can someone put that on the todo list using the form pinned to the channel?

### 2025-02-28 21:27:13 — IndividualContributor

How does this look?
- file: 2025-02-28_21-25-51.mp4

### 2025-02-28 21:28:46 — awesomeWaves

not sure about that tbh

### 2025-02-28 21:28:53 — awesomeWaves

can you just up their base speeds?

### 2025-02-28 21:28:58 — awesomeWaves

it's RNG where they are normally

### 2025-02-28 21:29:00 — awesomeWaves

afaik

### 2025-02-28 21:29:10 — awesomeWaves

you don't always get stuck behind them

### 2025-02-28 21:29:27 — awesomeWaves

there's 3 NPCs there iirc. 2 guys and a girl

### 2025-02-28 21:30:15 — IndividualContributor

I'll have a look at a VOD, I thought it was rng too but can't seem to trigger any variance

### 2025-02-28 21:30:36 — awesomeWaves

it'll be when you enter and exit the screen or something I guess

### 2025-02-28 21:30:51 — IndividualContributor

yeah leaving the toilets

### 2025-02-28 21:31:04 — awesomeWaves

the issue is that because we don't wait at the corner for hojo, they're just not as far as they would be along their paths

### 2025-02-28 21:31:11 — IndividualContributor

that loads the scene and the characters are all initialised to specific positions

### 2025-02-28 21:31:14 — awesomeWaves

so just giving them a little more walking speed should adjust it

### 2025-02-28 21:31:21 — awesomeWaves

similar to the granny in Junon

### 2025-02-28 21:32:15 — IndividualContributor

The thing is if I increase their speed it stays increased so they just run all the time which is worse. This way the guy at least, runs to an initial spot and then as soon as you get control again it lines up with non-CSR

### 2025-02-28 21:32:25 — IndividualContributor

at least from what I can test here, but there is no rng

### 2025-02-28 21:32:37 — awesomeWaves

having no RNG defeats the whole thing though

### 2025-02-28 21:32:50 — awesomeWaves

if he always runs to that spot it's no good

### 2025-02-28 21:33:04 — IndividualContributor

I'm not disabling the rng I just can't it to trigger as you mentioned

### 2025-02-28 21:33:37 — IndividualContributor

I'll check a couple of vods to see what's going on normally

### 2025-02-28 21:33:40 — IndividualContributor

then check the code again

### 2025-02-28 21:33:44 — IndividualContributor

it's a weird one

### 2025-02-28 21:35:41 — IndividualContributor

https://www.twitch.tv/videos/2393322499?t=01h43m21s

### 2025-02-28 21:36:00 — IndividualContributor

This is what I'm seeing too, so it's not RNG at this point

### 2025-02-28 21:36:31 — IndividualContributor

when you leave the toilets the scene is always initialised to the same values, e.g. all NPCs are set to the same positions.

### 2025-02-28 21:36:49 — IndividualContributor

So by making the guy run and then walk it's almost aligned with a no-CSR scenario

### 2025-02-28 21:37:07 — IndividualContributor

I can try to get the guy on the exact spot but I think him just being in the way is the problem right?

### 2025-02-28 21:37:23 — IndividualContributor

does it matter that he's a little closer to Cloud when you get control again?

### 2025-02-28 21:37:33 — IndividualContributor

you'll still bonk him if not careful

### 2025-02-28 21:37:42 — IndividualContributor

and Karen seems to be out of the way all the time

### 2025-02-28 21:37:51 — IndividualContributor

so no need to speed her up and change position.

### 2025-02-28 21:37:55 — IndividualContributor

I need to check some other vods

### 2025-02-28 21:40:56 — IndividualContributor

https://www.twitch.tv/videos/1924927299?t=01h08m13s

### 2025-02-28 21:41:15 — IndividualContributor

MCs is different, I'm not sure why though

### 2025-02-28 21:43:09 — IndividualContributor

Waves you're right there is RNG
- file: image.png

### 2025-02-28 21:47:08 — IndividualContributor

There is an ~82% chance of 30 frames being added to the guys movement making them wait a little longer before starting to walk.

So Jayrods does not have the 30 frames but MCs does.

### 2025-02-28 21:50:59 — awesomeWaves

Yeah I felt it was random. Maybe just reduce how long they wait and it might all work as intended

### 2025-02-28 21:58:32 — IndividualContributor

Scenario 1
- file: image.png

### 2025-02-28 21:59:07 — IndividualContributor

Scenario 2
- file: image.png

### 2025-02-28 21:59:29 — IndividualContributor

Wait, Karen's RNG is different I think

### 2025-02-28 22:07:17 — IndividualContributor

Wait looking at this again, this loops. If the random value keeps getting set to < 210 there is 30 wait frames added on each time...
- file: image.png

### 2025-02-28 22:07:45 — IndividualContributor

This means there is a chance the guy could just not do anything for the whole scene

### 2025-02-28 22:12:04 — IndividualContributor

Given a choice between 1) this skill check being included or 2) not included based on RNG, I think for CSR it makes sense to ensure it is always there, i.e. force the skill check.

I can't remove it so this needs to be fixed, but the only reasonable solution I can think of is the have the guy be in the way all the time, the RNG then determines where along the hallway he ends up being.

### 2025-02-28 22:13:02 — IndividualContributor

Is the strat to just buffer Up + Right there to avoid getting bonked?

### 2025-02-28 22:14:50 — awesomeWaves

I'd leave it as is, rather than force it to be always the same

### 2025-02-28 22:14:57 — awesomeWaves

that will cause more bad muscle memory imo

### 2025-02-28 22:17:42 — IndividualContributor

If the majority of the time runners buffer Up + Right at the point then I think the guy should in the way. 

And the 82% chance of 30 wait frames being added every loop of that code means it's more likely the encounter the guy in the hallway, requiring the skill check (hold Up + Right to avoid the bonk)

### 2025-02-28 22:18:37 — awesomeWaves

Eh it's not really just the guy. it's the woman too. It varies all the time

### 2025-02-28 22:18:39 — IndividualContributor

So what I've done so far is only speed up the guys movement speed to compensate for the camera panning being removed. So essentially is closer to non-CSR now.

### 2025-02-28 22:19:05 — awesomeWaves

Its also super minor in general

### 2025-02-28 22:19:15 — IndividualContributor

Yeah the woman too I can speed up to run down the hall a bit and then revert to the original speed, same as the guy.

### 2025-02-28 22:19:24 — awesomeWaves

it's just something you've to try avoid on the fly

### 2025-02-28 22:20:49 — IndividualContributor

Ok I'll speed them both up for a section of the movement and then revert to their original speeds to compensate for the trims and we'll test it for a while. If it's still weird or annoying in a few weeks we can take another look.

### 2025-03-01 00:07:13 — IndividualContributor

Waves on 

"Can remove text outside Honey Bee Inn again. i think we're all in agreement now finally."

What did everyone agree on? it's currently 4 text boxes after the menu, should it be cut to 1?

### 2025-03-01 00:13:20 — awesomeWaves

Yeah last I heard from Jayrod, it was fine to cut again to one.

### 2025-03-01 00:13:41 — awesomeWaves

or whatever it was before you reverted it

### 2025-03-01 00:14:34 — IndividualContributor

I'm not sure what is was before, I'll trim to 1 anyway, it's an easy change if it needs move text boxes.

### 2025-03-01 00:15:08 — IndividualContributor

On this one

"Before Climbing the Plate, if you turbo and run up on Non-CSR you interact with the NPC. However it doesnt happen in CSR. Perhaps there's some small movement missing?"

I can interact with the NPC in both CSR and non-CSR by holding Run+Up+Turbo

### 2025-03-01 00:16:11 — IndividualContributor

_(no text)_
- file: 2025-03-01_00-13-07.mp4

### 2025-03-01 00:16:55 — IndividualContributor

is this the bit you meant?

### 2025-03-01 00:18:22 — IndividualContributor

Wait, "Climbing the Plate"... is this the kid at the rope?

### 2025-03-01 00:18:23 — awesomeWaves

no I meant before going up the 'Shiny Wire of Hope'

### 2025-03-01 00:18:28 — awesomeWaves

or whatever Barret calls it

### 2025-03-01 00:18:37 — awesomeWaves

on CSR I can hold turbo and run up, never talks to the kid

### 2025-03-01 00:18:45 — awesomeWaves

on full runs I always get stuck on him

### 2025-03-01 00:18:54 — awesomeWaves

because I'm used to CSR now ha

### 2025-03-01 00:18:57 — IndividualContributor

ok lemme check that, although I don't remember trimming that

### 2025-03-01 00:20:38 — IndividualContributor

ok so you can't talk to the kid at all in CSR lol

### 2025-03-01 00:28:56 — IndividualContributor

the music was borked here too, when you talk to the kid first the music dies off and a new track plays on non-CSR, in CSR the music doesn't change at all

### 2025-03-01 00:29:01 — IndividualContributor

it's fixed now

### 2025-03-01 00:37:42 — IndividualContributor

## Release v0.11.6 <:POGGIES:1074812242836603032> 

Disc 1
- Sped up NPCs in Shinra HQ after vent scene where Hojo walks up the stairs to compensate for trims
- Trim between Don's bedroom and Aps fight more to remove long wait
- Trimmed Don's basement a bit more
- Cut text boxes outside Honey Bee Inn pink guy to 1 after menu
- Fixed talking to the kid at the "Shiny Wire of Hope" (climbing up to Shinra HQ) and the music transition

Disc 2
- no changes

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2025-03-01 00:41:16 — IndividualContributor

https://tenor.com/view/the-office-dwight-schrute-rainn-wilson-celebration-victory-gif-25560395

### 2025-03-01 18:00:11 — cornfed

nice work lads

### 2025-03-01 18:00:21 — cornfed

kevein and karen will be  back to causing mayham now!

### 2025-03-01 18:01:31 — cornfed

i think dash tested the kevin karen thing a time ago, and if you dont bonk along the way to hojo you should always get around them , even if they are in the way you can weezle passed them with good inputs. but yeha is a diffecult sequence to reproduce

### 2025-03-01 18:04:30 — cornfed

ill prob do a csr tonight since i ran psx last night, 3rd 42 in 2 weeks KEK

### 2025-03-01 18:06:14 — cornfed

https://www.twitch.tv/zheal/clip/FaintAmazingStinkbugThisIsSparta-8dipyO9tWcV-RYnu this what it look like when karen in the way and you have good movement

### 2025-03-01 18:09:35 — cornfed

p sure kevein is always dodgeable, even if you use that door entry on the right to wiggle around

### 2025-03-01 18:09:53 — cornfed

granted you have okay movement

### 2025-03-01 18:09:56 — cornfed

karen is the shady one

### 2025-03-01 18:10:57 — cornfed

really lookin good tho boys, its realll really comin along so good

### 2025-03-01 18:13:40 — IndividualContributor

corn can you send me the vod of your last run with the nms trim suggestions you were calling out?

### 2025-03-01 18:14:08 — IndividualContributor

or a list of recent trim suggestions that you can remember from the last run?

### 2025-03-01 18:18:40 — awesomeWaves

If someone knows any more info on the HQ NPCs it would be nice to have an accurate csr to full run equivalent

### 2025-03-01 18:18:51 — awesomeWaves

it's almost there though for sure, very ittle left to trim

### 2025-03-01 18:22:16 — cornfed

https://www.twitch.tv/videos/2392062896

### 2025-03-01 18:23:19 — IndividualContributor

we just need to figure out a good solution given the RNG, Kevin has that 82% chance of 30 wait frames repeated, and Karen's RNG is more complex, it looks like she can do a bunch of stuff but either way they both have different RNG scenarios, and multiple at that, making it difficult to replicate. 

The current solution let's the RNG happen but then speeds up their initial movement to compensate for the trims, but there is not enough movement to fully compensate. Kevin and Karen both end up behind where they would normally be as a result.

### 2025-03-01 18:24:45 — IndividualContributor

I also found that Kevin's movement algorithm starts when you hit the trigger on the corner, but the code says otherwise. I need to investigate this a bit more to figure out when exactly they both get initialized and start their movement cycles.

### 2025-03-01 18:25:02 — cornfed

yeah its a tough one

### 2025-03-01 18:25:13 — cornfed

and its some stupid npcs in shinra kekw

### 2025-03-01 18:27:20 — IndividualContributor

The difficulty to importance ratio is way off on this one 😄 but still I'd like to get it aligned with a non-CSR too

### 2025-03-01 18:30:38 — awesomeWaves

Yeah for sure

### 2025-03-01 18:31:23 — awesomeWaves

I'm maybe a few small versions back at this point

### 2025-03-01 18:31:27 — awesomeWaves

will burn new ones for next run

### 2025-03-01 23:55:02 — Zheal

the guy can come exactly in a way where he blocks you enough that when the girl comes around she blocks you and you can't get past even with perfect movement

### 2025-03-01 23:59:45 — cornfed

an icic

### 2025-03-01 23:59:48 — cornfed

ah*

### 2025-03-02 00:15:12 — Zheal

but I only had that like twice ever or so

### 2025-03-02 03:40:19 — cornfed

after jessie skip when you get off the train, and barret tells everyone to meet up at the hideout, he runs left, it would prob feel smoother to move the txt to that last box or 2 after he runs left

### 2025-03-02 09:01:54 — IndividualContributor

Yeah that train scene is off a bit I'll take another look at it.

I'm thinking about just reverting Hojo HQ scene back to original. The Kevin and Karen RNG is too variable to replicate correctly if any time is trimmed there.

### 2025-03-02 10:00:09 — phek1200

I plan to run all bosses CSR so will have more inputs on what to trim. From my limited experience here is what I remember
- Gongaga before Turks fight
- Wutai story section + pagoda
- Gelnika before Turks fight
- Old man at Kalm

### 2025-03-02 10:01:55 — phek1200

And recruiting Vincent and Yuffie

### 2025-03-02 14:45:44 — phek1200

Ran on RetroSwan, 2x (Quad speed) and Infinite/Instantaneous setting
A decent run could've been around 4:26-27 ish
- file: image.png

### 2025-03-02 15:10:52 — IndividualContributor

GG Phek! An All Bosses run would be cool and thank you for offering the feedback. 

How did that NMS run go? Anything obvious to trim or is it fine?

### 2025-03-02 15:29:51 — phek1200

For all bosses run have to stop and adjust the setting pre Ultimate Weapon before fight, I can't stand the load speed if using normal seek speedup <:Kappa:1075235124200886273> 
will take a while to derust first, haven't run all bosses since end 2023

### 2025-03-02 15:30:12 — phek1200

i liked it, nothing major to trim imo. i am ok with everything

### 2025-03-02 15:35:14 — phek1200

also check this out: Tifa SOLO Carry armor (timestamped below) <:LUL:1074811553821511800>

### 2025-03-02 15:35:15 — phek1200

https://youtu.be/lnJgOwieUH4?t=13371

### 2025-03-02 16:47:41 — cornfed

niceeee phek

### 2025-03-02 16:47:48 — cornfed

thats kinda what time i was thinkin

### 2025-03-02 16:47:59 — cornfed

for a decent run

### 2025-03-02 16:48:44 — cornfed

sometimes you just gotta let jesus take the wheel

### 2025-03-02 16:49:57 — awesomeWaves

incredible fight haha

### 2025-03-02 16:50:02 — awesomeWaves

GG phek, killing it

### 2025-03-02 16:53:20 — cornfed

was just talking to zheal about the csr , and he was saying how we should maybe try to separate the idea of having it be as transparent with no slots and nms hundo etc. as a practice mod, and try to make csr its own identity. i.e. not having the scene at aeriths house, and trimming almost everything to 1 box  or no boxes. eliminating scenes like the disc 2 cota scene. and i tend to agree with im on that. doing that would give csr its own identity. and doing that would make it closer to its own category. we could have 2 versions, the version that is as close as we can get to rta full runs, and the csr. its own identity? lets discuss?

### 2025-03-02 16:55:06 — cornfed

than everyone who wants to gear up for full runs rocks the practice mod, and if your just wanting pure csr. thats there too. we would have to reroute many things. ram values. elevator vs stair strats. but in the end it would def be unique

### 2025-03-02 16:58:56 — awesomeWaves

I think we went through some of this already, I'm much more on the side of keeping it closer to Full Run strats tbh. Making it 'it's own thing' happens anyway when a final version is released.

### 2025-03-02 16:59:20 — awesomeWaves

but again, it really doesn't matter. Nobody has been gunning for a leaderboard. We're going to run it anyway

### 2025-03-02 17:01:30 — cornfed

if i were to be playing csr id def rock a version that wouldnt wreck my cosnole muscle memory

### 2025-03-02 17:01:34 — awesomeWaves

I think all that would be removed extra is maybe 4 minutes? Aeriths and Final Descent related scenes.

### 2025-03-02 17:01:47 — awesomeWaves

so for the sake of 4-5 mins shorter run, you'd have to remake all the manips etc

### 2025-03-02 17:01:48 — cornfed

yeah im not sure all what else that would eliminate

### 2025-03-02 17:01:55 — awesomeWaves

not worth imo

### 2025-03-02 17:02:28 — cornfed

i just know if we ever make a push to make it on the leaderboard, those the kinda things in push back we get.

### 2025-03-02 17:02:34 — awesomeWaves

if it was something like 30 mins shorter, I'd see value in it

### 2025-03-02 17:02:43 — awesomeWaves

but for a small extra time save, for the heap of effort

### 2025-03-02 17:03:06 — cornfed

yeah it would be an insane amount of work

### 2025-03-02 17:03:09 — cornfed

especially with fd

### 2025-03-02 17:04:12 — cornfed

also waves im totally on board with your ff8 move to youtube

### 2025-03-02 17:04:13 — cornfed

gg

### 2025-03-02 19:57:15 — IndividualContributor

This has come up before and honestly I like the idea of a run that hardcore trims a bunch of stuff resulting in an entirely new experience that needs to be routed with new manips etc. I'd actually love to see all the work that would go into it by runners.

But it's not something I'm interested in working on personally. The CSR we're making at the moment will be as per the original definition, essentially to keep all skill checks and avoid causing any muscle memory issues for categories if you go back to a non-CSR run. The tech, skips, manips, etc. is what I love about the game and the only way I can run it is to make it shorter, and thus this CSR was born.

I think what we're creating right now does provide it's own experience, it's more intense with less breaks and down time. This intensity adds a significant challenge to runs compared to non-CSR runs. Maybe leaning into this intensity a bit more would be desirable? trimming some of the Elevator Manip cutscene so you have to do your calculations quicker, or reducing the time you have to prep for a manip like the Tiny Bronco one? 

There may be some things we can fundamentally change in the CSR to create more of a new experience without damaging it's integrity and staying true to the original definition. If you've got any ideas fire them into this channel so we can chat about them.

### 2025-03-02 23:39:50 — chuky

Just let people do what they want. There's no need to rush any change again.

### 2025-03-03 00:15:46 — Doumeis

insane man <:doumeiLUL:1025884511046750378>

### 2025-03-03 00:15:49 — Doumeis

GG!

### 2025-03-03 14:53:16 — RJTheDestroyer

Just wanted to say I finally tried out the CSR and it seems really nice! I've just been using it for a casual thing I've been doing where I randomize the steproute at the start of the game and can't flee from any encounters and this makes that much more enjoyable lol, so thanks!

### 2025-03-03 14:56:22 — Zheal

no flee runs are super fun, yeah. it makes you deal with enemies, which you usually don't, and you're always properly leveled and ressources which is super comfy

### 2025-03-03 15:05:57 — RJTheDestroyer

Right after the pillar collapse, I got a fight with solo Cloud and it was a pincer vs 3 Whole Eaters and I almost died because I didn't have any healing items or Restore on him and had him in Fury (he didn't miss anything luckily) 😅

### 2025-03-03 15:07:36 — DylWingo

RJ isn't just doing Super Metroid now? <:Pog:1074812009494876272>  <:Kappa:707010870357655582>

### 2025-03-03 15:08:18 — DylWingo

On a serious note, I do want to try CSR someday. It seems like a good way to do practice runs for No Slots, but that will be whenever I get back on the No Slots grind and idk when that will be lmfao

### 2025-03-03 22:14:54 — cornfed

it def makes challenge runs alot less time consuming for suresies

### 2025-03-05 18:13:03 — IndividualContributor

So what's still an issue in the CSR? 

- Bronco manip, not enough time?
- ?

### 2025-03-05 19:17:55 — Jayrod

The Bronco manip I had to adjust by one second because of the extra load time but that was an easy fix

### 2025-03-05 19:21:24 — Jayrod

If we added the scene after the “big splash” back in it would more closely mirror what you do on full runs

### 2025-03-05 19:44:45 — Jayrod

-Can we shorten the scene before sample even more?
-possible to shorten aerith church scene more? Maybe speed up the movements of the soldiers shooting at aerith, etc.

### 2025-03-05 23:33:15 — IndividualContributor

Nice I'll add the Bronco scene back in and take a look at Sample and Aerith's church again

### 2025-03-05 23:33:50 — Jayrod

The Bronco scene just needs at least the final text box

### 2025-03-15 12:49:26 — IndividualContributor

## <:POGGIES:1074812242836603032> Release v0.11.7 

Disc 1
- (NMS) Increased movement speed of guards and Aerith in Aerith's Church
- Removed text boxes and movement coming out of the elevator before Sample Fight
- Added Tiny Bronco scene after it crashes for Bronco manip

Disc 2
- no changes

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2025-03-15 12:49:44 — IndividualContributor

https://tenor.com/view/dwight-k-shrute-the-office-what-huh-make-face-gif-16517329

### 2025-03-15 12:50:19 — IndividualContributor

Sorry this one took so long, some small changes to disc 1. Can't remember if there were any other high priority fixes?

### 2025-03-15 19:37:24 — IndividualContributor

I tried to shorten the before and after scenes of the Sample fight but I would need to figure out all of the character positions right before the options and move everyone into position as the scene loads in. This is a big pain in the ass and would take more time than it's worth at this point, I think it might save 10 secs but might take me several hours to get right. We can revisit this later if we can't find any better trims. I did however trim the scene where you come out of the elevator, instead of the party walking to rail and saying "Aerith" it just loads the next scene when you hit the trigger, so maybe 3 seconds trimmed, and it was trivial. 

The Aerith church scene is also a tricky one, but I did remove a couple text boxes and increased everyone's movement speed. The waiting for Aerith to get into position each time you have to choose an option is still the same. I'm afraid if I make these shorter then it would throw people off. This is also something we can revisit later and I think would be trivial with a bit of testing.

### 2025-03-15 19:39:36 — IndividualContributor

Bumping this because I'll likely be starting on All Bosses and Hundo soon

### 2025-03-15 22:45:16 — Doumeis

nice work IC <:POGGIES:1074812242836603032>

### 2025-03-15 22:45:32 — Doumeis

I'll do a run with it tomorrow or monday to test it out, let you know if I find anything broken

### 2025-03-22 06:17:16 — phek1200

Lots of execution error, but I'll just blame Hojo for causing the loss of sub 30
- file: image.png

### 2025-03-22 10:18:10 — IndividualContributor

GG Phek!

### 2025-03-22 10:18:17 — IndividualContributor

Any issues with the CSR?

### 2025-03-22 13:15:44 — Okamikaze

I always thought you fellers had Mystile for Hojo, guess he can still troll that hard?

### 2025-03-22 13:20:54 — phek1200

All good, love it
After this weekend it'll be a while until I can give feedback on the all bosses part, apologies 🫡

### 2025-03-22 13:22:28 — phek1200

I didn't change, still going at it no slots style on NMS run. Purely for gambling capsule skip and fast kill on the 3rd form
In this run, I got capsule skip but 2nd form crit and killed Tifa -> lost vaccine -> got slowed by 3rd form (after re big guard) -> watched the entire hell combo twice 
Guess I am using Mystile in the future <:KEKW:1074810897308069948>

### 2025-03-22 15:16:38 — Okamikaze

<:KEKW:1074810897308069948>

### 2025-03-22 15:16:43 — Okamikaze

Fair play

### 2025-03-23 03:07:21 — Doumeis

Good stuff man

### 2025-03-25 13:02:58 — cornfed

self induced hojo loss than SMILERS

### 2025-03-25 16:55:30 — cornfed

ggs tho on the pb, i was very much joking with the above statement, live hard , die harder sometimes

### 2025-03-28 18:18:08 — Deleted User

Hey guys, is there a preferred emulator for running CSR on? I'm using the latest version of Duck at 2x Read Speed but it crashed in Corel during my first attempt at a run. Also had a few issues during practice states.

### 2025-03-28 18:23:22 — IndividualContributor

Yes use RetroArch with the SwanStation core, it's the most stable so far for runs.

### 2025-03-28 18:25:18 — Deleted User

Great thanks, I've never used RetroArch but I assume it's just default settings. Good work btw, really enjoying trying this out

### 2025-03-28 18:33:54 — IndividualContributor

I think there are some official settings for runs, hang on I'll have a look around someone was talking about it recently

### 2025-03-28 18:39:12 — IndividualContributor

_(no text)_
- file: IMG20250328183853.jpg

### 2025-03-28 18:40:48 — IndividualContributor

These settings are in the Quick Menu of SwanStation core, i.e. when you run the game then hit F1 or PS Button on DS4 > Core Options > Console Settings

### 2025-03-28 18:41:53 — IndividualContributor

These align with the rules on SRC for Duckstation so I assume they are correct for RetroArch too

### 2025-03-28 19:00:11 — Deleted User

Thank you! I have Swan set-up now (I think). I just need to do this ^

### 2025-03-28 22:32:13 — Okamikaze

glglgl

### 2025-03-29 17:24:20 — IndividualContributor

## Release v0.11.8 <:SMILERS:1074813154770558976> 

Disc 1
- Fixed train scene before 7th Heaven, last text box is on Barret
- Reverted some animation trims for Barret after reactor explodes
- Fixed Aerith movement when talking to the Don Corneo guard for the first time
- Trimmed 7th Heaven Cloud and Tifa dialogue a bit more

Disc 2
- After Big shoes added a fade to black and back again when the Highwind scene is meant to play. (previously just regained control of Cloud and no fade in/out)

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2025-03-29 17:24:45 — IndividualContributor

https://tenor.com/view/dwight-the-office-theoffice-gif-27712963

### 2025-04-05 19:48:04 — IndividualContributor

## Release v0.11.9 <:SMILERS:1074813154770558976> 

Disc 1
- no changes

Disc 2
- Schizo fight starts immediately

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2025-04-05 19:48:23 — IndividualContributor

https://tenor.com/view/dwight-schrute-rainn-wilson-the-office-gif-4104008

### 2025-04-05 19:48:58 — IndividualContributor

Schizo fight was taking too long to start so I've shortened it, this release is a tiny update but thought it was worth pushing out.

### 2025-04-06 12:30:38 — Okamikaze

My v0.11.8 disc 2 never seeing the light of the day

### 2025-04-06 12:30:53 — Okamikaze

_(no text)_
- file: image0.gif

### 2025-04-14 22:11:15 — Okamikaze

Took a week or so break, played this run out

### 2025-04-14 22:11:18 — Okamikaze

_(no text)_
- file: image.png

### 2025-04-14 22:12:06 — Okamikaze

Forgot to heat up Cloud on the second cliff climb at Gaia's, was a very interesting run from then <:katombFacepalm:1050049387813941308>

### 2025-04-14 22:28:27 — Doumeis

GG man

### 2025-04-15 10:00:32 — IndividualContributor

Yeah GG Okami!

### 2025-04-19 01:40:19 — IndividualContributor

My first ever CSR run finished in a single session. I swapped to emulator after failing the Rufus mood mini-game and used save states throughout to redo fights. But I'm very happy with this and the fact I was finally able to finish a full run in one sitting KEKW.
- file: image.png

### 2025-04-20 01:27:33 — IndividualContributor

Another borked run, MK got me, switched to RetroArch to finish the run. Had to re-do a few fights but less than the last run! Still learning, only about 1 hour behind you now <@385844703091884033> KEKW
- file: image.png

### 2025-04-20 02:55:32 — phek1200

Huge GGs, IC. Only a matter of time before you know you're chasing the sub4 then bopping me, I believe you can do it

Please let me know if you have any questions at all or need help on this, happy to help you improve

### 2025-04-20 04:54:14 — Doumeis

Nice runs!

### 2025-04-20 23:30:31 — Okamikaze

My first ever run finished on steps (that I didn't have to cheat and skip Water Ring to accomplish)
- file: image.png

### 2025-04-20 23:40:24 — Okamikaze

Lost over 6 minutes that run, so can probably get a sub 4:05

### 2025-04-21 05:58:21 — IndividualContributor

GG Okami!

### 2025-04-25 09:15:48 — IndividualContributor

Another run that died at MK because of steps, swapped to emulator, and used a bunch of save states and reloads to finish. But I finished the run faster this time! Invalid but I enjoyed it and <@934998544971079710> raided with a bunch of awesome peeps 🥰.
- file: image.png

### 2025-05-11 16:35:31 — phek1200

not bad for a derust, but this run is segmented AF <:KEKW:1074810897308069948>
- file: image.png

### 2025-05-11 16:47:31 — DylWingo

GG

### 2025-05-12 16:18:46 — IndividualContributor

GG Phek! Holy moly I'll never catch up <:KEKW:1074810897308069948>

### 2025-05-12 16:27:05 — IndividualContributor

Phek is this equivalent to sub 6:40:xx non-CSR no slots?

### 2025-05-12 16:30:17 — IndividualContributor

Also Leaderboards are here, submit your runs please 🙏

https://docs.google.com/spreadsheets/d/19y6yHtODjS5R-VyvtHUKjAo3FL9Fif56p1REQsUzGWg

### 2025-05-13 14:45:20 — phek1200

Waves asked the same question before, i relook into the execution + RNG in the run and made educated guess that this run is probably equivalent of about 6:39, 6:40 in PSX disc

### 2025-05-13 14:45:46 — phek1200

here it is

### 2025-05-23 15:52:34 — IndividualContributor

## Release v0.12.0 <:SMILERS:1074813154770558976> 

Disc 1
- Before elevator fights, sped up Tifa running to Aerith
- Trimmed the dolphin before jumping up to Junon
- Trimmed after Force Stealer mini-game
- Added some text boxes back into scene before Red Dragon
- Trimmed the scene between the Break scene and end of disc 1, now Jenova Life is end of the disc 1 (similar to Hojo)

Disc 2
- Added text boxes back in for Scarlet getting gased in Escape from Junon section

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2025-05-23 15:53:22 — IndividualContributor

https://tenor.com/view/rainn-wilson-evil-laugh-mwahaha-motivated-bad-boy-gif-16287658

### 2025-05-23 15:54:29 — IndividualContributor

End of disc 1 is now Jenova fight -> Break 5 mins -> Disc swap. Previously there was a tiny scene where Cloud tells the crew "Let's go!", I've removed this and just go straight to "Save game?" out of the break.

### 2025-05-23 15:55:27 — IndividualContributor

And there were a few places where I've been mashing or holding turbo for no reason because text boxes were trimmed, I've put a few text boxes back in because if running non-CSR you would be turbo'n or mashing in these parts.

### 2025-05-23 15:56:20 — IndividualContributor

Lastly just some more QoL trims like removing the dolphin jumping up part before talking to Priscilla

### 2025-05-27 11:00:16 — phek1200

this one has trash D2 / D3 bosses, plus with minor timesaves from the new version
- file: image.png

### 2025-05-27 13:23:12 — IndividualContributor

Holy moly GG Phek!

### 2025-05-27 18:00:53 — Doumeis

good stuff man

### 2025-05-29 06:45:31 — Katombaz

wow amazing

### 2025-05-29 09:29:41 — IndividualContributor

I know right, another level. I'm sweating and panicking at a 5 hour pace <:KEKW:1074810897308069948>

### 2025-05-29 11:01:32 — phek1200

Running on RetroArch is certainly faster as well, I would love to try it on PS2 one day with burnt discs

### 2025-06-01 23:48:18 — lemon

Just FYI, several of the recordings on the CSR leaderboard pointing to twitch.tv are now dead links 😦

### 2025-06-02 08:52:19 — IndividualContributor

Thanks I'll ask peeps for new links and update them asap

### 2025-06-03 12:27:10 — Hope

I've been running the past week or so and noticed a few things.
To cut:
Theres only mashing for this entire clip so idk why its even in:
<https://www.twitch.tv/hopedrg/clip/RoughDirtyLadiesCoolCat-gGVzFcvaZtjoZs6w>
Could cut a couple:
<https://www.twitch.tv/hopedrg/clip/ExuberantGlutenFreeSlothTebowing-5A0RzlQlzaT8G3Sy>
Could cut the airplane, also the reeve seen is very long when you can/should jsut be holding right x the entire time. It's a cutscene left in:
<https://www.twitch.tv/hopedrg/clip/GiftedSassyJalapenoKappaRoss-d6Nc6eZzaWdJUk0v>
Oh also there is a conversation in the stairs that is just mashing I think should be removed. I understand there is a concern about it affecting what option is fastest. Personally I think a CSR should remove cutscenes and whatever is fastest is fastest. That's just my opinion and why I'm stating this. Optionally there is a small section at the top of the stairs too that could be cut.
To add:
Oh also think when wedge falls need to add a text box back. If you overpass there I think it's extra text boxes?
Also there is some general places where it feels inconsistent what to expect
Like 1 to 3 text boxes on no choice dialogues. My suggestions is some standard of probably 1 text box after a choice, 1 textbox on just mashing npcs.
Also there is ultra minor thing, last time for dons quest you talk to door guard of Don's mansion. It's missing a cloud run which time is based on where you talked to him.
And in leaving midgar aerith takes a step at walking speed that you optimize for but is cut out in the csr.

### 2025-06-15 05:25:43 — phek1200

Some fun highlights from the previous run

### 2025-06-15 05:26:41 — phek1200

https://youtu.be/Jb700NypRfk?si=QE2qlkdEF8tIuVUi&t=12780

Diamond Weapon "Hawk tuah"-ed Tifa 5 times

### 2025-06-15 05:32:04 — phek1200

https://youtu.be/Jb700NypRfk?si=SMUVXNGnqipa5YSd&t=7304

Petrif-Eye to the literal last attack

### 2025-06-15 08:34:32 — IndividualContributor

Holy moly Phek they are awesome fights thanks for sharing. And they are great to see the strat when things go very wrong and you can still just win the fight! I have alot of work to do!

### 2025-06-15 14:09:45 — phek1200

Thanks IC
I knew exactly what I was doing for DG, but this DW caught me a bit off guard

### 2025-06-15 17:22:51 — Teeejj

split name sent me
- file: image.png

### 2025-06-15 18:37:34 — IndividualContributor

## Release v0.13.0 <:POGGIES:1074812242836603032> 

Disc 1
- Trimmed after Jenova-Life fight
- Moved break scene to start of disc 2

Disc 2
- Break scene added to start of this disc

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2025-06-15 18:38:55 — IndividualContributor

I've moved the break scene to the start of disc 2 instead of at the end of the Jenova-Life fight. This let's you fight Jenova and disc 2 swap, then chill for 5 minutes. Previously you had to fight Jenova, then chill, and when you were coming back had to deal with disc swap. I feel this way gives you more of a relaxed start into Disc 2.

Caution: I haven't tested this on disc yet but will ASAP, I mention this because there have been issues previously related to the break scene and the disc swap failing. So it's working fine on emulator but maybe wait until I test on disc to burn new discs.

### 2025-06-15 22:25:20 — Hope

Really like the break being moved that reasoning makes a lot of sense

### 2025-07-14 10:56:36 — phek1200

derust YEP
- file: image.png

### 2025-07-14 13:05:24 — Doumeis

https://tenor.com/view/cage-nicolas-not-the-bees-gif-14420748

### 2025-07-14 13:11:00 — Teeejj

https://tenor.com/view/laughing-duck-gif-1363576254939741235

### 2025-07-30 00:28:35 — Zheal

<@183261151746850816> how's the CSR coming along? I'd like to dive into it soon. Can you do an All Bosses run with it?

### 2025-07-30 08:34:55 — IndividualContributor

I haven't checked the All Bosses route yet Zheal but you can do a run without issues. Mainly because nobody has run All Bosses on the CSR yet so I don't have a VOD to review for trims. 


I'd recommend using RetroArch or console hardware to avoid Duckstation's glitches and other issues.

### 2025-07-30 10:38:14 — Zheal

Guess I am doing some guinea pig work for all bosses then for you. Thanks

### 2025-07-30 12:10:42 — IndividualContributor

_(no text)_
- file: image0.gif

### 2025-07-30 12:17:04 — Zheal

thanks btw for your work on this, looking forward to try it

### 2025-07-30 12:45:21 — IndividualContributor

I hope you enjoy it. If you have any suggestions on trims, or reverting stuff, call them out and I'll catch them on the VOD.

### 2025-08-10 17:16:56 — phek1200

Some notable clips from my fun run these days <:Pepega:1074817516536352809>

### 2025-08-11 08:45:03 — IndividualContributor

That last DG hit was close holy moly

### 2025-08-18 08:24:40 — Okamikaze

When's CB skip and resetting for right arm? <:dummiPepega:1065334259008680016>

### 2025-11-06 14:57:16 — phek1200

_(no text)_
- file: image.png

### 2025-11-06 14:57:32 — phek1200

_(no text)_
- file: image.png

### 2025-11-06 17:17:37 — Doumeis

CSR is a blessing for nms practice

### 2025-11-06 17:17:41 — Doumeis

gg phek

### 2025-11-06 17:55:13 — IndividualContributor

GG! NMS 4:29:24!?

### 2025-11-06 20:54:28 — RJTheDestroyer

LOOOL me and my brother laughed so hard at that moment when we first saw that movie <:KEKW:1074810897308069948>

### 2025-11-07 11:49:37 — phek1200

Endgame and Infinity War had their fair share of humor for sure <:KEKW:1074810897308069948>

### 2026-04-11 09:54:23 — IndividualContributor

**Release v0.13.2** <:POGGIES:1074812242836603032> 

Disc 1
- Fixed the Don Corneo Doorman interaction, now Cloud and Aerith will walk to the spot before the next scene loads
- Updated "Daddy Pedro Pascal" to "Mango Mussolini" because the original text is a slur meant to be offensive, and Pedro is nice.

Disc 2
- No changes

Disc 3
- No changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR

### 2026-04-11 10:07:53 — phek1200

Great work as usual, IC

### 2026-04-11 10:09:42 — IndividualContributor

I'm going to try pick this up again, need to review some VODs for changes

### 2026-04-29 04:26:42 — TheRetroJay

can you do the return to midgar skip with CSR?

### 2026-04-29 07:16:21 — butterfly

Should be able to iirc

### 2026-04-29 21:40:55 — Okamikaze

Yes you can. In addition to that, upon being successful Cloud's character model is added back in and the track plays out as intended

### 2026-05-04 20:43:03 — TheRetroJay

does anyone know what the swanstation core on Retroarchs load time are comprable to duckstation?

### 2026-05-05 14:15:03 — Okamikaze

1:1 afaik

### 2026-05-05 14:15:47 — Okamikaze

so long as you use the sync to content framerate so the refresh rate is the same (the amount of frames per load would still be 1:1 though)

### 2026-07-06 12:14:32 — IndividualContributor

When did our CSR get ported to PC!?!? This is awesome

### 2026-07-06 14:03:07 — Doumeis

Wait really?

### 2026-07-06 17:31:43 — Jake

Matt did a thing <:KEKW:1074810897308069948>

### 2026-07-06 17:34:19 — butterfly

Oh cool!

### 2026-07-06 18:12:12 — petfriendamy

Me who made a PC CSR back in 2020

### 2026-07-06 18:12:27 — petfriendamy

(Mine was more for challenge runs than speedruns to be fair lol)

### 2026-07-06 18:12:39 — petfriendamy

Anyway, nice to have a proper CSR on PC

### 2026-07-06 23:51:54 — IndividualContributor

<@521419888959684659> are you responsible for this awesomeness? How'd you do it? Makou Reactor?

### 2026-07-06 23:52:50 — IndividualContributor

Yeah I saw it being played today and it seems to be stable.

### 2026-07-07 02:39:47 — Jake

He took your flevel edit and made some tweaks for pc, then made an installer/launcher for it too

### 2026-07-07 02:39:56 — Jake

I think he used makou reactor

### 2026-07-07 02:40:08 — Jake

He did a few streams where he was testing/editing it

### 2026-07-07 07:05:06 — TMD

I am indeed, and yes I used Makou Reactor.
For the most part it's just been a case of importing from your patched bin files.
A couple of things didn't quite translate, like this for example lol
https://www.twitch.tv/callmequack/clip/IronicAlluringQueleaRlyTho-EPMREdwn2hR9DeFr

### 2026-07-07 07:11:21 — TMD

I think most things are working as intended (on the no slots route at least) with a couple of pc specific changes

### 2026-07-07 07:12:49 — TMD

Thank you for your work on it IC

### 2026-07-07 07:51:21 — IndividualContributor

I was so happy to see the break scene and timer working! And is the music still fixed post Hojo fight?

### 2026-07-07 08:08:45 — TMD

Yeah music works fine

### 2026-07-07 12:38:49 — PrimitiveDeath

Is there a link to said pc csr?

### 2026-07-07 12:42:33 — TMD

https://drive.google.com/file/d/1VXQtJZD6TrG3RXO6kPYduW5EGEBmQsAP/view?usp=drive_link

### 2026-07-07 12:42:56 — TMD

current version - work in progress - may still be bugs

### 2026-07-07 12:44:41 — TMD

it's also only been tested on the 2013 steam version, no clue if it works on the new port

### 2026-07-07 14:02:31 — TMD

Differences in PC CSR:

No FMV after naming Barret
No Elmyra cutscene since waterfall isn't needed for pc ele manip
Rotating blade after placing battery is sped up - since list doesn't matter there for pc ele manip
No boat world map cutscene after Jenova Birth
Added the 3/4 extra text boxes before Black materia selection (just personal preference)
Diamond Weapon world map walk is super speedy - I used this by mav https://github.com/maciej-trebacz/ff7-landscaper (not sure if there is a psx alternative)

### 2026-07-07 14:02:35 — TMD

I think that's everything

### 2026-07-07 18:53:08 — IndividualContributor

Nice, some of these are impossible, I think, on PSX, e.g. if you remove the boat scene to Costa del Sol after Jenova fight, when Cloud leaves there he is a Chocobo and stuck on the world map lol

### 2026-07-07 19:04:34 — TMD

I had a similar thing when I first removed it - when I left Costa del sol Cloud's model was replaced by the ancient forest  🤣 
I moved this bit below the map jump and the problem went away, maybe it would work on psx too?
- file: image.png

### 2026-07-07 23:48:39 — IndividualContributor

Oh nice I'll try that!

### 2026-07-09 20:45:30 — KleinesTennis

Played PC CSR and made it to Mt. Corel without any issues. Fantastic work <@521419888959684659>! Thank you so much! Will continue playing and testing soon.

### 2026-07-13 19:26:29 — IndividualContributor

_(no text)_

### 2026-07-16 22:35:56 — KleinesTennis

Finished first time the CSR on PC. Really great work for playing and practicing No Slots on PC! Thanks <@521419888959684659>! 
2 minor things... I could not grab the Elixir in the Gold Saucer Hotel after Cait had stolen the black materia.
And is there a reason that the FMV of Sister Ray guarded by helicopters in Midgar is shown?
- file: 2026-07-17-sub424csr-PB.jpeg

### 2026-07-16 22:52:43 — Teeejj

the reason for the fmv is fd manip

### 2026-07-16 23:09:10 — KleinesTennis

I see! Thanks. (Obv I am not doing the FD manip.)

### 2026-07-17 12:27:59 — cornfed

making a csr catered around no slots is fine, with the scenes intact for fd and stuff, but what if someone wants to run all bosses csr, or nms csr? i ask this not to argue but to just bring to the table that other categories would just lose time there being forced to watch a cutscene that doesnt do them any good. just little things like that we should probably discuss. ff7 isnt like ff8, or ff9, wher eu can just make a csr and call it good,  csr could be used for nms, all bosses,  slots and hundo.  so we should really talk about how making it as close to no slots having an impact on the other categories

### 2026-07-17 12:29:04 — cornfed

i just dont want alot of effort to go into it, and we have this talk at the end about it. when its trying to become a category

### 2026-07-17 12:30:10 — cornfed

is there a way to enable or disable the scene ? depending ont he category you want to run?

### 2026-07-17 15:21:55 — Hope

I think you technically can but it would be a bit convoluted. Probably easier to make different versions of the csr if you went that route. Where as if you just make it agnostic to route/type and just remove all the cutscenes instead of leaving stuff in to preserve things about a route you dont have to worry about that and make a new experience that just is what it is and works for all routes.

### 2026-07-17 15:28:58 — petfriendamy

In my CSR, I made an NPC you had to talk to to skip certain things (namely the Kalm flashback) specifically because I wanted to be able to do speedrun tricks

### 2026-07-17 15:29:17 — petfriendamy

Could theoretically do something similar?

### 2026-07-17 15:29:51 — petfriendamy

(Maybe just a menu so it doesn't mess with steps)

### 2026-07-17 15:32:56 — BiG SPiLL

Stupid question, can this be done when selecting New Game?

### 2026-07-17 15:50:49 — TMD

On pc this would be super easy since you could have different flevel files for each category and choose which category you were planning to run when installing the csr mod.
For psx you could potentially add a variable after an nms specific section, then set it up to skip the cutscene if the variable matches a specific value, I think that would work.

### 2026-07-17 16:04:22 — cornfed

yeah , lets definately keep our minds open for ideas on this issue, i would really love to find something that works for all partys and categories

### 2026-07-21 21:13:01 — IndividualContributor

Nice that works for me, I've yet to test it on hardware but so far so good.
- file: image.png
- file: image.png
- file: image.png

### 2026-07-21 21:15:00 — IndividualContributor

He's not a chicken after removing the Jenova to Sol boat trip
- file: image.png

### 2026-07-21 21:24:57 — IndividualContributor

<@521419888959684659> can I link to your installer for this CSR on PC? 

And just curious, do you apply a patch on top of this to make the PC specific changes? or how does work for the installer?

### 2026-07-21 21:28:21 — IndividualContributor

I would also like to test using this https://github.com/maciej-trebacz/ff7-landscaper to modify the PSX map for the Diamond weapon speed up thing, or use it to at least figure out the diff that would be needed to make the change on disc binary using something like Ghidra. Although burning this afterwards and running on hardware is very unlikely to work.

### 2026-07-21 21:33:41 — IndividualContributor

📢 Release v0.14.0 <:POGGIES:1074812242836603032> 

https://github.com/individualcontributordev/Final-Fantasy-7-CSR/blob/main/csr/CHANGELOG.md#v0140

Disc 1
- Removed boat trip to Costa Del Sol after Jenova fight
- (also removes scene after naming Barret at the start of the game)

Disc 2
- No changes

Disc 3
- no changes

### 2026-07-21 21:54:23 — IndividualContributor

With 5 days to go there is a clear winner, "Why not both?"....great. Now I have to create two more versions of this lol. 

My plan is to consider all the feedback that I've received while creating the original CSR, e.g. removing every cutscene even if it impacts existing skips. I'm also going to make another version that goes ham 🐷  on all the nonsense (well what I consider nonsense) to make the game even shorter and moar hard 🍆 while speedrunning. 

The CSR versions can now be described as follows:
- **CSR (original)** Keeps all "skill checks" in the game and can also be described as "Same as the original only shorter"
- **CSR+** Same as CSR but removes all cutscenes regardless of impact on existing strats and skips
- **CSR++** Same as CSR+ with alot of "nonsense" removed like mashing through a dialogue only to select the first option, meeting Aerith for the first time after blowing up Reactor 1, Jessie getting her leg stuck and having to help her to progress, etc. Boring filler stuff basically.  

I will admit CSR++ will be heavily opinionated and there will be some plot holes but I aim to still provide a nice experience for speedrunning.

I won't be modifying anything beyond cutscenes, text boxes, and boring shite in any of these new versions because at the heart of each I still want some of the skills and muscle memory to transfer between them. So no boss fight manipulations, no new items or tweaks to stats, just pure surgical shite removal to create a nice action packed experience. 

Also this might take a while so shout at me if you want something prioritised. ❤️

### 2026-07-21 22:05:12 — IndividualContributor

Honestly I had not considered the cutscenes that remained and their irrelevance to some of the other categories, this is an interesting point thanks Cornfed. For context on this, I did want the CSR to be playable across all categories and I think we succeeded in that, at least compared to the original it is shorter across all categories with no time losses as a result of the CSR itself. I believe you are referring to those scenes that could be removed without impacting to the strats and skips of a specific category, but this would however impact other categories then which I consider a net negative. 

CSR+ seems like it would be better suited for those categories like NMS that rely less on the skips so the removal of all cutscenes would be beneficial, which I'm super excited for honestly. 

Hopefully the new CSR+ and CSR++ versions will cater for a larger quantity of the community and will make each category a little more challenging overall. 

I'm excited but also, why the f*ck am I giving myself so much work to do... 😭 

Please post your suggestions and feedback in this channel, I will try to track and implement it all (within reason).

### 2026-07-21 22:12:11 — IndividualContributor

I like this idea and have experimented with providing additional options for NPCs like the random sick guy in the tube before Aerith's house. Talk to him to have predictable elevator manips (this didn't work out because I'm too dumb to figure out how to lock RNG using Makou Reactor that works on console hardware). 

But providing some kind of mechanism to toggle certain things on/off I think would be cool for the Elmyra cutscene to allow for NMS to skip it in the original CSR, so they wouldn't have to settle for CSR+ if it did not suit perfectly.

### 2026-07-21 22:17:25 — IndividualContributor

> I could not grab the Elixir in the Gold Saucer Hotel after Cait had stolen the black materia.
I need to check this out, hadn't noticed before. Keep the bugs coming!

### 2026-07-22 00:36:43 — phek1200

IC, please don't stress about this. You don't owe us anything at all pertaining to this CSR. In fact we're the ones to be grateful to have this tool

### 2026-07-22 00:47:20 — DylWingo

^^^^^^^^^^

### 2026-07-22 00:47:26 — DylWingo

couldnt have said it better

### 2026-07-22 07:37:40 — KleinesTennis

Played yesterday a second time the whole CSR for PC. This time no bug in Gold Saucer, don't know what happened first time. Overall great to practice and for me perfect. I had to minor things which where strange during playing, but forget about it, obv not important!

### 2026-07-22 09:21:22 — TMD

Yeah sure.
So the installer replaces 2 files, the flevel file which is all the field changes, and the world_us file for the diamond weapon changes.
- file: image.png
- file: image.png

### 2026-07-22 11:36:16 — IndividualContributor

Share the link here to the installer and I'll add it to the github for the CSR. I wonder can I apply your changes then check makou reactor to see if there was a diff? although I thnk the PC files and the PSX binaries don't overlap in away meaningful way that I can use.

### 2026-07-22 12:02:25 — TMD

Here's the link: https://drive.google.com/file/d/1VXQtJZD6TrG3RXO6kPYduW5EGEBmQsAP/view?usp=drive_link

It's only been tested for no slots so far and seems to work as expected, can't guarantee any other categories yet.

### 2026-07-22 17:53:27 — cornfed

i also have another topic that could be discussed , ff9 psx csr has cut out the fan fares, and boss death animations to save even more time. sorry for the delayed response hehe, but yeah <@183261151746850816> your work on this has been invaluable . as phek said above ❤️

### 2026-07-22 17:55:19 — cornfed

as it stands, the csr is in a completely runnable state, so for now, nothing needs to be done , but discussing things and maybe holding some in house voting on what the community wants csr to be, would further its track to becoming a category one daay

### 2026-07-22 20:27:02 — IndividualContributor

So far it tends to be folks posting in here and discussing suggestions which seems to work well for this CSR I think, but if there is a significant change that elicits strong opinions one way or another then a vote is a great idea! iirc there have only been a couple of these instances to date, e.g. removing all cutscenes instead of leaving those required for existing skips/manips, and removing dialogues with options that are not used and can be mashed through. I think the CSR+ and CSR++ addresses both of those preferences, albeit the CSR++ will also elliminate other such things that are deemed "filler". I will prioritise the CSR+ given that it will be the quickest to complete to the same standard as the existing CSR. CSR++ will be a labour of love that unltimately will let me do some speedruns and maybe stream consistently! 

All suggestions and ideas are welcome don't be reluctant to share even if your not sure if its already been discussed.

### 2026-07-22 22:31:15 — Okamikaze

Tbf, I think specifically for FF9's case the removed fight ends is mostly to make up for how long each encounter takes to "start" compared to HD

### 2026-07-22 22:43:28 — cornfed

<@183261151746850816>  do you have a save state with the cutscene cut out of city of the ancients? i was wondering this so i could test the list value with the scene, vs without having it, there is a slim chance , very slim, that it still lines up hehe

### 2026-07-22 22:45:43 — cornfed

<@521419888959684659> did you test this already?

### 2026-07-22 22:45:48 — IndividualContributor

Do you mean the waterfall scene? not yet just finished cutting Aerith's house and the Hojo FD manip scenes. I would have to release a patch and you would have to apply it to test these changes though, save states won't store the changes themselves unfortunately.

### 2026-07-22 22:46:14 — cornfed

no, disc 2 scene in city of ancients , for final descent manip

### 2026-07-22 22:46:39 — cornfed

there is a small chance that it could line up or be close to lining up, which in that case nothing or just  small edit would need to be made

### 2026-07-22 22:46:55 — IndividualContributor

oh yeah sorry I meant waterfall with Bugen and the gang inside

### 2026-07-22 22:47:00 — cornfed

to get on the correct list value, the setup that is

### 2026-07-22 22:47:30 — IndividualContributor

Wouldn't the Hojo FD manip scene mess with list anyway though?

### 2026-07-22 22:48:08 — cornfed

hojo requires talking to him well, after midgar skip, and good mashing. all the magic happens when u you leave the room where the scene plays in city of ancients

### 2026-07-22 22:49:03 — cornfed

o i see your point now

### 2026-07-22 22:49:10 — cornfed

cutting that too would have to be factored in

### 2026-07-22 22:49:24 — IndividualContributor

right but now you don't talk to him at all in CSR+ with all the cutscenes removed so list won't advance like it did before. You can still hold Run + Right and fight him to skip return to migdar, or not and just continue playing for NMS

### 2026-07-22 22:50:03 — cornfed

yeah, i would have to check that , it wouldnt be hard too, i can once your ready with it , no rushes.

### 2026-07-22 22:50:49 — IndividualContributor

I was going to release what I have now so it'll be ready in like 10 mins, disc 1 Aeriths house and disc 2 hojo scenes

### 2026-07-22 22:51:07 — cornfed

okay

### 2026-07-22 22:51:44 — cornfed

i can play with it a little tonight, its a perfect time for me to rewatch dashes video on fd anyways, as ive been dragging my feet in learning it fully for no slots

### 2026-07-22 22:51:50 — cornfed

thanks man

### 2026-07-22 22:52:43 — cornfed

i will also do a csr runs soon

### 2026-07-22 22:59:58 — IndividualContributor

📢 Release v0.1.0 CSR+ 

## v0.1.0
- Created FF7 CSR+ based on FF7 CSR v0.14.0

Disc 1
- Aerith's house cutscene removed

Disc 2
- Hojo FD manip cutscene removed

Disc 3
- no changes

https://github.com/individualcontributordev/Final-Fantasy-7-CSR/tree/main/csr%2B

First release of the new CSR+, built on CSR v0.14.0 with the above changes for the first release.

### 2026-07-23 18:27:21 — IndividualContributor

Quick note on the encounters, I can't modify them for PSX using Makou Reactor. I imagine a more invasive change would be needed to the disc binary, however I'm looking at ways to translate the changes made to PC using existing tools to PSX disc but it's not looking good 😄

### 2026-07-23 18:34:56 — IndividualContributor

Some technical context; these CSRs are primarily for PSX disc and should run on hardware after burning to disc. Binary on disc is not the same as RAM in Emulators/PC. Binary contains instructions for the console engine or Emu about how to organize RAM and the values that should be stored there. It's not possible to apply the same changes done to RAM in Emu/PC directly to disc binary and have it work on console hardware.

### 2026-07-23 22:27:23 — Okamikaze

Goddamn, for FPGA the last 2 CSR releases didn't seem to work but the CSR+ does. This is already very promising

### 2026-07-24 01:38:33 — IndividualContributor

What's FPGA?

### 2026-07-24 01:41:47 — IndividualContributor

Oh is it the new console thing? https://retroremake.co/pages/superstation%E1%B5%92%E2%81%BF%E1%B5%89

### 2026-07-24 01:42:24 — IndividualContributor

Is there an issue with the latest CSR releases?

### 2026-07-24 01:57:51 — phek1200

If CSR+ and CSR++ is a considerably huge project, I think that removing the fan fare, entering battle animation and boss death animation is probably the last one to do. These animations in ff9 are long as what Okami said, so it makes sense to remove

### 2026-07-24 12:32:59 — Okamikaze

New one is fine, the other ones didn't work though

### 2026-07-24 12:33:39 — Okamikaze

I didn't wanna ask however, since troubleshooting specifically for fpga when it works on other forms of emulation sounds incredibly arduous and annoying

### 2026-07-24 12:34:26 — Okamikaze

Yeah that's what I use, it uses FPGA

### 2026-07-24 12:36:15 — Okamikaze

TMD's IGT generating software seems like it's going to prove very useful for this <:KEKW:1074810897308069948>

### 2026-07-24 18:53:04 — IndividualContributor

<@170713534726930432> does CSR just not load? How might I reproduce FPGA issues?

It should work if CSR+ does which worries me

### 2026-07-24 22:10:53 — Okamikaze

That's the thing IC, I have no bloody clue how you would emulate such an environment to troubleshoot it.
You would know more than me of course, but it's above my pay grade <:KEKW:1074810897308069948> 

It gets stuck on the Sony screen, with every possible combination of load settings. The same CHD's work perfectly for me on Duck

### 2026-07-24 22:11:40 — Okamikaze

I guess maybe some Linux/pi thing? Idk

### 2026-07-26 10:31:15 — IndividualContributor

What's a CHD? Is that a file type for the console?

### 2026-07-26 11:33:39 — Okamikaze

Yeah it's typically used for multi-disc games, more common place before m3u. Bin and cue's work, but cause a reset on disc swap just like BizHawk

### 2026-07-26 14:00:06 — IndividualContributor

I you get a chance can you test v0.13.3 https://github.com/individualcontributordev/Final-Fantasy-7-CSR/blob/main/csr/CHANGELOG.md#v0133 on you SuperOne console to eliminate the latest change (remove boat trip to Sol) which I think might be causing it

### 2026-07-26 14:10:38 — Okamikaze

Fwiw I believe it was version v0.13.0 I last tried, but I can check this too

### 2026-07-26 14:37:41 — Okamikaze

Can confirm it boots

### 2026-07-26 14:40:00 — Okamikaze

I can do a runthrough later on if I find time, just to make sure. But we're over the major hurdle

### 2026-07-26 14:42:44 — IndividualContributor

So it's looking like the very latest v0.14.0 change of removing the boat trip after Jenova fight to Sol is causing the issue?

### 2026-07-26 14:43:50 — IndividualContributor

You mean v0.13.3 boots?

### 2026-07-26 14:43:56 — Okamikaze

YEP

### 2026-07-26 14:44:09 — Okamikaze

Haven't tried yet. Would you like me to?

### 2026-07-26 14:44:48 — IndividualContributor

Yes if you have time, this is the latest CSR version that you mentioned did not work correctly on your FPGA console right?

### 2026-07-26 14:45:07 — Okamikaze

It was v0.13.0

### 2026-07-26 14:46:07 — IndividualContributor

FPGA Console test:
- CSR v0.14.0 - not working
- CSR v0.13.3 - working
- CSR v0.13.0 - working

is this correct?

### 2026-07-26 14:46:35 — Okamikaze

FPGA Console test:
CSR v0.14.0 - pending
CSR v0.13.3 - working
CSR v0.13.0 - not working

### 2026-07-26 14:46:38 — Okamikaze

Sorry for the confusion

### 2026-07-26 14:47:04 — IndividualContributor

Oh v0.13.0 was not working but the latest ones are, interesting.

### 2026-07-26 14:47:14 — Okamikaze

I'll grab all 3 chd's this time, since it will be the version I'll be running on if it works

### 2026-07-26 14:48:15 — IndividualContributor

Well if v0.14.0 works we can ignore v0.13.0

### 2026-07-26 14:48:53 — IndividualContributor

And if you have time a test of the CSR+ v0.14.0 would be great too

### 2026-07-26 14:50:42 — IndividualContributor

:thread: CSR+ changes

### 2026-07-26 14:53:24 — Okamikaze

https://youtube.com/live/3PoBi0IraWA
Did a small test of the first CSR+ patch the other day (with my hands slipping off the steering wheel)

### 2026-07-26 14:53:27 — Okamikaze

No hiccups

### 2026-07-26 14:54:07 — IndividualContributor

Nice I'll take a look at that, good to know there were no issues.

### 2026-07-26 14:55:49 — Okamikaze

A lot of it was just me faffing with my layout, I think I might need a seperate layout if I'm going to continue capturing HDMI

### 2026-07-26 14:55:54 — Okamikaze

But there is gameplay in there

### 2026-07-26 14:57:00 — IndividualContributor

No this is great, and if you call out suggestions while you're playing I catch them, or have a reference if you suggest something in the thread.

### 2026-07-26 15:01:42 — cornfed

i did not get a chance to test this weekend, sorry IC  i will next weekend, i had trouble sleeping all weekend

### 2026-07-26 15:02:18 — IndividualContributor

hey no worries this is going to take a while anyway so no rush testing.

### 2026-07-26 15:03:22 — IndividualContributor

Also for anyone interested https://discord.com/channels/936291902133796955/936291948266930226/1530890864547594316

### 2026-07-26 15:04:03 — IndividualContributor

^ I made a mod for the psx disc for fun to have random encounters like in FF9, but kept the pre-empt boss stuff so you can route the pre-empts but not the encounters

### 2026-07-26 15:05:36 — IndividualContributor

I'm going to make it available for CSR++ as another patch, and can do for CSR and CSR+ too if people are interested.

### 2026-07-26 15:08:12 — Okamikaze

Random encounters with a chance of pincer 😨

### 2026-07-26 15:11:48 — IndividualContributor

Yes! I'm still testing but it follows the same vanilla increments of formation, stepid, offset, etc. So I'm not sure how this would affect specific formations. e.g. you might get 0 encounters running through the entire Great Glacier, or you could get > 0, so no predictable stilva etc.

### 2026-07-26 15:11:55 — Okamikaze

So forcing encs to setup for pre-emps will take the same amount of time as normal? (excluding encounter variance)

### 2026-07-26 15:12:51 — Okamikaze

Or are we just working with hitting those Step ID's by chance

### 2026-07-26 15:13:03 — IndividualContributor

The pre-empts are based on stepid offset, so as long as you create a (use an existing) route you can hit the pre-empts on the boss fights as usual, but you will get different encounters while on your route.

### 2026-07-26 15:13:23 — Okamikaze

ah

### 2026-07-26 15:13:46 — Okamikaze

The cue's work for v0.14.0, gonna test chd now

### 2026-07-26 15:18:18 — IndividualContributor

Well this is interesting, we force fights to figure out what stepid/offset we're on and then route from there. There won't be a reliable way to know what stepid/offset your on by forcing a fight with this. The encounter is not based on a danger value hitting an encounter threshold. 

I don't even know how you would route in the pre-empts or get required fights actually.

### 2026-07-26 15:21:01 — IndividualContributor

How does this type of stuff work in FF9? I'll need to check

### 2026-07-26 15:22:09 — Okamikaze

v0.14.0 CHD's seem to be working

### 2026-07-26 15:23:02 — IndividualContributor

I might make some of the more obvious changes to the CSR+ then burn to disc and test on console.

### 2026-07-27 14:45:03 — IndividualContributor

I made a builder for these CSR and mod patches. Use your original .bin files and then pick what you want. I've tested the CSR+ burn to disc and run on my 77003 mechapwnd console and it seems fine. I haven't done a full run with it but i'm testing some other stuff and should get a full run done soon. https://individualcontributor.dev/builder/

### 2026-07-27 14:53:12 — IndividualContributor

Also you can play a demo of the CSR++, its available from the builder. And I would recommend the 25% encounter mod first, its the closest in "feel" to a step routed run (light encounters because of intentional routing), but it is random so don't be angry with me if you have bad luck 😄

Oh and CSR++ is not like the original in terms of order of execution, and some stuff is re-worked (hint Jessie does not get her leg stuck in reator 1 😉 )

### 2026-07-27 16:22:36 — IndividualContributor

My random encounter mod is working on ps2 slim console 🤯 I used CSR++ with the random encounter add-on, burn the disc, and played through guard scorpion. I'm very surprised this worked and adds promise for <@266664783502245888> 's suggestion of shortening the battle death animations, and speeding up Diamond weapon for console now that I think of it.

### 2026-07-27 16:23:10 — IndividualContributor

Moar testing needed

### 2026-07-27 16:27:09 — IndividualContributor

OMG this is going to cause so many more resets in Midgar, first test got a few encouters from start to reactor 1 end. Second test got 3 encs before getting into the reactor itself <:KEKW:1074810897308069948>

### 2026-07-27 16:28:07 — IndividualContributor

This is the 25% encounter rate (light, step route feel), 50% being equivalent to vanilla (no step route), and 75% being dense encounters.

### 2026-07-27 16:33:02 — IndividualContributor

_(no text)_
- file: IMG20260727173221.jpg

### 2026-07-27 16:34:29 — IndividualContributor

CSR++ changes

### 2026-07-27 18:12:58 — cornfed

very cool ic, love to see it!

### 2026-07-27 19:26:33 — IndividualContributor

_(no text)_

### 2026-07-27 20:17:32 — IndividualContributor

I'll continue to update the CSR and I'm building add-ons for it for the CSR+ experience, plus some other fun mods when I find time. Get them all here https://individualcontributor.dev/builder/

CSR — skill checks kept; FMVs and long sequences cut or shortened.
CSR+ — more aggressive cutscene removal.

### 2026-07-29 11:57:11 — IndividualContributor

I'm reducing the scope of what I had planned to work on here, removed the CSR++, and the plan for CSR+ is to provide "add-ons" for the CSR base experience, e.g. Aerith's house, Hojo FD manip scenes, etc. 

So if you want to play the CSR just use the builder and patch your .bins. If you want CSR+ then pick the CSR base experience and enable the add-ons you want. Check the builder UI for context. This allows players to choose the add-ons they want, etc. you could also test out the random encounter "add-ons" I've made for fields and the world map 😉

FYI some add-ons only apply to certain discs, e.g. Aerith's house on disc 1, Hojo on disc 2, etc. So in the builder when you load your disc .bin file it will show you the compatible add-ons for that disc.

There are also "presets", so for CSR+ pick that preset and it will automatically enable the add-ons across all discs for this preset.

### 2026-07-29 11:59:25 — IndividualContributor

The CSR++ experience I'm building I'm just calling it the "Highwind" mod (start to finish speedrun reduced as much as possible without breaking the game too much) A.K.A Dad mode, Very little time mod, Too many things to do IRL mod. It will also be on the builder for anyone interested.

### 2026-07-29 12:59:22 — Okamikaze

I kinda like that tbh. Stuff like going straight from Floor 65 to 67 in Shinra would feel weird

### 2026-07-29 12:59:30 — Okamikaze

That's what I imagine CSR++ as anyway

### 2026-07-29 18:50:26 — IndividualContributor

I've actually done very little to the "Highwind" mod but I think I understand what you mean. I'm removing some of the "filler" stuff like e.g. maybe making stairs shorter, Shinra prison scene shortened, wall market can be done in any order. i.e. stuff that just feels a bit forced or trivial

### 2026-07-29 18:51:18 — IndividualContributor

Some of the cuts to Highwind may end up as "add-ons"

### 2026-07-29 19:03:22 — IndividualContributor

Just to clarify the CSR+ add-ons are specifically for the current CSR. The field and world map random encounter add-ons are for any base, e.g. unmodified, CSR, Highwind.

Highwind will be a single base version.

I plan to create CSR specific add-ons and general add-ons so people can build whatever experience they want.

And all for PSX disc! That will run on hardware when burned to disc.

