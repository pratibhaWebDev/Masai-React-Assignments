import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import moviesReducer from '../features/movies/moviesSlice';
import watchlistReducer from '../features/watchlist/watchlistSlice';
import bookingReducer from '../features/booking/bookingSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
    watchlist: watchlistReducer,
    booking: bookingReducer,
  },
});

export default store;
