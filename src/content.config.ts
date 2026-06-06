import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 文章/动态集合:在 src/content/blog/ 放 .md 文件即可,无需改代码。
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    cover: z.string().optional(), // 封面图路径,如 /images/blog/xxx.jpg(可省略,自动用渐变占位)
    tags: z.array(z.string()).default([]),
    author: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
