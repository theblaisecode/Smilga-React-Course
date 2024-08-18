import { useLoaderData } from "react-router-dom";
import axios from "axios";
import HomeWrapper from "./Landing";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  console.log(response);

  // return { drinks: response.data.drinks, searchTerm };
};

function Landing() {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);

  return (
    <HomeWrapper>
      <h3>Landing</h3>
    </HomeWrapper>
  );
}

export default Landing;
