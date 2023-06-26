/** @type {import('tailwindcss').Config} */
// tailwind.config.js
import tailwindScrollbar from "tailwind-scrollbar";

export const content = ["./src/**/*.{html,js,jsx,ts,tsx}"];
export const important = "#root";
export const darkMode = "class";
export const theme = {
  extend: {
    gridTemplateRows: {
      3: "64px 1fr 181px ",
    },
  },
};
export const plugins = [tailwindScrollbar];
