// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import { IProduct } from "@base/interfaces";

export type Basket = IProduct[];

export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const MINUS_QUANTITY = "MINUS_QUANTITY";