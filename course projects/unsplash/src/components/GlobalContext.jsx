import { useState, createContext, useContext } from "react";

const ChangeTheme = createContext();

export const useGlobalContext = () => {
  return useContext(ChangeTheme);
};

function GlobalContext({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function toggleTheme() {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  }

  console.log(isDarkMode);

  return (
    <ChangeTheme.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ChangeTheme.Provider>
  );
}

export default GlobalContext;
