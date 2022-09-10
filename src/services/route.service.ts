import { IRoute } from "@base/interfaces";
import { Routes } from "@routes/routes";

const routeConfig = [
  ...Routes
];

export const getRouteConfig = (): IRoute[] => routeConfig;
