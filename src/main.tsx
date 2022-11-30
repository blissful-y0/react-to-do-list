import { Provider } from "jotai";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Todo from "./TodoList";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <Todo />
    </Provider>
  </React.StrictMode>
);
