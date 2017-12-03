import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";

//need to pass it reducers. Currently we are passing it empty reducers list.
//second param is for server side rendering and passing it some state but we are not worried about that for this course.
const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
