import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

// Reducers ******************
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as ProductReducer } from "./ProductReducer/reducer";
import { reducer as CartReducer } from "./ProductReducer/reducer";

// Store *********************
const rootReducer = combineReducers({
  AuthReducer,
  ProductReducer,
  CartReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
