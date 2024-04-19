const flowbite = require("flowbite-react/tailwind");
const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,tsx,jsx}", flowbite.content()],
  darkMode: "class",

  theme: {
    colors: {
      primary: "#0A0046",
      primaryDark: "#050035",
      primaryLight: "#09005B",
      secondary: "#0DACFF",
      secondaryDark: "#10A4FF",
      secondaryLight: "#24BCFF",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        alacrity: ["Alacrity Sans", "Roboto"],
      },
    },
  },

  plugins: [flowbite.plugin(), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}