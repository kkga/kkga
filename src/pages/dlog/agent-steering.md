---
layout: "../../layouts/PostLayout.astro"
title: Wrapping up initial version of enemy agent steering
date: 2020-03-14
---

yesterday i spent most of the day tracking a weird bug with the physics of AI
agents. that's the disadvantage of using a 3rd party library — if something
isn't working as expected, you might spend hours hunting for the origin of the
problem and trying to make it work. in my case the weirdness was the result of
Godot engine defaulting to negative Z axis as "forward" for some of its built-in
methods, while the steering framework I use expects it to be positive Z. the fix
was a 5 min work, but tracking the issue took most of the day :/

i'm tired of working on AI steering at this point. as i mentioned before —
vector math and physics isn't something i'm very good at. for now, the enemies
have a pretty straigforward state machine that is easily extendable and can
interact with the steering agent implemented in an enemy. so enemies can switch
between following their target (player), slowing down when target is close,
moving away when target is too close and so on... that's more than i need for
now.
