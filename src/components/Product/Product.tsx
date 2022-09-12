import React from "react"
import { useDispatch } from "react-redux";
import { Pagination, Row, Spin } from "antd";

import { MarketActions } from "@store/actions";
import { IProducts } from "@base/interfaces";
import { productPerPage } from "@base/constants";



type ProductProps = {
  data: IProducts[];
  loading: boolean;
}

const ProductItem = React.lazy(() => import("./Product.Item")),

  Product = ({ data, loading }: ProductProps) => {
    const dispatch = useDispatch(),
      [pageNumber, setPageNumber] = React.useState<number>(0),
      pagesVisited = pageNumber * productPerPage,

      onChangePage = (selected: number) => {
        setPageNumber(selected)
      };

    React.useEffect(() => {
      dispatch(MarketActions.getProductsAction());
    }, []);

    return (
      <>
        <Row className="getir-product">
          {
            data.slice(pagesVisited, pagesVisited + productPerPage).map((pItem: IProducts) => {
              return (
                <React.Suspense fallback={<Spin size="default" spinning={loading} />} key={`${pItem.name}_${Math.random()}`}>
                  <ProductItem price={pItem.price} name={pItem.name} loading={loading} />
                </React.Suspense>
              )
            })
          }
        </Row>
        {
          data && data.length > 0 &&
          <Pagination pageSize={16} total={data.length} onChange={onChangePage} showSizeChanger={false} />
        }
      </>
    )
  }

export default Product;