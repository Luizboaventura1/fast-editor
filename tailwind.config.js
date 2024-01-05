/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#cfcfcf",
        borderColor: "#454545",
        bgPrimary: '#121214',
        bgSecondary: '#202024',
      }
    },
  },
  plugins: [],
}

