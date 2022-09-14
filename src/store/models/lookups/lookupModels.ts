import { IBrands, ITags } from "@base/interfaces/lookups";
import { LookupActionTypes } from "@store/types";


export interface ILookupActions {
  type: LookupActionTypes;
  payload?: {
    tags?: ITags[];
    brands?: IBrands[];
  }
}