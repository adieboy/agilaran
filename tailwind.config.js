/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "black",
        "color-primary-light" : "#020726",
        "color-primary-dark" : "#010417",
        "color-secondary" : "#d8a35f",
        "color-white" : "#fff",
        "color-blob" : "#A427DF",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: "50px",
      }
    }
  },
  plugins: [],
}

