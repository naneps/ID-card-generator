/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [{
      mytheme: {

        "primary": "#2563eb",

        "secondary": "#e7e5e4",

        "accent": "#8b5cf6",

        "neutral": "#21252B",

        "base-100": "#2F3137",

        "info": "#5DA8EA",

        "success": "#4ade80",

        "warning": "#fbbf24",

        "error": "#f43f5e",
      },
    }, ],
  },
  plugins: [
    require('daisyui'),
  ],

}