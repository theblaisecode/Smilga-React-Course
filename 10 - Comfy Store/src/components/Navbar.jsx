import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../assets/logo.png";
import { useState } from "react";

console.log(window.screen.width);

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const mobileMenu = () => {
    setIsMobile((prevIsMobile) => !prevIsMobile);
  };

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "winter" : "dim";
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-base-200 py-1">
      <div className="mx-auto w-11/12 xl:w-7/12">
        <div className="navbar flex justify-between items-center">
          <div className="menu flex justify-between items-center lg:flex-[2] lg:flex-row ">
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
                {isDarkMode ? (
                  <img
                    src={logo}
                    alt="Comfy Stores Logo"
                    className="lg:w-8/12"
                  />
                ) : (
                  <img
                    src={logo}
                    alt="Comfy Stores Logo"
                    className="lg:w-8/12"
                    style={{ filter: "brightness(20%)" }}
                  />
                )}
              </Link>
            </div>

            {!isMobile && (
              <nav
                className={`bg-base-200 w-52 h-19.5vh rounded-2xl p-2 flex flex-col transition-all duration-500 ease-in-out lg:flex-row lg:h-auto lg:w-auto lg:gap-4 ${
                  isMobile ? "fixed top-28 left-5" : "static"
                }`}>
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

          <div className="lg:flex-1 justify-end">
            <div className="theme">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  onChange={toggleTheme}
                  checked={isDarkMode}
                  className="theme-controller"
                  // value="synthwave"
                />

                {/* sun icon */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="swap-on h-4 w-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                </svg>

                {/* moon icon */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="swap-off h-4 w-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
                </svg>
              </label>
            </div>

            <div className="cartIcon ml-6">
              <FiShoppingCart className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
