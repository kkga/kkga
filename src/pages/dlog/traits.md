---
layout: "../../layouts/PageLayout.astro"
title: Character development. Traits.
date: 2020-03-25
---

as planned, i tried to spend some time over the weekend planning my designs
instead of programming... it didn't go well.

although i have some understanding of where to move, it's hard to formalize the
direction for now for a few reasons: 1) i guess i'm not skilled in game design
enough to be able to pre-construct an elegant solution on paper; and 2) i
actually prefer designing from the bottom up.

by the 2nd point i mean it makes more sense to me to start shaping up various
smaller parts and mechanics, make some simple implementations and try them out.
some of them will feel right and most definitely will lead to more discoveries
along the way. this is a more natural process.

so instead of thinking too much i decided that the game (in its current foggy
vision of being a roguelike FPS) clearly needs some sort of character
development. this immediately sparked a bunch of ideas on how it can be
implmented and how other parts might work with it.

as I don't want to spend too much time digging into specific solutions, I came
up with a rather simple trait-based system where the player can choose from a
variety of traits that modify certain stats and maybe have some special effects
like adding an extra weapon slot or allowing to see the exit on map from the
start. The goal is to add gameplay variety where the player can tweak a bunch of
variables at certain points in a single run and get different results.

i've already implemented the bare functionality for this, so next step would be
integrating it into gameplay by creatign a bunch of initial traits and figuring
out at which point during a game run the player should choose the next trait.
