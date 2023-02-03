/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
    extend: {
      fontFamily: {
        sans: ['Poppins']
      },
      colors: {
        'primary': '#754ef9',
        'secondary': '#8a8fa3',
        'normal': '#32333c',
        'backToTop': 'rgb(21, 33, 54)'
      }
    },
  },
  plugins: [],
}
