import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <section id="about">
      <h1>About</h1>
      <Link to="/">Home Page</Link>
      <Link to="/cocktail">Cocktail Page</Link>
    </section>
  );
}

export default About;
