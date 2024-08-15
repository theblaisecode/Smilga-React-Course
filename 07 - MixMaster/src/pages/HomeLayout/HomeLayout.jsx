import { Outlet } from "react-router-dom";
import "./HomeLayout.js";
import Navbar from "../../components/Navbar/Navbar.jsx";

function HomeLayout() {
  return (
    <section id="homeLayout">
      <Navbar />
      <Outlet />
    </section>
  );
}

export default HomeLayout;
