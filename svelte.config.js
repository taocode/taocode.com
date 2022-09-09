import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'

const extensions = [`.svelte`, '.svx', '.md', '.svelte.md']

// options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
const preprocess = [
  mdsvex({ extensions }),
  sveltePreprocess({
    typescript: true,
    preserve: ['ld+json'],
  }),
]

const kit = {
  adapter: adapter({ precompress: true }),
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions,
  preprocess,
  kit,
}

export default config