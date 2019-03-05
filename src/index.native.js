import React from "react";
import App from "./App";
import {KeepAwake,registerRootComponent} from "expo";

if(__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(App);