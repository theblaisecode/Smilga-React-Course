import { useState } from "react";

const ToggleChallenge = () => {
  const [display, setDisplay] = useState(false);

  const handleToggle = () => {
    setDisplay((prevDisplay) => !prevDisplay);
  };
  console.log(display);

  return (
    <>
      <h2>toggle challenge</h2>
      <button onClick={handleToggle} className="btn">
        Toggle
      </button>
      {display && (
        <h4 style={{ margin: "2rem 0" }} className="alert alert-danger">
          Hello World!
        </h4>
      )}
    </>
  );
};

export default ToggleChallenge;
