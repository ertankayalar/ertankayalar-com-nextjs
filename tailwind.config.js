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
        gray: colors.blueGray,
        red: colors.red,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,

        strong: {
          lightest: '#717f93',
          light: '#42546f',
          DEFAULT: '#13294b',
          dark: '#0f213c',
          darkest: '#0d1d35',
        },
        primary: {
          lightest: '#ffa57a',
          light: '#ff8c54',
          DEFAULT: '#ff7f41',
          dark: '#e6723b',
          darkest: '#cc6634',
        },
        secondary: {
          lightest: '#c4c2bf',
          light: '#acaaa5',
          DEFAULT: '#88857e',
          dark: '#7a7871',
          darkest: '#5f5d58',
        },

        bright: {
          lightest: '#fbf8f5',
          light: '#faf5f2',
          DEFAULT: '#f9f3ef',
          dark: '#e0dbd7',
          darkest: '#c7c2bf',
        },
        accent: {
          lightest: '#eca08c',
          light: '#e58165',
          DEFAULT: '#df613f',
          dark: '#c95739',
          darkest: '#9c442c',
        },
      },
      fontFamily: {
        body: ['Inter'],
        sans: [
          'Inter',
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
            color: '#475569',
            h1: {
              color: '#334155',
            },
            h2: {
              color: '#334155',
            },
            h3: {
              color: '#334155',
            },
            h4: {
              color: '#334155',
            },
            h5: {
              color: '#334155',
            },
            strong: {
              color: '#5a6369',
            },
            a: {
              color: '#F16A29',
              textDecoration: 'none',
              '&:hover': {
                color: '#7A04DD',
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
