/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#5b5b5bff',
          600: '#16367aff',
          700: '#1a3377ff',
          800: '#1c3588ff',
          900: '#1e3a8a',
          950: '#172554',
        },
        'accent': {
          500: '#F2EA7E',
          600: '#BFA041',
          700: '#BF9445',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        /* 'sans': ['Outfit', 'Segoe UI', 'sans-serif'], */
        'serif': ['Outfit', 'Segoe UI', 'sans-serif'],
      }
    },
  },
  plugins: [],
}