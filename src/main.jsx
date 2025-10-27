import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RightFitProvider } from "./context/RightFitContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RightFitProvider>
      <App />
    </RightFitProvider>
  </React.StrictMode>
);
