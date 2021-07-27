module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "sidebar-bg-primary": "#2a2f33",
      "sidebar-bg-secondary": "#393d42",
      "main-content": "#F5F7F8",
      "scheduled": "#3ac183",
      "published": "#acacac",
      "approval": "#f7bf38",
      "error": "#fb6450",
      "notes": "#67b1f2",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
