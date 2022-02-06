import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthProvider from "./context/Auth/AuthProvider";
import ErrorProvider from "./context/Error/ErrorProvider";

ReactDOM.render(
  <React.StrictMode>
    <ErrorProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ErrorProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
