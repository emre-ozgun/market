import React from "react"
import { BasketItems } from "@base/data/static/basket";



const BasketItem = React.lazy(() => import("./Basket.Item")),

  Basket = () => {
    return (
      <div className="market-header-basket">
        <BasketItem data={BasketItems} />
      </div>
    )
  }

export default Basket;