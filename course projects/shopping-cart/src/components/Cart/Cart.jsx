import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import "./Cart.css";
import { useGlobalContext } from "../../Reducer/GlobalContext";
import { calcTotals } from "../../Reducer/cartMath";

function Cart() {
  const {
    isCart,
    removeItem,
    clearCart,
    resetCart,
    incrementItem,
    decrementItem,
  } = useGlobalContext();

  const { allCost } = calcTotals(isCart);

  if (isCart.length < 1) {
    return (
      <div className="shoppingCart">
        <div className="container">
          <div className="cartContent">
            <div className="cartTitle">
              <h1>Your Bag</h1>
            </div>

            <div className="bagItems">
              <p className="empty">is currently empty</p>
            </div>
          </div>

          <footer>
            <div className="footerContent">
              <div className="total"></div>
              <button className="footerButton" onClick={resetCart}>
                Reset Cart
              </button>
            </div>
          </footer>
        </div>
      </div>
    );
  }

  return (
    <div className="shoppingCart">
      <div className="container">
        <div className="cartContent">
          <div className="cartTitle">
            <h1>Your Bag</h1>
          </div>

          <ul className="bagItems">
            {isCart.map((items) => {
              const { id, title, price, img, amount } = items;
              return (
                <li key={id}>
                  <div className="info">
                    <div className="img">
                      <img src={img} alt={title} />
                    </div>

                    <div className="itemDetails">
                      <p className="title">{title}</p>
                      <p className="price">${price}</p>
                      <button onClick={() => removeItem(id)}>remove</button>
                    </div>
                  </div>

                  <div className="amount">
                    <button onClick={() => incrementItem(id)}>
                      <IoIosArrowUp />
                    </button>
                    <p className="amount">{amount}</p>
                    <button onClick={() => decrementItem(id)}>
                      <IoIosArrowDown />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <footer>
          <div className="footerContent">
            <div className="total">
              <p>Total</p>
              <p className="bagAmount">${allCost.toFixed(2)}</p>
            </div>

            <button className="footerButton" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Cart;
