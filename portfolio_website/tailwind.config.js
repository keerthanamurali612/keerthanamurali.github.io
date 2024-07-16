/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'primary':'rgb(85 81 227)',
        'bg-primary':'#971b0a',
        'bg-secondary':'#E7E8D1',
        'bg-third':'#A7BEAE'
      }
    },
    fontFamily:{
      'header-font':'Poppins',
      'hero-font':'Sriracha'
    }
  },
  plugins: [],
}

