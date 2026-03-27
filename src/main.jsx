import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { ThreadProvider } from "./context/ThreadContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThreadProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThreadProvider>
);