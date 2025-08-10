import { defineConfig } from 'unocss'
import extractorSvelte from '@unocss/extractor-svelte'
import presetIcons from "@unocss/preset-icons"


/** @type {import('unocss').UserConfig} */
export default defineConfig({
  extractors: [extractorSvelte],
  presets: [
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    })
  ],
});