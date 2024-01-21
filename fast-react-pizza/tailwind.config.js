/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto",
    },
    extend: {
      colors: {
        pizza: "#123456",
      },
      fontSize: {
        huge: "100px",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
