/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    
    extend: {
      colors:{
        "gray":"#BAA699",
        "header":"#F2F2F2",
        "text":"#393e46",
         "white":"#EFEFEF",
         "Red":"#C5172E"
      },
      keyframes: {
      'fade-in': {
        '0%': { opacity: '0', transform: 'scale(0.95)' },
        '100%': { opacity: '1', transform: 'scale(1)' },
      },
    },
      animation: {
      'fade-in': 'fade-in 0.5s ease-in-out',
    },
    },
  },
  plugins: [],
};
