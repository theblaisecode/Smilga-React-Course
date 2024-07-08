import { useEffect } from "react";
import authInterFetch from "../axios/interceptors";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const res = await authInterFetch("react-store-products");
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};

export default Interceptors;
