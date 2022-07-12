---
title: Configure Karabiner with Goku
date: 2022-07-13
tags:
    - macos
    - keyboard
---

[Karabiner-Elements](https://github.com/tekezo/Karabiner-Elements) is a macOS
utility for keyboard customization. I've been using it for years. It uses a
verbose JSON configuration which can be painful to work with.

[Goku](https://github.com/yqrashawn/GokuRakuJoudo) lets you use the
[edn](https://github.com/edn-format/edn) for configuration, which makes it a lot
easier.

Here's a quick sample for one of the most common Karabiner use cases:

```
{:des "caps_lock to esc when pressed alone, to ctrl as modifier"
 :rules [[:##caps_lock :left_control nil {:alone :escape}]]}
```
