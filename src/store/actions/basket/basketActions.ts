import { IProduct } from "@base/interfaces";
import { IAddToBasketAction, IRemoveFromBasketAction } from "@store/models/basket";
import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "@store/types";

const addToBasketAction = (product: IProduct): IAddToBasketAction => ({
  type: ADD_TO_BASKET,
  product
}),

  removeFromBasketAction = (name: string): IRemoveFromBasketAction => ({
    type: REMOVE_FROM_BASKET,
    name
  });

export const BasketActions = {
  addToBasketAction,
  removeFromBasketAction
}