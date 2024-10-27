import logo from "../assets/logo.png";
import aboutImg from "../assets/about.webp";

function About() {
  return (
    <section className="about px-4 flex flex-col gap-9">
      <div className="contentTop">
        <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
          <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
            We love
          </h1>

          <div className="stats bg-primary shadow">
            <div className="p-2">
              <img src={logo} alt="Comfy Stores Logo" className="" />
            </div>
          </div>
        </div>

        <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
          Comfy Store was established in 2002 in Nigeria and targets the best
          quality products to its customers. Comfy Store always presents new
          modern designs developed by its customers taste and brings the best.
          Our attention to detail ensures that when you purchase a piece of
          furniture from Comfy Store, it will provide superior value and
          comfort. Our products are designed with safety in mind as well,
          creating pieces that are long-lasting and safe for all family members.
          We strive to ensure our customers enjoy their experience with us by
          providing the highest quality product and great customer service
          whenever you buy a Comfy Store Product. Our goal is not to sell
          furniture, but to bring you together with comfortable, stylish and
          peaceful furniture.
        </p>
      </div>

      <div className="contentBottom mt-6 text-lg leading-8 max-w-2xl mx-auto">
        <img src={aboutImg} alt="comfy bed" />
      </div>
    </section>
  );
}
export default About;
