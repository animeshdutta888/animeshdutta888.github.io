/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        slate: "#0d1728",
        mist: "#94a3b8",
        line: "rgba(148, 163, 184, 0.16)",
        glow: "#7dd3fc",
        ember: "#f97316",
        sand: "#f5efe6",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        panel: "0 20px 60px rgba(7, 17, 31, 0.28)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
