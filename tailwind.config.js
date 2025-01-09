/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zian: ['Zian', 'sans-serif'], // Add the Zian font family
      },
      colors: {
        customBlue: '#043873',  // Your custom color
      },
    },
  },
  plugins: [],
 
}

