// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import { all, fork } from "redux-saga/effects";

import watchMarket from "./sagas/market/marketSagas";
import watchLookups from "./sagas/lookups/lookupSagas";



export default function* RootSaga() {
  yield all([
    fork(watchMarket),
    fork(watchLookups)
  ])
}