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
    }
  },
  plugins: [],
}
