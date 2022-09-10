import { IRoute } from "@base/interfaces";
import React from "react";

const Market = React.lazy(() => import("@pages/Market"))

export const Routes: IRoute[] = [
  {
    key: "market",
    path: "/",
    component: Market 
  }
]