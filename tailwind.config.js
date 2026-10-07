/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        deft: {
          50: "#f7f0ff",
          100: "#eadbfb",
          200: "#d6bef2",
          300: "#c4a0f8",
          400: "#b994e8",
          500: "#9768D7",
          600: "#815AC0",
          700: "#6544A0",
          800: "#4F327D",
          900: "#34264F",
          950: "#22143E",
        },
        gold: {
          50: "#fdf8eb",
          100: "#f9ecc8",
          200: "#f3d88e",
          300: "#edc254",
          400: "#FFC539",
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
