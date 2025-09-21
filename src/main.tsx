import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ToastProvider } from "./components/ui/toast.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <Router>
    <StrictMode>
      <ToastProvider>
        <App />
      </ToastProvider>
    </StrictMode>
  </Router>
);
