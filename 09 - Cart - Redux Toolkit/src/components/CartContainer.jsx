import { useSelector } from "react-redux";
import CartItems from "./CartItem";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);

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

        <button className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
