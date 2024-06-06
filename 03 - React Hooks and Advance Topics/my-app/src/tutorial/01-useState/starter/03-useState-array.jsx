import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  function removeItem(id) {
    console.log(id)
    setPeople(prevPeople => prevPeople.filter(item => item.id !== id))
  }

  function clearAllItem() {
    setPeople([]);
  }

  const result = people.map((item) => {
    const { id, name } = item;
    return (
      <div key={id}>
        <h4>{name}</h4>
        <button type="button" className="btn" onClick={() => removeItem(id)}>
          Remove
        </button>
      </div>
    );
  });

  return (
    <>
      <h2>useState array example</h2>
      {result}
      <button
        style={{ marginTop: "2rem" }}
        className="btn"
        onClick={clearAllItem}>
        Clear All
      </button>
    </>
  );
};

export default UseStateArray;
