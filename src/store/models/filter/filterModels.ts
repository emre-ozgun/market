// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import { ADD_FILTER_BY_BRAND, ADD_FILTER_BY_ITEM_TYPE, ADD_FILTER_BY_TAG, REMOVE_FILTER_BY_BRAND, REMOVE_FILTER_BY_ITEM_TYPE, REMOVE_FILTER_BY_TAG, SET_ORDER_BY } from "@store/types";

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
export interface IAddFilterByItemType {
  type: typeof ADD_FILTER_BY_ITEM_TYPE;
  payload: string;
}

export interface IRemoveFilterByItemType {
  type: typeof REMOVE_FILTER_BY_ITEM_TYPE;
  payload: string;
}

export type FilterActionTypes = IAddFilterByBrand | IRemoveFilterByBrand | IAddFilterByTag | IRemoveFilterByTag | ISetOrderByFilter | IAddFilterByItemType | IRemoveFilterByItemType;