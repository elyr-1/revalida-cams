import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "App";
import { MaterialUIControllerProvider } from "context";

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
