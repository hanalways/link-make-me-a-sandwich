import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { AssetFetcher } from "./components/AssetFetcher/AssetFetcher";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AssetFetcher>
      <App />
    </AssetFetcher>
  </React.StrictMode>
);
