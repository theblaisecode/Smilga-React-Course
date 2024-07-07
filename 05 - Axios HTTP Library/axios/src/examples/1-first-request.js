import { useEffect } from "react";
import axios from "axios";

const url = "/react-store-products";

const FirstRequest = () => {
  async function getData() {
    try {
      const res = await axios.get(url);
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return <h2 className="text-center">First Request</h2>;
};

export default FirstRequest;
