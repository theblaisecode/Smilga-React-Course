import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  }

  return (
    <div className="container">
      <h2>useState error example</h2>
      <h1>{count}</h1>
      <div>
        <button className="btn" onClick={handleClick}>
          Increase Count
        </button>
      </div>
    </div>
  );
};

export default ErrorExample;
