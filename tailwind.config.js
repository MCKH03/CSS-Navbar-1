/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

const withOpacity = function (variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else return `rgba(var(${variableName}))`;
  };
};

module.exports = {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {
      fontFamily: {},
      backgroundImage: {},
      colors: {
        "blue-dark-custom": "#28306A",
        "blue-light-custom": "#6979f8",
      },
      boxShadow: {},
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};
