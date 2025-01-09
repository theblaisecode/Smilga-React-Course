import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text?: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    url: "some url 1",
    text: "some text 1",
  },
  {
    id: 2,
    url: "some url 2",
    text: "some text 2",
  },
  {
    id: 3,
    url: "some url 3",
    text: "some text 3",
  },
];

function Component(): JSX.Element {
  const [text, setText] = useState("tomatoJos");
  const [number, setNumber] = useState(123);
  const [list, setList] = useState<(string | number)[]>([]);
  const [link, setLink] = useState<Link[]>(navLinks);

  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setText("TypeScript");
          setNumber(456);
          setList([text, " ", number]);
          setLink([...link, { id: 123, url: "olla", text: "olla" }]);
        }}>
        Click Me
      </button>
      <p>{text}</p>
      <p>{number}</p>
      <p>{list}</p>
      <ul>
        {link.map((item) => {
          return (
            <li key={item.id}>{`ID: ${item.id} ${item.url} ${item.text}`}</li>
          );
        })}
      </ul>
    </div>
  );
}
export default Component;
