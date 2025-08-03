// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      borderColor: {
        border: 'var(--border)',
      },
      outlineColor: {
        ring: 'var(--ring)',
      },
    },
  },
  plugins: [],
};

