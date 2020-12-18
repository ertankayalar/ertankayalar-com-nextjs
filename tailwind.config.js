const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        red: colors.red,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,

        strong: {
          lightest: '#848a8e',
          light: '#5a6369',
          DEFAULT: '#323D44',
          dark: '#283036',
          darkest: '#1e2428',
        },
        primary: {
          lightest: '#d2c6ba',
          light: '#b7a490',
          DEFAULT: '#A68E75',
          dark: '#957f69',
          darkest: '#53473a',
        },
        secondary: {
          lightest: '#c3dfe3',
          light: '#afd5da',
          DEFAULT: '#9CCBD1',
          dark: '#8cb6bc',
          darkest: '#7ca2a7',
        },

        bright: {
          lightest: '#fdfdfc',
          light: '#faf9f7',
          DEFAULT: '#F7F6F3',
          dark: '#deddda',
          darkest: '#c5c4c2',
        },
        accent: {
          lightest: '#eaacb5',
          light: '#d5596a',
          DEFAULT: '#CB3046',
          dark: '#b62b3f',
          darkest: '#8e2131',
        },
      },
      fontFamily: {
        body: ['Poppins'],
        sans: [
          'Poppins',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#5a6369',
            h1: {
              color: '#957f69',
            },
            h2: {
              color: '#957f69',
            },
            h3: {
              color: '#957f69',
            },
            h4: {
              color: '#957f69',
            },
            h5: {
              color: '#957f69',
            },
            strong: {
              color: '#5a6369',
            },
            a: {
              color: '#CB3046',
              textDecoration: 'none',
              '&:hover': {
                color: '#d5596a',
              },
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
