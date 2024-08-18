import CocktailListWrapper from "./CocktailList";

function CocktailList({ drinks }) {
  if (!drinks) {
    return (
      <CocktailListWrapper>
        <h4>No matching cocktails found...</h4>
      </CocktailListWrapper>
    );
  }

  return (
    <CocktailListWrapper>
      <h2>CocktailList</h2>
      <p>ll</p>
    </CocktailListWrapper>
  );
}

export default CocktailList;
