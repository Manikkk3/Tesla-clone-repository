/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      ll: '1177px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'Model3' : "url('/images/model-3.jpg')",
        'ModelY' : "url('/images/model-y.jpg')",
        'ModelS' : "url('/images/model-s.jpg')",
        'ModelX' : "url('/images/model-x.jpg')",
        'SolarPanels' : "url('/images/solarpanels.jpg')",
        'SolarRoof' : "url('/images/roof.jpg')",
        'Accessories' : "url('/images/accessories.jpg')",
      }
    },
  },
  plugins: [],
}



