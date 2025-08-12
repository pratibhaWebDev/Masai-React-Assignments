import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./authReducer";
import { quizReducer } from "./quizReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  quiz: quizReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
