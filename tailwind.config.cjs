/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bozz-one': '#533e85',
        'bozz-two': '#488fb1',
        'bozz-three': '#4fd3c4',
        'bozz-four': '#c1f8cf',
        'bozz-five':'#E5E5E5',
        'bozz-six':'#F9F5F6'
      },
      backgroundImage : {
        'hero-pattern': "url('/src/assets/shoes.jpg')",
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
