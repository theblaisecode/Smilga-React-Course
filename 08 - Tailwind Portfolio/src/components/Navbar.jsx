import { links } from "../data";

function Navbar() {
  return (
    <header className="bg-emerald-100">
      <div className="container py-3">
        <div className="headerContent flex flex-col justify-center items-center gap-y-3 sm:justify-between sm:flex-row sm:gap-x-16 sm:items-center sm:py-4">
          <div className="contentTop">
            <a href="#home" className="text-3xl font-bold">
              Web<span className="text-emerald-500">Dev</span>
            </a>
          </div>

          <div className="contentBottom">
            <nav>
              <ul className="flex gap-x-5">
                {links.map((navLinks) => {
                  const { id, href, text } = navLinks;
                  return (
                    <li key={id}>
                      <a
                        href={href}
                        className="capitalize tracking-wide text-lg hover:text-emerald-600 duration-300">
                        {text}
                      </a>
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
