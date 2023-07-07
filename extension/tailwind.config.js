/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx ,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F46412",
        secondary: "#212121",
        night: "#191919",
      },
    },
  },
  plugins: [],
};
