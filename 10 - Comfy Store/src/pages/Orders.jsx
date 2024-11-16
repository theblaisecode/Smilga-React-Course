import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import Heading from "../components/Heading";
import Pagination from "../components/Pagination";

export const orderLoader = (store) => async({request}) => {
  return null
} 

function Orders() {
  return (
    <section className="orders px-4">
      <div className="">Orders Page</div>
    </section>
  );
}
export default Orders;
