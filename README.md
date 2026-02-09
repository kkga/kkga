# kkga.me

Personal website for Gadzhi Kharkharov.

## Tech

- **Astro** + **TypeScript**
- **Tailwind CSS**
- **MDX/Markdown content collections** (Astro Content Collections)
- **pnpm**
- **Vercel** (analytics)

## Getting started

```bash
pnpm install
pnpm dev
```

## Commands

```bash
# dev server
pnpm dev

# typecheck + build
pnpm build

# preview production build
pnpm preview

# lint
pnpm lint
```

## Content + structure

- **Routes**: `src/pages/`
- **Layouts**: `src/layouts/`
- **Components**: `src/components/`
- **Styles**: `src/styles/global.css`
- **Content**: `src/data/`
  - `src/data/work/*.mdx`
  - `src/data/projects/*.mdx`
  - `src/data/dlog/*.mdx`
  - `src/data/notes/*.md`

Collections and frontmatter schemas are defined in `src/content.config.ts`.

## Video metadata (MP4)

Some pages embed `.mp4` assets. To avoid running ffmpeg during builds, this repo stores precomputed video dimensions in `src/data/video-metadata.json`.

Whenever you add/change videos, regenerate metadata:

```bash
pnpm video-metadata
```

Details: `scripts/README.md`.

