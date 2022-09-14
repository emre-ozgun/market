import { call, put, all, takeEvery } from "redux-saga/effects";

import { GetBrands, GetTags } from "@services/apis";

import { FilterActions } from "@store/actions";
import { FilterActionTypes } from "@store/types";
import { IBrands, ITags } from "@base/interfaces/filter";


function* watchFilter() {
  const { GET_TAGS, GET_BRANDS } = FilterActionTypes;

  yield all([
    takeEvery(GET_TAGS, getTags),
    takeEvery(GET_BRANDS, getBrands)
  ]);
}

function* getTags() {
  try {
    const response: ITags[] = yield call(GetTags);
    if (response) {
      yield put(FilterActions.setTagsAction(response));
    }
  } catch (e) {
    console.log("SAGA/getTags", e);
  }
}

function* getBrands() {
  try {
    const response: IBrands[] = yield call(GetBrands);
    if (response) {
      yield put(FilterActions.setBrandsAction(response));
    }
  } catch (e) {
    console.log("SAGA/getBrands", e);
  }
}

export default watchFilter;