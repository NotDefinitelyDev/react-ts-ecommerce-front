import { createSlice } from "@reduxjs/toolkit";
import { actGetProducts } from "./act/actGetProducts";
import type { TProduct } from "@customTypes/product";
import type { TLoading } from "@customTypes/shared";

interface IProductState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: IProductState = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsCleanUp: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProducts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export { actGetProducts };
export const { productsCleanUp } = productsSlice.actions;
export default productsSlice.reducer;
