/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kaggle-blue': {
          DEFAULT: '#20BEFF',
          dark: '#1A95CC',
        }
      },
      maxWidth: {
        '1400': '1400px'
      }
    },
  },
  plugins: [],
}