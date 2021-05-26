import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { imagetools } from 'vite-imagetools';
import WindiCSS from 'vite-plugin-windicss';

import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const pkg = require("./package.json") // use the require method

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
      ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
      // plugins: [
      //   WindiCSS.default(),
      //   // imagetools({ force: true }),
      // ],
    },
    trailingSlash: 'ignore',
  },
};

export default config;