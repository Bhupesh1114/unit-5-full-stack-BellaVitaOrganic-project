// import { createSlice } from "@reduxjs/toolkit";

// const addToCartSlice = createSlice({
//   name: "cart",

//   initialState: {
//     products: [],
//     // total: 0,
//   },
//   reducers: {
//     addProduct: (state, action) => {
//       // state.quantity += 1;
//       state.products.push(action.payload);
//       // state.total += action.payload.price * action.payload.quantity;
//     },
//     increment: (state, action) => {

//     },
//   },
// });

// export const { addProduct, increment } = addToCartSlice.actions;
// export default addToCartSlice.reducer;

export const increment = (data, id) => (dispatch) => {
  const incrementData = data.map((product, index) => {
    if (product.id === id) {
      return {
        ...product,
        quantity: (product.quantity += 1),
      };
    } else {
      return product;
    }
  });
  dispatch({ type: "increment", payload: incrementData });
};
export const decrement = (data, id) => (dispatch) => {
  const decrementData = data.map((product, index) => {
    if (product.id === id) {
      return {
        ...product,
        quantity: (product.quantity -= 1),
      };
    } else {
      return product;
    }
  });
  dispatch({ type: "decrement", payload: decrementData });
};

export const addToCart = (data, id) => (dispatch) => {};

const initialState = {
  products: [],
  // total: 0,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "increment":
      return {
        products: payload,
      };
    case "decrement":
      return {
        products: payload,
      };
    default:
      return state;
  }
};
