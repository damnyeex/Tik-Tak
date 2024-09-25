/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Пути к вашим файлам
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Если вы используете директорию src
  ],
  theme: {
    extend: {
      screens: {
        sm: "600px",
      },
      gridTemplateRows: {
        "game-field": "repeat(17, 30px)",
        "game-field-sm": "repeat(3, 70px)",
      },
      gridTemplateColumns: {
        "game-field": "repeat(17, 30px)",
        "game-field-sm": "repeat(3, 70px)",
      },
    },
  },
  plugins: [],
};
