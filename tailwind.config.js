/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: ["Muller", "Arial", "sans-serif"],
      colors: {
        primary: "#a46b00",
        "primary-modified": "#ffaf18",
      },
      screens: {
        "max-md": { max: "768px" },
      },
    },
  },
  plugins: [],
};
