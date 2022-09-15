import { IAddFilterByBrand, IAddFilterByTag, IRemoveFilterByBrand, IRemoveFilterByTag } from "@store/models";
import { ADD_FILTER_BY_BRAND, ADD_FILTER_BY_TAG, REMOVE_FILTER_BY_BRAND, REMOVE_FILTER_BY_TAG } from "@store/types";

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
  });

export const FilterActions = {
  addFilterByBrandAction,
  removeFilterByBrandAction,
  addFilterByTagAction,
  removeFilterByTagAction
}