/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Replace this with the colors of the Learnoso
      colors: {
        primary: "#21409A",
        green: "#009B77",
        gray: "#79767D",
        black: "#070120",
        "light-gray": "#E9ECF5",
        dark: "#565459",
        orange: "#FF7F00",
        red: "#F15A29",
        pink: "#FF6EB4",
      },
    },
  },
  plugins: [],
};
