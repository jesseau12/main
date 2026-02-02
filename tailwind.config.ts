import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "brand-sand": "#f5f1e8",
        "brand-forest": "#1f3d2b",
        "brand-cedar": "#6b4e2e"
      }
    }
  },
  plugins: []
};

export default config;
