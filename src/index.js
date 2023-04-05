import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import { GlobalStyle } from "./GlobalStyle.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "constants/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
