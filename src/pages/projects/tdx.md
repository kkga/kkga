---
title: tdx
description: CLI todo manager for iCalendar
date: 2021-10-05
tags:
  - go
layout: ../../layouts/PageLayout.astro
setup: |
  import ProjectLink from '../../components/ProjectLink.jsx'
  import Figure from '../../components/Figure.jsx'
  import Grid from '../../components/Grid.jsx'
---

`tdx` is a todo manager for [iCalendar](https://en.wikipedia.org/wiki/ICalendar)
files.

iCalendar-compatibility means it can be a nice and simple CLI companion to any
CalDAV-enabled todo program, such as iOS Reminders.

<ProjectLink url="https://github.com/kkga/tdx" title="Source code on GitHub" />

### Features

- adding todos, with automatic date and priority parsing
- listing todos, sorted/filtered by various fields and organized by hashtags
  parsed from text
- completing todos
- editing todos in a `$VISUAL`/`$EDITOR` program
- deleting todos
- purging completed/cancelled todos

<Grid breakout>
  <Figure video='/img/projects/tdx.mp4' />
</Grid>
