import { productionConfig } from "./production";
import { developmentConfig } from "./development";

export interface IAppConfig {
  apiUrl: string;
}

let AppConfig: IAppConfig = { ...productionConfig };

if (process.env.NODE_ENV === "production") {
  AppConfig = { ...productionConfig };
} else if (process.env.NODE_ENV === "development") {
  AppConfig = { ...developmentConfig };
}

export default AppConfig;
