import useCustom from "./useCustom";
const url = "https://api.github.com/users/theblaisecode";

const FetchData = () => {
  const { isLoading, isError, user } = useCustom(url);
  
  // order matters
  // don't place user JSX before loading or error

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img
        style={{ width: "100px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default FetchData;
