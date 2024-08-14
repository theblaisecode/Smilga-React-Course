import { Outlet } from "react-router-dom";
import "./HomeLayout.css";

function HomeLayout() {
  return (
    <section id="homeLayout">
      <h1>TheBlaiseCode</h1>
      <Outlet />
    </section>
  );
}

export default HomeLayout;
