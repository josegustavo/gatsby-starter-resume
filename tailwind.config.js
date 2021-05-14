const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.lightBlue,
      secondary: colors.orange,
      white: '#fff',
      neutral: {
        50: '#5a7888',
        100: '#526e7c',
        200: '#4a6370',
        300: '#435965',
        400: '#3b4e59',
        500: '#33444d',
        600: '#2b3a41',
        700: '#232f35',
        800: '#1c252a',
        900: '#141a1e',
      },
      gray: {
        50: '#fcfcfd',
        100: '#e2e2e3',
        200: '#c9c9ca',
        300: '#b0b0b1',
        400: '#979797',
        500: '#7e7e7e',
        600: '#646465',
        700: '#4b4b4b',
        800: '#323232',
        900: '#191919',
      },
      dark: {
        50: '#0b72b1',
        100: '#0a679f',
        200: '#095b8c',
        300: '#084f7a',
        400: '#064367',
        500: '#053755',
        600: '#042b42',
        700: '#031f30',
        800: '#02131e',
        900: '#01070b',
      },
    },
    extend: {
      screens: {
        print: { raw: 'print' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
