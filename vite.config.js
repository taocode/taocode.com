import { sveltekit } from '@sveltejs/kit/vite'
import { imagetools } from 'vite-imagetools'
import WindiCSS from 'vite-plugin-windicss'
import unocss from 'unocss/vite'
import unoConfig from './uno.config'

export default {
  plugins: [
    unocss(unoConfig),
    WindiCSS(),
    imagetools({ force: true }),
    sveltekit(),
  ],
}