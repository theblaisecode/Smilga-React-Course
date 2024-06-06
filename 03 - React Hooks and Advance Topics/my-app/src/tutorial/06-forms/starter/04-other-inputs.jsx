import { useState } from "react";
const frameworks = ["React", "Angular", "Vue", "Svelte"];

const OtherInputs = () => {
  const [formInput, setFormInput] = useState({
    isShipping: true,
    framework: "",
  });

  const getFormDetails = (e) => {
    const { name, type, checked, value } = e.target;
    setFormInput((prevFormInput) => {
      return {
        ...prevFormInput,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formInput);
  };

  return (
    <div>
      <form className="form" onSubmit={submitForm}>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="isShipping"> Free Shipping </label>
          <input
            type="checkbox"
            name="isShipping"
            id="isShipping"
            checked={formInput.isShipping}
            onChange={getFormDetails}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={formInput.framework}
            onChange={getFormDetails}>
            <option value="">-- Choose Option --</option>
            {frameworks.map((options) => {
              return (
                <option value={options} key={options}>
                  {options}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};

export default OtherInputs;
