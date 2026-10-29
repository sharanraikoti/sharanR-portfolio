/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
        mono: ['"Geist Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      colors: {
        navy: { 50: "#F2F5FA", 100: "#E3E9F3", 200: "#C7D3E6", 600: "#2B4A75", 700: "#1C3760", 800: "#132A4C", 900: "#0C1E38" },
        cobalt: { 50: "#EEF3FF", 100: "#DCE6FF", 500: "#2F5BEA", 600: "#2449C9", 700: "#1D3BA3" },
        ink: { DEFAULT: "#0E1726", soft: "#3C4A5E", mute: "#5E6B7D" },
        line: "#E3E8F0",
        paper: "#F7F9FC",
      },
      boxShadow: {
        card: "0 1px 2px rgba(12,30,56,.05), 0 8px 24px -16px rgba(12,30,56,.18)",
        lift: "0 2px 4px rgba(12,30,56,.06), 0 18px 40px -18px rgba(12,30,56,.28)",
      },
      keyframes: {
        rise: { "0%": { opacity: "0", transform: "translateY(10px)" }, "100%": { opacity: "1", transform: "none" } },
        blink: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
      },
      animation: { rise: "rise .6s cubic-bezier(.2,.7,.2,1) both", blink: "blink 1.1s steps(1) infinite" },
    },
  },
  plugins: [],
};
