import { useSelector } from "react-redux";
import CartItemsList from "../components/cart/CartItemsList";
import CartTotals from "../components/cart/CartTotals";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

function Cart() {
  const user = null;
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return <Heading text="Your cart is empty" />;
  }

  return (
    <section className="cart px-4">
      <Heading text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>

        <div className="lg:col-span-4">
          <CartTotals />
        </div>
      </div>
    </section>
  );
}
export default Cart;
