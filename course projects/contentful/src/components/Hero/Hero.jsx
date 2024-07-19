import heroImg from "../../img/profile.png";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="heroContent">
          <div className="contentTop">
            <h1>My React Projects</h1>

            <p>
              Welcome to my React project showcase, built as part of the
              &ldquo;React 18 Tutorial and Projects&rdquo; course by John
              Smilga. This website hosts a comprehensive collection of over 25
              hands-on projects that highlight the versatility and power of
              React. From React Fundamentals to exploring the latest React 18
              features, hooks, and React Router 6, discover efficient data
              handling using Axios and Redux Toolkit. Enjoy exploring the
              projects!
            </p>
          </div>

          <div className="contentBottom">
            <img src={heroImg} alt="TheBlaiseCode Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
