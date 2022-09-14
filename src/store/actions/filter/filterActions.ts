import { IBrands, ITags } from "@base/interfaces/filter";
import { IFilterActions } from "@store/models";
import { FilterActionTypes } from "@store/types";

const getTagsAction = (): IFilterActions => ({
  type: FilterActionTypes.GET_TAGS
}),

  setTagsAction = (tags: ITags[]): IFilterActions => ({
    type: FilterActionTypes.SET_TAGS,
    payload: { tags }
  }),

  getBrandsAction = (): IFilterActions => ({
    type: FilterActionTypes.GET_BRANDS
  }),

  setBrandsAction = (brands: IBrands[]): IFilterActions => ({
    type: FilterActionTypes.SET_BRANDS,
    payload: { brands }
  });

export const FilterActions = {
  getTagsAction,
  setTagsAction,
  getBrandsAction,
  setBrandsAction
}