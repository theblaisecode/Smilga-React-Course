import "./Modal.css";

function Modal({ isModal, toggleModal }) {
  return (
    <div className="modal">
      <button onClick={toggleModal}>Show Modal</button>

      <div className={!isModal ? "modalContent" : "modalContent active"}>
        <div className="modalCard">
          
          <button onClick={() => toggleModal()}>
            <i className="fa-solid fa-xmark fa-xl"></i>
          </button>

          <div className="modalInfo">
            <h4>Hello, this is Blaise.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              placeat accusamus numquam nulla ab aliquam aperiam. Delectus
              dolore iure pariatur voluptas beatae, perferendis sunt sed!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
