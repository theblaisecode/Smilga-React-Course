import { useCallback, useEffect, useState } from "react";

const url = "https://api.github.com/users";

const GetUserData = () => {
  const [users, setUsers] = useState([]);

  const getUser = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

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
export default GetUserData;
