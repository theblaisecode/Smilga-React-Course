import { useState } from "react";
import { links } from "../data";
import "./Navbar.css"

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenu, setIsMenu] = useState(links);
  console.log(isMenu);

  /**
   * 
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
    aria: "Link to Home Page",

    fa FaBars
    icon: "fa-brands fa-square-twitter fa-lg",
   */

  function switchMobile() {
    setIsMobile((prevIsMobile) => !prevIsMobile);
  }

  return (
    <nav>
      <div className="container">
        <button onClick={() => switchMobile()}>
          <i
            className={
              !isMobile
                ? "fa-solid fa-bars"
                : "fa-solid fa-xmark active"
            }></i>
        </button>

        <div className="navContent">
          <div className="logo">
            <img src={} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
