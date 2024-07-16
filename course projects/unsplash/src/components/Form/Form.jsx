import { useState } from "react";

function Form() {
  const [formInput, setFormInput] = useState({
    searchName: "",
  });

  function formText(e) {
    setFormInput({ [e.target.name]: e.target.value });
    console.log(formInput);
  }

  function searchImage() {
    console.log("first");
  }

  return (
    <section className="form">
      <div className="container">
        <h1>Unsplash Image Gen</h1>

        <form onSubmit={searchImage}>
          <input
            type="text"
            name="searchName"
            value={formInput.searchName}
            id="searchName"
            placeholder=""
            onChange={formText}
          />

          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
}

export default Form;
