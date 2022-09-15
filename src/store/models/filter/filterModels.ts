import { ADD_FILTER_BY_BRAND, ADD_FILTER_BY_TAG, REMOVE_FILTER_BY_BRAND, REMOVE_FILTER_BY_TAG, SET_ORDER_BY } from "@store/types";

export interface IAddFilterByBrand {
  type: typeof ADD_FILTER_BY_BRAND;
  payload: string;
}

export interface IRemoveFilterByBrand {
  type: typeof REMOVE_FILTER_BY_BRAND;
  payload: string;
}

export interface IAddFilterByTag {
  type: typeof ADD_FILTER_BY_TAG;
  payload: string;
}

export interface IRemoveFilterByTag {
  type: typeof REMOVE_FILTER_BY_TAG;
  payload: string;
}
export interface ISetOrderByFilter {
  type: typeof SET_ORDER_BY;
  payload: string;
}

export type FilterActionTypes = IAddFilterByBrand | IRemoveFilterByBrand | IAddFilterByTag | IRemoveFilterByTag | ISetOrderByFilter;