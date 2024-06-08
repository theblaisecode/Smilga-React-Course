import { useState } from "react";

function Form() {
  const [list, setList] = useState([])
  const [color, setColor] = useState({
    shade: "#87ae73",
    colorShade: ""
  });

  console.log(color)

  const changeColor = (e) => {
    setColor({
      [e.target.name]: e.target.value
    })
  };

  const generatePalette = (e) => {
    e.preventDefault()
    setList(color)
    console.log(color.colorShade)
  }

  return (
    <form action="" onSubmit={generatePalette}>
      <h4>Generate Palette</h4>
      <input
        type="color"
        name="colorShade"
        id="colorShade"
        value={color.shade || color.colorShade}
        onChange={changeColor}
      />

      <input
        type="text"
        name="colorShade"
        id="colorShade"
        value={color.colorShade}
        placeholder={color.shade}
        onChange={changeColor}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
