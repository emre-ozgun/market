// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import { createSelector } from "reselect";

import { IStore } from "@store/IStore";


const productItemsSelector = (state: IStore) => state.market.products,
  productFilterByBrandSelector = (state: IStore) => state.filter.brand,
  productFilterByTagSelector = (state: IStore) => state.filter.tag,
  productFilterByItemTypeSelector = (state: IStore) => state.filter.itemType,
  productOrderBySelector = (state: IStore) => state.filter.orderBy,

  productItemsFilterBy = createSelector(
    productItemsSelector,
    productFilterByBrandSelector,
    productFilterByTagSelector,
    productFilterByItemTypeSelector,
    (items, filterByBrand, filterByTag, filterByItemType) => {

      if (!items || items.length === 0) {
        return [];
      }

      return items.filter((item) => {

        const matchBrand = filterByBrand.length !== 0 ? filterByBrand.includes(item.manufacturer) : true,
          matchTag = filterByTag.length !== 0 ? filterByTag.some(f => item.tags.includes(f)) : true,
          matchItemType = filterByItemType.length !== 0 ? filterByItemType.includes(item.itemType) : true;

        return matchBrand && matchTag && matchItemType;
      });
    },
  ),

  productItemsFilterByAndOrderBy = createSelector(
    productItemsFilterBy,
    productOrderBySelector,
    (items, orderBy) => {
      return items.sort((a, b) => {
        switch (orderBy) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "date-desc":
            return new Date(b.added).valueOf() - new Date(a.added).valueOf();
          default:
            return new Date(a.added).valueOf() - new Date(b.added).valueOf();
        }
      });
    },
  ),

  getProduct = createSelector(
    productItemsFilterByAndOrderBy,
    (products) => {
      return { products };
    }
  );

export {
  getProduct,
  productOrderBySelector
}