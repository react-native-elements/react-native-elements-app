/* eslint-disable */

import React from "react";

export const initialState = { themeMode: "light" };
export function ThemeReducer(state, action) {
  const { payload } = action;
  switch (action.type) {
    case "set-theme":
      return { ...state, themeMode: payload === "light" ? "light" : "dark" };
    default:
      return state;
  }
}

export const ThemeReducerContext = React.createContext();
