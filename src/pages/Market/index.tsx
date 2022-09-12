import React from "react"
import { useSelector } from "react-redux"

import { IStore } from "@store/IStore"
import { currentProducts } from "@store/lib/selectors"

import { Basket, Filter, Page, Product } from "@components/index"
import { initialSortData } from "@components/Filter/data"
import { Content } from "@layouts/index"



const Market = () => {

  const { loader, products } = useSelector((state: IStore) => ({
    loader: state.system.loader,
    products: currentProducts(state)
  })),

    filters = [
      { label: "Sorting", type: "radio", items: initialSortData, loading: loader },
      { label: "Brands", type: "searchableCheckbox", items: initialSortData, loading: loader },
      { label: "Tags", type: "searchableCheckbox", items: initialSortData, loading: loader }
    ];

  return (
    <Content title="Products" className="fadeIn">
      <Filter filters={filters} />
      <Page title="Products" className="page">
        <Product data={products} loading={loader} />
      </Page>
      <Basket />
    </Content>
  )
}

export default Market;