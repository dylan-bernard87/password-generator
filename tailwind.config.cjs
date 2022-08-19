/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    spacing: {
      '1': '5px',
      '2': '10px',
      '3': '15px',
      '4': '20px',
      '5': '25px',
      '6': '30px',
      '7': '35px',
      '8': '45px',
      '9': '50px',
      'xl': '100px',
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'gray': {
        100: '#F0F7F4',
        200: '#E9E9E9',
      },
      'black': '#000004',
      'primary': '#3434df',
      'secondary': '#fbfbff'
    },
  },
  plugins: [],
}
