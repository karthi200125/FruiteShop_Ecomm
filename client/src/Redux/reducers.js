import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartReducer from './cartslice';
import favReducer from './favslice';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  fav: favReducer,
});

export default rootReducer;
