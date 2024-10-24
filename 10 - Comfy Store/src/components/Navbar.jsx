import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../assets/logo.png";
import { useState } from "react";

console.log(window.screen.width);

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const mobileMenu = () => {
    setIsMobile((prevIsMobile) => !prevIsMobile);
  };

  return (
    <header className="bg-base-200">
      <div className="mx-auto w-11/12 lg:w-7/12">
        <div className="navbar flex justify-between items-center">
          <div className="menu flex justify-between items-center">
            <div className="sum">
              <button
                className="transition-all duration-500 lg:hidden"
                onClick={mobileMenu}>
                {!isMobile ? (
                  <FaBarsStaggered className="text-xl" />
                ) : (
                  <IoCloseSharp className="text-xl" />
                )}
              </button>

              <Link to="/" className="logo hidden lg:block">
                <img src={logo} alt="Comfy Stores Logo" className="lg:w-8/12" />
              </Link>
            </div>

            {isMobile && (
              <nav className="bg-base-200 w-52 h-19.5vh top-28 left-5 rounded-2xl p-2 fixed flex flex-col transition-all duration-500 ease-in-out lg:flex-row lg:gap-4">
                <NavLink
                  to="/"
                  aria-label="Link to Home page"
                  className={({ isActive }) =>
                    isActive
                      ? "activeStyle py-2 px-4 lg:p-4"
                      : "py-2 px-4 lg:p-4"
                  }>
                  Home
                </NavLink>

                <NavLink
                  to="about"
                  aria-label="Link to About page"
                  className={({ isActive }) =>
                    isActive
                      ? "activeStyle py-2 px-4 lg:p-4"
                      : "py-2 px-4 lg:p-4"
                  }>
                  About
                </NavLink>

                <NavLink
                  to="products"
                  aria-label="Link to Products page"
                  className={({ isActive }) =>
                    isActive
                      ? "activeStyle py-2 px-4 lg:p-4"
                      : "py-2 px-4 lg:p-4"
                  }>
                  Products
                </NavLink>

                <NavLink
                  to="cart"
                  aria-label="Link to Cart page"
                  className={({ isActive }) =>
                    isActive
                      ? "activeStyle py-2 px-4 lg:p-4"
                      : "py-2 px-4 lg:p-4"
                  }>
                  Cart
                </NavLink>
              </nav>
            )}
          </div>

          <div className="theme">
            <IoSunnySharp className="text-xl" />
            <IoMoon className="text-xl" />
            <div className="cartIcon">
              <FiShoppingCart className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
