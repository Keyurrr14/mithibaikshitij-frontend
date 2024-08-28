/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            arcade: ["Arcade", "sans-serif"],
            fairydust: ["FairydustB", "sans-serif"]
          },
    },
  },
  plugins: [],
}
