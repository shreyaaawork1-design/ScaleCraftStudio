/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      // 'var(--font-jakarta)' wahi hai jo layout.js mein rakha tha
      sans: ['var(--font-jakarta)', 'sans-serif'],
    },
  },
},
  plugins: [],
}