import { useState } from "react";

function GroceryList({ isList, deleteItem }) {
  const [isChecked, setIsChecked] = useState({});

  function checkedBox(index) {
    console.log(index);
    setIsChecked((prevChecked) => ({
      ...prevChecked,
      [index]: !prevChecked[index],
    }));
  }
  console.log(isChecked);

  return (
    <div className="groceryList">
      {isList.map((item, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              name={`isDone-${index}`}
              id={`isDone-${index}`}
              checked={!!isChecked[index]}
              onChange={() => checkedBox(index)}
            />

            <label
              htmlFor={`isDone-${index}`}
              className={isChecked[index] ? "isDone line" : "isdone"}>
              {item}
            </label>

            <button onClick={() => deleteItem(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default GroceryList;
