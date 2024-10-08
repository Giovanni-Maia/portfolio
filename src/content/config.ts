import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			order: z.number(),
			tags: z.array(z.object({icon: z.string(), name: z.string()})),
		}),
	}),
};
