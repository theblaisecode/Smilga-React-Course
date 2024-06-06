// This code covers Class 25 - 30

import { useEffect, useState } from "react";
const url = "https://api.github.com/users/theblaisecode";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await res.json();
        setUser(data);
        console.log(data, res);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    }
    getUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There was an error...</h2>;
  }

  const { avatar_url, name, company, bio } = user;

  return (
    <>
      <h2>Fetch Data </h2>
      <div>
        <img
          src={avatar_url}
          alt={name}
          style={{ width: "10rem", borderRadius: "2rem", margin: "1rem 0" }}
        />
        <h2>{name}</h2>
        <h4>Works at {company}</h4>
        <p>{bio}</p>
      </div>
    </>
  );
};
export default MultipleReturnsFetchData;
