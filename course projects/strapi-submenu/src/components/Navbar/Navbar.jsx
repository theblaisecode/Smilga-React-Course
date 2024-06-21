import sublinks from "../../data";
import "./Navbar.css";

function Navbar({ isMobile, openCloseSidebar }) {
  return (
    <nav>
      <div className="container">
        <div className="navContent">
          <div className="logo">
            <a href="">strapi se6drgy7uh8j</a>
          </div>

          <button onClick={() => openCloseSidebar()}>
            <i className="fa-solid fa-bars fa-xl"></i>
          </button>

          <div className="allLinks">
            <ul className={isMobile ? "menuLinks active" : "menuLinks"}>
              {sublinks.map((pageLinks) => {
                console.log(pageLinks);
                const {page, pageId, links} = pageLinks
                return (
                  <li key={pageId}>
                    {page}
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
