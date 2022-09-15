// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import { IFilterState } from "@base/interfaces";
import { FilterActionTypes } from "@store/models";
import { ADD_FILTER_BY_BRAND, ADD_FILTER_BY_TAG, REMOVE_FILTER_BY_BRAND, REMOVE_FILTER_BY_TAG, SET_ORDER_BY } from "@store/types";

const initialState: IFilterState = {
  brand: [],
  tag: [],
  orderBy: "price-asc"
};

export function filterReducers(state: IFilterState = initialState, action: FilterActionTypes): IFilterState {

  switch (action.type) {
    case ADD_FILTER_BY_BRAND:
      return {
        ...state,
        brand: [...state.brand, action.payload],
      };
    case REMOVE_FILTER_BY_BRAND:
      return {
        ...state,
        brand: state.brand.filter((filter) => filter !== action.payload),
      };
    case ADD_FILTER_BY_TAG:
      return {
        ...state,
        tag: [...state.tag, action.payload],
      };
    case REMOVE_FILTER_BY_TAG:
      return {
        ...state,
        tag: state.tag.filter((filter) => filter !== action.payload),
      };
    case SET_ORDER_BY:
      return { ...state, orderBy: action.payload };
    default:
      return state;
  }
}