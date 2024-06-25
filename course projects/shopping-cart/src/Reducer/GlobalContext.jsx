import { createContext, useContext, useReducer } from "react";
import {
  REMOVE_CART_ITEM,
  RESET_CART,
  CLEAR_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "./actions";
import cartItems from "../data";
import reducer from "./reducer";

export const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

const defaultState = {
  isCart: cartItems,
};

function GlobalContext({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  function removeItem(id) {
    dispatch({ type: REMOVE_CART_ITEM, payload: { id } });
  }

  function clearCart() {
    dispatch({ type: CLEAR_CART });
  }

  function resetCart() {
    dispatch({ type: RESET_CART });
  }

  function incrementItem(id) {
    dispatch({ type: INCREMENT_ITEM, payload: { id } });
  }

  function decrementItem(id) {
    dispatch({ type: DECREMENT_ITEM, payload: { id } });
  }

  return (
    <AppContext.Provider
      value={{
        isCart: state.isCart,
        state,
        removeItem,
        clearCart,
        resetCart,
        dispatch,
        incrementItem,
        decrementItem,
      }}>
      {children}
    </AppContext.Provider>
  );
}

export default GlobalContext;
