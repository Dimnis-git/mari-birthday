/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'harry': ['Harry Potter', ...defaultTheme.fontFamily.sans],
        'afterglow': ['Afterglow', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'gryffindor': '#710d13',
        'ravenclaw': '#005f7d',
        'slytherin': '#0e6e0b',
        'hufflepuff': '#b07a01'
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"]
  }
}
