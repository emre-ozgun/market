import { createSelector } from "reselect";

import { IFilterState } from "@base/interfaces";
import { IStore } from "@store/IStore";

const currentTags = createSelector(
  (state: IStore) => state.filter,
  (filter: IFilterState) => filter.tags
),

  currentBrands = createSelector(
    (state: IStore) => state.filter,
    (filter: IFilterState) => filter.brands
  );
export {
  currentTags,
  currentBrands
}