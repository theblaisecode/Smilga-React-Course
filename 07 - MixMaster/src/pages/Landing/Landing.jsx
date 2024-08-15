import { useLoaderData } from "react-router-dom";
import HomeWrapper from "./Landing.jsx";

export const loader = async () => {
  return "something";
};

function Landing() {
  const data = useLoaderData();
  console.log(data);

  return (
    <HomeWrapper>
      <h3>Landing</h3>
    </HomeWrapper>
  );
}

export default Landing;
