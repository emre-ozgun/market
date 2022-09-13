import React from "react"
import { Typography } from "antd"

import { IProduct } from "@base/interfaces"
import { sumByBasket } from "./container"



type BasketTotalProps = {
  product: IProduct[];
}

const BasketTotal = ({ product }: BasketTotalProps) => {

  return (
    <div className="basket-total">
      <Typography.Text>
        {
          `₺${sumByBasket(product.map((product) => product.price * product.quantity)).toFixed(2)}`
        }
      </Typography.Text>
    </div>
  )
}

export default BasketTotal
