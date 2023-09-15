import React from "react";
import ReactDOM from "react-dom/client";
import "./theme/tailwind.css";
import { Provider } from "react-redux";
import { store } from "./stores/index.ts";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
