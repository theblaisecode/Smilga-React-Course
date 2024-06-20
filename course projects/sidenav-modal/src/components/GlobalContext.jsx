import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

function GlobalContext({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isModal, setIsModal] = useState(false);

  function switchMobile() {
    setIsMobile((prevIsMobile) => !prevIsMobile);
  }

  function toggleModal() {
    setIsModal((prevIsModal) => !prevIsModal);
  }

  return (
    <AppContext.Provider
      value={{
        isMobile,
        setIsMobile,
        isModal,
        setIsModal,
        switchMobile,
        toggleModal,
      }}>
      {children}
    </AppContext.Provider>
  );
}

export default GlobalContext;
