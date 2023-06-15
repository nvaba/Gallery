/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#797979",
      },
      fontFamily: {
        Inter: ["Inter Tight", "sans-serif"],
      },
    },
  },
  plugins: [],
};
