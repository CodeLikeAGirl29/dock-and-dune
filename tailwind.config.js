/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        muted: "var(--muted)",
        paper: "var(--paper)",
        ink: "var(--ink)",
        reef: "var(--reef)",
        steel: "var(--steel)",
        signal: "var(--signal)",
        gulf: "var(--gulf)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
