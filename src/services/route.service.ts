// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import { IRoute } from "@base/interfaces";
import { Routes } from "@routes/routes";

const routeConfig = [
  ...Routes
];

export const getRouteConfig = (): IRoute[] => routeConfig;
