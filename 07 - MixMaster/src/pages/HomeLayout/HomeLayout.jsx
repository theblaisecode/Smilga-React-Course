import { Link } from "react-router-dom";
import "./HomeLayout.css";

function HomeLayout() {
  return (
    <section id="homeLayout">
      <h1>HomeLayout</h1>
      <Link to="/about">About Page</Link>
      <Link to="/cocktail">Cocktail Page</Link>
    </section>
  );
}

export default HomeLayout;
