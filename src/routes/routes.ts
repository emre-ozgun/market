// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import React from "react";
import { IRoute } from "@base/interfaces";

const Market = React.lazy(() => import("@pages/Market"))

export const Routes: IRoute[] = [
  {
    key: "market",
    path: "/",
    component: Market 
  }
]