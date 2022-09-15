// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import React from "react"
import { shallowEqual, useSelector } from "react-redux"
import { Typography } from "antd"

import { getTotalPrice } from "@store/lib/selectors"



const BasketTotal = () => {

  const totalBasketValue = useSelector(getTotalPrice, shallowEqual);

  return (
    <div className="basket-total">
      <Typography.Text>
        {totalBasketValue}
      </Typography.Text>
    </div>
  )
}

export default BasketTotal
