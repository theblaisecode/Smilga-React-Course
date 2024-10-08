import { ChevronDown, ChevronUp } from "../icons";

const CartItems = ({ id, img, title, price, amount }) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
    </div>
  );
};

export default CartItems;
