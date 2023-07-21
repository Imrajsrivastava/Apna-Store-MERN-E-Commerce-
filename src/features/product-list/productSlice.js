import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProduct, fetchProductFilter,fetchBrands,fetchCategories } from "./productApi";

const initialState = {
  products: [],
  categories:[],
  brands:[],
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


export const fetchCategoriesAsync = createAsyncThunk(
  "product/fetchCategories",
  async () => {
    const response = await fetchCategories();

    return response.data;
  }
);


export const fetchBrandsAsync = createAsyncThunk(
  "product/fetchBrands",
  async () => {
    const response = await fetchBrands();

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
      })


      //brands

      .addCase(fetchBrandsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.brands = action.payload;
      })

      //categories

      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload;
      })






  },
});

export const { increment, decrement, incrementByAmount } = productSlice.actions;

export const selectAllProduct = (state) => state.product.products;
export const selectcategories = (state) => state.product.categories;
export const selectbrands = (state) => state.product.brands;
export const selecttotalitems = (state) => state.product.totalitems;


export default productSlice.reducer;
