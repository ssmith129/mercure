/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'jet-black': '#141414',
        'honeydew': '#f0fff0',
        'whisper-grey': '#f0f0f0',
        'jade-green': '#3c8c78',
        'deep-teal': '#287886',
        'azure-mist': '#f0ffff',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '1280px',
      },
    },
  },
  plugins: [],
};