import { defineConfig } from 'windicss/helpers';

import aspectRatio from 'windicss/plugin/aspect-ratio';
import forms from 'windicss/plugin/forms';
import typography from 'windicss/plugin/typography';

export default defineConfig({
  darkMode: 'class',
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
      green: {
        50: '#eefaec',
        100: '#def5d9',
        150: '#cdf0c5',
        200: '#bcebb2',
        250: '#ace79f',
        300: '#9be28c',
        350: '8add79',
        400: '#79d865',
        450: '#69d352',
        500: '#58ce3f',
        550: '#4fb939',
        600: '#46a532',
        650: '#3e902c',
        700: '#357c26',
        750: '#2c6720',
        800: '#235219',
        850: '#1a3e13',
        900: '#12290d',
        950: '#091506',
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
      gray: {
        DEFAULT: '#4a5568',
        light: '#cbd5e0',
        50: '#f7fafc',
        100: '#f1f2f5',
        150: '#eff0f2',
        200: '#edf2f7',
        250: '#e3e6ea',
        300: '#e2e8f0',
        350: '#d4d9e0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        850: '#22262d',
        900: '#1a202c',
        950: '#0b0d0f',
      },
      primary: '#357c26',
      /** generated by: 
      * https://color-palette-shade-generator.web.app/?H=110.0&scheme=1&cn=HSL&tw=varonly&c0=brand
      **/
      'brand': {
        DEFAULT: 'var(--color-brand)',
        '50': 'var(--color-brand-50)',
        '100': 'var(--color-brand-100)',
        '200': 'var(--color-brand-200)',
        '300': 'var(--color-brand-300)',
        '400': 'var(--color-brand-400)',
        '500': 'var(--color-brand-500)',
        '600': 'var(--color-brand-600)',
        '700': 'var(--color-brand-700)',
        '800': 'var(--color-brand-800)',
        '900': 'var(--color-brand-900)',
      },
      'brand-dark': {
        DEFAULT: 'var(--color-brand-dark)',
        '50': 'var(--color-brand-dark-50)',
        '100': 'var(--color-brand-dark-100)',
        '200': 'var(--color-brand-dark-200)',
        '300': 'var(--color-brand-dark-300)',
        '400': 'var(--color-brand-dark-400)',
        '500': 'var(--color-brand-dark-500)',
        '600': 'var(--color-brand-dark-600)',
        '700': 'var(--color-brand-dark-700)',
        '800': 'var(--color-brand-dark-800)',
        '900': 'var(--color-brand-dark-900)',
      },
      'brand-light': {
        DEFAULT: 'var(--color-brand-light)',
        '50': 'var(--color-brand-light-50)',
        '100': 'var(--color-brand-light-100)',
        '200': 'var(--color-brand-light-200)',
        '300': 'var(--color-brand-light-300)',
        '400': 'var(--color-brand-light-400)',
        '500': 'var(--color-brand-light-500)',
        '600': 'var(--color-brand-light-600)',
        '700': 'var(--color-brand-light-700)',
        '800': 'var(--color-brand-light-800)',
        '900': 'var(--color-brand-light-900)',
      },
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
  plugins: [aspectRatio,forms,typography],
});