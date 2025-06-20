/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4a5a6a",    // muted blue-gray
          light: "#6b7a8f",
          dark: "#364050",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f7",
          200: "#e1e3e8",
          300: "#c5c8d3",
          400: "#9ea3b3",
          500: "#7a8096",
          600: "#616779",
          700: "#4a5060",
          800: "#383e4a",
          900: "#272c38",
        },
        accent: {
          DEFAULT: "#708090", // slate gray as subtle accent
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
