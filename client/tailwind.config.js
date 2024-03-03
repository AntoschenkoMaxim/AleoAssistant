/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/preline/preline.js'],
  theme: {
    extend: {
      colors: {
        'space-gray': '#0F172A',
        'space-purple': '#4C1D95',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms'), require('preline/plugin')],
}
