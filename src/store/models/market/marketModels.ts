import { ICompanies, IProduct } from "@base/interfaces";
import { MarketActionTypes } from "@store/types";

export interface IMarketActions {
  type: MarketActionTypes;
  payload?: {
    products?: IProduct[];
    companies?: ICompanies[];
  }
}