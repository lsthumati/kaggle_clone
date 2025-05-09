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
          600: '#20BEFF',
          700: '#1A95CC',
          800: '#157AAB'
        }
      },
      maxWidth: {
        '1400': '1400px'
      }
    },
  },
  plugins: [],
}