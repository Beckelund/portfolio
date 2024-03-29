import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";

//Theming
import { ThemeProvider } from "@mui/material/styles";
import { portfolioTheme } from "./portfolioTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={portfolioTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
