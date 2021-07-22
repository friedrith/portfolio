const colors = require('tailwindcss/colors')

// https://coolors.co/031224-720045-83215d-af0069-949cdf-f5853f-0cce6b-3083dc-bce7fd-c492b1

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'ui-sans-serif', 'system-ui'],
      },
      fontWeight: {
        light: 400,
        normal: 425,
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        half: '75vh',
        '3/4': '75%',
        full: '100%',
      },
      flex: {
        2: '2 2 0%',
      },
      colors: {
        black: {
          500: '#031224',
          600: '#010B17',
        },
        white: {
          500: '#fff',
        },
        purple: {
          500: '#AF0069',
          600: '#83215D',
          700: '#720045',
        },
        blue: {
          300: '#BCE7FD',
          500: '#949CDF',
        },
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
      },
      backgroundImage: (theme) => ({
        montreal: "url('~assets/montreal.jpg')",
        skyline: "url('~assets/skyline.png')",
        world: "url('~assets/world.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
