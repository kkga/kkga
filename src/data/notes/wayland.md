---
title: Wayland
date: 2021-03-13
tags:
  - software
  - linux
---

## Apps

### Firefox

Requires the `MOZ_ENABLE_WAYLAND=1` environment variable.

### Chromium

As of 13/04/2021, start with the following flags:

```
chromium --enable-features=UseOzonePlatform --ozone-platform=wayland
```
