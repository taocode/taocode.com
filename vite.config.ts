import WindiCSS from 'vite-plugin-windicss'
import { imagetools } from 'vite-imagetools';
// import { default as WindiCSS } from 'vite-plugin-windicss';

export default {
  plugins: [WindiCSS,imagetools({ force: true })],
}