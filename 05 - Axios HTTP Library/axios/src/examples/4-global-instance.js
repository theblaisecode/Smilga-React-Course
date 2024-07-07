import { useEffect } from "react";
import axios from "axios";

const productsUrl = "react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const res1 = await axios(productsUrl);
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

  return <h2 className="text-center">global instance</h2>;
};

export default GlobalInstance;
