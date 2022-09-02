import { sveltekit } from '@sveltejs/kit/vite'
import { imagetools } from 'vite-imagetools'
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    sveltekit(),
    WindiCSS(),
    imagetools({ force: true }),
  ],
}