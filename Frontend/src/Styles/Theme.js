import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    primary: "#22548a", // Dark Blue
    blueA: "rgb(28, 61, 116)", // Dark Blue
    blueB: "#c4e3f8", // Light Blue
    blueC: "rgb(104, 150, 219)", // Light Blue 2
    yellowA: "#ffc820", // Dark Yellow
    yellowB: "#ffed6c", // Light Yellow
    greenA: "#00af93", // Light Green
    greenB: "#00AF93", // Green Teal - rgba(0,175,147,1)
    blackA: "#000000", // Pure Black
    whiteA: "#ffffff", // Pure White
    greyWhiteA: "#bdbdbd", // Greyish White
  },

  fonts: {
    font1:
      "'Figtree',sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  },

  shadows: {
    shadowA: "-1px 5px 20px #bdbdbd",
    shadowB: "rgba(0, 0, 0, 0.1) 0px 5px 30px",
  },
});

// Sizes:- xs | sm | md | lg | xl | 2xl | 3xl | 4xl | full

export default Theme;
