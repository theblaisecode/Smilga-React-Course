import Pagination from "../components/Pagination";
import AllProducts from "../components/product/AllProducts";
import ProductFilter from "../components/product/ProductFilter";
import { customFetch } from "../utils";
const url = "products";


export const productLoader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const res = await customFetch(url, { params });
  const products = res.data.data;
  const meta = res.data.meta;
  return { products, meta, params };
};

function Products() {
  return (
    <section className="products px-4">
      <div className="">
        <ProductFilter />
        <AllProducts />
        <Pagination/>
      </div>
    </section>
  );
}
export default Products;
