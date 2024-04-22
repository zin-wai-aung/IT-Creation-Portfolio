const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,tsx,jsx}",
    flowbite.content(),
  ],
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
      paragraphText: "#EEEEEE",
    },
    extend: {
      fontFamily: {
        alacrity: ["Alacrity Sans", "Roboto"],
      },

      backgroundImage: {
        "brand-img": "url('assets/logo/Brand.png')",
      },
    },
  },

  plugins: [flowbite.plugin()],
};