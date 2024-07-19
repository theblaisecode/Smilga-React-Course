import question from "../../img/questions.png";
import tours from "../../img/tours.png";
import "./Projects.css"

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="projectsContent">
          <div className="contentTop">
            <h2 className="title">Projects</h2>
            <div className="underline"></div>
          </div>

          <div className="contentBottom">
            <div className="card">
              <img src={tours} alt="Tours Project" />
              <p>Tours</p>
            </div>

            <div className="card">
              <img src={question} alt="Riddle Me This Project" />
              <p>Riddle Me This</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
