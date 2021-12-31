---
layout: "../../layouts/PostLayout.astro"
title: Using bit flags in Godot
date: 2020-03-29
---

here's a little tip i wanted to share.

I'm currently working on implementation of various trait effects for the player
character and after going through a few possible methods to do this, here's what
I came up with.

since I'm heavily using Godot's `Resource` classes for generating and storing
all types of data for in-game use, I have a `StatsRes` class (i always add `Res`
suffix to classnames if they extend the base `Resource` class) that serves as a
container for base character stats like max health, move speed and so on.

in a similar fashion, i'm also storing traits as resources of a `TraitRes` class
so that I can create new traits through Godot's visual inspector by simply
creating and a new resource file of type `TraitRes`. In order to do that, the
`TraitRes` class needs to export variables that need to be editable through the
inspector by using a certain notation like:

```gdscript
# this will show a "Max Health" input field in the inspector
# that accepts integer values
export (int) var max_health := 100
```

[TO BE CONTINUED...] (actually, I never got back to it)
