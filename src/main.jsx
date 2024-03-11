import ReactDOM  from "react-dom/client";
import React from "react";
import Router from "./Routes/routes";

import "./index.css" 


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);