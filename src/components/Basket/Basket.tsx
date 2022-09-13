import React from "react"
import { Spin } from "antd";

import { Basket as BBasket } from "@store/types";



type BasketProps = {
  data: BBasket;
  loading?: boolean;
}

const BasketItem = React.lazy(() => import("./Basket.Item")),

  Basket = ({ data, loading }: BasketProps) => {
    return (
      <div className="market-header-basket">
        <React.Suspense fallback={<Spin size="default" spinning={loading} />}>
          <BasketItem {...{
            data,
            loading
          }} />
        </React.Suspense>
      </div>
    )
  }

export default Basket;