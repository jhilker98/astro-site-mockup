import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        draft: z.boolean().default(true),
        date: z.date().transform((str) => new Date(str)),
        //slug: z.string().optional(),
        tags: z.array(z.string()),
        categories: z.array(z.string()),
        lastMod: z.date().transform((str) => new Date(str)).optional()
    }),
});

export const collections = {
    blog: blogCollection,
};