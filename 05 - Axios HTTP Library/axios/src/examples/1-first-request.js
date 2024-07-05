import { useEffect } from "react";
import axios from "axios";
// limit, if 429 wait for 15 min and try again
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  async function getData() {
    try {
      const response = await axios(url);
      console.log(response);

      const data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    console.log('first')
    getData()
  }, []);

  return <h2 className="text-center">first request</h2>;
};

export default FirstRequest;
