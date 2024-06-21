import sublinks from "../../data";
import "./Navbar.css";

function Navbar({ isMobile, openCloseMenu }) {
  return (
    <nav>
      <div className="container">
        <div className="navContent">
          <div className="logo">
            <a href="">strapi</a>
          </div>

          <button onClick={() => openCloseMenu()}>
            <i className="fa-solid fa-bars fa-xl"></i>
          </button>

          <div className="allLinks">
            <ul className={isMobile ? "menuLinks active" : "menuLinks"}>
              {sublinks.map((pageLinks) => {
                console.log(pageLinks);
                const { page, pageId, links } = pageLinks;
                return (
                  <li key={pageId} onMouseEnter={() => openCloseMenu}>
                    {page}
                  </li>
                );
              })}
            </ul>

            <ul className={isMobile ? "subMenu active" : "subMenu"}>
              {sublinks.map((subMenuItems) => {
                return subMenuItems.links.map((eachSubMenuLink) => {
                  const { id, label, icon, url } = eachSubMenuLink;
                  return (
                    <li key={id}>
                      <a href={url}>
                        {icon} {label}
                      </a>
                    </li>
                  );
                });
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
