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

export {
  IFilter
}
