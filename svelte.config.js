import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypePrism from 'rehype-prism-plus';
import Prism from 'prismjs';

globalThis.Prism = Prism;

import 'prismjs/components/prism-markup.js';
import 'prismjs/components/prism-css.js';
import 'prismjs/components/prism-clike.js';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-json.js';

const extensions = ['.svelte', '.svx'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svx'],
      layout: {
        post: './src/lib/layouts/post.svx',
      },
      highlight: {
        alias: {
          js: 'javascript',
          ts: 'typescript',
        },
      },
      rehypePlugins: [[rehypePrism, { ignoreMissing: true }]],
    }),
  ],
  kit: {
    adapter: adapter(),
  },
  extensions,
};

export default config;
