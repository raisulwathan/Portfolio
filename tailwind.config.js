/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./public/tes.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      letterSpacing: {
        ngempit: "-0.5em",
        ngangkang: ".5em",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
