import { useGlobalContext } from "./GlobalContext";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { isMobile, isShowSubMenu, showSubMenu, openCloseMenu } =
    useGlobalContext();
  return (
    <>
      <Navbar
        isMobile={isMobile}
        openCloseMenu={openCloseMenu}
        isShowSubMenu={isShowSubMenu}
      />
      <Hero />
    </>
  );
}

export default App;
