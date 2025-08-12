import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tmdb from '../../api/tmdb';

// fetch movies by query & page
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ query, page = 1 }, { rejectWithValue }) => {
    try {
      const res = await tmdb.get('/search/movie', { params: { query, page }});
      return { data: res.data, query, page };
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    byQuery: {}, // caching: byQuery[query] = { page1: [...], total_pages }
    loading: false,
    error: null,
    currentQuery: '',
    currentPage: 1,
  },
  reducers: {
    setCurrentQuery(state, action) {
      state.currentQuery = action.payload;
      state.currentPage = 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        const { data, query, page } = action.payload;
        state.byQuery[query] = {
          ...(state.byQuery[query] || {}),
          [page]: data.results,
          total_pages: data.total_pages,
          total_results: data.total_results,
        };
        state.currentQuery = query;
        state.currentPage = page;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch movies';
      });
  }
});

export const { setCurrentQuery } = moviesSlice.actions;
export default moviesSlice.reducer;
