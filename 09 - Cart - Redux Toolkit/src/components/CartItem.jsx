import { ChevronDown, ChevronUp } from "../icons";

const CartItems = ({ id, img, title, price, amount }) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>

        <h4 className="item-price">${price}</h4>

        <buttom className="remove-btn">remove</buttom>
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
