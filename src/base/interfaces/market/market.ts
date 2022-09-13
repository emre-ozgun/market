interface ITags {
  tags: any;
}
interface IProduct {
  id: number;
  tags: ITags;
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number | Date; // Date check.
  manufacturer: string;
  itemType: string;
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
  IMarket,
  ITags
}