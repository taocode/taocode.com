import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools'
import unocss from 'unocss/vite'
import unoConfig from './uno.config'

export default defineConfig({
	plugins: [
		tailwindcss(),
		unocss(unoConfig),
    	imagetools(),
    	sveltekit(),
	],
	server: {
		port: 5115,
	},
});
