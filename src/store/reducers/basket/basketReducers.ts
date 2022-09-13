import { BasketActiontTypes } from "@store/models/basket";
import { ADD_QUANTITY, ADD_TO_BASKET, Basket, MINUS_QUANTITY, REMOVE_FROM_BASKET } from "@store/types";

const initialState: Basket = [];

export function basketReducers(state: Basket = initialState, action: BasketActiontTypes,): Basket {

  switch (action.type) {
    case ADD_TO_BASKET:
      return state.some((product) => product.name === action.product.name) ? state : [...state, { ...action.product, quantity: 1 }];
    case REMOVE_FROM_BASKET:
      return state.filter((product) => product.name !== action.name);
    case ADD_QUANTITY:
      return state.map((product) => {
        if (product.name === action.payload) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
    case MINUS_QUANTITY:
      return state.map((product) => {
        if (product.name === action.payload) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
    default:
      return state;
  }
}