import { IProduct } from "@base/interfaces";
import { ADD_QUANTITY, ADD_TO_BASKET, MINUS_QUANTITY, REMOVE_FROM_BASKET } from "@store/types";


export interface IAddToBasketAction {
  type: typeof ADD_TO_BASKET;
  product: IProduct;
}

export interface IRemoveFromBasketAction {
  type: typeof REMOVE_FROM_BASKET;
  id: number;
}
export interface IAddQuantityAction {
  type: typeof ADD_QUANTITY;
  payload: number;
}
export interface IMinusQuantityAction {
  type: typeof MINUS_QUANTITY;
  payload: number;
}

export type BasketActiontTypes = IAddToBasketAction | IRemoveFromBasketAction | IAddQuantityAction | IMinusQuantityAction;