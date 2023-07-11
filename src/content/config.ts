import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        draft: z.boolean(),
        date: z.date().transform((str) => new Date(str)),
        //slug: z.string().optional(),
        tags: z.array(z.string()),
        categories: z.array(z.string())
    }),
});

export const collections = {
    blog: blogCollection,
};