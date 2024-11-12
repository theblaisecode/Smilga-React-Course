import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find(
        (theItem) => theItem.cartID === product.cartID
      );

      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      if (typeof product.amount === "number") {
        state.numItemsInCart += product.amount;
      } else {
        state.numItemsInCart += 1;
      }

      state.cartTotal += product.price * product.amount;
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;

      localStorage.setItem("cart", JSON.stringify(state));

      toast.success("Item added to cart");
    },
    clearCart: (state) => {
      console.log("lol");
    },
    removeItem: (state, action) => {
      console.log("lol");
    },
    editItem: (state, action) => {
      console.log("lol");
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
