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
          lightest: '#94A3B8',
          light: '#64748B',
          DEFAULT: '#475569',
          dark: '#334155',
          darkest: '#1E293B',
        },
        primary: {
          lightest: '#af68ea',
          light: '#9436e3',
          DEFAULT: '#7A04DD',
          dark: '#6103b0',
          darkest: '#490284',
        },
        secondary: {
          lightest: '#c1d3d4',
          light: '#adc5c6',
          DEFAULT: '#99B7B8',
          dark: '#89a4a5',
          darkest: '#7a9293',
        },

        bright: {
          lightest: '#fdfdfc',
          light: '#faf9f7',
          DEFAULT: '#F7F6F3',
          dark: '#deddda',
          darkest: '#c5c4c2',
        },
        accent: {
          lightest: '#f8b494',
          light: '#f38753',
          DEFAULT: '#F16A29',
          dark: '#d85f24',
          darkest: '#c05420',
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
