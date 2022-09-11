import React from "react"
import { Row } from "antd";

import { IProducts } from "@base/interfaces";



type ProductProps = {
  data: IProducts[];
  pageNumber: number;
  productPerPage: number;
}

const ProductItem = React.lazy(() => import("./Product.Item")),

  Product = ({ data, pageNumber, productPerPage }: ProductProps) => {
    const pagesVisited = pageNumber * productPerPage;

    return (
      <Row className="getir-product">
        {
          data.slice(pagesVisited, pagesVisited + productPerPage).map((pItem: IProducts) => {
            return (
              <ProductItem key={`${pItem.name}_${Math.random()}`} price={pItem.price} name={pItem.name} />
            )
          })
        }
      </Row>
    )
  }

export default Product;