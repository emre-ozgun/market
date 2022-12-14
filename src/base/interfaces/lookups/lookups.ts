// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.
interface ITags {
  count: number;
  name: string;
}
interface IBrands {
  count: number;
  name: string;
}

interface ILookups {
  tags: ITags[];
  brands: IBrands[];
}

export {
  ILookups,
  ITags,
  IBrands
}