import React from "react";
import ReactDom from "react-dom";
import { applyMiddleware, createStore } from "redux";
import promise from "redux-promise";
import { Provider } from "react-redux";
import reducers from "./main/reducers";
import App from "./main/app";
import multi from "redux-multi";
import thunk from "redux-thunk"

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store =applyMiddleware(multi, thunk ,promise)(createStore)(reducers, devTools)
ReactDom.render(
    <Provider store={store}>
        <App/> 
    </Provider>
    ,document.getElementById('app')
)