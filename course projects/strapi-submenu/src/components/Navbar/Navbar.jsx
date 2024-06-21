import sublinks from "../../data";
import "./Navbar.css";

function Navbar({ isMobile, openCloseMenu, isShowSubMenu }) {
  return (
    <nav>
      <div className="container">
        <div className="navContent">
          <div className="logo">
            <a href="">strapi</a>
          </div>

          {isMobile && (
            <button onClick={() => openCloseMenu()} className="open">
              <i className="fa-solid fa-bars fa-xl"></i>
            </button>
          )}

          <div className={isShowSubMenu ? "allLinks active" : "allLinks"}>
            <div className={isMobile ? "subMenu active" : "subMenu"}>
              <button onClick={() => openCloseMenu()} className="close">
                <i className="fa-solid fa-xmark fa-xl"></i>
              </button>

              <div className={!isMobile ? "pc" : "mobile"}>
                <ul className={!isMobile ? "menuLinks" : "subMenuLinks"}>
                  {sublinks.map((subMenuItems) => (
                    <article key={subMenuItems.pageId} className="menuItem">
                      <h3>{subMenuItems.page}</h3>
                      <ul className="menuLinksUl">
                        {subMenuItems.links.map((eachSubMenuLink) => (
                          <li key={eachSubMenuLink.id}>
                            <a href={eachSubMenuLink.url}>
                              {eachSubMenuLink.icon} {eachSubMenuLink.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
