import { useState } from "react";
import logo from "../img/TheBlaiseCodewhite.png"
import { links, social } from "../data";

function Navbar() {
  const [showLink, setShowLink] = useState(false);
  console.log(social)
  return (
    <nav>
      <div className="contsiner">
        <a href="#" className="logo">
          <img src={logo} alt="" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
