---
title: Running Void Linux on a laptop
date: 2021-01-03
tags:
  - software
  - linux
---

![Sway running on Void Linux](/img/notes/laptop-sway-void.png)

## Hardware

- ThinkBook 13s G2-ITL

## Kernel

- blacklist `ideapad_laptop` module in `modprobe.d` (old module that isn't
  useful anymore);
  - update 2021-04-11: as of Linux 5.11, removed the blacklist -- module is not
    loaded automatically anymore

## Power management

- enable `acpid`, if not enabled;
- install `tlp`, enable its service;
- configure `elogind` to ignore ACPI events: set all `Handle*` keywords to
  `ignore` in logind.conf;
- use `powertop` to diagnose powerusage;

## Network

- note: iwlwifi spams some errors in dmesg, seem to work fine though
  (`iwlwifi: Unhandled alg: 0x71b`);
- disable `wpa_supplicate` service, if enabled;
- ~~install `connman`, enable service, configure via `connmanctl;`~~ upd:
  `connman` seems unstable and noisy;
- ended up using `dhcpcd` + `iwd`;
  - had to add `UseDefaultInterface=true` in `[General]` section of
    `/etc/iwd/main.conf`, according to Void's
    [handbook](https://docs.voidlinux.org/config/network/iwd.html#troubleshooting).

## Graphics

- mesa works out of the box;
- for vulkan, install `mesa-vulkan-intel`;

## Sound

- note: initially had issues with sound device not working: had to add
  `options snd_hda_intel dmic_detect=0` in `modprobe.d`;
  - update 2021-04-11: as of Linux 5.11, removed any extra options -- both audio
    and mic work fine
- install `pipewire`, enable `pipewire-pulse` in pipewire config;
- start `pipewire` as a user on desktop login;
  - note: maybe create a user runit service for it;

## Desktop

- currently running a pure Wayland (xwayland disabled) desktop with Sway -- no
  issues so far;
- `elogind` and `dbus` are required for Sway;
- start sway with `dbus-run-session sway`;
  - `libseat` might show an error about `seatd` not present, can be removed by
    exporting `LIBSEAT_BACKEND=logind` before starting Sway
