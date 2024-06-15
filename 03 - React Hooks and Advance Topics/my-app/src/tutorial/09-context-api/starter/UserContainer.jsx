import { useContext } from "react";
import {NavbarContext} from "./Navbar";

const UserContainer = () => {
  const { isUser, logout } = useContext(NavbarContext);

  return (
    <div className="user-container">
      {isUser ? (
        <>
          <p>Hello There, {isUser.name.toUpperCase()}</p>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

export default UserContainer;
