import { combineReducers, Reducer, CombinedState } from "redux";

import { IStore } from "./IStore";
import { basketReducers, marketReducers, systemReducers } from "./reducers";



const RootReducer: Reducer<CombinedState<IStore>> = combineReducers({
	market: marketReducers,
	system: systemReducers,
	basket: basketReducers
});

export type RootState = ReturnType<typeof RootReducer>;
export default RootReducer;
