import { presetUno, defineConfig, extractorSvelte } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

// import aspectRatio from 'windicss/plugin/aspect-ratio';
// import forms from 'windicss/plugin/forms';
// import typography from 'windicss/plugin/typography';

import { presetTypography } from "@unocss/preset-typography"
// import { presetAspectRatio } from '@unocss/preset-aspect-ratio'
import presetIcons from "@unocss/preset-icons"

const defaultPreset = presetUno()

/** @type {import('unocss').UserConfig} */
export default defineConfig({
  extractors: [extractorSvelte],
  transformers: [
    transformerDirectives(),
  ],
  dark: 'class',
  // plugins: [aspectRatio,forms,typography],
  presets: [
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetTypography({
      cssExtend: {
        "a[target]": {
          position: "relative",
          color: defaultPreset.theme.colors.yellow["600"],
        },
        "a[target]::after": {
          display: "inline-block",
          content: "'\u2197'",
          "margin-left": "2.5px;",
        },
        "a.heading": {
          "text-decoration": "none",
        },
        "a.heading::before": {
          content: "'#'",
          opacity: 0.1,
          "padding-right": "0.5rem",
          position: "absolute", // FIXME: make this md:
          "margin-left": "-2rem", // FIXME: and this
        },
        ".dark * a.heading::before": {
          opacity: 0.3,
        },
        "a.heading:hover::before": {
          opacity: 1,
        },
        "blockquote::before": {
          content: "open-quote",
          "margin-left": "-0.5rem",
          "margin-top": "0.5rem",
          position: "absolute",
          top: "0",
          left: "0",
          "font-family": defaultPreset.theme.fontFamily["mono"],
          "font-size": defaultPreset.theme.fontSize["6xl"][0],
          opacity: 0.2,
        },
        "blockquote::after": {
          content: "close-quote",
          "margin-right": "-0.5rem",
          "margin-bottom": "-1.5rem",
          position: "absolute",
          bottom: "0",
          right: "0",
          "font-family": defaultPreset.theme.fontFamily["mono"],
          "font-size": defaultPreset.theme.fontSize["6xl"][0],
          opacity: 0.2,
        },
        blockquote: {
          position: "relative",
          "font-family": defaultPreset.theme.fontFamily["mono"],
          "font-style": "normal",
          "font-weight": "bold",
          "font-size": defaultPreset.theme.fontSize["sm"][0],
          "line-height": defaultPreset.theme.fontSize["sm"][1],
          opacity: 0.7,
          "margin-top": "2rem",
          "padding-left": "2rem",
          "padding-right": "2rem",
          "margin-bottom": "2rem",
        },
        "figure > img": {
          margin: "auto",
          "max-width": "100%",
        },
        figcaption: {
          "font-family": defaultPreset.theme.fontFamily["mono"],
          "font-size": defaultPreset.theme.fontSize["sm"][0],
          // "line-height": defaultPreset.theme.fontSize["sm"][1],
          opacity: 0.7,
          "text-align": "center",
          "line-height": "2",
          "margin-top": "1rem",
          "margin-bottom": "2rem",
        },
        "ul > li.task-list-item": {
          "list-style": "none",
        },
        "ul > li.task-list-item > input": {
          width: "1em",
          height: "1em",
          "margin-right": "1em",
          "margin-left": "-1em",
        },
        "sup > a": {
          "margin-left": "5px",
          "text-decoration": "none",
          "font-family": defaultPreset.theme.fontFamily["mono"],
        },
        ".footnotes": {
          "font-family": defaultPreset.theme.fontFamily["mono"],
          "padding-top": "2rem",
          "font-size": defaultPreset.theme.fontSize["xs"][0],
          "line-height": defaultPreset.theme.fontSize["xs"][1],
        },
        hr: {
          "margin-top": "1em",
          "margin-bottom": "1em",
          height: "2px",
          width: "100%",
          "background-color": defaultPreset.theme.colors.gray["900"] + "1A",
        },
        ".dark * hr": {
          "background-color": defaultPreset.theme.colors.gray["100"] + "33",
        },
        ".footnotes > ol": {
          "list-style": "decimal",
          "padding-top": "1rem",
        },
        ".footnotes > ol > li": {
          "list-style-position": "inside",
        },
        ".footnotes > ol > li > p:first-child": {
          display: "inline-block",
        },
        ".footnotes > ol > li * a.footnote-backref": {
          "margin-left": "1rem",
          color: defaultPreset.theme.colors.gray["400"],
        },
        ".footnotes > ol > li * a.footnote-backref::before": {
          content: "'[See in context'",
          "margin-right": "5px",
          display: "inline-block",
        },
        ".footnotes > ol > li * a.footnote-backref::after": {
          content: "']'",
        },
        ".remark-oembed-you-tube > iframe": {
          margin: "auto",
          width: "90%",
          height: "auto",
          "aspect-ratio": "var(--aspect-ratio)",
        },
        ".footnotes * .remark-oembed-you-tube > iframe": {
          margin: "0px",
          width: "60%",
          height: "auto",
          "aspect-ratio": "var(--aspect-ratio)",
        },
      },
    })
  ],
  theme: {
    fontFamily: {
      'display': ['Rubik','sans-serif'],
      'body': ['Spectral','serif'],
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      circle: 'circle',
      roman: 'upper-roman',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      // green: {
      //   '50': '#eefaec',
      //   '100': '#def5d9',
      //   '150': '#cdf0c5',
      //   '200': '#bcebb2',
      //   '250': '#ace79f',
      //   '300': '#9be28c',
      //   '350': '8add79',
      //   '400': '#79d865',
      //   '450': '#69d352',
      //   '500': '#58ce3f',
      //   '550': '#4fb939',
      //   '600': '#46a532',
      //   '650': '#3e902c',
      //   '700': '#357c26',
      //   '750': '#2c6720',
      //   '800': '#235219',
      //   '850': '#1a3e13',
      //   '900': '#12290d',
      //   '950': '#091506',
      // },
      /** generated by: 
      * https://color-palette-shade-generator.web.app/?H=110.0&scheme=1&cn=Hex&c0=brand
      **/
      'brand': {
        DEFAULT: '#40df20',
        '50': '#71e75a',
        '100': '#66e64c',
        '200': '#5be43f',
        '300': '#53e236',
        '400': '#4be12d',
        '500': '#40df20',
        '600': '#3dd61f',
        '700': '#39c91d',
        '800': '#37c01b',
        '900': '#33b319',
      },
      'branddark': {
        DEFAULT: '#2d9c16',
        '50': '#3cd21e',
        '100': '#39c91d',
        '200': '#36bb1b',
        '300': '#33b319',
        '400': '#2fa518',
        '500': '#2d9c16',
        '600': '#298f14',
        '700': '#268613',
        '800': '#227811',
        '900': '#207010',
      },
      'brandlight': {
        DEFAULT: '#79e963',
        '50': '#abf19d',
        '100': '#9fef8f',
        '200': '#98ee87',
        '300': '#8cec79',
        '400': '#85eb70',
        '500': '#79e963',
        '600': '#71e75a',
        '700': '#66e64c',
        '800': '#5ee444',
        '900': '#53e236',
      },
      /** generated by: 
      * https://color-palette-shade-generator.web.app/?H=290.0&S=0.5&scheme=1&pL=10.0&cn=Hex&c0=gray
      **/
      'gray': {
        DEFAULT: '#807e81',
        '50': '#abaaac',
        '100': '#a1a0a2',
        '200': '#99989a',
        '300': '#929092',
        '400': '#888688',
        '500': '#807e81',
        '600': '#787779',
        '700': '#6e6d6f',
        '800': '#666567',
        '900': '#5f5d5f',
      },
      'graydark': {
        DEFAULT: '#5a585a',
        '50': '#868386',
        '100': '#7c797c',
        '200': '#747274',
        '300': '#6c6a6c',
        '400': '#626062',
        '500': '#5a585a',
        '600': '#525152',
        '700': '#484748',
        '800': '#403f40',
        '900': '#393839',
      },
      'graylight': {
        DEFAULT: '#a6a5a7',
        '50': '#d1d1d2',
        '100': '#c7c6c7',
        '200': '#bfbfc0',
        '300': '#b8b7b8',
        '400': '#adadae',
        '500': '#a6a5a7',
        '600': '#9e9d9f',
        '700': '#949395',
        '800': '#8c8b8d',
        '900': '#858386',
      },
      yellow: {
        100: '#fffff0',
        200: '#fefcbf',
        300: '#faf089',
        400: '#f6e05e',
        500: '#ecc94b',
        600: '#d69e2e',
        700: '#b7791f',
        800: '#975a16',
        900: '#744210',
      },
      red: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a',
      },
      teal: {
        100: '#e6fffa',
        200: '#b2f5ea',
        300: '#81e6d9',
        400: '#4fd1c5',
        500: '#38b2ac',
        600: '#319795',
        700: '#2c7a7b',
        800: '#285e61',
        900: '#234e52',
      },
      primary: '#357c26',
    },
    screens: {
      xs: '440px',
      sm: '520px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      // '2xl': '1536px',
    },
    extend: {
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.9rem' }],
      }
    }
  },
});