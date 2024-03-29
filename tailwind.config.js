/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true
    },
    extend: {
      colors:{
        'black-dark':'#00000050',
        'dull-white':'#FFFFFFB3',
        'white-light':'#FFFFFF30',
        'white-medium':'#FFFFFF40',
        'neon-blue':'#2FB8FF',
      },
      fontFamily: {
        'ojuju': ['Ojuju', 'sans-serif'],
        'lovers': ["Lovers Quarrel", "cursive"],
      },
    },
  },
  plugins: [],
}