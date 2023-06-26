/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      "brand-red": "#d0122d",
      "brand-blue": "#042554",
      "brand-white": "#f8fdfd",
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
    },
  },
  plugins: [],
};
