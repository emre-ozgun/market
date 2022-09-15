// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.
interface IProduct {
  id: string;
  tags: string[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: any;
  manufacturer: string;
  itemType: string;
  quantity: number;
}
interface ICompanies {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  account: number;
  contact: string;
}
interface IBasket {
  name: string;
  price: string;
}
interface IMarket {
  products: IProduct[];
  companies: ICompanies[];
}

export {
  IProduct,
  ICompanies,
  IBasket,
  IMarket
}