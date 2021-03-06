import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

import App from "./components/App";

//need to pass it reducers. Currently we are passing it empty reducers list.
//second param is for server side rendering and passing it some state but we are not worried about that for this course.
//redux thunk allows us to delay the dispatch from an action creator
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

console.log("stripe key", process.env.REACT_APP_STRIPE_KEY);
console.log("environment", process.env.NODE_ENV);
