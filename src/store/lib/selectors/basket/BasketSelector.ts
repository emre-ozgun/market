// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import { createSelector } from "reselect";

import { IStore } from "@store/IStore";
import { Basket } from "@store/types";

const getBasket = createSelector(
  (state: IStore) => state.basket,
  (basket: Basket) => basket
),

  getTotalPrice = createSelector(getBasket, (basket) => {
    let total = 0;

    if (basket.length !== 0) {
      total = basket.map((product) => product.price * product.quantity).reduce((a, b) => a + b);
    }

    return `₺${total.toFixed(2)}`;
  });

export {
  getBasket,
  getTotalPrice
}