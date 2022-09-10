import { LocalStorageKeys } from "@base/enums";

const setLocalStorageItem = <T = object>(key: LocalStorageKeys, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
},

  getLocalStorageItem = (key: LocalStorageKeys): any | null => {
    const data = localStorage.getItem(key);
    return (data != null) ? JSON.parse(data) : null;
  },

  deleteLocalStorageItem = (key: LocalStorageKeys) => {
    localStorage.removeItem(key);
  },

  clearFromLocalStorage = () => localStorage.clear();

export const LocalStorageService = {
  setLocalStorageItem,
  getLocalStorageItem,
  deleteLocalStorageItem,
  clearFromLocalStorage
};