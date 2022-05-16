import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import VariablesContext from "./components/Context";

import "bootstrap/dist/css/bootstrap.min.css";
const root = createRoot(document.getElementById("root"));

root.render(
  <VariablesContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </VariablesContext>
);
