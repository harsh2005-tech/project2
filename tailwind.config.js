/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"DM Sans"', '"Outfit"', '"Montserrat"', '"Lexend"', 'sans-serif'],
        body: ['"Inter"', '"Manrope"', '"Rubik"', '"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
