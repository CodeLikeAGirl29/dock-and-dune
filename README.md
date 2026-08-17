# 🌊 Dock & Dune

A single-page waterfront ownership guide for Okaloosa County, FL — flood
zones, dock permitting, and wind mitigation, plus an interactive cost
estimator, from Lindsey Howard (eXp Realty / Home, Handled.).

### Tech Stack

- Next.js 15 (App Router)
- Tailwind CSS v4
- Framer Motion (via `LazyMotion` + `domAnimation` for a trimmed bundle)
- react-icons

### Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

### Structure

```
app/
├── components/
│   ├── Header.jsx          # Sticky nav, links back to Home, Handled.
│   ├── Hero.jsx
│   ├── Guide.jsx            # Flood zones / permitting / wind mitigation cards
│   ├── CostCalculator.jsx   # Interactive waterfront insurance estimator
│   └── Footer.jsx
├── layout.js
├── page.js
└── globals.css              # Shares the Home, Handled. design tokens
```

### Note on the calculator

`CostCalculator.jsx` produces **illustrative estimates only**, built from
rough, publicly-reasoned coefficients — not real underwriting data. Keep
the disclaimer copy intact if you extend it.
