import { IProduct } from "@base/interfaces";
import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "@store/types";


export interface IAddToBasketAction {
  type: typeof ADD_TO_BASKET;
  product: IProduct;
}

export interface IRemoveFromBasketAction {
  type: typeof REMOVE_FROM_BASKET;
  name: string;
}

export type BasketActiontTypes = IAddToBasketAction | IRemoveFromBasketAction;