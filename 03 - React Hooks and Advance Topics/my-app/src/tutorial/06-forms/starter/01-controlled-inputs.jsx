import { useState } from "react";

const ControlledInputs = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
  }); 

  const formDetails = (e) => {
    const { name, value } = e.target;
    setFormInput((prevFormInput) => {
      return {
        ...prevFormInput,
        [name]: value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formInput);
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <h4>Controlled Inputs</h4>

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formInput.name}
          className="form-input"
          onChange={formDetails}
        />
      </div>

      <div className="form-row">
        <label htmlFor="email" className="form-label">
          name
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formInput.email}
          className="form-input"
          onChange={formDetails}
        />
      </div>

      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
};

export default ControlledInputs;
