import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

import { IoCloseSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "../reduxToolkit/mobileMenu/mobileMenuSlice";
import { isDarkMode } from "../reduxToolkit/darkMode/darkModeSlice";
import logo from "../assets/logo.png";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "about", label: "About" },
  { path: "products", label: "Products" },
  { path: "cart", label: "Cart" },
];

function Navbar() {
  const { mobileMenu } = useSelector((state) => state.mobileMenu);
  const { themeMode } = useSelector((state) => state.themeMode);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  console.log("numItemsInCart:", numItemsInCart);
  const dispatch = useDispatch();

  return (
    <header className="bg-base-200 py-1">
      <div className="mx-auto max-w-6xl px-8">
        <div className="navbar flex justify-between items-center">
          <div className="logoAndMobile">
            <button
              className="transition-all duration-500 lg:hidden"
              onClick={() => dispatch(isMobile())}>
              {!mobileMenu ? (
                <FaBarsStaggered className="text-xl" />
              ) : (
                <IoCloseSharp className="text-xl" />
              )}
            </button>

            <Link to="/" className="logo hidden lg:block">
              <img
                src={logo}
                alt="Comfy Stores Logo"
                className="lg:w-8/12"
                style={{ filter: themeMode ? "none" : "brightness(20%)" }}
              />
            </Link>
          </div>

          <div className="menu flex justify-between items-center">
            <nav
              className={`bg-base-200 w-52 h-19.5vh rounded-2xl p-2 flex flex-col transition-all duration-500 ease-in-out fixed top-28 left-5 lg:flex-row lg:h-auto lg:w-auto lg:gap-4 lg:static lg:left-auto lg:top-auto ${
                mobileMenu ? "block" : "hidden"
              } lg:block`}>
              {navLinks.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  aria-label={`Link to ${label} page`}
                  className={({ isActive }) =>
                    isActive
                      ? "activeStyle py-2 px-4 lg:p-4 capitalize"
                      : "py-2 px-4 lg:p-4 capitalize"
                  }>
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="">
            <div className="theme">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  onChange={() => dispatch(isDarkMode())}
                  checked={themeMode}
                  className="theme-controller"
                  // value="synthwave"
                />

                {/* sun icon */}
                <BsSunFill className="swap-on h-4 w-4" />

                {/* moon icon */}
                <BsMoonFill className="swap-off h-4 w-4" />
              </label>
            </div>

            <NavLink
              to="cart"
              className="cartIcon ml-6 btn btn-ghost btn-circle btn-md ">
              <div className="indicator">
                <FiShoppingCart className="h-6 w-6" />
                <span className="badge badge-sm badge-primary indicator-item">
                  {numItemsInCart}
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
