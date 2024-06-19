import { links, social } from "../../data";
import logo from "../../img/TheBlaiseCodewhite.png";
import "./Navbar.css";

function Navbar({ isMobile, switchMobile }) {
  return (
    <nav>
      <div className="container">
        <button onClick={() => switchMobile()}>
          <i className={"fa-solid fa-bars fa-xl"}></i>
        </button>

        <div className={isMobile ? "navContent active" : "navContent"}>
          <div className="logo">
            <img src={logo} alt="TheBlaiseCode logo" />
            <button onClick={() => switchMobile()}>
              <i className="fa-solid fa-xmark fa-xl"></i>
            </button>
          </div>

          <div className="allLinks">
            <ul className="pages">
              {links.map((pages) => {
                const { id, url, text, aria, icon } = pages;

                return (
                  <li key={id}>
                    <a href={url} aria-label={aria}>
                      {icon}
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>

            <ul className="socials">
              {social.map((socialLinks) => {
                const { id, url, icon, aria } = socialLinks;

                return (
                  <li key={id}>
                    <a href={url} target="_blank" aria-label={aria}>
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
