import ProxyService from "@services/proxy.service";
import { Market } from "@base/enums"

const GetProducts = () => {
  return ProxyService.get(Market.Products);
},

  GetCompanies = () => {
    return ProxyService.get(Market.Companies);
  }

export { GetProducts, GetCompanies }