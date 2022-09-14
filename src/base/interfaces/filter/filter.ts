import { TFilters } from "@base/types";

interface IFilterOptions {
  id: string | number;
  value: string | number;
  length?: number;
}
interface IFilter {
  type: TFilters;
  name: string;
  label: string;
  count: number;
  items: IFilterOptions | IFilterOptions[];
  className?: string;
  placeholder?: string;
  value?: string;
  loading?: boolean;
}
interface ITags {
  count: number;
  name: string;
}
interface IBrands {
  count: number;
  name: string;
}
interface IFilterState {
  tags: ITags[];
  brands: IBrands[];
}
export {
  IFilter,
  ITags,
  IBrands,
  IFilterState
}
