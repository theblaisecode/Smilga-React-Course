import { Person } from "./Person";
import { people } from "../../../data";

function List() {
  return (
    <div>
      {people.map((item) => {
        return <Person key={item.id} {...item} />;
      })}
    </div>
  );
}

export default List;
