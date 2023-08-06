/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#b63e96",
        primaryDark: "#58e6d9",
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgb(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)",
        circularDark:
          "repeating-radial-gradient(rgb(255,255,255,0.5) 2px, #1b1b1b 5px, #1b1b1b 100px)",
      },
    },
  },
  plugins: [],
};
