/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#181C14",
          2: "#3C3D37",
          3: "#697565",
          4: "#ECDFCC",
        },
        stroke: {
          1: "#ECDFCC",
        },
      },
    },
  },
  plugins: [],
};
