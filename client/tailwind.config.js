// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // ou 'media' ou 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        secondary: '#00FF00',
        tertiary: '#0000FF',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      // Mais personalizações aqui
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
