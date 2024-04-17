const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
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
  plugins: [flowbite.plugin()],
};
