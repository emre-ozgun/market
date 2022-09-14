import { IFilterState } from "@base/interfaces";
import { IFilterActions } from "@store/models";
import { FilterActionTypes } from "@store/types";

const initialState: IFilterState = {
  tags: [],
  brands: []
}

export function filterReducers(state: IFilterState = initialState, action: IFilterActions): IFilterState {
  const { SET_TAGS, SET_BRANDS } = FilterActionTypes;

  switch (action.type) {
    case SET_TAGS:
      return {
        ...state,
        tags: action.payload && action.payload.tags ? action.payload.tags : []
      };
    case SET_BRANDS:
      return {
        ...state,
        brands: action.payload && action.payload.brands ? action.payload.brands : []
      };
    default:
      return state;
  }
}