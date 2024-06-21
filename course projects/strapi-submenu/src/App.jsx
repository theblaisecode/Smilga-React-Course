import { useGlobalContext } from "./GlobalContext";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const {isMobile, setIsMobile, openCloseMenu} = useGlobalContext()
  return (
    <>
      <Navbar isMobile={isMobile} openCloseMenu={openCloseMenu} />
    </>
  );
}

export default App;
