import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import { trusted } from 'svelte/internal';


const extensions = [`.svelte`, '.svx', '.md'];

const preprocess = [
  sveltePreprocess({
    typescript: true,
    preserve: ['ld+json'],
  }),
  mdsvex({ extensions }),
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