import colors from 'tailwindcss/colors'

export default {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],
  theme: {
    fontFamily: {
      sans: ['Tajawal'],
    },
    extend: {
      colors: {
        dark: "#0F0F11",
        light: "#F3F3F3",
        mid: "#B7B7B7",
      }
    }
  }
}
