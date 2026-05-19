/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 25s linear infinite',
      },
      colors: {
        'brand-bg': '#0a0f1c',
        'brand-cyan': '#00d4ff',
        'brand-blue': '#4f9cff',
        'brand-violet': '#a855f7',
      },
      boxShadow: {
        soft: '0 20px 50px -30px rgba(0, 0, 0, 0.9)',
      },
    },
  },
  plugins: [],
}

