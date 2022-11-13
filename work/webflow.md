---
title: Webflow
description: Selected projects at Webflow 2015-2021
date: 2021-08-08
---

[Webflow](https://webflow.com) is a "no-code" web platform.

I joined the team in its early days as one of the first two designers. From 2015
to 2021 I've worked on a variety of new features and enhancements for the
"Webflow Designer" including layout systems, animation/interaction tooling among
many others.

This is a collection of various projects I've worked on during these years.
Latest and some of the most impactful things are still unreleased and, sadly,
can not be shown.

<figure>
  <video autoplay playsinline loop muted>
    <source src="/img/webflow/webflow-video.mp4">
  </video>
  <figcaption>Webflow Designer</figcaption>
</figure>

---

## Grid layout with direct manipulation

[CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
transformed the way web developers create layouts. The challenge was to abstract
some of the complexity and translate this powerful new layout mechanism into
Webflow.

Compared to all previous tools in Webflow where most style properties are
adjusted via the inspector panel, we wanted the Grid to be different. Given the
visual nature of CSS Grid, we felt that Webflow is the perfect medium to create
a fully visual way of creating grid layouts by utilizing direct on-canvas
manipulation.

<figure>
  <video autoplay playsinline loop muted>
    <source src="/img/webflow/webflow-grid-reel.mp4">
  </video>
  <figcaption>Working with grid layout in Webflow</figcaption>
</figure>

#### External links

- [Product overview on Webflow](https://www.webflow.com/grid)

Together with the team I've worked on exploring various ways to interact with a
grid on canvas. After months of iterations and tests, we came up with a powerful
and simple solution that fully utilizes Webflow's visual nature for creating
grid layouts.

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

Shortly after the initial release, we've added support for working with
[Grid template areas](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas),
making it even easier to create and adjust grid layouts using direct on-canvas
manipulation.

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

Webflow’s "Symbols" was a mechanism to reuse an element across multiple pages --
for example, a navigation bar, a footer, or a sign up form. However, there was
no way of using the same Symbol with different content -- this limitation
greatly decreased the range of cases where symbols can be used.

I worked on evolving Symbols to Components by adding dynamic content overrides,
which would let authors define text, images, links and other properties that are
editable on individual Component instances.

This update allowed authors to utilize an existing mechanism for a much wider
range of use-cases by turning various recurring layouts into Components and
reusing them across their project with indvidiual content overrides. As they
make structural and stylistic changes to the Components, each instance would
reflect the new changes and still retain the content overrides.

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

When I started working on "Interactions 2.0", Webflow already had basic tooling
to add interactions and animations to elements on a page. However, we wanted a
more poweful and flexible solution that would let authors create rich, sequenced
animations using a visual timeline. Another goal was to let authors create
animations and interactions based on various dynamic inputs, like scroll
position or mouse movement.

While exploring different approaches for a visual interface, I came up with the
idea of a simplified vertical timeline that would let authors stack various
"actions" along an axis. The vertical axis can represent either time or a
dynamic value from user's input, like mouse position or scroll progress.

<figure>
  <img src="/img/webflow/webflow-ix-mock.webp"/>
</figure>

This interface metaphor proved to strike a perfect balance between a full-blown
timeline usually found in professional animation software and a simple,
uncomplicated way to create rich animations and interactions.

#### External links

- [Product overview on Webflow][interactions]
- [Launch page that fully utilizes the feature][ix2-site]

[interactions]: https://webflow.com/interactions-animations
[ix2-site]: https://webflow.com/ix2

<figure class="full-bleed">
    <div class="cols-4" style="gap: 0.5rem">
      <img src="/img/webflow/webflow-ix-ui-click-actions.jpg" />
      <img src="/img/webflow/webflow-ix-ui-hover-actions.jpg" />
      <img src="/img/webflow/webflow-ix-ui-mouse-actions.jpg" />
      <img src="/img/webflow/webflow-ix-ui-scroll-actions.jpg" />
    </div>
  <figcaption >
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

## Flexbox

Flexbox was one of the first projects I've worked on at Webflow.

The challenge was to translate a powerful
[CSS layout mechanism](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
into a simple and intuitive visual interface that allows designers to create
expressive, responsive layouts on the web.

This feature was released in early days of Webflow, when the design team was
just 2 people. In addition to product design work, I've also built a
[Flexbox learning game](https://flexboxgame.com) in Webflow and an educational
[marketing website](https://flexbox.webflow.com) for feature release.

Flexbox remains one of the most used layout tools in Webflow. Since the initial
release in 2016, I've worked on several updates that improve and streamline the
interface.

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
