import { combineReducers, Reducer, CombinedState } from "redux";

import { IStore } from "./IStore";
import { marketReducers } from "./reducers";



const RootReducer: Reducer<CombinedState<IStore>> = combineReducers({
	market: marketReducers
});

export type RootState = ReturnType<typeof RootReducer>;
export default RootReducer;
