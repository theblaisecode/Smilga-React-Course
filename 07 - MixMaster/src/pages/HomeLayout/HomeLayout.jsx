import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
import LayoutWrapper from "./HomeLayout.js";

function HomeLayout() {
  return (
    <LayoutWrapper>
      <Navbar />
      <Outlet />
    </LayoutWrapper>
  );
}

export default HomeLayout;
