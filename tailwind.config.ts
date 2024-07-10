import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': {
          100: "#FF5D24"
        },
        'black': {
          100: '#070809',
          200: '#1C1C1C'
        },
        'gray': {
          100: '#2A2B2B',
          200: '#4D4D4D',
          300: '#717171',
          400: '#535353',
          500: '#606060',
          600: '#7C7C7C'
        },
        'green': {
          100: '#74F125'
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
    },
  },
  plugins: [],
};
export default config;
