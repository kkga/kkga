---
title: Uses
description: My setup
date: 2021-12-30
tags:
  - setup
layout: ../layouts/PostLayout.astro
setup: |
  import Figure from "../components/Figure.jsx"
  import Grid from '../../components/Grid.jsx'
---

One of my favorite websites is [usesthis.com](https://usesthis.com/). I always
liked reading about the tools people use to get through their day to day.

This page outlines a few details around my own setup.

I don't have a carefully arranged photo of my desk, so here's a snapshot of my
messy workspace in the middle of some work:

![desk](img/desk.jpg)

---

## Hardware

- Lenovo X1 Carbon Gen 9
- Custom PC with Ryzen 3600 cpu
- MacBook Air M1
- iPad Pro 11
- Logitech MX Ergo trackball mouse
- Apple Magic Trackpad
- [Corne-ish Zen][corneish] keyboard
- [Ferris Sweep][sweep] keyboard

[corneish]: https://lowprokb.ca/products/corne-ish-zen-2
[sweep]: https://github.com/davidphilipbarr/Sweep

#### Note on keyboards

I’m experimenting with keyboards and layouts a lot lately.

I’ve had a bunch of various keyboards over the last couple years, but I prefer
the low-profile Choc switches by Kailh (the Purpz version).

My layout config has been slimming down in size since I started experimenting.
At the moment I’m using a 34 keys layout and this picture gives an idea of how
it works.

[![34 keys](https://raw.githubusercontent.com/kkga/zmk-config/master/34keys.png)](https://raw.githubusercontent.com/kkga/zmk-config/master/34keys.png)

Current layout configuration lives [here](https://github.com/kkga/zmk-config).

---

## Software

I use macOS for work, while Linux is my preferred OS for personal computering
needs. Even though I’ve been a macOS user for 15+ years, I like Linux more these
days.

My Linux setup is barebones: I don’t use a full-fledged desktop environment. A
tiling window manager, a fast terminal and a browser — that’s all I need.

I do all text editing and coding in Kakoune, which is a terminal-based text
editor and my favorite piece of software.

<Grid breakout>
  <Figure caption="Some terminal windows running in Sway on my laptop">
    <a href="https://raw.githubusercontent.com/kkga/config/master/.local/share/desktop.png">
      <img src="https://raw.githubusercontent.com/kkga/config/master/.local/share/desktop.png" />
    </a>
  </Figure>
</Grid>

Here's a list of essential pieces:

#### Linux

- Arch Linux on laptop
- Void Linux on desktop
- Sway (window manager)
- Firefox
- Foot (terminal)

#### macOS

- Firefox and Safari
- Figma (UI design tool)
- iTerm2 (terminal)

#### Terminal

- Fish (shell)
- Kakoune (text editor)

Current desktop configuration lives in a
[GitHub repo](https://github.com/kkga/config).
