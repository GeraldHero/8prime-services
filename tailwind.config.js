/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      roboto: "'Roboto', sans-serif",
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      primary: '#C9CFCF',
      secondary: '#5B95AA',
      background: '#7A8187',
      light: '#F0F4FC',
      dark: '#333652',
      tahiti: '#3ab7bf',
      logo: '#9C9290',
      yellow: '#FAD02C',
      green: colors.green,
      rose: colors.rose,
      gray: colors.gray,
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
