import { useState, useEffect } from "react";

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("hello from first useEffect");
  }, [value]);

  useEffect(() => {
    console.log("hello from second useEffect");
  }, [secondValue]);

  return (
    <div>
      <h1>value : {value}</h1>
      <button
        className="btn"
        onClick={() => setValue((prevValue) => prevValue + 1)}>
        value
      </button>

      <h1 style={{ marginTop: "2rem" }}>second value : {secondValue}</h1>
      <button
        className="btn"
        onClick={() =>
          setSecondValue((prevSecondValue) => prevSecondValue + 1)
        }>
        second value
      </button>
    </div>
  );
};

export default MultipleEffects;
