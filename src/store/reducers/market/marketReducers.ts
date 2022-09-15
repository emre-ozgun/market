// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import { IMarket } from "@base/interfaces";
import { IMarketActions } from "@store/models/market";
import { MarketActionTypes } from "@store/types";

const initialState: IMarket = {
  products: [],
  companies: []
}

export function marketReducers(state: IMarket = initialState, action: IMarketActions): IMarket {
  const { SET_PRODUCTS, SET_COMPANIES } = MarketActionTypes;

  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload && action.payload.products ? action.payload.products : []
      };
    case SET_COMPANIES:
      return {
        ...state,
        companies: action.payload && action.payload.companies ? action.payload.companies : []
      };
    default:
      return state;
  }
}