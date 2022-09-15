import { TFilters } from "@base/types";

interface IFilterItems {
  id: string | number;
  value: string | number;
  length?: number;
}
interface IFilter {
  type: TFilters;
  name: string;
  label: string;
  count: number;
  items: IFilterItems | IFilterItems[];
  className?: string;
  placeholder?: string;
  value?: string;
  loading?: boolean;
  brand: boolean;
  tag: boolean;
  orderBy: boolean;
}

interface IFilterState {
  brand: string[];
  tag: string[];
  orderBy: string;
}

export {
  IFilter,
  IFilterState
}
