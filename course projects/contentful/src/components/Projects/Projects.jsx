import { useGetProjects } from "../getProjects";
import "../getProjects";
import "./Projects.css";

function Projects() {
  const { isLoading, projects } = useGetProjects();

  if (isLoading) {
    return (
      <section id="projects">
        <div className="container">
          <div className="projectsContent">
            <div className="contentTop">
              <h2 className="title">Projects</h2>
              <div className="underline"></div>
            </div>

            <div
              className="contentBottom"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "4rem 0"
              }}>
              <span className="loader"></span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects">
      <div className="container">
        <div className="projectsContent">
          <div className="contentTop">
            <h2 className="title">Projects</h2>
            <div className="underline"></div>
          </div>

          <div className="contentBottom">
            {projects.map((item) => {
              const { id, title, imgs, url } = item;
              console.log(item);

              return (
                <a
                  className="card"
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noreferrer">
                  <img src={imgs} alt={title} />
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
