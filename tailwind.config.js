/** @type {import('tailwindcss').Config} */
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
        }
      },

      fontFamily: {
        'blazma': ['Blazma', 'sans-serif'],
        'glametrix': ['Glametrix', 'sans-serif']
      },

      screens: {
        'sm-lg': {'raw': '(min-width: 768px) and (max-width: 991px) and (min-aspect-ratio: 1/1)'},
        'md': {'raw': '(min-width:  768px) and (max-aspect-ratio: 1/1)'},
        'lg': '992px',
        '3xl': '1920px',
        '4xl': '3840px',
        '5xl': '7680px'
      }
    },
  },
  plugins: [],
}
