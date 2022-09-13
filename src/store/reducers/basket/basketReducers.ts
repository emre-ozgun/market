import { BasketActiontTypes } from "@store/models/basket";
import { ADD_TO_BASKET, Basket, REMOVE_FROM_BASKET } from "@store/types";

const initialState: Basket = [];

export function basketReducers(state: Basket = initialState, action: BasketActiontTypes,): Basket {

  switch (action.type) {
    case ADD_TO_BASKET:
      return state.some((product) => product.name === action.product.name) ? state : [...state, action.product];
    case REMOVE_FROM_BASKET:
      return state.filter((product) => product.name !== action.name);
    default:
      return state;
  }
}