import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-accent-content p-4">
      <div className="container">
        <div className="navbar">
          <div className="logo">Comfy Store</div>

          <nav className="">
            <NavLink
              to="/"
              aria-label="Link to Home page"
              className={({ isActive }) => (isActive ? "activeStyle" : null)}>
              Home
            </NavLink>
            
            <NavLink
              to="about"
              aria-label="Link to About page"
              className={({ isActive }) => (isActive ? "activeStyle" : null)}>
              About
            </NavLink>
            
            <NavLink
              to="products"
              aria-label="Link to Products page"
              className={({ isActive }) => (isActive ? "activeStyle" : null)}>
              Products
            </NavLink>
            
            <NavLink
              to="cart"
              aria-label="Link to Cart page"
              className={({ isActive }) => (isActive ? "activeStyle" : null)}>
              Cart
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
