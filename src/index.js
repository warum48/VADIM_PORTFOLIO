import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { ReduxWrapper } from "./redux/ReduxWrapper";
import smoothScrollPolyfill from "smoothscroll-polyfill";

import App from "./App";
import Banners from "./Banners";

smoothScrollPolyfill.polyfill();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ReduxWrapper>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="banners" element={<Banners />} />
      </Routes>
    </BrowserRouter>
  </ReduxWrapper>,
  rootElement
);
