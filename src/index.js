import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

//Provider는 react-redux라이브러리에 내장된 리액앱에 store를 연동할수 있게 도와준다.
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
