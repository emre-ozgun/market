// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import React from "react"
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import { IStore } from "@store/IStore"
import { LookupActions, MarketActions } from "@store/actions"
import { currentBasket, currentBrands, currentTags, getProduct } from "@store/lib/selectors"

import { Basket, Filter, Page, Product } from "@components/index"
import { initialSortData } from "@components/Filter/data"
import { Content } from "@layouts/index"



const Market = () => {

  const dispatch = useDispatch(),
    { loader, basket, tags, brands } = useSelector((state: IStore) => ({
      loader: state.system.loader,
      basket: currentBasket(state),
      tags: currentTags(state),
      brands: currentBrands(state)
    })),

    { products } = useSelector(getProduct, shallowEqual),

    filters = [
      { label: "Sorting", type: "radio", items: initialSortData, loading: loader },
      { label: "Brands", type: "searchableCheckbox", items: brands, loading: loader, brand: true },
      { label: "Tags", type: "searchableCheckbox", items: tags, loading: loader, tag: true }
    ];

  React.useEffect(() => {
    dispatch(MarketActions.getProductsAction());
    dispatch(LookupActions.getBrandsAction());
    dispatch(LookupActions.getTagsAction());
  }, []);

  return (
    <Content title="Products" className="fadeIn">
      <Filter filters={filters} />
      <Page title="Products" className="page">
        <Product data={products} />
      </Page>
      <Basket product={basket} />
    </Content>
  )
}

export default Market;