import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

function GlobalContext({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  function openCloseMenu() {
    setIsMobile((prevIsMobile) => !prevIsMobile);
  }
  return (
    <AppContext.Provider value={{isMobile, setIsMobile, openCloseMenu}}>
      {children}
    </AppContext.Provider>
  );
}

export default GlobalContext;
