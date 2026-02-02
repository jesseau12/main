import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "brand-sand": "#f4efe4",
        "brand-forest": "#1f3d2b",
        "brand-cedar": "#6b4e2e",
        "brand-lake": "#1b4d6b",
        "brand-sky": "#dff3ff",
        "brand-moss": "#4b6a3a",
        "brand-sun": "#f4c95d",
        "brand-clay": "#d97c47"
      }
    }
  },
  plugins: []
};

export default config;
