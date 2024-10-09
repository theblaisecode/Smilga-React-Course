import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItem";
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch()

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          
          <h4 className="empty-cart">is currently empty.</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <h2>Your Bag</h2>

      <div className="container">
        {cartItems.map((items) => {
          return <CartItems key={items.id} {...items} />;
        })}
      </div>

      <footer>
        <hr />

        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>

        <button className="btn clear-btn" onClick={() => dispatch(clearCart)}>clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
