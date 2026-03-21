import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CvDownloadProvider } from "./contexts/CvDownloadContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <CvDownloadProvider>
          <App />
        </CvDownloadProvider>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
