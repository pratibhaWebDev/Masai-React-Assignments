import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { author: "", genre: "", status: "all" },
  reducers: {
    setAuthorFilter: (state, action) => { state.author = action.payload; },
    setGenreFilter: (state, action) => { state.genre = action.payload; },
    setStatusFilter: (state, action) => { state.status = action.payload; }
  }
});

export const { setAuthorFilter, setGenreFilter, setStatusFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
