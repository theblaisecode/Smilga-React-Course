import { createContext, useState } from "react";
import NavLinks from "./NavLinks";

export const ButtonContext = createContext();

const Navbar = () => {
  const [isUser, setIsUser] = useState({ name: "Blaise" });

  const logout = () => {
    setIsUser(null);
  };

  return (
    <ButtonContext.Provider value={{ isUser, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks isUser={isUser} logout={logout} />
      </nav>
    </ButtonContext.Provider>
  );
};

export default Navbar;
