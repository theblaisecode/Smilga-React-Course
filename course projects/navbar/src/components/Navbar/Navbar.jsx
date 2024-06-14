import { useState } from "react";
import logo from "../../img/TheBlaiseCodewhite.png";
import { links, social } from "../../data";
import "./NavbarStyle.css";

function Navbar() {
  const [showLink, setShowLink] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const home = links[0].url;

  return (
    <nav>
      <div className="container">
        <div className="navContent">
          <a href={home} className="logo" aria-label={links.aria}>
            <img src={logo} alt="TheblaiseCode Logo" />
          </a>

          <div className={isMobile ? "allLinks active" : "allLinks"}>
            <ul className="pages">
              {links.map((pages) => {
                const { id, url, text, aria } = pages;
                return (
                  <li key={id}>
                    <a className="active" href={url} aria-label={aria}>
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>

            <ul className="socials">
              {social.map((socialMedia) => {
                const { id, url, icon, aria } = socialMedia;
                return (
                  <li key={id}>
                    <a href={url} target="_blank" aria-label={aria}>
                      <i className={icon}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div id="mobileMenu">
            <button
              onClick={() => setIsMobile((prevIsMobile) => !prevIsMobile)}>
              <i
                className={
                  !isMobile
                    ? "fa-solid fa-bars fa-lg"
                    : "fa-solid fa-xmark fa-lg active"
                }></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
