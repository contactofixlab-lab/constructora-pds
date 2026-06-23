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
        // Colores corporativos de Constructora PDS
        primary: {
          DEFAULT: "#1F3A5F",
          hover: "#162B47",
          active: "#122238",
          light: "#EEF4FB",
        },
        accent: {
          DEFAULT: "#C58B39",
          hover: "#A9742E",
        },
        // Paleta de textos
        text: {
          title: "#1B1F24",
          subtitle: "#243244",
          base: "#4B5563",
          secondary: "#6B7280",
          light: "#9CA3AF",
          inverse: "#F9FAFB",
          inverse_secondary: "#D1D5DB",
        },
        // Fondos
        background: {
          default: "#F7F8FA",
          surface: "#FFFFFF",
          alt: "#F3F4F6",
          footer: "#111827",
        },
        // Bordes
        border: {
          DEFAULT: "#E5E7EB",
          secondary: "#D1D5DB",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      spacing: {
        "nav-height": "4rem",
        "section": "6rem",
      },
      borderRadius: {
        button: "10px",
        card: "14px",
      },
      boxShadow: {
        card: "0 10px 30px rgba(15, 23, 42, 0.06)",
        focus: "0 0 0 4px rgba(31, 58, 95, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
