import {defineCollection, z} from "astro:content";
import {glob} from "astro/loaders";

const projects = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./src/commons/content/projects"}),
    schema: z.object({
        name: z.string(),
        picture: z.optional(z.string()),
        status: z.enum(["done", "terminado", "developing", "desarrollando", "deleted", "eliminado", "paused", "pausado"]),
        short_description: z.string(),
        repo: z.optional(z.string()),
        live: z.optional( z.string()),
        repo_doc: z.optional(z.string()),
    })
})

export const collections = {projects}