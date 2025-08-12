import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import matchReducer from "./match/reducer";

const rootReducer = combineReducers({
  matches: matchReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
