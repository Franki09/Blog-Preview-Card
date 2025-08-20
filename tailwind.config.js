/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Yellow: "#F4D04E",
        DarkGray: "#111111",
        Gray: "#6B6B6B",
      },

      fontFamily: {
        figtree: ["var(--font-figtree)", "sans-serif"],
      },

      fontWeight: {
        medium: "500",
        extrabold: "800",
      },
    },
  },
  plugins: [],
};
