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
        bitmap: ['Bitmap', "mono-space"],
        oxygen: ['Oxygen', "mono-space"],
        hatton: ['Hatton', "mono-space"]

      },
    },
  },
  daisyui: {
    themes: [
      "dracula",
      "retro",
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
