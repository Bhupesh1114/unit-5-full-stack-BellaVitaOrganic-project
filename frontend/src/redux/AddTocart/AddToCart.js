import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: "cart",

  initialState: {
    products: [],
    // total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      // state.quantity += 1;
      state.products.push(action.payload);
      // state.total += action.payload.price * action.payload.quantity;
    },
    increment: (state, action) => {
      const incrementData = state.products.map((product, index) => {
        console.log(action.payload)
        if (product.id === action.payload) {
  
          return {
              ...product,
              quantity : product.quantity+=1
          }
        }
        else{
            return product;
        }
  
      });
    },
  },
});

export const { addProduct, increment } = addToCartSlice.actions;
export default addToCartSlice.reducer;
