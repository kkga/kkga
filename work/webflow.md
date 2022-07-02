---
title: Webflow
description: Selected projects at Webflow 2015-2021
date: 2021-08-08
toc: true
---

# Webflow

[Webflow](https://webflow.com) is a "no-code" web platform. I joined the team in
its early days as one of the first two designers.

Starting from 2015 and until 2021, I've worked on a variety of designer-focused
products ranging from layout systems and animation tools to marketing pages and
iconography in my early days.

This is a collection of various projects I've worked on during these years.
Latest and some of the most impactful things are still unreleased and, sadly,
can not be shown.

## Grid

[CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
transformed the way web developers create layouts. The challenge was to abstract
some of the complexity and translate this powerful new layout mechanism into
Webflow.

Compared to all previous tools designed in Webflow where most properties of an
element are adjusted via a panel, we wanted the Grid to be different. Given the
visual nature of CSS Grid, we felt that Webflow is the perfect medium to create
a fully visual way of creating grid layouts by utilizing direct on-canvas
manipulation.

Together with the team I've worked on exploring various ways to interact with a
grid on canvas. After months of iterations and tests, we came up with a powerful
and simple solution that fully utilizes Webflow's visual nature for creating
grid layouts.

- **[Product overview on Webflow](https://www.webflow.com/grid)**

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

Shortly after the initial release, we've added a fully visual support for
working with
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

## Symbol overrides

Webflow’s symbols let authors reuse a common layout across multiple pages -- for
example, a navigation bar, a footer, or a sign up form.

Up until now, there was no way of using the same symbol with different content.
This limitation greatly decreased the range of cases where symbols can be used.

I've worked on adding dynamic content overrides to symbols, which would let
authors define text, images, videos or links that are editable on different
symbol instances.

With this feature, authors can utilize symbols for a much wider range of
use-cases by turning various recurring layouts into symbols, each with its own
content. As authors restructure the layout of that symbol, each instance will
preserve its unique content.

- **[Feature overview on Webflow blog][symbols-overview]**

[symbols-overview]: https://webflow.com/blog/content-overrides-for-symbols

<figure>
  <img src="/img/webflow/webflow-symbols-1.gif" />
  <figcaption>Defining overrides inside a symbol</figcaption>
</figure>

<figure>
  <img src="/img/webflow/webflow-symbols-2.gif" />
  <figcaption>Overriding content on a symbol instance</figcaption>
</figure>

<figure>
  <img src="/img/webflow/webflow-symbols-3.gif" />
  <figcaption>Adjusting layout across multiple symbols</figcaption>
</figure>

## Interactions and animations

When I started working on "Interactions 2.0", Webflow already had simple tools
to add interactions and animations to elements on a page. However, we wanted a
more poweful and flexible solution that would let authors create rich, sequenced
animations using a visual timeline. Another goal was to let authors create
animations and interactions based on various dynamic inputs, like scroll
position or mouse movement.

While exploring different approaches for a visual interface, I came up with the
idea of a simplified vertical timeline that would let authors stack various
"actions" along an axis. The vertical axis can represent either time or a
dynamic value from user's input, like mouse position or scroll progress.

This interface metaphor proved to strike a perfect balance between a full-blown
timeline usually found in professional animation software and a simple,
uncomplicated way to create rich animations and interactions.

- **[Product overview on Webflow][interactions]**
- **[Launch page that fully utilizes the feature][ix2-site]**

[interactions]: https://webflow.com/interactions-animations
[ix2-site]: https://webflow.com/ix2

<figure class="full-bleed" style="display: grid; column-gap: 0.5rem; grid-template-columns: repeat(4, 1fr)">
  <img src="/img/webflow/webflow-ix-ui-click-actions.jpg" />
  <img src="/img/webflow/webflow-ix-ui-hover-actions.jpg" />
  <img src="/img/webflow/webflow-ix-ui-mouse-actions.jpg" />
  <img src="/img/webflow/webflow-ix-ui-scroll-actions.jpg" />
  <figcaption style="grid-column: 1/-1">
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

- **[Educational site I built for feature release][flexbox-site]**
- **[Flexbox learning game I built in Webflow][flexbox-game]**

[flexbox-site]: https://flexbox.webflow.com
[flexbox-game]: https://www.flexboxgame.com

<figure>
  <img src="/img/webflow/webflow-flexbox.gif" />
  <figcaption>Flexbox in action</figcaption.
</figure>

<figure style="display: grid; grid-template-columns: repeat(2, 1fr)">
  <img src="/img/webflow/webflow-flexbox.webp" />
  <img src="/img/webflow/webflow-flexbox-site.webp" />
  <figcaption style="grid-column: 1/-1">
    UI mockup for flexbox controls and the marketing site
  </figcaption>
</figure>
