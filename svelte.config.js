import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypePrism from 'rehype-prism-plus';

const extensions = ['.svelte', '.svx'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx'],
			layout: {
				post: './src/lib/layouts/post.svx'
			},
			rehypePlugins: [[rehypePrism, { ignoreMissing: true }]]
		})
	],
	kit: {
		adapter: adapter()
	},
	extensions
};

export default config;
