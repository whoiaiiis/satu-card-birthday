/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulseHeart: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.4)" },
        },
      },
      animation: {
        pulseHeart: "pulseHeart 1.5s ease-in-out infinite",
      },
        animation: {
          "bounce-slow": "bounce 3s infinite",
       
      },
    },
  },
  plugins: [],
};


