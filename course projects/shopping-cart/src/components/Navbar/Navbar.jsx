import { FaCartPlus } from "react-icons/fa";
import "./Navbar.css";
import { useState } from "react";
import cartItems from "../../data";

function Navbar() {
  const [isCart, setIsCart] = useState(cartItems);
  
  return (
    <nav>
      <div className="container">
        <div className="navContent">
          <div className="logo">
            <a href="">UseReducer()</a>
          </div>

          <div className="cart">
            <span className="cartItems">{isCart.length}</span>
            <FaCartPlus />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
