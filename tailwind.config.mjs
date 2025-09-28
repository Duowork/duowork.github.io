/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "duo-green": {
          50: "#def2bf", // Very light, pale green (perfect for backgrounds)
          200: "#9eff51", // attention-grabbing highlights
          400: "#8cbf40", // Medium-light, vibrant lime green (is bright and vibrant, good for buttons/highlights )
          600: "#3ea645", // Medium-dark, forest green
          900: "#03734b", // Very dark, deep emerald green (ideal for text or borders)
        },
        "duo-dark": "#222222",
        "duo-grey": "#939498",
      },
      fontFamily: {
        title: ["IBM Plex Sans Condensed", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "duo-shadow":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "bounce-slow": "bounce 2s infinite",
      },
    },
  },
  plugins: [],
};
