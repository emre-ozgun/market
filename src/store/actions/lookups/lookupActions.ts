// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import { ITags, IBrands } from "@base/interfaces";
import { ILookupActions } from "@store/models/lookups/lookupModels";
import { LookupActionTypes } from "@store/types";


const getTagsAction = (): ILookupActions => ({
  type: LookupActionTypes.GET_TAGS
}),

  setTagsAction = (tags: ITags[]): ILookupActions => ({
    type: LookupActionTypes.SET_TAGS,
    payload: { tags }
  }),

  getBrandsAction = (): ILookupActions => ({
    type: LookupActionTypes.GET_BRANDS
  }),

  setBrandsAction = (brands: IBrands[]): ILookupActions => ({
    type: LookupActionTypes.SET_BRANDS,
    payload: { brands }
  });

export const LookupActions = {
  getTagsAction,
  setTagsAction,
  getBrandsAction,
  setBrandsAction
}