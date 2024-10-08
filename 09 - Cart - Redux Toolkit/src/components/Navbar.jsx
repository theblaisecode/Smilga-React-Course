import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

function Navbar() {
  console.log(useSelector((store) => console.log(store)));
  /*
    {cart: {…}}cart: amount: 0cartItems: []length: 0[[Prototype]]: Array(0)isLoading: truetotal: 0[[Prototype]]: Object[[Prototype]]: Object
  */

  // Console logging store returns an object and amount is a property in that obtect from cartSLice.jsx 

  const { amount } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux ToolKit</h3>

        <div className="nav-container">
          <CartIcon />

          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;