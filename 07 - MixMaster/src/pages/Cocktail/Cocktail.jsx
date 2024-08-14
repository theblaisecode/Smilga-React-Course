import { Link } from "react-router-dom";
import "./Cocktail.css";

function Cocktail() {
  return (
    <section id="cocktail">
      <h1>Cocktail</h1>
      <Link to="/">Home Page</Link>
      <Link to="/about">About Page</Link>
    </section>
  );
}

export default Cocktail;
