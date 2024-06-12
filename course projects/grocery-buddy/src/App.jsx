import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";

function App() {
  // Default shopping list
  const [isList, setIsList] = useState([
    "Pet goat",
    "Tesla",
    "Japanese Visa",
    "Mangoes",
    "Chongqing City",
    "Tomatoe",
    "The Moon",
  ]);

  // Input
  const [isGrocery, setIsGrocery] = useState({
    groceryItem: "",
  });

  // checkbox state
  const [isChecked, setIsChecked] = useState({});

  // Get info from the input
  const getDetails = (e) => {
    setIsGrocery({
      [e.target.name]: e.target.value,
    });
  };

  // If checkbox is checked
  function checkedBox(index) {
    setIsChecked((prevChecked) => ({
      ...prevChecked,
      [index]: !prevChecked[index],
    }));
  }

  // Add Item to shopping list
  const submitForm = (e) => {
    e.preventDefault();

    // Error popup if input is empty
    if (isGrocery.groceryItem === "") {
      toast.error("Please enter an item", {
        position: "top-center",
      });
      return;
    }

    // Add new item to shopping list
    setIsList((prevList) => {
      return [...prevList, isGrocery.groceryItem];
    });

    // Successfully added to list popup
    toast.success("Item added to the list!", {
      position: "top-center",
    });

    // Clear input after every addition to list
    setIsGrocery({ groceryItem: "" });
  };

  // Delete item from list
  const deleteItem = (index) => {
    // Delete item
    setIsList((isPrevList) =>
      isPrevList.filter((item, remove) => remove !== index)
    );

    // Set checked state to not automatically add to the next item when the top item is deleted
    setIsChecked((prevChecked) => {
      const newChecked = {};
      for (let i = 0; i < isList.length; i++) {
        if (i < index) {
          newChecked[i] = prevChecked[i];
        } else if (i > index) {
          newChecked[i - 1] = prevChecked[i];
        }
      }
      return newChecked;
    });

    // Deleted item popup
    toast.info("Item Deleted", {
      position: "top-center",
    });
  };

  return (
    <main>
      <Form
        isGrocery={isGrocery}
        getDetails={getDetails}
        submitForm={submitForm}
      />

      {isList.length === 0 ? (
        <h2>No Items Added</h2>
      ) : (
        <GroceryList
          isList={isList}
          deleteItem={deleteItem}
          isChecked={isChecked}
          checkedBox={checkedBox}
        />
      )}

      {/* popup */}
      <ToastContainer />
    </main>
  );
}

export default App;
