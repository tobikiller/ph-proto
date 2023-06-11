/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-yellow": "#F8F6D6",
        jet: "#353535",
        "hunyadi-yellow": "#E1AA44",
      },
      fontFamily: {
        PlayfairDisplay: "Playfair Display",
        Montel: "Montel",
        loryena: "LOREYNA",
      },
      backgroundImage: {
        "hotel-entry": "url('/assets/images/hotel-entry.jpg')",
        "guest-room":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/images/rest-room.jpg')",
        room: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/images/romms.jpg')",
        underguest:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/images/under-guest.jpg')",
      },
    },
  },
  plugins: [],
};
