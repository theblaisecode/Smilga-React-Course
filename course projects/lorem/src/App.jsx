import { useState } from "react";
import { nanoid } from "nanoid";
import text from "./data";
import Paragraph from "./Paragraph";

function App() {
  const [paragraph, setParagraph] = useState(1);
  const [textData, setTextData] = useState([]);
  console.log(textData);

  const getNumOfPara = (e) => {
    const { value } = e.target;
    setParagraph(value);
    console.log(value);
  };

  const generate = (e) => {
    e.preventDefault();

    const id = nanoid();
    const sliced = text.slice(0, paragraph);

    setTextData(
      sliced.map((item, index) => {
        return <p key={index + id}>{item}</p>;
      })
    );
  };

  return (
    <main>
      <h4>Tired of boring Lorem Ipsum?</h4>
      <Paragraph
        paragraph={paragraph}
        getNumOfPara={getNumOfPara}
        generate={generate}
      />
      <div className="paragraphs">{textData}</div>
    </main>
  );
}

export default App;
