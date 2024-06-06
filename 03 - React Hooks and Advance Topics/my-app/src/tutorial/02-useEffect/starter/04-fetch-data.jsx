import { useEffect, useState } from "react";
import "../../../style.css";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    getUser();
  }, []);

  return (
    <>
      <h2>fetch data example</h2>
      <ul className="users">
        {users.map((item) => {
          const { id, html_url, avatar_url, login } = item;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Github Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default FetchData;
