import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ColorContextProvider } from "./utilis/index";
import Store from "./Store/Store"
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorContextProvider>
    {/* <Provider Store={Store}> */}
      <App />
      {/* </Provider> */}
    </ColorContextProvider>
  </React.StrictMode>
);
