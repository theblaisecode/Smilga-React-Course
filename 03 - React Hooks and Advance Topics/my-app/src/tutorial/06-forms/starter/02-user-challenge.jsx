import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [userData, setUserData] = useState(data);
  const [formInput, setFormInput] = useState({
    userName: "",
  });

  const getFormDetails = (e) => {
    // Show input value
    setFormInput({
      [e.target.name]: e.target.value,
    });
  };

  const formDetails = (e) => {
    e.preventDefault();

    // Empty form input message
    if (!formInput.userName) {
      alert("Please enter a name");
      return;
    }

    // Add new users
    setUserData((prevUserData) => {
      return [
        ...prevUserData,
        { id: prevUserData.length + 1, name: formInput.userName },
      ];
    });

    // Clear input after form submission
    setFormInput({ userName: "" });
  };

  function Users() {
    return (
      <div className="allUsers">
        {userData.map((item) => {
          const { id, name } = item;
          return (
            <div className="user" key={id}>
              <p>{name}</p>
              <button className="btn" onClick={() => deleteUser(id)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  const deleteUser = (id) => {
    setUserData((prevUserData) =>
      prevUserData.filter((item) => item.id !== id)
    );
  };

  return (
    <div>
      <form className="form" onSubmit={formDetails}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="userName" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="userName"
            name="userName"
            value={formInput.userName}
            onChange={getFormDetails}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      {/* render users below */}
      <div className="form">
        <h4>All Users</h4>
        <Users deleteUser={deleteUser} />
      </div>
    </div>
  );
};

export default UserChallenge;
