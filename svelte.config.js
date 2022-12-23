import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import slug from 'rehype-slug'
import { trusted } from 'svelte/internal'


const extensions = [`.svelte`, '.svx', '.md']
const rehypePlugins = [slug]

const preprocess = [
  sveltePreprocess({
    typescript: true,
    preserve: ['ld+json'],
  }),
  mdsvex({ extensions, rehypePlugins }),
];

const kit = {
  adapter: adapter(),
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit,
  extensions,
  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess,

};

export default config;