import { useGlobalContext } from "./Reducer/GlobalContext";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";

function App() {
  // const {
  //   isCart,
  //   setIsCart,
  //   removeItem,
  //   clearCart,
  //   state,
  //   dispatch,
  //   reducer,
  //   defaultState,
  // } = useGlobalContext();

  return (
    <main>
      <Navbar />
      <Cart />
    </main>
  );
}

export default App;
