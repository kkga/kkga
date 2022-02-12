---
title: Remap keys on Linux with keyd
date: 2021-01-18
tags:
    - linux
    - keyboard
---

Today I learned about the existence of [keyd], which is a system-wide daemon
program that lets you remap keys on a kernel level.

I previously used [kmonad], but its configuration file can be overwhelming to
setup for simple needs. Keyd feels simpler and has a minimalistic configuration
syntax.

In author's words:

> Notably keyd was written entirely in C with performance and simplicitly in
> mind and will likely never be as configurable as kmonad (which is extensible
> in Haskell).

Here's how my current configuration looks like:

```
[ids]
0001:0001

[main]
shift = oneshot(shift)
control = oneshot(control)
leftalt = oneshot(meta)
leftmeta = oneshot(alt)
capslock = overload(C, esc)
f = overload(extend, f)
v = overload(number, v)

[extend]
h = left
j = down
k = up
l = right
y = home
u = pagedown
i = pageup
o = end
m = enter
; = backspace

[number]
m = 1
, = 2
. = 3
j = 4
k = 5
l = 6
u = 7
i = 8
o = 9
; = 0
```

What it does:

- turns all modifier keys into "one-shots", meaning they stick until next
  keypress so you don't have to hold them down;
- swaps left `alt` and `meta` (`cmd`) keys;
- capslock becomes `esc` on tap and `ctrl` on hold;
- holding `f` activates the "extend" layer with navigation keys on the home row;
- holding `v` activates the "number" layer with numbers arranged into a numpad
  on the home block.

Unfortunately, [keyd] is Linux-only. If you're interested in a cross-platfom
solution, check out [kmonad].

[keyd]: https://github.com/rvaiya/keyd
[kmonad]: https://github.com/kmonad/kmonad
