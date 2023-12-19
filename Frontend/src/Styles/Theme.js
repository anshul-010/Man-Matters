import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    primary: "#22548a", // Dark Blue
    blueA: "#c4e3f8", // Light Blue
    yellowA: "#ffc820", // Dark Yellow
    yellowB: "#ffed6c", // Light Yellow
    greenA: "#00af93", // Light Green
    blackA: "#000000", // Pure Black
    whiteA: "#ffffff", // Pure White
    greyWhiteA: "#bdbdbd", // Greyish White

    bgA: "#dce2f0",
  },

  shadows: {
    shadowA:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  },
});

export default Theme;
