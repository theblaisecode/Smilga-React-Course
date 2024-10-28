
import Heading from "../components/Heading";
import HomeHero from "../components/home/HomeHero";
import { customFetch } from "../utils";
import ProductGrid from "../components/product/ProductGrid";

const url = "/products?featured=true";

export const homeLoader = async () => {
  const res = await customFetch(url);
  const products = res.data.data;
  // console.log({ data });
  return { products };
};

function Home() {

  return (
    <section className="">
      <div className="">
        <HomeHero />

        <div className="featuredProducts pt-24">
          <Heading text="Featured Products" />

          <ProductGrid/>
        </div>
      </div>
    </section>
  );
}
export default Home;
