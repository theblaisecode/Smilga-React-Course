import { useState } from "react";
import ColorList from "../components/ColorList";
import Form from "../components/Form";
import Values from "values.js";

function App() {
  const [allColors, setAllColors] = useState(new Values("#87ae73").all(5));
  const [color, setColor] = useState({
    shade: "#87ae73",
    colorShade: "",
  });

  const changeColor = (e) => {
    setColor({
      [e.target.name]: e.target.value,
    });
  };

  const generatePalette = (e) => {
    e.preventDefault();
    setAllColors(new Values(color.colorShade).all(5));
  };

  return (
    <main>
      <Form
        color={color}
        generatePalette={generatePalette}
        changeColor={changeColor}
      />

      <div className="palette">
        {allColors.map((eachColor, index) => {
          console.log(eachColor);
          return (
            <div
              className="eachColor"
              key={index}
              style={{
                background: eachColor.hexString(),
                color: eachColor.type === "shade" ? "white" : "black",
              }}>
              <p>{eachColor.hexString()}</p>
              <p>
                {eachColor.type} {eachColor.weight}%
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
