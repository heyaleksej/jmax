/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#51C14F",
        secondary:"#44937D",
        gold: "#B3A779",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        donpoligrafbum: ["var(--font-donpoligrafbum)"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        ".green-underline": {
          textDecoration: "underline",
          "text-decoration-color": "#44937D",
        },
        ".gold-underline": {
          textDecoration: "underline",
          "text-decoration-color": "#B3A779",
        },
      };
      addUtilities(extendUnderline);
    },
  ],
};
