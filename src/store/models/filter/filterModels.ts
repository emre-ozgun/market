import { IBrands, ITags } from "@base/interfaces/filter";
import { FilterActionTypes } from "@store/types";


export interface IFilterActions {
  type: FilterActionTypes;
  payload?: {
    tags?: ITags[];
    brands?: IBrands[];
  }
}