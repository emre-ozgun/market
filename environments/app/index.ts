import { productionConfig } from "./production";
import { developmentConfig } from "./development";

export interface IAppConfig {
  apiUrl: string;
  version: string;
}

let appConfig: IAppConfig = { ...productionConfig };

if (process.env.NODE_ENV === "production") {
  appConfig = { ...productionConfig };
} else if (process.env.NODE_ENV === "development") {
  appConfig = { ...developmentConfig };
}

export default appConfig;
