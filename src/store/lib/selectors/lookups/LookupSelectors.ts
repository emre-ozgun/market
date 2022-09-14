import { createSelector } from "reselect";

import { IStore } from "@store/IStore";
import { ILookups } from "@base/interfaces";

const currentTags = createSelector(
  (state: IStore) => state.lookups,
  (lookups: ILookups) => lookups.tags
),

  currentBrands = createSelector(
    (state: IStore) => state.lookups,
    (lookups: ILookups) => lookups.brands
  );
export {
  currentTags,
  currentBrands
}