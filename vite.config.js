import { sveltekit } from '@sveltejs/kit/vite'
import { imagetools } from 'vite-imagetools'
import WindiCSS from 'vite-plugin-windicss'
import UnoCSS from 'unocss/vite'
// import extractorSvelte from '@unocss/extractor-svelte'
// import unoConfig from './uno.config'

export default {
  plugins: [
    WindiCSS(),
    UnoCSS(),
    imagetools({ force: true }),
    sveltekit(),
  ],
}