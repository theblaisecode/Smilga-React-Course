import aboutSvg from "../img/about.svg";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container grid md:grid-cols-2 items-center gap-16 py-10 ">
        <img src={aboutSvg} className="w-full h-64" />

        <div className="aboutText">
          <SectionTitle text="code and coffee" />

          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            omnis exercitationem tempora, aliquid deleniti tenetur vero esse
            praesentium eaque dicta fugiat? Molestiae expedita, nulla neque
            error porro sint distinctio possimus!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
