/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        body: ['Roboto', 'Arial', 'sans-serif'],
        title: ['Roboto', 'Arial', 'sans-serif']
      },
      colors: {
        "primary": "#002626",
        "secondary": "#538c61",
        "alt": "#94b8e4",
      }
    },
  },
  plugins: [],
}

