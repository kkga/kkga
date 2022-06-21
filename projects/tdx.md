---
description: CLI todo manager for iCalendar
date: 2021-10-05
tags:
  - go
---

# tdx

tdx is a todo manager for [iCalendar](https://en.wikipedia.org/wiki/ICalendar)
files.

iCalendar-compatibility means it can be a nice and simple CLI companion to any
CalDAV-enabled todo program, such as iOS Reminders.

- **[Source code on GitHub](https://github.com/kkga/tdx)**

### Features

- adding todos, with automatic date and priority parsing
- listing todos, sorted/filtered by various fields and organized by hashtags
  parsed from text
- completing todos
- editing todos in a `$VISUAL`/`$EDITOR` program
- deleting todos
- purging completed/cancelled todos

<figure>
  <video controls autoplay><source src='/img/projects/tdx.mp4'></video>
  <figcaption>Demo of various features</figcaption>
</figure>
