/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trybePink: "#FFC0CB",
        trybeLav: "#E6E6FA",
        trybeGrey: "#F5F5F5",
      },
      borderRadius: {
        xl: "20px",
      },
    },
  },
  plugins: [],
};
