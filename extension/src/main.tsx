import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Router } from "react-chrome-extension-router";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);
