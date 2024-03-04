/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
