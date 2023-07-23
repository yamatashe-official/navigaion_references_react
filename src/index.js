import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import storage from "./state/storage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={storage}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
