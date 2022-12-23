---
title: Webflow
description: Selected projects at Webflow 2015-2021.
date: 2021-08-08
dateUpdated: 2022-12-24
toc: true
---

[Webflow](https://webflow.com) is a "no-code" web platform.

I joined the team as one of the first two designers in 2015. Over the past six
years, I have contributed to the development of numerous new features and
enhancements for the [Webflow Designer](https://webflow.com/designer). My work
has included designing layout systems and creating animation and interaction
tooling, among other tasks.

This portfolio showcases some of the projects I have worked on during these
years. Please note that some of my most recent and impactful work is still
unreleased and cannot be shown at this time.

<figure>
  <video autoplay playsinline loop muted>
    <source src="/img/webflow/webflow-video.mp4">
  </video>
  <figcaption>Webflow Designer</figcaption>
</figure>

---

## Grid layout with direct manipulation

[CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) is
a powerful new layout mechanism that has transformed the way web developers
create layouts. The challenge was to make it easier to use in Webflow by
abstracting some of the complexity and allowing users to create grid layouts
visually, using direct on-canvas manipulation.

Unlike previous tools in Webflow, which required most style properties to be
adjusted via the inspector panel, we wanted the Grid to be different. Given the
visual nature of CSS Grid, we felt that Webflow was the ideal platform for
creating grid layouts in a fully visual way, using direct on-canvas
manipulation.

<figure>
  <video autoplay playsinline loop muted>
    <source src="/img/webflow/webflow-grid-reel.mp4">
  </video>
  <figcaption>Working with grid layout in Webflow</figcaption>
</figure>

#### External links

- [Product overview on Webflow](https://www.webflow.com/grid)

Working with the team, I explored various ways to interact with a grid on the
canvas. After months of iteration and testing, we developed a powerful and
simple solution that fully leverages Webflow's visual nature for creating grid
layouts.

<figure class="full-bleed">
  <video controls autoplay>
    <source src="/img/webflow/webflow-grid.mp4">
  </video>
  <figcaption>Overview of grid's main features</figcaption>
</figure>

<figure>
  <img src="/img/webflow/webflow-grid-playground.gif" />
  <figcaption>Grid playground built in Webflow for feature release</figcaption>
</figure>

Shortly after the initial release, we added support for working with
[Grid template areas](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas),
which made it even easier to create and adjust grid layouts using direct
on-canvas manipulation.

<figure>
  <img src="/img/webflow/webflow-grid-areas-1.gif" />
  <figcaption>Defining grid areas on canvas</figcaption>
</figure>

<figure>
  <img src="/img/webflow/webflow-grid-areas-2.gif" />
  <figcaption>Dragging elements into grid areas</figcaption>
</figure>

<figure>
  <img src="/img/webflow/webflow-grid-areas-3.gif" />
  <figcaption>Adjusting areas for smaller screens</figcaption>
</figure>

---

## Components and instance overrides

In the past, Webflow had a feature called "Symbols" which allowed users to reuse
an element across multiple pages. For example, a user could create a Symbol for
a navigation bar, footer, or sign-up form and reuse it on multiple pages.
However, there was no way to use the same Symbol with different content. This
limitation greatly reduced the range of situations in which Symbols could be
used.

To address this limitation, I worked on evolving Symbols into Components by
adding the ability to override content parameters. This allowed authors to
define text, images, links, and other properties that could be edited on
individual Component instances.

This update significantly expanded the range of situations in which Components
could be used. Authors could turn various recurring layouts into Components and
reuse them across their project, applying individual content overrides as
needed. Any structural or stylistic changes made to the Components would be
reflected in all instances, while the content overrides would be retained.

#### External links

- [Feature overview on Webflow blog][symbols-overview]

[symbols-overview]: https://webflow.com/blog/content-overrides-for-symbols

<figure>
  <img src="/img/webflow/webflow-symbols-1.gif" />
  <figcaption>Defining overrides on a component</figcaption>
</figure>

<figure>
  <img src="/img/webflow/webflow-symbols-2.gif" />
  <figcaption>Overriding content on instances</figcaption>
</figure>

<figure>
  <img src="/img/webflow/webflow-symbols-3.gif" />
  <figcaption>Adjusting layout across multiple instances</figcaption>
</figure>

---

## Interactions and animations

When I started working on "Interactions 2.0", Webflow already had basic tools
for adding interactions and animations to elements on a page. However, we wanted
a more powerful and flexible solution that would allow authors to create rich,
sequenced animations using a visual timeline. Additionally, we wanted to give
authors the ability to create animations and interactions based on various
dynamic inputs, such as scroll position or mouse movement.

While exploring different approaches for a visual interface, I came up with the
idea of a simplified vertical timeline that would allow authors to stack various
"actions" along an axis. The vertical axis can represent either time or a
dynamic value from user input, such as mouse position or scroll progress.

<figure>
  <img src="/img/webflow/webflow-ix-mock.webp"/>
</figure>

This interface metaphor proved to be a good balance between the full-blown
timelines found in professional animation software and a simple yet flexible way
to create rich animations and interactions.

#### External links

- [Product overview on Webflow][interactions]
- [Launch page that fully utilizes the feature][ix2-site]

[interactions]: https://webflow.com/interactions-animations
[ix2-site]: https://webflow.com/ix2

<figure class="cols-4 full-bleed">
  <img src="/img/webflow/webflow-ix-ui-click-actions.jpg" />
  <img src="/img/webflow/webflow-ix-ui-hover-actions.jpg" />
  <img src="/img/webflow/webflow-ix-ui-mouse-actions.jpg" />
  <img src="/img/webflow/webflow-ix-ui-scroll-actions.jpg" />
  <figcaption style='grid-column: 1/-1'>
    Examples of timed and dynamic animations triggered by various events
  </figcaption>
</figure>

<figure>
  <video controls src="/img/webflow/webflow-ix.mp4"></video>
  <figcaption>Overview of creating various animations</figcaption>
</figure>

<figure>
  <video controls src="/img/webflow/webflow-ix-easing.mp4"></video>
  <figcaption>Adjusting the easing curve on an intro animation</figcaption>
</figure>

<figure style="display: grid; grid-template-columns: repeat(2, 1fr)">
  <img src="/img/webflow/webflow-ix-cubes.gif" />
  <img src="/img/webflow/webflow-ix-parallax.gif" />
  <img src="/img/webflow/webflow-ix-demo.gif" />
  <img src="/img/webflow/webflow-ix-hover.gif" />
  <figcaption style="grid-column: 1/-1">
    In the wild: various animations and interactions created using this feature in Webflow
  </figcaption>
</figure>

---

## Flexbox

This was one of my first projects after joining the team. The challenge was to
translate a powerful CSS layout mechanism into a simple and intuitive visual
interface that allowed designers to create expressive, responsive layouts on the
web.

This feature was released in the early days of Webflow, when the design team was
just two people. In addition to my product design work, I also built a Flexbox
learning game in Webflow and an educational marketing website for feature
release.

Flexbox has proven to be a very useful addition to Webflow Designer. Since its
initial release in 2016, I have worked on several updates that improve and
streamline the interface.

#### External links

- [Educational site I built for feature release][flexbox-site]
- [Flexbox learning game I built in Webflow][flexbox-game]

[flexbox-site]: https://flexbox.webflow.com
[flexbox-game]: https://www.flexboxgame.com

<figure>
  <img src="/img/webflow/webflow-flexbox.gif" />
  <figcaption>Flexbox in action</figcaption>
</figure>

<figure style="display: grid; grid-template-columns: repeat(2, 1fr)">
  <img src="/img/webflow/webflow-flexbox.webp" />
  <img src="/img/webflow/webflow-flexbox-site.webp" />
  <figcaption style="grid-column: 1/-1">
    UI mockup for flexbox controls and the marketing site
  </figcaption>
</figure>
