import { IAddFilterByBrand, IAddFilterByTag, IRemoveFilterByBrand, IRemoveFilterByTag, ISetOrderByFilter } from "@store/models";
import { ADD_FILTER_BY_BRAND, ADD_FILTER_BY_TAG, REMOVE_FILTER_BY_BRAND, REMOVE_FILTER_BY_TAG, SET_ORDER_BY } from "@store/types";

const addFilterByBrandAction = (brand: string): IAddFilterByBrand => ({
  type: ADD_FILTER_BY_BRAND,
  payload: brand
}),

  removeFilterByBrandAction = (brand: string): IRemoveFilterByBrand => ({
    type: REMOVE_FILTER_BY_BRAND,
    payload: brand
  }),

  addFilterByTagAction = (tag: string): IAddFilterByTag => ({
    type: ADD_FILTER_BY_TAG,
    payload: tag
  }),

  removeFilterByTagAction = (tag: string): IRemoveFilterByTag => ({
    type: REMOVE_FILTER_BY_TAG,
    payload: tag
  }),

  setOrderByAction = (orderby: string): ISetOrderByFilter => ({
    type: SET_ORDER_BY,
    payload: orderby
  });

export const FilterActions = {
  addFilterByBrandAction,
  removeFilterByBrandAction,
  addFilterByTagAction,
  removeFilterByTagAction,
  setOrderByAction
}