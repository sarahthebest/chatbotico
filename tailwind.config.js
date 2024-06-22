/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,html}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        bitmap: ["Bitmap", "monospace"],
        oxygen: ["Oxygen", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mainTheme: {
          primary: "#5D3FD3",
          secondary: "#a78bfa",
          accent: "#4f46e5",
          neutral: "#374151",
          "base-100": "#1f2937",
          info: "#7dd3fc",
          success: "#22c55e",
          warning: "#ef4444",
          error: "#fde047",
        },
      },
    ],
  },
};
