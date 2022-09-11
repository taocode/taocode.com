import { sveltekit } from '@sveltejs/kit/vite'
import { imagetools } from 'vite-imagetools'
import WindiCSS from 'vite-plugin-windicss'
import autoImport from 'sveltekit-autoimport'

export default {
  plugins: [
    autoImport({
      components: ['./src/lib/components'],
      // some frequently used modules
      module: {
        svelte: ['onMount', 'createEventDispatcher'],
        '$app/environment': ['browser','dev'],
      },
      include: ['**/*.svelte','./src/content/blog/**/*.md'],
    }),
    WindiCSS(),
    imagetools({ force: true }),
    sveltekit(),
  ],
}