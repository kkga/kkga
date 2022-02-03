---
title: Ter
description: Tiny wiki-style site builder
date: 2022-02-03
tags:
  - deno
layout: ../../layouts/PostLayout.astro
setup: |
  import ProjectLink from '../../components/ProjectLink.jsx'
  import Grid from '../../components/Grid.jsx'
  import Figure from '../../components/Figure.jsx'
  import Img from '../../components/Img.jsx'
---

Ter is a tiny wiki engine with Zettelkasten flavor.

Ter takes a folder of markdown files and replicates its structure into a static
site with automatically indexed directories, backlinks and breadcrumbs.

I worked on Ter to get familiar with [Deno](https://deno.land), which is fun,
and to get a bit less terrible at [TypeScript](https://www.typescriptlang.org/).

<ProjectLink url="https://github.com/kkga/ter" title="Source code on GitHub" />

<Grid breakout className="grid-cols-2">
  <Figure>
    <Img border src="/img/projects/ter-1.png" />
  </Figure>
  <Figure>
    <Img border src="/img/projects/ter-2.png" />
  </Figure>
</Grid>
