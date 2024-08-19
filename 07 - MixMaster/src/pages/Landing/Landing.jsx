import { useLoaderData } from "react-router-dom";
import axios from "axios";
import HomeWrapper from "./Landing";
import CocktailList from "../../components/CocktailList/CocktailList.jsx";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

  return { drinks: response.data.drinks, searchTerm };
};

function Landing() {
  const { drinks, searchTerm } = useLoaderData();

  return (
    <HomeWrapper>
      <CocktailList drinks={drinks}/>
    </HomeWrapper>
  );
}

export default Landing;
