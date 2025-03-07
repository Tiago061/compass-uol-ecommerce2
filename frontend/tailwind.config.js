/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'integral-cf': ['"Integral CF"', 'sans-serif'],
        'satoshi': ['"Satoshi"', 'sans-serif'],
        'satoshi-regular': ['"Satoshi regular"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

