import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as ProductReducer } from "./ProductReducer/reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ AuthReducer, ProductReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
