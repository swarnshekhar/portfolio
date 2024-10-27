
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        londrina: ['Londrina Sketch', 'sans-serif'], // Use Roboto as the default sans font
      },
    },
  },
  plugins: [],
}