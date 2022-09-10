import { ICompanies, IProducts } from "@base/interfaces";
import { MarketActionTypes } from "@store/types";

export interface IMarketActions {
  type: MarketActionTypes;
  payload?: {
    products?: IProducts[];
    companies?: ICompanies[];
  }
}