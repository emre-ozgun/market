import React from "react"

import { Filter, Page, Product } from "@components/index"
import Content from "@layouts/Containers/Content"



const Market = () => {

  const filters = [
    { label: "Sorting", type: "radio" },
    { label: "Brands", type: "radio" },
    { label: "Tags", type: "radio" }
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