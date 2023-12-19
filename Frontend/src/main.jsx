import "./index.css";
import App from "./App.jsx";
import { store } from "./Redux/store.js";
import Theme from "./Styles/Theme.js";

import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider theme={Theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);
