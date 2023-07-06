import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Router } from "react-chrome-extension-router";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
