# Video Metadata Generation

This directory contains scripts for preprocessing video files.

## generate-video-metadata.js

Extracts dimensions from all `.mp4` files in `src/` and saves them to `src/data/video-metadata.json`.

### Usage

Run this script whenever you add or update video files:

```bash
pnpm run video-metadata
```

The generated JSON file should be committed to git. This allows builds (especially on CI/CD) to be fast since they don't need to run ffmpeg.

### Requirements

- `ffmpeg-static` (dev dependency)
- `glob` (dev dependency)

Both are installed automatically with `pnpm install`.
