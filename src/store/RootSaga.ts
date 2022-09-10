import { all, fork } from "redux-saga/effects";

import watchMarket from "./sagas/market/marketSagas";


export default function* RootSaga() {
  yield all([
    fork(watchMarket)
  ])
}