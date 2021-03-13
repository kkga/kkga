---
date: 2020-03-20
---

# Refocusing on gameplay

Last few evenings/nights/mornings I've been mostly working on random parts that were unfinished.

The weapon system is now fully in place using a state machine pattern, so now I can actually create all kinds of different weapons including projectile-based instead of only instant hitscans. That was fun to work on as I like implementing and using state machines.

I also made a very useful in-game debug panel that works in isolation. Every class can now have a "debug_info" dictionary that it updates with keys that I want to track and emits a globally defined signal whenever the values are updated. The debugger is just a separate autoloaded UI panel that listens to that signal and updates the UI on every change. This way I can track any debug info inside the needed class as just a dictionary and don't have to create one-off implementations to show it on the screen. It's been very helpful while working on the weapon state machine. It's worth spending time on custom tooling as it can save a lot of pain in the long run.

![in-game debug panel](/img/dlog/debug-panel.png)

Yesterday I read [an article by Derek Yu](https://www.derekyu.com/makegames/deathloops.html) where he describes two types of "death loops" that people often get stuck in while working on games. Even though nothing i read there is new, it made me realize that I've been neglecting the work on actual gameplay for a while now. So I decided to hold off from spending too much on any non-core-gameplay parts for now. My "brain dump" column in Trello is overflowing with random gameplay ideas that I've been collecting and I want to process it to have an understanding of where to move. The plan is to spend some time this weekend on writing a rough outline of how I want the main mechanics to work and synergize.
