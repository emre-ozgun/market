// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import React from "react"
import { useSelector } from "react-redux";
import { Pagination, Row, Skeleton } from "antd";

import { IStore } from "@store/IStore";
import { IProduct } from "@base/interfaces";
import { pageSize, productPerPage } from "@base/constants";

import ProductItem from "./Product.Item";
import ProductItemType from "./Product.ItemType";
import ProductNotFound from "./Product.NotFound";



type ProductProps = {
  data: IProduct[];
}

const Product = ({ data }: ProductProps) => {

  const { loader } = useSelector((state: IStore) => ({
    loader: state.system.loader
  })),
    [pageNumber, setPageNumber] = React.useState<number>(0),
    pagesVisited = pageNumber * productPerPage,

    onPageChange = (selected: number) => setPageNumber(selected);

  return (
    <>
      <ProductItemType />
      {
        data && data.length > 0 ?
          <>
            <Row className="market-product">
              {
                data.slice(pagesVisited, pagesVisited + productPerPage).map((product: IProduct) => {
                  return (
                    <Skeleton loading={loader} active paragraph key={product.id}>
                      <ProductItem {...{
                        product
                      }} />
                    </Skeleton>
                  )
                })
              }
            </Row>
            {
              data && data.length > 0 &&
              <Pagination pageSize={pageSize} total={data.length} onChange={onPageChange} showSizeChanger={false} />
            }
          </>
          : <ProductNotFound />
      }
    </>
  )
}

export default Product;