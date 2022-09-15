// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import { createSelector } from "reselect";

import { IStore } from "@store/IStore";
import { ILookups } from "@base/interfaces";

const getTags = createSelector(
  (state: IStore) => state.lookups,
  (lookups: ILookups) => lookups.tags
),

  getBrands = createSelector(
    (state: IStore) => state.lookups,
    (lookups: ILookups) => lookups.brands
  );
export {
  getTags,
  getBrands
}