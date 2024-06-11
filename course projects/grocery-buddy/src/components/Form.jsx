function Form({ isGrocery, getDetails, submitForm }) {
  return (
    <form action="" onSubmit={submitForm}>
      <h4>Grocery Bud</h4>
      <div>
        <input
          type="text"
          name="groceryItem"
          id="groceryItem"
          value={isGrocery.groceryItem}
          onChange={getDetails}
        />
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
}

export default Form;
