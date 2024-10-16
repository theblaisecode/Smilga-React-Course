import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-accent-content p-4">
      <div className="container">
        <div className="navbar flex justify-between">
          <div className="logo">Comfy Store</div>

          <nav className="flex gap-4">
            <NavLink
              to="/"
              aria-label="Link to Home page"
              className={({ isActive }) =>
                isActive ? "activeStyle p-4" : "p-4"
              }>
              Home
            </NavLink>

            <NavLink
              to="about"
              aria-label="Link to About page"
              className={({ isActive }) =>
                isActive ? "activeStyle p-4" : "p-4"
              }>
              About
            </NavLink>

            <NavLink
              to="products"
              aria-label="Link to Products page"
              className={({ isActive }) =>
                isActive ? "activeStyle p-4" : "p-4"
              }>
              Products
            </NavLink>

            <NavLink
              to="cart"
              aria-label="Link to Cart page"
              className={({ isActive }) =>
                isActive ? "activeStyle p-4" : "p-4"
              }>
              Cart
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
