import { combineReducers, Reducer, CombinedState } from "redux";

import { IStore } from "./IStore";
import { marketReducers, systemReducers } from "./reducers";



const RootReducer: Reducer<CombinedState<IStore>> = combineReducers({
	market: marketReducers,
	system: systemReducers
});

export type RootState = ReturnType<typeof RootReducer>;
export default RootReducer;
