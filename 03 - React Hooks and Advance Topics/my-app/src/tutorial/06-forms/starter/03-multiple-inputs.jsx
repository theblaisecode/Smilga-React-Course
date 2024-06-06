import { useState } from "react";

const MultipleInputs = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  function formDetails(e) {
    const { name, value } = e.target;
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [name]: value,
      };
    });
  }

  function submitForm(e) {
    e.preventDefault();
    console.log(userInput);
    setUserInput({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
    <div>
      <form className="form" onSubmit={submitForm}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            name="name"
            id="name"
            value={userInput.name}
            onChange={formDetails}
          />
        </div>

        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            name="email"
            id="email"
            value={userInput.email}
            onChange={formDetails}
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            name="password"
            id="password"
            value={userInput.password}
            onChange={formDetails}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
