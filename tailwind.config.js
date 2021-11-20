// const { colors } = require('./config.json');
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      light: {
        background: "#eceef0",
        foreground: "#263137",
        black: "#262b32",
        red: "#ff5151",
        green: "#99c594",
        yellow: "#f9c862",
        blue: "#649ac9",
        magenta: "#c795c4",
        cyan: "#5eb3b3",
        white: "#fefefe",
        gray: "#7C6F64",
        link: "#80abd0",
        selection: "#607c8b",
        selectedtext: "#eceef0",
      },
      dark: {
        background: "#263137",
        foreground: "#eceef0",
        black: "#525d6d",
        red: "#f76a6a",
        green: "#adc7aa",
        yellow: "#f3cd7e",
        blue: "#80abd0",
        magenta: "#d5b8d3",
        cyan: "#7cc4c4",
        white: "#fefefe",
        gray: "#A89984",
        link: "#80abd0",
        selection: "#607c8b",
        selectedtext: "#eceef0",
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
