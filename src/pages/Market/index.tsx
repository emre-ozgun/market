import React from "react"

import Content from "@layouts/Containers/Content"
import Filter from "@components/Filter"
import Product from "@components/Product/Product"
import Page from "@components/Page"


const Market = () => {

  return (
    <Content title="Anasayfa" className="fadeIn">
      <Filter />
      <Page title="Products" className="page">
        <Product />
      </Page>
    </Content>
  )
}

export default Market