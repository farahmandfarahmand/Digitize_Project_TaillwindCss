/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./src/js/theme.js"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Iranyekan"],

      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      // strategy: "class",
      // for page of form should be delete
    }),
  ],
};