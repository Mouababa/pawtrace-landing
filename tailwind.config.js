/** @type {import('tailwindcss').Config} */
export default {
  content: [
    \"./index.html\",
    \"./src/**/*.{js,ts,jsx,tsx}\",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B7A8A',
        secondary: '#F59E0B',
        whatsapp: '#25A35A',
        background: '#FFFFFF',
        'background-alt': '#F3F8FA',
        'text-primary': '#0F1F2E',
        'text-muted': '#5B6B78',
        border: '#E6ECF0'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      borderRadius: {
        'card': '20px',
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(15,31,46,.06)',
        'card': '0 18px 40px -12px rgba(15,31,46,.18)',
        'cta': '0 12px 30px -8px rgba(245,158,11,.55)'
      }
    },
  },
  plugins: [],
}
