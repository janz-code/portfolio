import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/commons/content/projects" }),
  schema: z.object({
    name: z.string(),
    picture: z.optional(z.string()),
    status: z.enum(["done", "in-progress", "planning", "abandoned", "deleted", "featured"]),
    short_description: z.string(),
    repo: z.optional(z.string()),
    live: z.optional(z.string()),
    stack: z.optional(z.array(z.string())),
    priority: z.number()
  })
})

export const collections = { projects }
