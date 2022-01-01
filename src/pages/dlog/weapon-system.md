---
title: Weapon system
date: 2020-03-15
layout: ../../layouts/PostLayout.astro
---

Refactoring day. After wrapping up the initial work on steering AI, I decided to
switch to something less challenging for a moment and refactor the weapon
system. I don’t think this game will have too many weapons, but I want each of
them to be distinct and a serve a specific combat situation better than others.
This means I’ll need a highly configurable weapon creation system with various
parameters affecting the behavior.

Technically, I decided to utilize Godot’s `Resource` classes for this: each
weapon will be a resource with a bunch of parameters. This resource is then
passed to the main `Weapon` class which handles all the setup internally from
resource’s variables.

I’m done with the main parts of this already, but I still need to add ability to
create projectile-based weapons, since currently all player weapons are
basically instant hitscans. I’m also toying with the idea of creating homing
projectiles now that I have the steering system in place, it might be fun. Once
the weapon system will be ready, I’m planning to make enemies use it as well. So
that some elite enemies can use powerful weapons and have a chance to drop them
on death.
