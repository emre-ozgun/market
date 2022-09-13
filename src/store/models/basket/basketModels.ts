import { IProduct } from "@base/interfaces";
import { ADD_QUANTITY, ADD_TO_BASKET, MINUS_QUANTITY, REMOVE_FROM_BASKET } from "@store/types";


export interface IAddToBasketAction {
  type: typeof ADD_TO_BASKET;
  product: IProduct;
}

export interface IRemoveFromBasketAction {
  type: typeof REMOVE_FROM_BASKET;
  name: string;
}
export interface IAddQuantityAction {
  type: typeof ADD_QUANTITY;
  payload: string;
}
export interface IMinusQuantityAction {
  type: typeof MINUS_QUANTITY;
  payload: string;
}

export type BasketActiontTypes = IAddToBasketAction | IRemoveFromBasketAction | IAddQuantityAction | IMinusQuantityAction;