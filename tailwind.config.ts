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
        primary: {
          50: "#f0f4f9",
          100: "#dfe6f0",
          200: "#bdd1e1",
          300: "#9bbad2",
          400: "#6989b3",
          500: "#385894",
          600: "#2d4575",
          700: "#1e2d4d",
          800: "#0f172a",
          900: "#0a0f1f",
        },
        secondary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#3f0f82",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      spacing: {
        "nav-height": "4rem",
        "section": "6rem",
      },
    },
  },
  plugins: [],
};
export default config;
