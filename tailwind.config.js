/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#E4628E',
          500: '#FFAEC9',
          700: '#FFDAE6'
        },
        secondary: {
          300: '#B1AB27',
          500: '#FFF301',
          700: '#FFF868'
        },
        'p-black': '#101010'
      },

      fontFamily: {
        'blazma': ['Blazma', 'sans-serif'],
        'glametrix': ['Glametrix', 'sans-serif'],
        '8bitoperator': ['bitoperator', 'monospace']
      },

      screens: {
        'sm-lg': {'raw': '(min-width: 768px) and (max-width: 991px) and (min-aspect-ratio: 1/1)'},
        'md': {'raw': '(min-width: 768px) and (max-aspect-ratio: 1/1)'},
        'lg': '992px',
        '3xl': '1920px',
        '4xl': '3840px',
        '5xl': '7680px'
      },

      spacing: {
        'navbar-height': '72px',
        'navbar-height-4xl': '144px',
        'footer-height': '250px',
        'footer-height-sm': '200px',
        'footer-height-md': '400px',
        'footer-height-4xl': '800px'
      },

      height: {
        'navbar-height': '72px',
        'navbar-height-4xl': '144px',
        'footer-height': '250px',
        'footer-height-sm': '200px',
        'footer-height-md': '400px',
        'footer-height-4xl': '800px'
      },

      minHeight: {
        'footer-height': '250px',
        'footer-height-sm': '200px',
        'footer-height-md': '400px',
        'footer-height-4xl': '800px'
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('children', '&>*')
      addVariant('last-child', '&>*:last-child')
    })
  ],
}
