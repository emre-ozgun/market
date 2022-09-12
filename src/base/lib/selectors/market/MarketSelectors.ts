import { createSelector } from "reselect";

import { IMarket } from "@base/interfaces";
import { IStore } from "@store/IStore";

const currentProducts = createSelector(
  (state: IStore) => state.market,
  (market: IMarket) => market.products
);

export {
  currentProducts
}