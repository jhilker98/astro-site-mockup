import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
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

const portfolioCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        draft: z.boolean().default(true),
        featured: z.boolean().default(false),
        weight: z.number(),
        status: z.enum(["Planning", "In Development", "Available"]),
        site: z.string().optional(),
        socials: z.array(z.object({
            name: z.string(),
            icon: z.string(),
            link: z.string()
        })).optional()
    })
});

export const collections = {
    blog: blogCollection,
    projects: portfolioCollection,
};