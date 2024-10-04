import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux ToolKit</h3>

        <div className="nav-container">
          <CartIcon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
