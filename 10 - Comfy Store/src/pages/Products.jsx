import AllProducts from "../components/product/AllProducts";
import { customFetch } from "../utils";
import Pagination from "../components/product/Pagination";
import ProductFilter from "../components/product/ProductFilter";

export const productLoader = async () => {
  const res = await customFetch("/products");
  const allProducts = res.data.data;
  console.log(allProducts);
  return { allProducts };
};

function Products() {
  return (
    <section className="products px-4">
      <div className="">
        <ProductFilter />
        <AllProducts />
        <Pagination />
      </div>
    </section>
  );
}
export default Products;
