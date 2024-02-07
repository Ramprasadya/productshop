/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      xsm: "340px",
      xsm2: "420px",
      sm: "568px",
      sm2: "650px",
      md: "768px",
      md2: "800px",
      md3: "860px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    }
  },
  plugins: [],
}