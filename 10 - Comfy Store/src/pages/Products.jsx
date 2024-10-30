import AllProducts from "../components/product/AllProducts";
import { customFetch } from "../utils";
import Pagination from "../components/product/Pagination";
import ProductFilter from "../components/product/ProductFilter";

export const productLoader = async () => {
  const res = await customFetch("/products");
  const products = res.data.data;
  const meta = res.data.meta;
  console.log(products);
  return { products, meta };
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
