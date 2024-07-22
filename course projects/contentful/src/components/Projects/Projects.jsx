import { projects } from "../../data";
import "../getProjects";
import "./Projects.css";

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
            {projects.map((item, index) => {
              const { title, image, url } = item;
              console.log(item);

              return (
                <a className="card" key={index} href={url}>
                  <img src={image} alt={title} />
                  <p>{title}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
