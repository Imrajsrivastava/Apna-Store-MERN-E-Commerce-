import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProduct, fetchProductFilter } from "./productApi";

const initialState = {
  products: [],
  status: "idle",
  totalitems:0
  
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
  async ({filter,sort,pagination}) => {
    const response = await fetchProductFilter(filter,sort,pagination);
// console.log(response)
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
        state.products = action.payload.products;
        state.totalitems = action.payload.totalitems
      });
  },
});

export const { increment, decrement, incrementByAmount } = productSlice.actions;

export const selectAllProduct = (state) => state.product.products;
export const selecttotalitems = (state) => state.product.totalitems;

export default productSlice.reducer;
