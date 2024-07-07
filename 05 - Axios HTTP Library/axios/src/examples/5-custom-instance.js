import { useEffect } from "react";
import authCustomFetch from "../axios/custom";
import axios from "axios";

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const res1 = await authCustomFetch("react-store-products");
      console.log(res1);
      const res2 = await axios(randomUserUrl);
      console.log(res2);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};

export default CustomInstance;
