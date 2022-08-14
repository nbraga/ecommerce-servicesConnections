import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./global";
import { ToastContainer } from "react-toastify"; // Importamos o Toastify
import "react-toastify/dist/ReactToastify.css"; // O estilo do Toastify

ReactDOM.render(
  <React.Fragment>
    <ToastContainer autoClose={3000} />
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
