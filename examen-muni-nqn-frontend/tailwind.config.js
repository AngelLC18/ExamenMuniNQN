/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  important: "#root",
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateRows: {
        3: "64px 1fr 181px ",
      },
    },
  },
  plugins: [],
};
