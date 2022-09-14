import { combineReducers, Reducer, CombinedState } from "redux";

import { IStore } from "./IStore";
import { basketReducers, lookupReducers, marketReducers, systemReducers } from "./reducers";



const RootReducer: Reducer<CombinedState<IStore>> = combineReducers({
	market: marketReducers,
	system: systemReducers,
	basket: basketReducers,
	lookups: lookupReducers
});

export type RootState = ReturnType<typeof RootReducer>;
export default RootReducer;
