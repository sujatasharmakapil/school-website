import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colours — same in both themes
        electric: { DEFAULT: "#4f46e5", 2: "#6366f1", 3: "#818cf8" },
        lime:     { DEFAULT: "#84cc16", 2: "#a3e635" },
        coral:    { DEFAULT: "#f97316", 2: "#fb923c" },
        violet:   { DEFAULT: "#7c3aed", 2: "#8b5cf6" },
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Syne", "Inter", "system-ui", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-14px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to:   { opacity: "1", transform: "scale(1)" },
        },
        wipe: {
          from: { clipPath: "inset(0 100% 0 0)" },
          to:   { clipPath: "inset(0 0% 0 0)" },
        },
        revealLine: {
          from: { transform: "scaleX(0)" },
          to:   { transform: "scale(1)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
        pingPulse: {
          "0%":      { transform: "scale(1)",   opacity: "0.5" },
          "80%,100%":{ transform: "scale(1.7)", opacity: "0" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0" },
        },
      },
      animation: {
        marquee:    "marquee 30s linear infinite",
        float:      "float 5s ease-in-out infinite",
        fadeUp:     "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both",
        scaleIn:    "scaleIn 0.5s cubic-bezier(0.22,1,0.36,1) both",
        wipe:       "wipe 0.9s cubic-bezier(0.77,0,0.18,1) both",
        revealLine: "revealLine 0.9s cubic-bezier(0.77,0,0.18,1) both",
        spinSlow:   "spinSlow 20s linear infinite",
        pingPulse:  "pingPulse 2.5s ease-out infinite",
        blink:      "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
