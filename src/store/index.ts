import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productsReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
