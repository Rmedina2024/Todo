const { NextURL } = require("next/dist/server/web/next-url");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      xs: { min: "200px", max: "500px" },
      sm: { min: "501px", max: "767px" },
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
      },

      linearBorderGradients: ({ theme }) => ({
        colors: {
          "purple-blue": ["#57DDFF", "#C058F3"],
          "slate-300": ["#cbd5e1", "#cbd5e1"],
          "grayish-blue": ["#393a4d", "#393a4d"],
        },
        background: {
          "dark-blue": ["#25273c"],
          "zinc-white": ["#fafafa"],
        },
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [require("tailwindcss-border-gradient-radius")],
};
