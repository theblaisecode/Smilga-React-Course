import { NavLink } from "react-router-dom";
import { IoSunnySharp } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

console.log(window.screen.width);

function Navbar() {
  return (
    <header className="bg-base-200">
      <div className="mx-auto w-11/12 lg:w-7/12">
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

          <div className="theme">
            <IoSunnySharp />
            <IoMoon />
            <div className="cartIcon">
              <FiShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
