/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        navy: "var(--navy)",
        "light-navy": "var(--light-navy)",
        "lightest-navy": "var(--lightest-navy)",
        slate: "var(--slate)",
        "light-slate": "var(--light-slate)",
        "lightest-slate": "var(--lightest-slate)",
        green: "var(--green)",
      },
    },
  },
  plugins: [],
};
