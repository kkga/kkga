---
title: tdx
description: CLI todo manager for iCalendar
date: 2021-10-05
tags:
  - go
---

`tdx` is a todo manager for [iCalendar](https://en.wikipedia.org/wiki/ICalendar)
files.

iCalendar-compatibility means it can be a nice and simple CLI companion to any
CalDAV-enabled todo program, such as iOS Reminders.

#### Project page

- https://github.com/kkga/tdx

### Features

- adding todos, with automatic date and priority parsing
- listing todos, sorted/filtered by various fields and organized by hashtags
  parsed from text
- completing todos
- editing todos in a `$VISUAL`/`$EDITOR` program
- deleting todos
- purging completed/cancelled todos

### Demo

<video controls autoplay loop muted width="100%">
  <source src='/img/projects/tdx.mp4' />
</video>
