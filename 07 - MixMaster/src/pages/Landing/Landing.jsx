import { useLoaderData } from "react-router-dom";
import axios from "axios";
import HomeWrapper from "./Landing";
import CocktailList from "../../components/CocktailList/CocktailList.jsx";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

  return { drinks: response.data.drinks, searchTerm };
};

function Landing() {
  const { drinks, searchTerm } = useLoaderData();

  return (
    <HomeWrapper>
      <SearchForm searchTerm={searchTerm}/>
      <CocktailList drinks={drinks} />
    </HomeWrapper>
  );
}

export default Landing;
