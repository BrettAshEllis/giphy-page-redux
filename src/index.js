import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GifProvider } from "./context/GifContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  <GifProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </GifProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
