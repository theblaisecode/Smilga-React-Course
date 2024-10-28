import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalLayout from "./layout/GlobalLayout";
import Home, { homeLoader } from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Error from "./pages/Error";
import SingleProduct, {
  singleProductLoader,
} from "./components/product/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "order",
        element: <Orders />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
