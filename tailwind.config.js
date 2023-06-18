/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#797979",
        background: "#f5f5f7",
      },
      fontFamily: {
        Inter: ["Inter Tight", "sans-serif"],
      },
    },
  },
  plugins: [],
};
