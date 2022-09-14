import { ILookups } from "@base/interfaces";
import { ILookupActions } from "@store/models/lookups/lookupModels";
import { LookupActionTypes } from "@store/types";

const initialState: ILookups = {
  tags: [],
  brands: []
}

export function lookupReducers(state: ILookups = initialState, action: ILookupActions): ILookups {
  const { SET_TAGS, SET_BRANDS } = LookupActionTypes;

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