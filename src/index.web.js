import "@babel/polyfill";

import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
if(process.env.NODE_ENV === "production")
  serviceWorker.register();
else
  serviceWorker.unregister();