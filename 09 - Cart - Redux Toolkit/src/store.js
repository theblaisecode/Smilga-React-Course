import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";
// cartReducer  is a random name. You can call it any thing you prefer

export const store = configureStore({
  reducer: { cart: cartReducer, modal: modalReducer },
});
