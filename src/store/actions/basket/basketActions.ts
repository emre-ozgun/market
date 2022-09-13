import { IProduct } from "@base/interfaces";
import { IAddQuantityAction, IAddToBasketAction, IMinusQuantityAction, IRemoveFromBasketAction } from "@store/models/basket";
import { ADD_QUANTITY, ADD_TO_BASKET, MINUS_QUANTITY, REMOVE_FROM_BASKET } from "@store/types";

const addToBasketAction = (product: IProduct): IAddToBasketAction => ({
  type: ADD_TO_BASKET,
  product
}),

  removeFromBasketAction = (id: number): IRemoveFromBasketAction => ({
    type: REMOVE_FROM_BASKET,
    id
  }),

  addQuantityAction = (id: number): IAddQuantityAction => ({
    type: ADD_QUANTITY,
    payload: id
  }),

  minusQuantityAction = (id: number): IMinusQuantityAction => ({
    type: MINUS_QUANTITY,
    payload: id
  });

export const BasketActions = {
  addToBasketAction,
  removeFromBasketAction,
  addQuantityAction,
  minusQuantityAction
}