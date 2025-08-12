import { configureStore, combineReducers } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import filtersReducer from "./filtersSlice";

const rootReducer = combineReducers({
  books: booksReducer,
  filters: filtersReducer
});

export default configureStore({
  reducer: rootReducer
});
