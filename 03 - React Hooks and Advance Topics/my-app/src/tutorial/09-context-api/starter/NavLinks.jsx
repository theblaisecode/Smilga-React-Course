import UserContainer from "./UserContainer";

const NavLinks = ({ isUser, logout }) => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UserContainer isUser={isUser} logout={logout} />
    </div>
  );
};

export default NavLinks;
