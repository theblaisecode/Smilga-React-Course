import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";
import { useGlobalContext } from "./components/GlobalContext";

function App() {
  const {
    isMobile,
    setIsMobile,
    isModal,
    setIsModal,
    switchMobile,
    toggleModal,
  } = useGlobalContext();
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
