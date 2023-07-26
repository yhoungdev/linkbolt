import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Router } from "react-chrome-extension-router";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { NovuProvider } from "@novu/notification-center";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <NovuProvider
          applicationIdentifier="7fSS0c2QxlKD"
          subscriberId=""
          initialFetchingStrategy={{
            fetchNotifications: true,
            fetchUserPreferences: true,
          }}
        >
          <App />
        </NovuProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
);
