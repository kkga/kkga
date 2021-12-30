---
layout: "../../layouts/PageLayout.astro"
title: Simple web app for throw-away notes
date: 2021-03-15
setup: |
  import Video from '../../components/Video.jsx'
---

I recently discovered the [Svelte](https://svelte.dev/) web framework. Its
approach seemed quite interesting, so I decided to dive deeper and work through
their [interactive tutorial](https://svelte.dev/tutorial) (which is a really
well-designed learning experience).

It got me hooked.

I was never very proficient in JavaScript, but the ergonomics and API of Svelte
just looked too good to not try building something with it. Plus it was a good
chance to get familiar with TypeScript, which Svelte supports.

I started simple and made a very basic note-taking app, which is literally just
a bunch `<textarea>`'s slapped together. I've been using
[Tot](https://tot.rocks/) on macOS for a while, so I wanted to have something
similar on my Linux machines.

It's live at <https://jotdown.page> and I've been using it for quick notes
throughout the day.

Source code is available [on GitHub](https://github.com/kkga/jotdown).

Here's a quick demo of how it works:

<Video src='/img/dlog/jotdown.mp4' />
