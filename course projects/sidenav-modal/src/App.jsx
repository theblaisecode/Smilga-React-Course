import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isModal, setIsModal] = useState(false);

  function switchMobile() {
    setIsMobile((prevIsMobile) => !prevIsMobile);
  }

  function toggleModal() {
    setIsModal((prevIsModal) => !prevIsModal);
  }

  return (
    <>
      <aside>
        <Navbar isMobile={isMobile} switchMobile={switchMobile} />
      </aside>

      <main>
        <Modal isModal={isModal} toggleModal={toggleModal} />
      </main>
    </>
  );
}

export default App;
