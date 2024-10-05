/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          md: "100px"
        }
      },
      keyframes: {
        underlineHover: {
          '0%': {
            borderBottomWidth: 0,
          },
          '100%': {
            borderBottomWidth: 2,
          },
        },
      },
      animation: {
        'underlineHover': 'underlineHover 0s ease-in-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}