/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'bg': '#E9F1FA',
        'text':'#1F375B',
        'subtitle':'#00ABE4'
      }
    },
  },
  plugins: [],
}