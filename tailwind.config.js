const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
        secondary: colors.trueGray,
        warning: colors.amber,
        danger: colors.red,
      },
    },
  },
  variants: {
    extend: {
      brightness: ['hover'],
    },
  },
  plugins: [],
};
