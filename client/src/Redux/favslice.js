import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fav: JSON.parse(localStorage.getItem('fav')) || [],
  totalAmount: 0,
};

const FavSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addToFav: (state, action) => {
      state.fav.push(action.payload);
      localStorage.setItem('fav', JSON.stringify(state.fav));
    },
    removeFromFav: (state, action) => {
      const productIdToRemove = action.payload;
      state.fav = state.fav.filter((item) => item._id !== productIdToRemove);
      localStorage.setItem('fav', JSON.stringify(state.fav));
    },
    clearFav: (state) => {
      state.fav = [];
      localStorage.removeItem('fav');
    },
  },
});

export default FavSlice.reducer; 
export const { addToFav, removeFromFav, clearFav } = FavSlice.actions;
