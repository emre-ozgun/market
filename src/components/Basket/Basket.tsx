import React from "react"


const BasketItem = React.lazy(() => import("./Basket.Item")),

  Basket = () => {
    return (
      <div className="market-header-basket">
        <BasketItem />
      </div>
    )
  }

export default Basket;