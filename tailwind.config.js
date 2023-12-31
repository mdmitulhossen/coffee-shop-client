/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif'],
      'rancho':['Rancho', 'cursive']
    },
    extend: {
      colors: {
        'coffee': '#331A15',
      },
    },
  },
  plugins: [],
}

