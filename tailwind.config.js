/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        haven: {
          pink: '#FF4D8D',
          purple: '#8B5CF6',
          coral: '#FF6B6B',
          dark: '#0F0F14',
        },
      },
    },
  },
  plugins: [],
};
