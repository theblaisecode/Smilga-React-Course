import { useState } from "react";
import { data } from "../../../../data";
import NewPerson from "./NewPerson"
import List from "./List";

const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);

  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };
  
  return (
    <section>
      <NewPerson addPerson={addPerson} />
      <List people={people} />
    </section>
  );
};
export default LowerStateChallenge;
