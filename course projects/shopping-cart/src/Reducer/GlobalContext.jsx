import { createContext, useContext, useState } from "react";
import cartItems from "../data";

export const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

function GlobalContext({ childern }) {
  const [isCart, setIsCart] = useState(cartItems);

  return (
    <AppContext.Provider value={(isCart, setIsCart)}>
      {childern}
    </AppContext.Provider>
  );
}

export default GlobalContext;
