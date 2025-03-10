/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        color1: "#53ac59",
        color2: "#3b8952",
        color3: "#0f684b",
        color4: "#03484c",
        color5: "#1c232e",
        color6: "#dce0e6",
        color7: "#e88d07",
        color8: "#aeafb6",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, var(--tw-gradient-stops))',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
      },
      animation: {
        gradientMove: 'gradientMove 5s infinite alternate',
      },
      fontFamily: {
        onest: ["OnestVariable", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
