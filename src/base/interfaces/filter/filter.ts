import { TFilters } from "@base/types";

interface IFilterOptions {
  id: string | number;
  value: string | number;
  length?: number;
}
interface IFilter {
  type: TFilters;
  label: string;
  items: IFilterOptions | IFilterOptions[];
  className?: string;
  placeholder?: string;
  value?: string;
}

export {
  IFilter
}
