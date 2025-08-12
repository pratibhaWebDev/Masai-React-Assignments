import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push({ id: Date.now(), ...action.payload, read: false });
    },
    deleteBook: (state, action) => {
      return state.filter(book => book.id !== action.payload);
    },
    markAsRead: (state, action) => {
      const book = state.find(b => b.id === action.payload);
      if (book) book.read = true;
    },
    editBook: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.findIndex(b => b.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedData };
      }
    }
  }
});

export const { addBook, deleteBook, markAsRead, editBook } = booksSlice.actions;
export default booksSlice.reducer;
