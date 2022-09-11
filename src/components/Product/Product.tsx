import React from "react"
import { Row } from "antd";



const ProductItem = React.lazy(() => import("./Product.Item")),

  Product = () => {
    return (
      <Row className="getir-product">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Row>
    )
  }

export default Product;