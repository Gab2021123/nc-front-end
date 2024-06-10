/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFF",
        secondary: "#aa3e1f",
      },
      animation: {
        rotatePlus: "rotatePlus 10s ease-in-out infinite",
        rotateMinus: "rotateMinus 10s ease-in-out infinite",
      },

      keyframes: {
        rotatePlus: {
          "0%,15%": { transform: "translateY(50px)" },
          "15%,30%": { transform: "translateY(150px)" },
          "30%,45%": { transform: "translateY(250px)" },
          "40%,60%": { transform: "translateY(350px)" },
          "60%,75%": { transform: "translateY(450px)" },
          "75%,90%": { transform: "translateY(600px)" },
        },
        rotateMinus: {
          "75%,90%": { transform: "translateX(-250px)" },
          "60%,75%": { transform: "translateX(-150px)" },
          "40%,60%": { transform: "translateX(-100px)" },
          "30%,45%": { transform: "translateX(250px)" },
          "15%,30%": { transform: "translateX(450px)" },
          "0%,15%": { transform: "translateX(600px)" },
        },
      },
      borderWidth: {
        DEFAULT: "2px",
        0: "0",
        1: "25px",
      },
      dropShadow: {
        menu: "1px 1px 1px #4700b3",
      },
      screens: {
        tablet: "765px",
      },
    },
  },
  plugins: [],
};
