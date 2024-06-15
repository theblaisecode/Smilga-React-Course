import { createContext, useState } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

function Navbar() {
  const [isUser, setIsUser] = useState({ name: "Blaise" });

  const logout = () => {
    setIsUser(null);
  };

  return (
    <NavbarContext.Provider value={{isUser, logout}}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks isUser={isUser} logout={logout} />
      </nav>
    </NavbarContext.Provider>
  );
}

export default Navbar;
