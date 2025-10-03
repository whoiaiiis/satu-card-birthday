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
        wiggle: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        floatUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-150px)", opacity: "0" },
        },
      },
      animation: {
        pulseHeart: "pulseHeart 1.5s ease-in-out infinite",
        "bounce-slow": "bounce 3s infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
        floatUp: "floatUp 3s linear infinite",
      },
    },
  },
  plugins: [],
};
