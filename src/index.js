import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "./wrapper";
import * as serviceWorker from "./serviceWorker";
import "./sass/chief.scss";

ReactDOM.render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
