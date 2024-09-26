// import logo from "../"

import { links } from "../data";

function Navbar() {
  return (
    <header className="bg-emerald-100">
      <div className="mx-auto max-w-7xl px-8 py-2">
        <div className="headerContent flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 py-2">
          <div className="contentTop">
            <a href="#home" className="text-4xl font-bold">
              Web<span className="text-emerald-500">Dev</span>
            </a>
          </div>

          <div className="contentBottom">
            <nav>
              <ul className="text-2xl ">
                {links.map((navLinks) => {
                  const { id, href, text } = navLinks;
                  return (
                    <li key={id}>
                      <a href={href}>{text}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
