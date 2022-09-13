import { createSelector } from "reselect";

import { IStore } from "@store/IStore";
import { Basket } from "@store/types";

const currentBasket = createSelector(
  (state: IStore) => state.basket,
  (basket: Basket) => basket
);

export {
  currentBasket
}