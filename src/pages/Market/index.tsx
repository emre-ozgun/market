import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { IStore } from "@store/IStore"
import { LookupActions, MarketActions } from "@store/actions"
import { currentBasket, currentBrands, currentProducts, currentTags } from "@store/lib/selectors"

import { Basket, Filter, Page, Product } from "@components/index"
import { initialSortData } from "@components/Filter/data"
import { Content } from "@layouts/index"



const Market = () => {

  const dispatch = useDispatch(),
    { loader, products, basket, tags, brands } = useSelector((state: IStore) => ({
      loader: state.system.loader,
      products: currentProducts(state),
      basket: currentBasket(state),
      tags: currentTags(state),
      brands: currentBrands(state)
    })),

    filters = [
      { label: "Sorting", type: "radio", items: initialSortData, loading: loader },
      { label: "Brands", type: "searchableCheckbox", items: brands, loading: loader },
      { label: "Tags", type: "searchableCheckbox", items: tags, loading: loader }
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