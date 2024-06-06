import { useState } from "react";

const UseStateGotcha = () => {
  const [increase, setIncrease] = useState(0);
  console.log(increase);

  function handleClick() {
    return setIncrease((prevIncrease) => prevIncrease + 1);
  }
  console.log(increase);

  return (
    <>
      <h2>useState "gotcha"</h2>
      <div>
        <h1>{increase}</h1>
        <button className="btn" onClick={handleClick}>
          Increase
        </button>
      </div>
    </>
  );
};

export default UseStateGotcha;
