import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/product-list/productSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
