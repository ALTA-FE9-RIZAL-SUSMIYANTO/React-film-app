/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      mukta: ["Mukta"],
    },
    extend: {
      colors: {
        "alta-primary": "#19345E",
      },
    },
  },
  plugins: [],
};
