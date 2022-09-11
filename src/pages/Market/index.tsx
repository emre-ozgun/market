import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Pagination } from "antd"

import { IStore } from "@store/IStore"
import { MarketActions } from "@store/actions"
import { productPerPage } from "@base/constants"
import { items } from "@base/data"

import { Basket, Filter, Page, Product } from "@components/index"
import { initialSortData } from "@components/Filter/data"
import Content from "@layouts/Containers/Content"



const Market = () => {

  const dispatch = useDispatch(),
    { loader } = useSelector((state: IStore) => ({
      loader: state.system.loader
    })),

    [pageNumber, setPageNumber] = React.useState<number>(0),

    pageTotal = Math.ceil(items.length / productPerPage),

    filters = [
      { label: "Sorting", type: "radio", items: initialSortData, loading: loader },
      { label: "Brands", type: "searchableCheckbox", items: initialSortData, loading: loader },
      { label: "Tags", type: "searchableCheckbox", items: initialSortData, loading: loader }
    ],

    onChangePage = (selected: number) => {
      setPageNumber(selected)
    };

  React.useEffect(() => {
    dispatch(MarketActions.getProductsAction());
  }, []);

  return (
    <Content title="Products" className="fadeIn">
      <Filter filters={filters} />
      <Page title="Products" className="page">
        <Product data={items} pageNumber={pageNumber} productPerPage={productPerPage} />
        <Pagination pageSize={10} total={pageTotal} onChange={onChangePage} showSizeChanger={false} />
      </Page>
      <Basket />
    </Content>
  )
}

export default Market;