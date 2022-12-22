/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'eo-primary': '#533E85',
      'eo-secondary': '#F9F5F6',
      black: '#000000',
      white: '#ffffff',
    },
  },
  plugins: [
    require("daisyui")
  ],
}
