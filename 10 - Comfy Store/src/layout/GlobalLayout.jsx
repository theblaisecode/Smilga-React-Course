import { Outlet } from "react-router-dom";
import UserTab from "../components/UserTab";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function GlobalLayout() {
  return (
    <>
      <UserTab />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default GlobalLayout;
