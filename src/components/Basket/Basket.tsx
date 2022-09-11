import React from "react"

import { IBasket } from "@base/interfaces";
import BasketItem from "./Basket.Item";


const BasketItems: IBasket[] = [
  {
    name: "Example Product",
    price: "₺ 14,99"
  },
  {
    name: "Example Product",
    price: "₺ 14,99"
  },
  {
    name: "Example Product",
    price: "₺ 14,99"
  },
  {
    name: "Example Product",
    price: "₺ 14,99"
  }, 
  {
    name: "Example Product",
    price: "₺ 14,99"
  }
];

const Basket = () => {

  return (
    <div className="getir-header-basket">
      <BasketItem data={BasketItems} />
    </div>
  )
}

export default Basket;