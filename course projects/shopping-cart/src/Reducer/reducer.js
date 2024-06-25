import {
  CLEAR_CART,
  RESET_CART,
  REMOVE_CART_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "./actions";

import cartItems from "../data";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, isCart: [] };
  }

  if (action.type === RESET_CART) {
    return { ...state, isCart: cartItems };
  }

  if (action.type === REMOVE_CART_ITEM) {
    return {
      ...state,
      isCart: state.isCart.filter(
        (bagItem) => bagItem.id !== action.payload.id
      ),
    };
  }

  if (action.type === INCREMENT_ITEM) {
    return {
      ...state,
      isCart: state.isCart.map((add) => {
        if (add.id === action.payload.id) {
          return { ...add, amount: add.amount + 1 };
        }
        return add;
      }),
    };
  }

  if (action.type === DECREMENT_ITEM) {
    return {
      ...state,
      isCart: state.isCart
        .map((sub) => {
          if (sub.id === action.payload.id && sub.amount > 0) {
            return { ...sub, amount: sub.amount - 1 };
          }
          return sub;
        })
        .filter((item) => item.amount > 0),
    };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;
