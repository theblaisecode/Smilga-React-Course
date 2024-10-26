import { Outlet } from "react-router-dom";
import UserTab from "../components/UserTab";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function GlobalLayout() {
  return (
    <>
      <UserTab />
      <Navbar />
      <section className="align-element py-20">
        <Outlet />
      </section>
      <Footer />
    </>
  );
}

export default GlobalLayout;
