/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'bg-blue': '#0d2438',
      },
    },
  },
  plugins: [],
}