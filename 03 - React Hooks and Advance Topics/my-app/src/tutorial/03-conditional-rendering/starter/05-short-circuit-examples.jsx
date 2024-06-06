import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState();
  // truthy
  const [name, setName] = useState("Blaise");
  const [user, setUser] = useState({ name: "Amaka" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <h2>short circuit - examples</h2>
      {/* <h4>{text || name || "Default Value"}</h4> */}
      {text && (
        <div>
          <h4>Gomenasai, {name}.</h4>
        </div>
      )}
      {/*{!text && (
        <div>
          <h4>Gomenasai, {name}.</h4>
        </div>
      )} */}
      {user && <SomeComponent name={user.name} />}

      <h2 style={{ margin: "1rem 0" }}>Ternary Operator </h2>
      <button className="btn">{isEditing ? "Edit" : "Add"}</button>
      {user ? (
        <div>
          <h4>Hello there, user {user.name}</h4>
        </div>
      ) : (
        <div>
          <h4>Please, login</h4>
        </div>
      )}
    </>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h4>Gomenasai, {name}.</h4>
    </div>
  );
};

export default ShortCircuitExamples;
