/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A0A0A',
        panel: '#141414',
        card: '#0D0D0D',
        surface: '#1D1D1D',
        border: {
          DEFAULT: '#2A2A2A',
          soft: '#1A1A1A',
          faint: '#1F1F1F',
        },
        gold: {
          DEFAULT: '#D4A017',
        },
        muted: {
          DEFAULT: '#9B9B9B',
          soft: '#B0B0B0',
          faint: '#707070',
          faintest: '#505050',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
