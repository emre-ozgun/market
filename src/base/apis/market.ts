import { Market } from "@base/enums"
import proxyService from "@services/proxy.service";

const GetProducts = () => {
  return proxyService.get(Market.Products);
},

  GetCompanies = () => {
    return proxyService.get(Market.Companies);
  }

export { GetProducts, GetCompanies }