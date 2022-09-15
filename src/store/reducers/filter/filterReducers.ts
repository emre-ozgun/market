import { IFilterState } from "@base/interfaces";
import { FilterActionTypes } from "@store/models";
import { ADD_FILTER_BY_BRAND, ADD_FILTER_BY_TAG, REMOVE_FILTER_BY_BRAND, REMOVE_FILTER_BY_TAG } from "@store/types";

const initialState: IFilterState = {
  brand: [],
  tag: [],
  orderBy: "asc"
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
    default:
      return state;
  }
}