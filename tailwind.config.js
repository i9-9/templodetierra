/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roslindale: 'Roslindale, bold', 
        lane: 'Lane, normal'
      },
      colors: {
        'yellow' : '#F6DD8B',
        'brown' : '#6E4C1C',
        'green' : '#929043'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
