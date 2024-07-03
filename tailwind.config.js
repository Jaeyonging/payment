/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cardbg-rgb": "rgb(235, 235, 235)",
        "flag-rgba": "rgba(0, 17, 255,0.2)",
        "selected-color": "rgba(209, 209, 209)"
      },
      screens: {
        sm: { min: "0px", max: "640px" },
        md: { min: "641px", max: "767px" },
        lg: { min: "768px", max: "1024px" },
      },
    },
  },
  plugins: [],
}

