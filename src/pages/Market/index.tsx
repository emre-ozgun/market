import React from "react"
import { Pagination } from "antd"

import { productPerPage } from "@base/constants"
import { items } from "@base/data"

import { Basket, Filter, Page, Product } from "@components/index"
import { initialSortData } from "@components/Filter/data"
import Content from "@layouts/Containers/Content"



const Market = () => {
  const [pageNumber, setPageNumber] = React.useState(0),

    pageTotal = Math.ceil(items.length / productPerPage),

    onChangePage = (selected: number) => {
      setPageNumber(selected)
    },

    filters = [
      { label: "Sorting", type: "radio", items: initialSortData },
      { label: "Brands", type: "searchableCheckbox", items: initialSortData },
      { label: "Tags", type: "searchableCheckbox", items: initialSortData }
    ];

  return (
    <Content title="Anasayfa" className="fadeIn">
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