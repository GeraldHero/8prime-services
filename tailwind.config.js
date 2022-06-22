/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#C9CFCF",
      secondary: "#5B95AA",
      background: "#7A8187",
      light: "#F0F4FC",
      dark: "#333652",
      tahiti: "#3ab7bf",
      logo: "#9C9290",
      yellow: "#FAD02C",
      green: "#009688",
      lightGreen: "#285e61",
    },
  },
  plugins: [],
};
