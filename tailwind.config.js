/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      "brand-red": "#d0122d",
      "brand-blue": "#042554",
      "brand-white": "#f8fdfd",
      "delicate-and-nutty-cheese": "#FAED70",
      "fresh-and-salted-cheese": "#FFB977",
      "smelly-cheese": "#A55B6E",
      "strong-and-firm-cheese": "#F9B2B2",
      charcuterie: "#CBB5A2",
      fish: "#7D5642",
      mollusc: "#284B63",
      "red-meat": "#AEB9E8",
      shellfish: "#B2E6D4",
      "white-meat": "#7A9E7E",
    },
    fontSize: {
      s: "0.8125rem",
      base: "1rem",
      l: "1.25rem",
      xl: "1.625rem",
      "2xl": "2.0625rem",
      "3xl": "2.625rem",
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1281px",
      "2xl": "1536px",
    },
    extend: {
      maxHeight: {
        240: "15rem",
      },
      flexBasis: {
        "1/7": "14.285714%",
        "1/8": "12.5%",
        "1/9": "11.111111%",
        "1/10": "10%",
        "1/11": "9.090909%",
      },
    },
  },
  plugins: [],
};
