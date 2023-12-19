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
    shadowA: "-1px 5px 20px #bdbdbd",
    shadowB: "rgba(0, 0, 0, 0.1) 0px 5px 30px",
  },
});

export default Theme;
