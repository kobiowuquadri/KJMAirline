/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     screens: {
//       'tablet': '300px',
//       // => @media (min-width: 640px) { ... }

//       'laptop': '960px',
//       // => @media (min-width: 1024px) { ... }

//       'desktop': '1280px',
//       // => @media (min-width: 1280px) { ... }
//     },
//   }
// }