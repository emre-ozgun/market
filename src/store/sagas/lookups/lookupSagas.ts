import { call, put, all, takeEvery } from "redux-saga/effects";

import { IBrands, ITags } from "@base/interfaces";
import { LookupActionTypes } from "@store/types";
import { LookupActions } from "@store/actions";
import { GetBrands, GetTags } from "@services/apis";



function* watchLookups() {
  const { GET_TAGS, GET_BRANDS } = LookupActionTypes;

  yield all([
    takeEvery(GET_TAGS, getTags),
    takeEvery(GET_BRANDS, getBrands)
  ]);
}

function* getTags() {
  try {
    const response: ITags[] = yield call(GetTags);
    if (response) {
      yield put(LookupActions.setTagsAction(response));
    }
  } catch (e) {
    console.log("SAGA/getTags", e);
  }
}

function* getBrands() {
  try {
    const response: IBrands[] = yield call(GetBrands);
    if (response) {
      yield put(LookupActions.setBrandsAction(response));
    }
  } catch (e) {
    console.log("SAGA/getBrands", e);
  }
}

export default watchLookups;