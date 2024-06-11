function GroceryList({ isList, deleteItem }) {
  return (
    <div className="groceryList">
      {isList.map((item, index) => {
        console.log(item, index);
        return (
          <div key={index}>
            <input type="checkbox" name="" id="" />
            <p>{item}</p>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default GroceryList;
