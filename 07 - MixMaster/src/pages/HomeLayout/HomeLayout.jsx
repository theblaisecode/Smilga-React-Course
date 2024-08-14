import { Outlet } from "react-router-dom";
import "./HomeLayout.css";
import Navbar from "../../components/Navbar";

function HomeLayout() {
  return (
    <section id="homeLayout">
      <Navbar />
      <Outlet />
    </section>
  );
}

export default HomeLayout;
