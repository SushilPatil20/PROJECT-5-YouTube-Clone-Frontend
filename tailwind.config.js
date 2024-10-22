/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': [
          '0.65rem',
          '0.75rem'
        ]
      }
    },
  },
  plugins: [],
}

