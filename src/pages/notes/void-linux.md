---
title: Void Linux
description: Notes on setting up a comfortable desktop
date: 2020-11-15
tags:
  - software
  - linux
layout: ../../layouts/PostLayout.astro
---

After going through a variety of Linux distributions (from PopOS/Fedora to Arch
and NixOS), I’ve settled on [Void Linux][void]. It’s a great blend of stability
and simplicity with rolling-release model.

[void]: https://voidlinux.org/

## Installation

Void install process is straightforward: follow the steps in the TUI installer.
I’ve used the base minimal ISO without any desktop environments.

## Initial setup

Void has an excellent [handbook][void-handbook] that covers everything you need
to know in order to setup a working system.

## Package management

The package manager in Void is [xbps](/notes/xbps). It’s a collection of several
programs for performing various tasks. It’s fast and reliable: I’ve never had
any problems during upgrades.

While it’s useful to get comfortable interacting with the package manager
directly, Void also provides a collection of handy helper scripts under the
`xtools` package:

| Command                 | Description                                                |
| ----------------------- | ---------------------------------------------------------- |
| `xi`                    | install a package                                          |
| `xi -Su`                | update all packages                                        |
| `xrs`                   | search for packages in the repos                           |
| `xq`                    | query info about an installed package                      |
| `xq -R`                 | query remote repos                                         |
| `xcheckrestart`         | list programs using outdated libraries (use after updates) |
| `xlocate`               | locate a specific file in packages                         |
| `xlocate -S`            | sync with remote database                                  |
| `xls`                   | list files of a package                                    |
| `xmandoc`               | read manpage of any (non-installed) package                |
| `xpkg`                  | list all installed packages                                |
| `xpkg -m`               | list only manually installed                               |
| `xpkg -O`               | list orphans                                               |
| `xpkg -m > pkglist.txt` | dump all manually installed packages into a text file      |

See [manpage](https://man.voidlinux.org/xtools) for `xtools` for more info.

## Backups

### System snapshots

If using BTRFS filesystem, `snapper` can be set up for automatic snapshot
creation.

1. Install `snapper` and `snooze`.

```shell
$ xbps-install -S snapper snooze
```

2. Generate a default config for `snapper` (see `snapper --help`).
3. Activate `snooze` services for daily and hourly tasks.

```shell
$ ln -s /etc/sv/snooze-daily /var/service
$ ln -s /etc/sv/snooze-hourly /var/service
```

### List of manually installed packages

Automatically update list of installed packages daily with `snooze`:

```shell
$ xbps-install -S snooze
$ ln -s /etc/sv/snooze-daily /var/service # activate snooze service for daily tasks
$ echo '#!/bin/sh' >> /etc/cron.daily/pkglist-update
$ echo 'xpkg -m > /home/kkga/void-pkglist.txt' >> /etc/cron.daily/pkglist-update
```

## Daemons (runit)

Void's handbook has a section on [how runit works][runit].

One thing to note though, is how trivial it is to create user services for
programs you want to run as daemons. Check the dedicated section on
[user-services][user-services].

---

## Miscellaneous notes

These are mostly for myself and are not directly related to Void.

### Fonts

- if Firefox isn't displaying some charactes, install the `noto-fonts-ttf`
  package;

### External display brightness

Use either the `ddcutil` package (requires `i2c-dev` kernel module loaded) or
install the `ddcci-dkms` package and use any regular backlight utility.

#### Using ddcutil

```shell
# load the needed kernel module
$ modprobe i2c-dev

# adjust brightness on 1st display
$ ddcutil -d 1 setvcp 10 70

# adjust brightness on 2st display
$ ddcutil -d 2 setvcp 10 70
```

#### Using ddcci-dkms

Install the DKMS driver and a backlight utility.

```shell
$ xbps-install -S ddcci-dkms brillo
```

Load the module.

```shell
$ modprobe ddcci
```

Use the backlight utility as usual.

### Realtek ethernet

Ethernet on newest Realtek cards (R8125) doesn't work out of the box (as of
Linux 5.9). Download the Linux driver from Realtek website and follow the
instructions.

---

#### See also

- [XBPS](/notes/xbps)
- [Void Linux on a laptop](/notes/laptop-void)

---

#### External links

- [Stable Void Linux Setup Guide](https://kennydodrill.net/posts/stable-void-linux-setup-guide/)
- [rinsmiles ́ Guide to the Void](https://drive.google.com/file/d/1hPPO4h2tD-_uGppOX79MsrHGPkDKmQpG/view)
- [D-Bus on Void](https://github.com/flexibeast/guides/blob/master/dbus-on-void.md)
- [Managing suckless software on Void](https://github.com/flexibeast/guides/blob/master/suckless.md)
- [Managing -git packages on Void](https://github.com/flexibeast/guides/blob/master/git-packages.md)

[void-handbook]: https://docs.voidlinux.org/
[runit]: https://docs.voidlinux.org/config/services/index.html
[user-services]: https://docs.voidlinux.org/config/services/user-services.html
