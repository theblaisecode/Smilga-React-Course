import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

function Home() {
  return (
    <section className="align-element px-4 py-20">
      <div className="mx-auto w-11/12 lg:w-7/12">
        <div className="homeContent flex lg:flex-cols-2 gap-24 items-center">
          <div className="contentTop flex-1 ">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
              We are changing the way people shop
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8">
              Enjoy cozy living room sets for relaxation, modern bedroom sets
              for a restful night, and stylish dining room sets that reflect
              your home&apos;s spirit. Transform your space and savor every
              moment!
            </p>

            <div className="mt-10 btn btn-primary">
              <Link to="products" className="uppercase">
                our products
              </Link>
            </div>
          </div>

          <div className="hidden flex-1 h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
            <div className="carousel-item">
              <img
                src={hero1}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
            <div className="carousel-item">
              <img
                src={hero2}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
            <div className="carousel-item">
              <img
                src={hero3}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
            <div className="carousel-item">
              <img
                src={hero4}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
