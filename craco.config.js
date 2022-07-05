//craco.config.js

module.exports = {
  babel: {
    plugins: ["babel-plugin-macros"],
    },
  style: {
    poscss:{
      plugins: [require("tailwindcss"),("autoprefixer")],
    },
  },
};
