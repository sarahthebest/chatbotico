/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{jsx,html}",
    "index.html",
    "./src/components/**/*.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        playground: ['Playground', "sans-serif"],
        bitmap: ['Bitmap', "mono-space"],
      },
    },
  },
  daisyui: {
    themes: [
      "night",
      "garden",
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
