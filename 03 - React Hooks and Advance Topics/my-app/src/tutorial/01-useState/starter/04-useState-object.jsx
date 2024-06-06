import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Blaise",
    age: 25,
    hobby: "Doing nothing",
  });
  function nextPerson() {
    setPerson({ ...person, name: "Qí Yuè (祁 月）" });
  }

  const { name, age, hobby } = person;
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoys: {hobby}</h4>

      <button className="btn" onClick={nextPerson}>
        Next Person
      </button>
    </>
  );
};

export default UseStateObject;
