/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1960px',
        '4xl': '2260px',
      },

      colors: {
        mblue: 'rgba(35, 74, 214, 1)',
        customgrey: 'rgba(244, 245, 247, 1)',
        lpurple: 'rgba(213, 219, 242, 1)',
      },

      backgroundImage: {
         'custom-img': "url('./images/bg-img.png')",
      },
     
    },
  },
  plugins: [],
}

