import { imagetools } from 'vite-imagetools';
import WindiCSS from 'vite-plugin-windicss';

export default {
  plugins: [WindiCSS(),imagetools({ force: true }),],
}