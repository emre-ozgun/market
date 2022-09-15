// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import { IAddFilterByBrand, IAddFilterByItemType, IAddFilterByTag, IRemoveFilterByBrand, IRemoveFilterByItemType, IRemoveFilterByTag, ISetOrderByFilter } from "@store/models";
import { ADD_FILTER_BY_BRAND, ADD_FILTER_BY_ITEM_TYPE, ADD_FILTER_BY_TAG, REMOVE_FILTER_BY_BRAND, REMOVE_FILTER_BY_ITEM_TYPE, REMOVE_FILTER_BY_TAG, SET_ORDER_BY } from "@store/types";

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
  }),

  addFilterByItemTypeAction = (itemType: string): IAddFilterByItemType => ({
    type: ADD_FILTER_BY_ITEM_TYPE,
    payload: itemType
  }),

  removeFilterByItemTypeAction = (itemType: string): IRemoveFilterByItemType => ({
    type: REMOVE_FILTER_BY_ITEM_TYPE,
    payload: itemType
  });

export const FilterActions = {
  addFilterByBrandAction,
  removeFilterByBrandAction,
  addFilterByTagAction,
  removeFilterByTagAction,
  setOrderByAction,
  addFilterByItemTypeAction,
  removeFilterByItemTypeAction
}