// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import { SystemActionTypes } from "@store/types";

export interface ISystemActions {
  type: SystemActionTypes;
  payload?: {
    loader?: boolean;
  }
}