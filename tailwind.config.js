/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        sand: "var(--sand)",
        "sand-deep": "var(--sand-deep)",
        navy: "var(--navy)",
        "navy-soft": "var(--navy-soft)",
        rope: "var(--rope)",
        "rope-deep": "var(--rope-deep)",
        seafoam: "var(--seafoam)",
        ink: "var(--ink)",
        cream: "var(--cream)",
        muted: "var(--muted)",
      },
    },
  },
  plugins: [],
};
