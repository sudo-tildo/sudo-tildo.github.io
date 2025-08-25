import {defineCollection, z} from 'astro:content';
import {glob} from 'astro/loaders';

const blog = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({base: './src/content/blog', pattern: '**/*.{md,mdx}'}),
    // Type-check frontmatter using a schema
    schema: ({image}) =>
        z.object({
            title: z.string(),
            description: z.string(),
            // Transform string to Date object
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: image().optional(),
            tags: z.array(z.string()).default([]).optional(),
        }),
});

const projects = defineCollection({
    loader: glob({pattern: '**/*.{md,mdx}', base: './src/content/projects/'}),
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        heroImage: image().optional(),
        github: z.string().optional(),
        linkedin: z.string().optional(),
        link: z.string().optional(),
        tags: z.array(z.string()).default([]).optional(),
        pubDate: z.coerce.date(),
    }),
})

export const collections = {blog, projects};
