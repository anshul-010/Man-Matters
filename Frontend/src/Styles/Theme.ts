import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    primary: "#22548a", // Dark Blue
    blueA: "rgb(28, 61, 116)", // Dark Blue
    blueB: "#c4e3f8", // Light Blue
    blueC: "rgb(104, 150, 219)", // Light Blue 2
    blueD: "#EBF1F9", // Bluish White
    yellowA: "#ffc820", // Dark Yellow
    yellowB: "#ffed6c", // Light Yellow
    yellowC: "rgba(251, 219, 55, 1)", // Goldish Yellow
    greenA: "#00af93", // Green Teal - rgba(0,175,147,1)
    greenB: "rgb(25, 135, 117)", // Green Teal B
    greenC: "#379F8E", // Dark Green
    greenD: "rgb(231, 243, 241)", // Greenish White
    redA: "rgb(223, 85, 91)", // red 1
    blackA: "#000000", // Pure Black
    blackB: "rgb(33, 33, 33)", // Black
    blackC: "#2D3748", // Black 2
    whiteA: "#ffffff", // Pure White
    whiteB: "#E1EFF8",
    whiteC: "#E3E3E3", // Light White 1
    whiteD: "rgb(227, 227, 227)", // Light White 2
    whiteE: "rgb(255, 255, 255)", // White 2
    whiteF: "rgb(245, 245, 245)", // Whitish White
    greyWhiteA: "#bdbdbd", // Greyish White
    greyWhiteB: "rgb(102, 102, 102)", // Grey Whitish-Black
    greyWhiteC: "#666666", // Greyish White 2
    greyBlackA: "rgba(108,108,108,1)", // Greyish Black
  },

  fonts: {
    font1:
      "'Figtree',sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  },

  shadows: {
    shadowA: "-1px 5px 20px #bdbdbd",
    shadowB: "rgba(0, 0, 0, 0.1) 0px 5px 30px",
    shadowC: "rgba(0, 0, 0, 0.05) 0px 1px 10px",
    shadowD: "rgba(0, 0, 0, 0.05) 0px 5px 30px",
    shadowE: "rgba(0, 0, 0, 0.1) 0px -5px 30px",
  },
});

// Sizes:- xs | sm | md | lg | xl | 2xl | 3xl | 4xl | full

export default Theme;
