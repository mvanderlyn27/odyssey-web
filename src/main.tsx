import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { CSPostHogProvider } from "./components/PostHogProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CSPostHogProvider>
      <App />
    </CSPostHogProvider>
  </React.StrictMode>
);
