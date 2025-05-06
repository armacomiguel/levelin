/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        orange: {
          light: "#ffefd6",
          strong: "#ef5f00",
        },
        green: {
          light: "#e6f6eb",
          strong: "#2b9a66",
        }, 
      },
    },
  },
  plugins: [],
};
