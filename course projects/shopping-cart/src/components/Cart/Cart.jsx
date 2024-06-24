import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import cartItems from "../../data";

function Cart() {
  return (
    <div className="shoppingCart">
      <div className="container">
        <div className="cartContent">
          <div className="cartTitle">
            <h1>Your Bag</h1>

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
                        <p className="price">{price}</p>
                        <button>remove</button>
                      </div>
                    </div>

                    <div className="amount">
                      <IoIosArrowUp />
                      <p className="amount">{amount}</p>
                      <IoIosArrowDown />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
