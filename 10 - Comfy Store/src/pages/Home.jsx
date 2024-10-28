import Heading from "../components/Heading";
import HomeHero from "../components/HomeHero";

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
