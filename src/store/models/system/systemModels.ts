import { SystemActionTypes } from "@store/types";

export interface ISystemActions {
  type: SystemActionTypes;
  payload?: {
    loader?: boolean;
  }
}