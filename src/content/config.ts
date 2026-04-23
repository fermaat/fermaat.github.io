import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

const projectsSchema = z.object({
    title: z.string(),
    title_es: z.string().optional(),
    description: z.string(),
    description_es: z.string().optional(),
    tech: z.array(z.string()),
    featured: z.boolean().default(false),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    image: z.string().optional(),
    order: z.number().default(99),
    publishedDate: z.coerce.date().optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type ProjectsSchema = z.infer<typeof projectsSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const projectsCollection = defineCollection({ schema: projectsSchema });

export const collections = {
    'blog': blogCollection,
    'projects': projectsCollection
}
