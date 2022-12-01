/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roslindale: 'Roslindale, bold', 
        lane: 'Lane, normal',
        rosli: 'Roslindale, normal'
      },
      colors: {
        'yellow' : '#F6DD8B',
        'brown' : '#6E4C1C',
        'green' : '#929043',
        'pink' : '#C18665',
        'yellowcito' : '#FAE6A9',
        'greencito' : '#929043B0'
      }
    },
  },
  plugins: [
  ],
}
