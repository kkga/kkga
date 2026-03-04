# AGENTS.md - Repository Guidelines for Agentic AI

This document provides essential information for coding agents (like yourself) to operate efficiently and safely within the `kkga` repository.

## 🛠 Project Overview
- **Framework:** Astro 6 (Beta)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS 4.1.x
- **Package Manager:** `pnpm`
- **Deployment:** Vercel (likely, based on dependencies)

## 🚀 Key Commands

### Build & Maintenance
- `pnpm dev` - Starts the Astro development server.
- `pnpm build` - Runs `astro check && astro build` to verify types and build the site.
- `pnpm astro check` - Performs type-checking on `.astro` files.

### Linting & Formatting
- `pnpm lint` - Runs ESLint across the codebase.
- `prettier --write .` - Formats code using Prettier (includes Astro and Tailwind plugins).

### Testing
- **None:** No test framework (Vitest/Jest) is currently configured in this repository. If you add logic that requires testing, discuss adding a testing framework first.

## 🎨 Code Style & Guidelines

### Filenames & Naming Conventions
- **Astro Components:** PascalCase (e.g., `src/components/Card.astro`).
- **Layouts:** PascalCase (e.g., `src/layouts/PageLayout.astro`).
- **Scripts/Data:** kebab-case (e.g., `scripts/generate-video-metadata.js`).
- **Variables/Functions:** camelCase for general logic, PascalCase for component names.

### Imports
- **Aliases:** Use the `@/` alias to refer to the `src/` directory (e.g., `import Header from "@/components/Header.astro"`).
- **Built-in Modules:** Always use the `node:` prefix for Node.js built-ins (e.g., `import fs from "node:fs"`).
- **Types:** Prefer `import type` for type-only imports to improve build performance and clarity.

### Astro Component Structure
```astro
---
// 1. Imports (Components -> Types -> Logic)
import { Image } from "astro:assets";
import type { ImageMetadata } from "astro";

// 2. Props Interface
interface Props {
  title: string;
  cover: ImageMetadata;
}

// 3. Destructure Props
const { title, cover } = Astro.props;

// 4. Component Logic
---
<!-- 5. HTML Template -->
<article>
  <Image src={cover} alt={title} />
  <h1>{title}</h1>
</article>
```

### Styling (Tailwind CSS 4)
- Follow Tailwind 4 conventions.
- Prefer utility classes over custom CSS.
- Global styles are located in `src/styles/global.css`.

### Error Handling
- Use `try/catch` blocks for asynchronous operations and file system access.
- In scripts, provide clear console feedback for failures (e.g., using `console.error`).

### Data & Content
- **Video Metadata:** Dimensions for `.mp4` assets are automatically extracted during the build process via a custom Vite plugin in `astro.config.mjs` using `ffmpeg-static`. No manual steps are required.

## 🤖 AI Assistance Rules
- **Formatting:** Always run Prettier after modifying files.
- **Types:** Ensure all new components and functions are properly typed. Avoid `any`.
- **Images:** Use the `<Image />` component from `astro:assets` for optimized image handling.
- **Astro Features:** Leverage Astro's built-in features like Content Collections (see `src/content.config.ts`) where appropriate.
