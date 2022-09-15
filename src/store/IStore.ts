import { IFilterState, ILookups, IMarket, ISystem } from "@base/interfaces";
import { Basket } from "./types";

export interface IStore {
  market: IMarket,
  system: ISystem;
  basket: Basket;
  lookups: ILookups;
  filter: IFilterState;
}