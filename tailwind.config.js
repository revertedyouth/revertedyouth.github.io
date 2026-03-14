/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      colors: {
        black: "#0a0a0a",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
