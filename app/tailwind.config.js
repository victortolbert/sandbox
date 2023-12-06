const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette')

const aspectRatio = require('@tailwindcss/aspect-ratio')
const containerQueries = require('@tailwindcss/container-queries')

const headlessUi = require('@headlessui/tailwindcss')
const heroPatterns = require('tailwind-heropatterns')
const svgToDataUri = require('mini-svg-data-uri')

const appColors = require('./assets/design/tokens/color')

const colors = { ...defaultColors, ...appColors }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './slices/**/*.{js,ts,vue}',
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-red-500',
    'text-3xl',
    'lg:text-4xl',
  ],
  theme: {
    extend: {
      colors: {
        'gray': colors.slate,

        'primary': colors.toreaBay,

        'brand': colors.toreaBay,
        'brand-lightest': '#aeb8d6',
        'brand-light': '#3762d7',
        'brand-dark': '#001a61',
        'brand-darkest': '#000e33',

        'error': colors.rose,
        'warning': colors.amber,
        'info': colors.sky,
        'success': colors.emerald,

        'fossil': '#e2ddcf',
        'jute': '#d8d2c0',
        'pashmina': '#b9b2a3',
        'weimaraner': '#9d9284',

        'tranquility': '#bcc3bc',
        'croquet': '#b3b6a1',
        'thicket': '#a1a082',
        'lush': '#758072',

        'constellation': '#d7e1e3',
        'solitude': '#a5aeb3',
        'exhale': '#a4b7c0',
        'lucerne': '#44637b',

        'nightingale': '#b6b4b2',
        'tempest': '#79767d',
        'luxe': '#767d90',
        'flint': '#575c5e',

        'dinnerParty': '#6e3a39',
        'pomegranate': '#813d40',
        'kalamata': '#6a515e',
        'wenge': '#3a2e2b',

        'vueGreen': 'rgb(66,185,131)',
        'vueGreenHover': 'rgb(50,161,111)',
        'vueBlue': 'rgb(98,136,241)',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },

      boxShadow: {
        field: 'rgba(10, 10, 10, 0.1) 0px 1px 2px 0px inset',
        px: '0 0 0 1px rgba(0, 0, 0, 0.5)',
        outline: '0 0 0 1px rgba(0, 0, 0, 0.5)',
      },

      fontFamily: {
        body: ['Nunito Sans Variable', 'sans-serif'],
        heading: ['Nunito Variable', 'sans-serif'],
        sans: ['DM Sans', 'DM Sans fallback', 'Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
        salesforce: ['Salesforce Sans', ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        display: ['Space Mono', 'Bungee', 'Pica'],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
        mockup: ['Balsamiq Sans', 'cursive'],
        proto: [
          'Flow Circular',
          'Redacted Script',
          'Flow Block',
          'Blokk Neue',
          'Blokk',
          'Flow Rounded',
          'cursive',
        ],
      },

      fontSize: {
        '2xs': ['0.625rem', '0.875rem'],
      },

      gridTemplateColumns: {
        24: 'repeat(24, minmax(1rem, 1fr))',
      },

      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
      },

      maxWidth: {
        '8xl': '90rem',
      },

      animation: {
        'flash-code': 'flash-code 1s forwards',
        'flash-code-slow': 'flash-code 2s forwards',
        'marquee': 'marquee var(--duration, 30s) linear infinite',
        'wiggle': 'wiggle 1s infinite',
      },

      keyframes: {
        'flash-code': {
          '0%': { backgroundColor: 'rgb(125 211 252 / 0.1)' },
          '100%': { backgroundColor: 'transparent' },
        },
        'marquee': {
          to: { transform: 'translateX(-50%)' },
        },
        'wiggle': {
          '0%, 100%': {
            transform: 'scale(1.2) rotate(7deg)',
          },
          '50%': {
            transform: 'scale(0.8) rotate(-7deg)',
          },
        },
      },

      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-quad': 'cubic-bezier(.55, .085, .68, .53)',
        'out-quad': 'cubic-bezier(.25, .46, .45, .94)',
      },

      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
    },
  },
  plugins: [
    aspectRatio,
    containerQueries,
    headlessUi,
    heroPatterns({
      patterns: [],
      // The foreground colors of the pattern
      colors: {
        'default': '#9C92AC',
        'blue-dark': '#000044', // also works with rgb(0,0,205)
      },

      // The foreground opacity
      opacity: {
        default: '0.4',
        100: '1.0',
      },
    }),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'bg-grid': value => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke="${value}" fill="none"><path d="M64 0H0V64"/></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: ['color'],
        },
      )

      matchUtilities(
        {
          'bg-grid': value => ({
            backgroundSize: value,
          }),
        },
        {
          values: theme('spacing'),
          type: ['number', 'length', 'any'],
        },
      )
    }),
  ],
}
