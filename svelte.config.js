import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { imagetools } from 'vite-imagetools';
import WindiCSS from 'vite-plugin-windicss';


const extensions = [`.svelte`, '.svx', '.md'];

const preprocess = [
  sveltePreprocess({
    defaults: {
      script: 'typescript',
    },
    preserve: ['ld+json'],
  }),
  mdsvex({ extensions: extensions }),
];

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: extensions,
  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess: preprocess,
  kit: {
    adapter: adapter(),
    target: '#svelte',
    vite: {
      plugins: [WindiCSS.default(),imagetools({ force: true }),],
    },
    trailingSlash: 'ignore',
  },
};

export default config;