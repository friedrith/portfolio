const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'ui-sans-serif', 'system-ui'],
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      colors: {
        indigo: {
          1000: '#002b36',
          900: '#073642',
        },
        cyan: {
          500: '#93a1a1',
        },
        magenta: {
          500: '#d33682',
        },
        yellow: {
          500: '#b58900',
        },
        pink: {
          600: '#af0069',
          700: '#83215d',
          800: '#720045',
        },
        green: {
          600: '#37D637',
        },
        white: {
          500: '#eee8d5',
          400: '#fdf6e3',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
