// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import { LocalStorageKeys } from "@base/enums";

const setLocalStorageItem = <T = object>(key: LocalStorageKeys, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
},

  getLocalStorageItem = (key: LocalStorageKeys): any | null => {
    const data = localStorage.getItem(key);
    return (data != null) ? JSON.parse(data) : null;
  };


export const LocalStorageService = {
  setLocalStorageItem,
  getLocalStorageItem
};