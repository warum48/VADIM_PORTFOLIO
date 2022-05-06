import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ReduxWrapper } from "./redux/ReduxWrapper";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ReduxWrapper>
    <App />
  </ReduxWrapper>,
  rootElement
);
