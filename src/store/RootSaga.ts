import { all, fork } from "redux-saga/effects";

import watchMarket from "./sagas/market/marketSagas";
import watchFilter from "./sagas/filter/filterSagas";


export default function* RootSaga() {
  yield all([
    fork(watchMarket),
    fork(watchFilter)
  ])
}