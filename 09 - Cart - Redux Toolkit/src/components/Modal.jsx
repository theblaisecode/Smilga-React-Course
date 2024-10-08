import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

function Modal() {
  const dispatch = useDispatch();

  return (
    <div className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>

        <div className="btn-container">
          <div
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}>
            Confirm
          </div>

          <div className="btn clear-btn" onClick={() => dispatch(closeModal())}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
