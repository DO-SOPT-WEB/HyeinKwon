import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";
import { GlobalStyle } from "./styles/GlobalStyle.js";
import { Flag } from "./styles/common/commonTextStyle.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Flag />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
