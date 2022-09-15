// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import React from "react"
import { Spin } from "antd";

import { IProduct } from "@base/interfaces";



type BasketProps = {
  product: IProduct[];
  loading?: boolean;
}

const BasketItem = React.lazy(() => import("./Basket.Item")),
  BasketEmpty = React.lazy(() => import("./Basket.Empty")),
  BasketTotal = React.lazy(() => import("./Basket.Total")),

  Basket = ({ product, loading }: BasketProps) => {

    return (
      <div className="market-header-basket">
        {product && product.length > 0 ? product.map((item) => {
          return (
            <React.Suspense fallback={<Spin size="default" spinning={loading} />} key={item.id}>
              <BasketItem {...{
                product: item,
                loading
              }} />
            </React.Suspense>
          );
        }) : <BasketEmpty />}
        {product && product.length > 0 && (
          <React.Suspense fallback={<Spin size="default" spinning={loading} />}>
            <BasketTotal {...{ product }} />
          </React.Suspense>
        )}
      </div>
    )
  }

export default Basket;