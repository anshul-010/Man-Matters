import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as ProductReducer } from "./ProductReducer/reducer";
import { reducer as CartReducer } from "./CartReducer/reducer";

import { thunk } from "redux-thunk";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

const rootReducer = combineReducers({
  AuthReducer,
  ProductReducer,
  CartReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
