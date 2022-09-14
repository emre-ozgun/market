import ProxyService from "@services/proxy.service";
import { Market } from "@base/enums"

const GetProducts = () => {
  return ProxyService.get(Market.Products);
},

  GetCompanies = () => {
    return ProxyService.get(Market.Companies);
  },

  GetTags = () => {
    return ProxyService.get(Market.Tags);
  },

  GetBrands = () => {
    return ProxyService.get(Market.Brands);
  };

export { GetProducts, GetCompanies, GetTags, GetBrands }