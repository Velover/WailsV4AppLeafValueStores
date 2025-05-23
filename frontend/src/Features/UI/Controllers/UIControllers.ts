import React from "react";
import { createRoot } from "react-dom/client";
import App from "../UI/App.js";
import { Controller, OnStart } from "app-leaf";

@Controller()
export class UIController {
  @OnStart()
  Start() {
    const container = document.getElementById("root");

    const root = createRoot(container!);

    root.render(
      React.createElement(
        React.StrictMode,
        null,
        React.createElement(App, null)
      )
    );
  }
}
