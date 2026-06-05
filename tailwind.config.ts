import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#d4af37',
          light: '#f0d77a',
          dark: '#b8860b',
        },
        graphite: '#2a2a2a',
        grass: '#2d5a27',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f0d77a 50%, #d4af37 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
