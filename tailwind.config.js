/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./screens/**/*.{ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        black: {
          800: "#121212",
        },
        gray: {
          501: "#363636",
          600: "#232323",
        },
        violet: {
          500: "#8875FF",
        },
      },
    },
  },
  plugins: [],
};
