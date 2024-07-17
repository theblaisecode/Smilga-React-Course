import { useState } from "react";
import "./Form.css";

function Form({ isDarkMode, onSearch }) {
  const [formInput, setFormInput] = useState({
    searchName: "",
  });

  function formText(e) {
    setFormInput({ [e.target.name]: e.target.value });
  }

  function searchImage(e) {
    e.preventDefault();
    onSearch(formInput.searchName);

    console.log("Searching for:", formInput.searchName);
  }

  return (
    <section
      className="form"
      style={{ backgroundColor: isDarkMode ? "#333" : "#fff" }}>
      <div className="container">
        <div className="formContent">
          <h1>Unsplash Image Gen</h1>

          <form onSubmit={searchImage}>
            <input
              type="text"
              name="searchName"
              value={formInput.searchName}
              id="searchName"
              placeholder="Possum"
              onChange={formText}
              style={{ color: isDarkMode ? "#fff" : "#333" }}
            />

            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
