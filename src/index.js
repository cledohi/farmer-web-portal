import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import FarmerStore, { persistor } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Add the event listener outside of root.render()
window.addEventListener("beforeunload", () => {
  const state = FarmerStore.getState(); // Get the current Redux state
  persistor.flush(); // Save the state to local storage
});

root.render(
  <React.StrictMode>
    <Provider store={FarmerStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
