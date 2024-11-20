/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths as needed
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
