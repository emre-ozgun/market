import React from "react"

import { Filter, Page, Product } from "@components/index"
import { initialSortData } from "@components/Filter/data"
import Content from "@layouts/Containers/Content"



const Market = () => {

  const filters = [
    { label: "Sorting", type: "radio", items: initialSortData },
    { label: "Brands", type: "searchableCheckbox", items: initialSortData },
    { label: "Tags", type: "searchableCheckbox", items: initialSortData }
  ]

  return (
    <Content title="Anasayfa" className="fadeIn">
      <Filter filters={filters} />
      <Page title="Products" className="page">
        <Product />
      </Page>
    </Content>
  )
}

export default Market