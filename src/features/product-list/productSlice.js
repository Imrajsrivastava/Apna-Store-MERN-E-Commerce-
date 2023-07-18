import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProduct, fetchProductFilter } from "./productApi";

const initialState = {
  products: [],
  status: "idle",
};

export const fetchAllProductAsync = createAsyncThunk(
  "product/fetchAllProduct",
  async () => {
    const response = await fetchAllProduct();

    return response.data;
  }
);

export const fetchProductFilterAsync = createAsyncThunk(
  "product/fetchProductFilter",
  async ({filter,sort}) => {
    const response = await fetchProductFilter(filter,sort);

    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })

      //filter

      .addCase(fetchProductFilterAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductFilterAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = productSlice.actions;

export const selectAllProduct = (state) => state.product.products;

export default productSlice.reducer;
