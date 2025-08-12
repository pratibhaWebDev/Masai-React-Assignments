import { createSlice } from '@reduxjs/toolkit';

const load = () => {
  try {
    return JSON.parse(localStorage.getItem('watchlist')) || [];
  } catch (e) { return []; }
};

const save = (list) => localStorage.setItem('watchlist', JSON.stringify(list));

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: { list: load() },
  reducers: {
    addToWatchlist(state, action) {
      const movie = action.payload;
      if (!state.list.find(m => m.id === movie.id)) {
        state.list.push(movie);
        save(state.list);
      }
    },
    removeFromWatchlist(state, action) {
      state.list = state.list.filter(m => m.id !== action.payload);
      save(state.list);
    },
    clearWatchlist(state) {
      state.list = [];
      save([]);
    }
  }
});

export const { addToWatchlist, removeFromWatchlist, clearWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
