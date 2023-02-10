import { defineConfig, extractorSvelte } from 'unocss'
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