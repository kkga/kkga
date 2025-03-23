import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/data/work" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    longDescription: z.string(),
    date: z.coerce.date(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
  }),
});

const dlog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/data/dlog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { work, projects, dlog };
