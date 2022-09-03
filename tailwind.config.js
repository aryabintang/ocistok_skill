/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "oren-bg": "#FFC330",
        "oren-btn": "#FCB327",
        "oren-ftr": "#FFC430",
        "oren-bd": "#FFC42D",
      },
    },
  },
  plugins: [],
};
