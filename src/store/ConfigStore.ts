// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import { createStore, applyMiddleware, Middleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import RootReducer from "./RootReducer";
import RootSaga from "./RootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [
	sagaMiddleware
];

// @ts-ignore
const composeEnhancers = process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose || compose;

const ConfigStore = createStore(RootReducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(RootSaga);

export default ConfigStore;