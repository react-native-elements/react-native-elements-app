import "@babel/polyfill";

import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App/>, document.getElementById("root"));

if(__DEV__)
  serviceWorker.unregister();
else
  serviceWorker.register();