import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";

function App() {
  const [isList, setIsList] = useState([
    "Pet goat",
    "Tesla",
    "Japanese Visa",
    "Mangoes",
    "Chongqing City",
    "Tomatoe",
    "The Moon",
  ]);

  const [isGrocery, setIsGrocery] = useState({
    groceryItem: "",
  });

  const [isChecked, setIsChecked] = useState({});

  const getDetails = (e) => {
    setIsGrocery({
      [e.target.name]: e.target.value,
    });
  };

  function checkedBox(index) {
    console.log(index);
    setIsChecked((prevChecked) => ({
      ...prevChecked,
      [index]: !prevChecked[index],
    }));
  }

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

    setIsGrocery({ groceryItem: "" });
  };

  console.log(isList);

  const deleteItem = (index) => {
    setIsList((isPrevList) =>
      isPrevList.filter((item, remove) => remove !== index)
    );

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

      <ToastContainer />
    </main>
  );
}

export default App;
