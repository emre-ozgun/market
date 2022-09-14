import ProxyService from "@services/proxy.service";
import { Lookups } from "@base/enums";


const GetTags = () => {
  return ProxyService.get(Lookups.Tags);
},

  GetBrands = () => {
    return ProxyService.get(Lookups.Brands);
  };

export { GetTags, GetBrands }