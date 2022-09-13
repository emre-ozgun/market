import { call, put, all, takeEvery } from "redux-saga/effects";

import { ICompanies, IProduct } from "@base/interfaces";
import { GetCompanies, GetProducts } from "@services/apis";

import { MarketActions } from "@store/actions";
import { MarketActionTypes } from "@store/types";



function* watchMarket() {
  const { GET_PRODUCTS, GET_COMPANIES } = MarketActionTypes;

  yield all([
    takeEvery(GET_PRODUCTS, getProducts),
    takeEvery(GET_COMPANIES, getCompanies),
  ]);
}

function* getProducts() {
  try {
    const response: IProduct[] = yield call(GetProducts);
    if (response) {
      yield put(MarketActions.setProductsAction(response));
    }
  } catch (e) {
    console.log("SAGA/getProducts", e);
  }
}

function* getCompanies() {
  try {
    const response: ICompanies[] = yield call(GetCompanies);
    if (response) {
      yield put(MarketActions.setCompaniesAction(response));
    }
  } catch (e) {
    console.log("SAGA/getCompanies", e);
  }
}

export default watchMarket;