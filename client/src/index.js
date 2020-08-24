import React from "react";
import ReactDOM from "react-dom";
import MainView from "../src/components/MainView";
import { createStore, combineReducers, applyMiddleware } from "redux";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

let store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <MainView />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
