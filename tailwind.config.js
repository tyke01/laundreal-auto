/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        Agbalumo: ['Agbalumo', 'sans-serif'],
      },
      backgroundColor: {
        'main-bg': '#ffffff',
        'secondary-blue-bg': '#2da2dc',
        'dark-blue-bg': '#0071bc',
        'light-blue-bg': '#48cae4',
        'gray-bg': '#d8dbdf',

        'primary-white': '#ffffff',
        'card-bg': '#ebebeb',

      },
      colors: {
        'primary': "#fff",
        'secondary-clr': '#2da2dc',
        'dark-blue': '#0071bc',
        'primary-yellow': '#f0e24b',
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('/washing-machine-1.png')",
        'card': "url('/washing-machine-2.jpg')",
      },

    },
  },
  plugins: [],
}