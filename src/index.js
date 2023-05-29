import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components";
import { GlobalStyle } from "./GlobalStyle.styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
