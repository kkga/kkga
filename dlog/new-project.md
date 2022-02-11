---
title: New project, yet again
date: 2020-11-02
layout: ../../layouts/PostLayout.astro
---

The FPS project joined the big pile of unfinished prototypes and I’m working on
a new thing again.

It’s (supposedly) much simpler and it’s 2D. A non-traditional tower-defense game
with roguelike elements (I could never get away without some roguelike
elements).

Non-traditional part is a having a big focus on freeform tower positioning that
affects and changes the path that mobs need to take to get to their target, as
opposed to usually having a fixed path in traditional tower-defense game. I’ve
been prototyping and testing this approach for a while and (at least for me) it
adds a whole new level of depth to positioning and interaction with the map.

I have a bare-bone prototype already, including some essential pieces, like:

- map interactions for placing towers
- recalculating the paths mobs based on changes in the map
- system for creating various map “actors” (i.e. towers and mobs) with different
  stats and actions
- modifiers (upgrades) that can be added to towers to change their stats
- timed status effects (buffs/debuffs) that also can be added to towers to
  modify their stats

Looks like I have all the basic building blocks ready, so next step is creating
the initial set of towers and mobs.
