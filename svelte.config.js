import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [remarkGfm],
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						behavior: 'prepend',
						properties: {
							className: ['heading-anchor'],
							'aria-label': 'Copy link to section'
						}
					}
				]
			]
		})
	],
	kit: {
		adapter: adapter({
			out: 'build'
		}),
		prerender: {
			entries: ['*']
		}
	},
	extensions: ['.svelte', '.md']
};

export default config;
