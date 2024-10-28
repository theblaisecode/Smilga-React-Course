import Heading from "../components/Heading";
import HomeHero from "../components/home/HomeHero";

const url = "/products?featured=true"

export const homeLoader = {
  
}

function Home() {
  return (
    <section className="">
      <div className="">
        <HomeHero />

        <div className="featuredProducts pt-24">
          <Heading text="Featured Products" />


        </div>
      </div>
    </section>
  );
}
export default Home;
