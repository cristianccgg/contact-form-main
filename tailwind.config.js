/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "main-green": "hsl(148, 38%, 91%)",
        "Green-600-medium": "hsl(169, 82%, 27%)",
        red: "hsl(0, 66%, 54%)",

        White: "hsl(0, 0%, 100%)",
        Grey500medium: "hsl(186, 15%, 59%)",
        "Grey-900-darker": "hsl(187, 24%, 22%)",
      },
    },
  },
  plugins: [],
};
