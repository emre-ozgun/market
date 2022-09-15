// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import { ISystem } from "@base/interfaces";
import { SystemService } from "@services/system.service";
import { ISystemActions } from "@store/models/system/systemModels";
import { SystemActionTypes } from "@store/types";

const initialState: ISystem = SystemService.getLocalSystemConfig();

export function systemReducers(state: ISystem = initialState, action: ISystemActions): ISystem {
  const { type } = action;
  switch (type) {
    case SystemActionTypes.SHOW_LOADER:
      return {
        ...state,
        loader: true
      };
    case SystemActionTypes.HIDE_LOADER:
      return {
        ...state,
        loader: false
      };
    default:
      return state;
  }
}