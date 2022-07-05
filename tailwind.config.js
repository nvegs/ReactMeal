module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
      animation: {
        meals: 'meals 1s ease-out forwards',
        slide_down: 'slide_down 300ms ease-out forwards',
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
