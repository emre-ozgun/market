// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import { TDirection, TTheme } from "@base/types";

interface ISystem {
  loader: boolean;
  theme: TTheme;
  direction: TDirection;
}
interface IRoute {
  key?: string;
  path: string;
  className?: string;
  component: any;
  title?: string;
}

export {
  ISystem,
  IRoute
}