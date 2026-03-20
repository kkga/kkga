# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/blog site for kkga.me, built with Astro 6 (beta) and deployed on Vercel.

## Commands

- **Dev server**: `pnpm dev`
- **Build** (includes type check): `pnpm build` (runs `astro check && astro build`)
- **Preview production build**: `pnpm preview`
- **Lint**: `pnpm lint`
- **Generate video metadata**: `pnpm video-metadata`

## Architecture

**Framework**: Astro 6.0.0-beta with MDX, Tailwind CSS 4, and Sharp for image optimization.

**Content system**: Astro Content Collections with glob loaders and Zod schema validation. All content lives in `src/data/` as MDX/Markdown files organized by collection:
- `src/data/work/` — work experience case studies
- `src/data/projects/` — side projects
- `src/data/dlog/` — development logs
- `src/data/notes/` — technical notes

Collection schemas are defined in `src/content.config.ts`.

**Routing**: File-based via `src/pages/`. Dynamic routes use `[id].astro` pattern with `getStaticPaths()`.

**Layout**: Single `PageLayout.astro` layout using a CSS Grid system with named areas (`head`, `content`, `aside`, `breakout`, `bleed`) and subgrid for nested layouts. Grid defined in `src/styles/global.css`.

**Video handling**: Custom Vite plugin (`videoMetadata()` in `astro.config.mjs`) enables MP4 imports. `scripts/generate-video-metadata.js` uses FFmpeg to extract dimensions into `src/data/video-metadata.json`. The `Video.astro` component uses Intersection Observer for viewport-based autoplay.

**Path alias**: `@/*` maps to `./src/*` (configured in `tsconfig.json`).

## Styling

Tailwind CSS 4 via Vite plugin. Custom design tokens (colors, fonts, spacing) and the grid system are in `src/styles/global.css`. Dark mode via `prefers-color-scheme`. Custom monospace font: Fragment Mono (loaded via Astro experimental fonts API).

## Key Config Files

- `astro.config.mjs` — site URL, Vite plugins, markdown/Shiki config, fonts
- `eslint.config.js` — Astro + JSX-a11y rules (`media-has-caption` disabled for videos)
- `.prettierrc` — Astro parser, Tailwind class sorting plugin, `proseWrap: always`
