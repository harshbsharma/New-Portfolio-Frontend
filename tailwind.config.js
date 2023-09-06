/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        antiquewhite: "#ffeed9",
        dimgray: {
          "100": "#4d5566",
          "200": "#594f43",
        },
        darkslategray: "#403930",
        peachpuff: {
          "100": "#ffddbf",
          "200": "rgba(255, 221, 191, 0.5)",
        },
        seashell: "#fff8f2",
        slategray: "#4e5e80",
        ghostwhite: "#f3f2ff",
      },
      fontFamily: {
        "work-sans": "'Work Sans'",
        eczar: "Eczar",
      },
    },
    fontSize: {
      xl: "20px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      "45xl": "64px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
