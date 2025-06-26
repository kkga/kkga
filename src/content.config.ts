import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/data/work" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      longDescription: z.string(),
      role: z.string(),
      timeframe: z.string(),
      date: z.coerce.date(),
      cover: image(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/data/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      cover: image(),
    }),
});

const dlog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/data/dlog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/notes" }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { work, projects, dlog, notes };
