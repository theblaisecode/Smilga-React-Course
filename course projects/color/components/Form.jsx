import { useState } from "react";

function Form() {
  const [color, setColor] = useState({
    shade: "#87ae73",
    colorShade: "",
    colorCode: ""
  });

  console.log(color)

  const changeColor = (e) => {
    setColor({
      [e.target.name]: e.target.value
    })
  };

  return (
    <form action="">
      <h4>Generate Palette</h4>
      <input
        type="color"
        name="colorShade"
        id="colorShade"
        value={color.shade || color.colorShade || color.colorCode}
        onChange={changeColor}
      />

      <input
        type="text"
        name="colorCode"
        id="colorCode"
        value={color.colorCode || color.colorShade}
        placeholder={color.shade}
        onChange={changeColor}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
