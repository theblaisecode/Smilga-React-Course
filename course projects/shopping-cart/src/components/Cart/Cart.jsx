import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import cartItems from "../../data";
import "./Cart.css";

function Cart() {
  return (
    <div className="shoppingCart">
      <div className="container">
        <div className="cartContent">
          <div className="cartTitle">
            <h1>Your Bag</h1>
          </div>

          <ul className="bagItems">
            {cartItems.map((items) => {
              console.log(items);
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
                      <button>remove</button>
                    </div>
                  </div>

                  <div className="amount">
                    <button>
                      <IoIosArrowUp />
                    </button>
                    <p className="amount">{amount}</p>
                    <button>
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
              <p className="bagAmount">$2199.96</p>
            </div>

            <button className="footerButton">Clear Cart</button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Cart;
