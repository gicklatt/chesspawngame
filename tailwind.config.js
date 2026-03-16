/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        deft: {
          50: "#f0f7f4",
          100: "#d4e8df",
          200: "#a9d1bf",
          300: "#78b59b",
          400: "#5a9d82",
          500: "#4A7C6F",
          600: "#3A6558",
          700: "#2D5048",
          800: "#264039",
          900: "#1D332E",
          950: "#111f1b",
        },
        gold: {
          50: "#fdf8eb",
          100: "#f9ecc8",
          200: "#f3d88e",
          300: "#edc254",
          400: "#D4A843",
          500: "#c49430",
          600: "#a97525",
          700: "#8b5720",
          800: "#734521",
          900: "#613a21",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
