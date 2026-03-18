import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        naranja: '#FF5500',
        'naranja-hover': '#E04A00',
        negro: '#0A0A0A',
        'gris-oscuro': '#111111',
        'gris-1': '#111111',
        'gris-card': '#161616',
        'gris-2': '#1A1A1A',
        'gris-borde': '#2A2A2A',
        'gris-3': '#2A2A2A',
        'gris-4': '#3A3A3A',
        'gris-texto': '#888888',
      },
      fontFamily: {
        heading: ['var(--font-barlow)', 'sans-serif'],
        body: ['var(--font-dm)', 'sans-serif'],
        barlow: ['var(--font-barlow)', 'sans-serif'],
        dm: ['var(--font-dm)', 'sans-serif'],
      },
      keyframes: {
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        shimmer: 'shimmer 2s infinite linear',
      },
    },
  },
  plugins: [],
}
export default config
