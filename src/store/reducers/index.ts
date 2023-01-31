import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@/store/reducers/authReducer';
import productReducer from '@/store/reducers/productReducer';

export const rootReducer = combineReducers({
  authReducer,
  productReducer,
});
