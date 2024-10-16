import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-accent-content p-4">
      <div className="container">
        <div className="navbar">
          <div className="logo">Comfy Store</div>

          <nav>
            <NavLink
              to="home"
              aria-label="Link to Home page"
              className={({ isActive }) => (isActive ? "activeStyle" : null)}>
              Home
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
