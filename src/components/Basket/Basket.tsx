import React from "react"
import { Spin, Typography } from "antd";

import { IProduct } from "@base/interfaces";



type BasketProps = {
  product: IProduct[];
  loading?: boolean;
}

const BasketItem = React.lazy(() => import("./Basket.Item")),
  BasketEmpty = React.lazy(() => import("./Basket.Empty")),

  Basket = ({ product, loading }: BasketProps) => {
    return (
      <div className="market-header-basket">
        {
          product && product.length > 0 ? product.map((item) => {
            return (
              <React.Suspense fallback={<Spin size="default" spinning={loading} />} key={item.id}>
                <BasketItem {...{
                  product: item,
                  loading
                }} />
              </React.Suspense>
            )
          }) : <BasketEmpty />
        }
        {
          product && product.length > 0 && (
            <div className="basket-total">
              <Typography.Text>₺ 39,97</Typography.Text>
            </div>
          )
        }
      </div>
    )
  }

export default Basket;