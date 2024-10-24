/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'lufga': ['Lufga'],
      'lufga-light': ['Lufga-light']
    },
    screens: {
      "2xl": { max: "1536px" },
      // => @media (max-width: 1536px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1280px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      sm: { max: "640px" },
      // => @media (max-width: 640px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

