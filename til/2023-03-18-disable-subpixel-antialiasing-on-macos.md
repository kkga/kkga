---
title: Disable subpixel anti-aliasing on macOS
tags:
    - macos
---

Apple removed the setting to manually disable subpixel anti-aliasing in recent
macOS versions as it's supposed to be automatic, however I've noticed that it is
still effective in many apps.

To manually disable it on system level, run the following command in the
terminal:

```
defaults -currentHost write -g AppleFontSmoothing -int 0
```

Found
[here](https://gist.github.com/rsms/fb463396c95ad8d9efa338a8050a01dc#force-disable-sub-pixel-anti-aliasing-macos-12).
