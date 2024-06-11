import { useState } from "react";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";

function App() {
  const [isList, setIsList] = useState([]);
  const [isGrocery, setIsGrocery] = useState({
    groceryItem: "",
  });

  const getDetails = (e) => {
    setIsGrocery({
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    setIsList((prevList) => {
      return [...prevList, isGrocery.groceryItem];
    });
  };

  console.log(isList);

  const deleteItem = (index) => {
    setIsList(isPrevList => isPrevList.filter(item => item.id !== index))
  }

  return (
    <main>
      <Form
        isGrocery={isGrocery}
        getDetails={getDetails}
        submitForm={submitForm}
      />

      <GroceryList isList={isList} deleteItem={deleteItem} />
    </main>
  );
}

export default App;
