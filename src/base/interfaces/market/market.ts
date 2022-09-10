interface ITags {
  tags: string[];
}
interface IProducts {
  tags: ITags[];
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

export {
  IProducts,
  ICompanies
}