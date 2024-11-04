import { useLoaderData } from "react-router-dom";
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";
import { BsFillGridFill, BsList } from "react-icons/bs";

function AllProducts() {
  const { meta } = useLoaderData();

  return (
    <div>
      <ProductList />
      <ProductGrid />
    </div>
  );
}

export default AllProducts;
