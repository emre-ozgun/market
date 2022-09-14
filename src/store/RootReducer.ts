import { combineReducers, Reducer, CombinedState } from "redux";

import { IStore } from "./IStore";
import { basketReducers, filterReducers, marketReducers, systemReducers } from "./reducers";



const RootReducer: Reducer<CombinedState<IStore>> = combineReducers({
	market: marketReducers,
	system: systemReducers,
	basket: basketReducers,
	filter: filterReducers
});

export type RootState = ReturnType<typeof RootReducer>;
export default RootReducer;
