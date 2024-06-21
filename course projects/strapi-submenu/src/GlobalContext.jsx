import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

function GlobalContext({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function openCloseMenu() {
    setIsShowSubMenu((prevShowSubMenu) => !prevShowSubMenu);
  }

  function showSubMenu() {
    setIsShowSubMenu((prevShouSubMenu) => !prevShouSubMenu);
  }

  return (
    <AppContext.Provider
      value={{ isMobile, isShowSubMenu, openCloseMenu, showSubMenu }}>
      {children}
    </AppContext.Provider>
  );
}

export default GlobalContext;
