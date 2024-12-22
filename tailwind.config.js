/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'shimmer': 'shimmer 1.5s infinite linear'
      },
      keyframes: {
        shimmer: {
          '0%': {
            backgroundPosition: '-400px 0'
          },
          '100%': {
            backgroundPosition: '400px 0'
          }
        }
      }
    },
  },
  plugins: [],
}

