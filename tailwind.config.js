/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8F5F2',
          100: '#D1EAE5',
          200: '#A3D6CB',
          300: '#75C2B1',
          400: '#47AE97',
          500: '#38A37D', // verde principal
          600: '#2E8B57',
          700: '#246E45',
          800: '#1E5631',
          900: '#184428',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}