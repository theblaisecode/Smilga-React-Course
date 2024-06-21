import { useGlobalContext } from "./GlobalContext";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const {isMobile, setIsMobile, openCloseSidebar} = useGlobalContext()
  return (
    <>
      <Navbar isMobile={isMobile} openCloseSidebar={openCloseSidebar} />
    </>
  );
}

export default App;
