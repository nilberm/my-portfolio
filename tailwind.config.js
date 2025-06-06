/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3b82f6",
          DEFAULT: "#2563eb",
          dark: "#1d4ed8",
        },
        accent: {
          light: "#10b981",
          DEFAULT: "#059669",
          dark: "#047857",
        },
        light: {
          bg: "#f8fafc",
          text: "#0f172a",
          card: "#ffffff",
          border: "#e2e8f0",
        },
        dark: {
          bg: "#0f172a",
          text: "#f8fafc",
          card: "#1e293b",
          border: "#334155",
        },
      },
    },
  },
  plugins: [],
};
