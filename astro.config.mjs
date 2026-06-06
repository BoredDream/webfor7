// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 部署到 Vercel/Netlify 时无需改动;若用 GitHub Pages,把 site 改成你的仓库地址,
// 并设置 base: '/<仓库名>/'(项目页)。
export default defineConfig({
  site: 'https://example.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
