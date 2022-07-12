module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
      animation: {
        meals: 'meals 1s ease-out forwards',
        slide_down: 'slide_down 300ms ease-out forwards',
        bump: 'bump 300ms ease-out',
      },

      keyframes: {
        meals : {
          '0%' : {opacity: 0, transform: 'translateY(3rem)'},
          '100%' : {opacity: 1, transform: 'translateY(0)'}, 
        },

        slide_down : {
          '0%': {opacity: 0, transform: 'translateY(-3rem)'},
          '100%' : {opacity: 1, transform: 'translateY(0)'}, 
        },

        bump: {
          '0%': { transform: 'scale(1)'},
          '10%': {transform: 'scale(0.9)'},
          '30%': {transform: 'scale(1.1)'},
          '50%': {transform: 'scale(1.15)'},
          '100%': {transform: 'scale(1)'},
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
