/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#212529',
        'dark-50': '#383E45',
        'orange': '#FFB742'
      },
      spacing: {
        '416': '416px',
        '560': '560px',
        '672': '672px',
      },
      height: {
        '176': '176px',
        '300': '300px',
        '491': '491px',
      }
    },
  },
  plugins: [],
}
