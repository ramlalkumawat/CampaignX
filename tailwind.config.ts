import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        campaignx: {
          black: '#050505',
          red: '#e50914',
          dark: '#0f1215',
          light: '#f8f8f8',
          gray: '#a3a3a3',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(229, 9, 20, 0.35)',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'Segoe UI', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'Poppins', 'Segoe UI', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
