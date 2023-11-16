import { ThemeProvider } from "styled-components";
import Router from "./common/Router";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme.js";
import { Flag } from "./styles/common/commonTextStyle.jsx";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
      <Flag />
    </ThemeProvider>
  );
}
