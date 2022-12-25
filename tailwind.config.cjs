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
        'bozz-three': '#3056D3',
        'bozz-four': '#c1f8cf',
        'bozz-five':'#E5E5E5',
        'bozz-six':'#F9F5F6',
        'bozz-seven':'#B9B9BA'
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
