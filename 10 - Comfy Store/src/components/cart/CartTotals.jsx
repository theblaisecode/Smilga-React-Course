import { useSelector } from "react-redux";
import { formatPrice } from "../../utils";

function CartTotals() {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
      </div>
    </div>
  );

  return <h1 className="text-3xl">CartTotals</h1>;
}
export default CartTotals;
