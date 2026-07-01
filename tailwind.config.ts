import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "var(--color-obsidian)",
        forge: "var(--color-forge)",
        graphite: "var(--color-graphite)",
        "steel-line": "var(--color-steel-line)",
        "warm-ivory": "var(--color-warm-ivory)",
        smoke: "var(--color-smoke)",
        "muted-metal": "var(--color-muted-metal)",
        brass: "var(--color-brass)",
        "brass-hover": "var(--color-brass-hover)",
        "deep-brass": "var(--color-deep-brass)",
        oxide: "var(--color-oxide)",
        "success-olive": "var(--color-success-olive)"
      },
      fontFamily: {
        display: "var(--font-display)",
        sans: "var(--font-sans)",
        mono: "var(--font-mono)"
      },
      maxWidth: {
        container: "80rem",
        wide: "90rem",
        reading: "45rem"
      },
      boxShadow: {
        card: "0 18px 48px rgba(0, 0, 0, 0.22)",
        glow: "0 0 0 1px rgba(201, 162, 75, 0.18), 0 16px 40px rgba(0, 0, 0, 0.25)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at top right, rgba(201, 162, 75, 0.12), transparent 28%), radial-gradient(circle at left center, rgba(184, 188, 194, 0.07), transparent 24%)",
        "surface-grid": "linear-gradient(rgba(184, 188, 194, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(184, 188, 194, 0.04) 1px, transparent 1px)"
      },
      backgroundSize: {
        grid: "64px 64px"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;
