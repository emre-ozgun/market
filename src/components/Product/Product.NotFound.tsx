// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import React from "react"
import { Empty, Row } from "antd"



const ProductNotFound = () => {

  return (
    <Row className="market-product no-data">
      <Empty description="No products matching your search were found." />
    </Row>
  )
}

export default ProductNotFound;
