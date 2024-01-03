import "./index.css";
import App from "./App.tsx";
import Theme from "./Styles/Theme.ts";
import { store } from "./Redux/store.ts";

import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ReduxProvider store={store}>
      <ChakraProvider theme={Theme}>
        <App />
      </ChakraProvider>
    </ReduxProvider>
  </BrowserRouter>
);
