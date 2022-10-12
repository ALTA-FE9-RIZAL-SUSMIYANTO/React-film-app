import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "utils/redux/store/store";
import "./styles/index.css";
import App from "./routes";

/*
index.js disini sebagai entry point, yang mana tugasnya adalah untuk menginjeksi sebuah komponent react kedalam index.html dengan element id "root"
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
