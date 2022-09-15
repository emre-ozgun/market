// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import { LocalStorageKeys } from "@base/enums";
import { ISystem } from "@base/interfaces";
import { LocalStorageService } from "./localStorage.service";

export const defaultSystemConfig: ISystem = {
  theme: "light",
  direction: "ltr",
  loader: false
};

const getLocalSystemConfig = (): ISystem => {
  const localData = LocalStorageService.getLocalStorageItem(LocalStorageKeys.System);
  let result = { ...defaultSystemConfig };

  if (localData) {
    result = { ...localData };
  } else {
    LocalStorageService.setLocalStorageItem(LocalStorageKeys.System, result);
  }

  return result;
};

export const SystemService = {
  getLocalSystemConfig
}