/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#50806B",
      },
      screens: {
        sm: "640px",
        md: "768px",
        xl: "1024px",
        lg: "1280px",
      },
      fontFamily: {
        sans: ['Nunito Sans',"sans-serif"],
      },
    },
    plugins: [],
  },
};
