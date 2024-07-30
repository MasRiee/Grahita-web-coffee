/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: "true",
      padding: "16px",
    },
    extend: {
      screens: {
        "2xl": "1320px",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/mugbeans.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      fontFamily: {
        Bevan: ["Bevan", "serif"],
      },
    },
  },
  plugins: [],
};
