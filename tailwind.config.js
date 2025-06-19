/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f0e9e1",
        secondary: "#FAFAFA",
        btnColor: "#ffc947",
        primaryDark: "#151424",
        primaryDark2: "#1E1C31",
        primaryLight: "#394768",
        borderColor: "rgb(72, 90, 132)",
        iconColor: "rgb(171, 184, 212)",
        textLight1: "#E8EEF7",
        textLight2: "#ABB8D4",
      },
      fontFamily: {
        josefin: ['"Josefin Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
