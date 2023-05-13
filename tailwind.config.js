/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        opensans: "'Open Sans', sans-serif",
        roboto: "'Roboto', sans-serif",
        inter: "'Inter', sans-serif",
      },
      colors: {
        primary: "#6200ee",
        error: "#B43236",
        positive: "#459B64",
        passive: "#E6A03A",
        neutral: "#D8DBD1",
      },
      inset: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
