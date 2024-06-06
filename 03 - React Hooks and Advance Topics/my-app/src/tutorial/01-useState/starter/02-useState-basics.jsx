import { useState } from "react";

function UseStateBasics() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  }

  return (
    <div className="container">
      <h2>useState basics</h2>
      <h4>Count increased by {count}</h4>
      <div>
        <button className="btn" onClick={handleClick}>
          Increase Count
        </button>
      </div>
    </div>
  );
}

export default UseStateBasics;
