/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../**/*.{html,js}"],
  theme: {
    fontFamily: {
      'fgrotesk': ['Helvetica','arial','sans-serif'],
    },
    
    extend: {
      colors: {
        creamy:'#DADADA'
      },

      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        },
        fadeout: {
          '0%': {
            opacity: 0.5
          },
          '100%': {
            opacity: 0
          }
        },
        slideInx: {
          '0%': {
            transform: 'translateX(100%)',
            left:0
          },
          '100%': {
            transform: 'translateX(0)',
            left:1
          }
        },
        slideIny: {
          '0%': {
            transform: 'translateY(100%)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        underlinekabisa: {
          '0%' :{
            width: '0',
          },
          '100%':{
            width: '100%'
          }
        }
      },


      animation: {
         'fadeIn': 'fadeIn 2s ease-in',
         'fadeout': 'fadeout 0.5s ease-in',
         'slideInx': 'slideInx 2s ease-in',
         'slideIny': 'slideIny 2s ease-in', 

      }
    }

  },
  plugins: [],
}
