import { ChevronDown, ChevronUp } from "../icons";
import { removeItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItems = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
          }}>
          remove
        </button>
      </div>

      <div>
        <button className="amount-btn">
          <ChevronUp />
        </button>

        <p className="amount">{amount}</p>

        <button className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </div>
  );
};

export default CartItems;
