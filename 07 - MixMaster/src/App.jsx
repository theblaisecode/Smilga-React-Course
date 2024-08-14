import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>Home Page</h2>,
  },
  {
    path: "/about",
    element: (
      <div>
        <h2>About Page</h2>
      </div>
    ),
  },
  {
    path: "/contact",
    element: <h2>Contact Us Page</h2>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
