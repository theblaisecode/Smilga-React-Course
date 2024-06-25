import { FaCartPlus } from "react-icons/fa";
import "./Navbar.css";
import { useGlobalContext } from "../../Reducer/GlobalContext";

function Navbar() {
  const { isCart } = useGlobalContext();
  const totalItems = isCart.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <nav>
      <div className="container">
        <div className="navContent">
          <div className="logo">
            <a href="">UseReducer()</a>
          </div>

          <div className="cart">
            <span className="cartItems">{totalItems}</span>
            <FaCartPlus />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
