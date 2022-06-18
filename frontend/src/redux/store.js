import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "./AddTocart/AddToCart";

export default configureStore({
  reducer: {
    cart: addToCartReducer,
  },
});
