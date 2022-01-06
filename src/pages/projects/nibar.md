---
title: Nibar
description: Custom status bar for macOS
date: 2020-03-02
tags:
  - macos
layout: ../../layouts/PostLayout.astro
setup: |
  import ProjectLink from '../../components/ProjectLink.jsx'
  import Grid from '../../components/Grid.jsx'
  import Figure from '../../components/Figure.jsx'
  import Img from '../../components/Img.jsx'
---

Simple alternative status bar which displays a list of workspaces and some
system info. Intended for usage with workspace-switching oriented window
managers, like [yabai](https://github.com/koekeishiya/yabai) or
[Amethyst](https://github.com/ianyh/Amethyst).

<ProjectLink url="https://github.com/kkga/nibar" title="Source code on GitHub" />

<Grid breakout>
<Figure>
<Img src="https://raw.githubusercontent.com/kkga/nibar/master/ss.png" />
</Figure>
</Grid>
