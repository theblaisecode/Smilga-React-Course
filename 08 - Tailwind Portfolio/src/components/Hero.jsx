import heroImg from "../img/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

function Hero() {
  return (
    <section id="about" className="bg-emerald-100 py-24">
      <div className="container grid md:grid-cols-2 items-center gap-8">
        <div className="contentTop">
          <h1 className="text-7xl font-bold tracking-wider">I&apos;m Blaise</h1>

          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Frontend Developer
          </p>

          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>

          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-emerald-500 duration-300" />
            </a>

            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-emerald-500 duration-300" />
            </a>

            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-emerald-500 duration-300" />
            </a>
          </div>
        </div>

        <div className="contentBottom hidden md:flex md:justify-end md:items-center ">
          <img src={heroImg} className="h-80 lg:h-96" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
