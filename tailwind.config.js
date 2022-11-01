/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      s: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {},
      width: {
        25: "6.5rem",
        30: "8rem",
        70: "19rem",
        120: "40rem",
        100: "35rem",
        90: "32rem",
      },
      height: {
        25: "6.5rem",
        30: "8rem",
        70: "19rem",
        120: "30rem",
      },
    },
  },
  plugins: [],
};
