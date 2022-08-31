import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
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
  adapter: adapter({
    fallback: '200.html'
  }),
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit,
  extensions,
  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess,

};

export default config;