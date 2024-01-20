import { defineConfig } from 'unocss'
import presetIcons from "@unocss/preset-icons"
// import extractorSvelte from '@unocss/extractor-svelte'


/** @type {import('unocss').UserConfig} */
export default defineConfig({
  // extractors: [extractorSvelte],
  presets: [
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    })
  ],
});