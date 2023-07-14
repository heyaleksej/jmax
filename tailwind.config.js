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
        primary: "var(--green)",
        secondary:"var(--secondary)",
        gold: "var(--yellow)",
        darkGray:"var(--dark-gray)",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        donpoligrafbum: ["var(--font-donpoligrafbum)"],
      },
      fontSize: {
        xxs: '0.625rem',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '22px':'1.375rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl-custom': '3.375rem',
      },
      margin: {
        '75px': '4.6875rem',
        '137px': '8.5625rem',
      }
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
