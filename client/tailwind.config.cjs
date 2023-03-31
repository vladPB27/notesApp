/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'vlad': '#00BFFF',
        'vlad-bg': '#F2F2F2',
      }
    },
  },
  plugins: [],
}
