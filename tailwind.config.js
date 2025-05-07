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
          solid1: "#69c300",
          solid2: "#539a00"

        }, 
        red: {
          strong: "#ef4848",
          solid1: "#a9543a",
          solid2: "#9a2b00",
        },
        black: {
          serie100: "#000000"
        },
        blue: {
          strong1: "#242F3B",
        }
        
      },
    },
  },
  plugins: [],
};
