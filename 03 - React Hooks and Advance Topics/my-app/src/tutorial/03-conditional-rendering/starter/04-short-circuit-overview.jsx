import { useState } from "react";

const ShortCircuitOverview = () => {
  const [isTrue, setIsTrue] = useState(2);
  const [isFalse, setIsFalse] = useState(0);

  const [text, setText] = useState("");
  const [name, setName] = useState("Blaise");

  // false, 0, "", null, undefined, NaN are all considered falsy
  // Everything else including objects and arrays are consideded truthy

  //  || returns the first truthy value it encounters or the last value if all are falsy.
  //  && returns the first falsy value it encounters or the last value if all are truthy.

  const codeExample =
    text || "Hey there 👋, I'm Blaise and I'm learning ReactJS";

  return (
    <>
      <h2>short circuit overview</h2>
      {isFalse && <h2>Hello</h2>}

      <h4>Falsy OR : {text || "Hello World!"}</h4>
      <h4>Falsy OR : {text && "Hello World!"}</h4>
      <h4>Truthy OR : {name || "Hello World!"}</h4>
      <h4>Truthy OR : {name && "Hello World!"}</h4>
      {codeExample}
    </>
  );
};
export default ShortCircuitOverview;
