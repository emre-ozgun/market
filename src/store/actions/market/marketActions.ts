import { ICompanies, IProducts } from "@base/interfaces";
import { IMarketActions } from "@store/models/market";
import { MarketActionTypes } from "@store/types";

const getProductsAction = (): IMarketActions => ({
  type: MarketActionTypes.GET_PRODUCTS
}),

  setProductsAction = (products: IProducts[]): IMarketActions => ({
    type: MarketActionTypes.SET_PRODUCTS,
    payload: { products }
  }),

  getCompaniesAction = (): IMarketActions => ({
    type: MarketActionTypes.GET_COMPANIES
  }),

  setCompaniesAction = (companies: ICompanies[]): IMarketActions => ({
    type: MarketActionTypes.SET_COMPANIES,
    payload: { companies }
  });

export {
  getProductsAction,
  setProductsAction,
  getCompaniesAction,
  setCompaniesAction
}