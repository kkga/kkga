---
title: tmux configuration notes
date: 2022-01-16
tags:
    - setup
    - software
layout: ../../layouts/PostLayout.astro
---

## useful settings

```shell
set -g history-limit 99999 # set big history limit
set -g mode-keys vi # use vim keybindings in copy mode
set -g escape-time 0 # disable delay for escape key press
set -g default-terminal "xterm-256color" # hack $TERM so VIM can do ctrl+arrows
set -g renumber-windows on # automatically renumber window IDs when one closes
set -g base-index 1 # start numbering windows from 1 (rather than 0)
```

## plugins

- https://github.com/fcsonline/tmux-thumbs
