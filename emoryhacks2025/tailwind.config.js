/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#314CC2",
        "brand-secondary": "#9965E6",
        "brand-tertiary": "#6EB8FF",
        bg: "#211459",
      },
      dropShadow: {
        title: "0px 4px 10px rgba(0, 0, 0, 0.50)",
      },
    },
  },
  plugins: [],
};
