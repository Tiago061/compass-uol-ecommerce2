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
        colors: {
          'bg-primary': '#F2F0F1', 
          'bg-cards': '#000000', 
          'bg-footer': '#F0F0F0',
          'color-font': '#00000099',
          'color-font2': '##00000066',
        },
        backgroundImage: {
          'gradient-half': 'linear-gradient(to bottom, #FFFF 50%, #F0F0F0 50%)',
        },
    },
  },
  plugins: [],
};

