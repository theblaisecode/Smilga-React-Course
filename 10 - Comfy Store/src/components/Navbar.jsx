import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSunnySharp } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../assets/logo.png";
import { useState } from "react";

console.log(window.screen.width);

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const monileMenu = () => {
    setIsMobile((prevIsMobile) => !prevIsMobile);
  };

  return (
    <header className="bg-base-200">
      <div className="mx-auto w-11/12 lg:w-7/12">
        <div className="navbar flex justify-between items-center">
          <div className="menu flex justify-between items-center">
            <Link to="/" className="logo hidden lg:block">
              <img src={logo} alt="Comfy Stores Logo" className="lg:w-8/12" />
            </Link>

            <nav className="flex gap-1 flex-col lg:flex-row lg:gap-4">
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
