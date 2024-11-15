import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalLayout from "./layout/GlobalLayout";
import Home, { homeLoader } from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login, { loginAction } from "./pages/Auth/Login";
import Register, { registerAction } from "./pages/Auth/Register";
import Checkout, { checkoutLoader } from "./pages/Checkout";
import Orders from "./pages/Orders";
import Error from "./pages/Error";
import SingleProduct, {
  singleProductLoader,
} from "./components/product/SingleProduct";
import { productLoader } from "./pages/Products";

import { store } from "./reduxToolkit/store.js";
import { checkoutFormAction } from "./components/checkout/CheckoutForm.jsx";

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
        loader: productLoader,
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
        loader: checkoutLoader(store),
        action: checkoutFormAction(store)
      },
      {
        path: "order",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
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
