function GroceryList({ isList, deleteItem, isChecked, checkedBox }) {
  return (
    <div className="groceryList">
      {isList.map((item, index) => {
        return (
          <div key={index} className="listItem">
            <div>
              <input
                type="checkbox"
                name={`isDone-${index}`}
                id={`isDone-${index}`}
                checked={!!isChecked[index]}
                onChange={() => checkedBox(index)}
              />

              <label
                htmlFor={`isDone-${index}`}
                className={isChecked[index] ? "isDone line" : "isDone"}>
                {item}
              </label>
            </div>

            <button onClick={() => deleteItem(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default GroceryList;
