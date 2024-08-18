import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import "./Cocktail.js";

function Cocktail() {
  const singleCocktailUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

  return (
    <section id="cocktail">
      <h3>Cocktail</h3>
    </section>
  );
}

export default Cocktail;
