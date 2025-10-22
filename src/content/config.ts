import { defineCollection, z } from 'astro:content';
const blog =  defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string().optional(),
			publishDate: z.coerce.date(),
			read: z.number().optional(),
			tags: z.array(z.string()).optional(),
			cover: z.string().optional(),
			coverAlt:z.string().optional(),
		}),
});

export const collections = {blog};