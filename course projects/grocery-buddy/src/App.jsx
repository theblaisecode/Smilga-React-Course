import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";

function App() {
  const [isList, setIsList] = useState([
    "Tomatoe",
    "Tesla",
    "Japanese Visa",
    "Mangoes",
    "entire chongqing city",
    "The Moon",
  ]);
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

    if (isGrocery.groceryItem === "") {
      toast.error("Please enter an item", {
        position: "top-center",
      });
      return;
    }

    setIsList((prevList) => {
      return [...prevList, isGrocery.groceryItem];
    });

    toast.success("Item added to the list!", {
      position: "top-center",
    });
  };

  console.log(isList);

  const deleteItem = (index) => {
    console.log(index);
    setIsList((isPrevList) =>
      isPrevList.filter((item, remove) => {
        return remove !== index;
      })
    );
  };

  return (
    <main>
      <Form
        isGrocery={isGrocery}
        getDetails={getDetails}
        submitForm={submitForm}
      />

      <ToastContainer />

      {isList.length === 0 ? (
        <h2>No Items Added</h2>
      ) : (
        <GroceryList isList={isList} deleteItem={deleteItem} />
      )}
    </main>
  );
}

export default App;
