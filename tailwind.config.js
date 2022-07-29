const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      heading: ['Archivo Narrow', 'sans-serif'],
    },
    colors: {
      gray: colors.zinc,
      primary: colors.yellow,
      slate: colors.slate
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: colors.gray[100],
            h1: {
              color: colors.yellow[600],
              fontFamily: 'Archivo Narrow',
              fontSize: '50px',
              margin: '0px'
            },
            h2: {
              color: colors.yellow[600],
              fontFamily: 'Archivo Narrow',
              margin: '0px'
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
