/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
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
        circularLightLargeScreen:
          "repeating-radial-gradient(rgb(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 80px)",
        circularDarkLargeScreen:
          "repeating-radial-gradient(rgb(255,255,255,0.5) 2px, #1b1b1b 5px, #1b1b1b 80px)",
        circularLightMediumScreen:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",
        circularDarkMediumScreen:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px,#1b1b1b 60px)",
        circularLightSmallScreen:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",
        circularDarkSmallScreen:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 4px,#1b1b1b 40px)",
      },
    },
  },
  plugins: [],
};
